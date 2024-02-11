import { useState, useEffect } from 'react';
import Header from '../components/misc/header';
import Footer from '../components/misc/footer';
const questions = require('../public/Quiz/ExamDumbs.json');

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userResponses, setUserResponses] = useState<string[]>([]);

  useEffect(() => {
    shuffleQuestions();
  }, []);

  const shuffleQuestions = () => {
    // Shuffle the questions array
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    setCurrentQuestion(0);
    setUserResponses([]);
  };

  const handleAnswerClick = (selectedAnswer: string) => {
    // Store user's response
    const newResponses = [...userResponses];
    newResponses[currentQuestion] = selectedAnswer;
    setUserResponses(newResponses);

    // Move to the next question
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed
      shuffleQuestions();
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="bg-slate-900 rounded-lg shadow-lg p-8 max-w-md w-full overflow-auto">
          {questions.length > 0 && (
            <div>
              <div className="mb-4">
                <p className="text-Pufr-400 font-medium">
                  {questions[currentQuestion].question}
                </p>
                {questions[currentQuestion].Image && (
                  <img
                    src={questions[currentQuestion].Image}
                    alt={`Question ${currentQuestion + 1}`}
                    className="mt-4 rounded"
                    style={{ maxWidth: '100%' }}
                  />
                )}
              </div>
              <div className="flex flex-col">
                {questions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    className={`${
                      userResponses[currentQuestion] === answer
                        ? 'bg-green-500'
                        : 'bg-primary'
                    } text-white rounded p-2 mb-2 cursor-pointer`}
                    onClick={() => handleAnswerClick(answer)}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Quiz;
