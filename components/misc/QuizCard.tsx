import React, { useState, useEffect } from 'react';

interface QuizQuestion {
  question_number: string;
  question: string;
  answers: string[];
  correct_answer: string;
}

interface QuizCardProps {
  questionData: QuizQuestion;
}

const QuizCard: React.FC<QuizCardProps> = ({ questionData }) => {
  const { question, answers, correct_answer } = questionData;

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const handleAnswerSelect = (answer: string): void => {
    const isAnswerSelected = selectedAnswers.includes(answer);

    setSelectedAnswers((prevSelected) =>
      isAnswerSelected
        ? prevSelected.filter((selected) => selected !== answer)
        : [...prevSelected, answer]
    );
  };

  useEffect(() => {
    console.log('Selected Answers:', selectedAnswers);
    console.log('Correct Answer:', correct_answer);
  }, [selectedAnswers]);

const renderChoices = (): JSX.Element[] => {
  return answers.map((choice, index) => {
    const isSelected = selectedAnswers.includes(choice);
    const isCorrect = choice.includes(correct_answer); // Check if the correct answer is present in the choice

    let bgColorClass = isSelected ? (isCorrect ? 'bg-green-500' : 'bg-red-500') : 'bg-slate-900';

    return (
      <div
        key={index}
        className={`${bgColorClass} text-white p-2 m-2 cursor-pointer`}
        onClick={() => handleAnswerSelect(choice)}
      >
        {choice}
      </div>
    );
  });
};

  return (
    <div className="bg-slate-900 p-4 rounded-md shadow-md">
      <div className="text-Pufr-300">{question}</div>
      <div className="flex flex-wrap">{renderChoices()}</div>
      {selectedAnswers.length > 0 && (
        <div className="mt-4">
          {/* Display a message or style as needed */}
        </div>
      )}
    </div>
  );
};

export default QuizCard;