import React, { useState } from "react";
import Image  from "next/image";

enum AnswerIndex {
  A = 0,
  B = 1,
  C = 2,
  D = 3,
  E = 4,
  F = 5,
  G = 6,
}

interface QuizQuestion {
  question_number: string;
  question: string;
  answers: string[];
  correct_answer: string;
  Image_Path?: string;
}

interface QuizCardProps {
  questionData: QuizQuestion;
}

const QuizCard: React.FC<QuizCardProps> = ({ questionData }) => {
  const { question, answers, correct_answer, Image_Path } = questionData;

  const [selectedAnswers, setSelectedAnswers] = useState<AnswerIndex[]>([]);

  const mapAnswersToIndexes = (): Map<string, AnswerIndex> => {
    const answerIndexMap = new Map<string, AnswerIndex>();

    answers.forEach((answer, index) => {
      answerIndexMap.set(answer, index as AnswerIndex);
    });

    return answerIndexMap;
  };

  const answerIndexMap = mapAnswersToIndexes();

  const correctAnswers = correct_answer.split("");

  const handleAnswerSelect = (answer: string) => {
    const answerIndex = answerIndexMap.get(answer);

    const alreadySelected = selectedAnswers.includes(answerIndex!);

    setSelectedAnswers((prev) =>
      alreadySelected
        ? prev.filter((idx) => idx !== answerIndex)
        : [...prev, answerIndex!]
    );
  };

  const isCorrect = (index: AnswerIndex) => {
    const answerLetter = AnswerIndex[index];
    return correctAnswers.includes(answerLetter);
  };

  const renderChoices = () =>
    answers.map((choice, index) => {
      const isSelected = selectedAnswers.includes(index);

      const choiceBgColor = isSelected && isCorrect(index)
        ? "bg-green-600"
        : isSelected
        ? "bg-red-600"
        : "bg-slate-900";

      return (
        <div
          key={index}
          className={`${choiceBgColor} p-3 rounded-2xl`}
          onClick={() => handleAnswerSelect(choice)}
        >
          {choice}
        </div>
      );
    });

  return (
    <div className="bg-slate-900 p-4 rounded-lg shadow-md m-4">
      <div className="text-Pufr-300">{question}</div>
       {Image_Path && (
        <div className="my-5">
          <Image src={Image_Path} alt="Quiz Image" width={300} height={200} />
        </div>
      )}
      <div className="flex flex-wrap text-Pufr-100 my-5  ">{renderChoices()}</div>
      {selectedAnswers.length > 0 && (
        <div className="my-5">
        </div>
      )}
    </div>
  );
};

export default QuizCard;
