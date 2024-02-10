import React, { useState } from 'react';
import QuizCard from '../components/misc/QuizCard';
import Header from '../components/misc/header';
import Footer from '../components/misc/footer';

const questions = require('../public/Quiz/ExamDumbs.json');

const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const handleNextQuestion = (): void => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleBackQuestion = (): void => {
    setCurrentQuestionIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="max-w-screen-md p-4 bg-slate-900 rounded-lg shadow-md">
          {currentQuestionIndex < questions.length ? (
            <QuizCard key={currentQuestionIndex} questionData={questions[currentQuestionIndex]} />
          ) : (
            <div className="text-center text-gray-300">
              <h2 className="text-2xl font-bold mb-4">All done! 🎉</h2>
            </div>
          )}

          <div className="flex justify-center space-x-4 mt-4">
            {currentQuestionIndex > 0 && (
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleBackQuestion}
              >
                Back
              </button>
            )}

            {currentQuestionIndex < questions.length && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleNextQuestion}
              >
                Next Question
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuizPage;