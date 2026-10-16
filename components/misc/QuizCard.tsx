import React, { useState } from "react";
import { Check, X } from "lucide-react";

interface QuizQuestion {
  question_number: string;
  question: string;
  answers: string[];
  correct_answer: string | null;
  Image_Path?: string;
}

interface QuizCardProps {
  questionData: QuizQuestion;
}

const LETTERS = "ABCDEFG";

// Answers arrive as "A. Some text"; split the letter off so it can sit in its own badge.
function splitChoice(choice: string, index: number) {
  const match = choice.match(/^([A-G])[.)]\s*([\s\S]*)$/);
  return match ? { letter: match[1], text: match[2] } : { letter: LETTERS[index], text: choice };
}

// Image paths in the question bank point at "images/<n>.png"; the files live in public/Images.
function imageSrc(path: string) {
  const file = path.split("/").pop();
  return file ? `/Images/${file}` : null;
}

const QuizCard: React.FC<QuizCardProps> = ({ questionData }) => {
  const { question, answers, correct_answer, Image_Path } = questionData;
  const [selected, setSelected] = useState<number[]>([]);
  const correct = (correct_answer ?? "").split("");
  const needed = correct.length;
  const image = Image_Path ? imageSrc(Image_Path) : null;

  const toggle = (index: number) => {
    setSelected((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  const pickedRight = selected.filter((i) => correct.includes(splitChoice(answers[i], i).letter)).length;
  const done = needed > 0 && pickedRight === needed;

  return (
    <div>
      <p className="text-lg leading-relaxed text-ink md:text-xl">{question}</p>
      {needed > 1 && <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-mark">Choose {needed}</p>}

      {image && (
        <img
          src={image}
          alt="Diagram for this question"
          className="mt-6 max-h-80 w-auto max-w-full rounded-xl border border-rule bg-white"
          onError={(e) => ((e.currentTarget as HTMLImageElement).hidden = true)}
        />
      )}

      <ul className="mt-6 grid gap-3">
        {answers.map((choice, index) => {
          const { letter, text } = splitChoice(choice, index);
          const isSelected = selected.includes(index);
          const isRight = correct.includes(letter);
          const state = !isSelected ? "idle" : isRight ? "right" : "wrong";
          const showMissed = done ? false : selected.length >= Math.max(needed, 1) && isRight && !isSelected;

          return (
            <li key={index}>
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-pressed={isSelected}
                className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left transition ${
                  state === "right"
                    ? "border-good bg-good/10"
                    : state === "wrong"
                      ? "border-bad bg-bad/10"
                      : showMissed
                        ? "border-dashed border-good"
                        : "border-rule bg-surface hover:border-ink/40"
                }`}
              >
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full font-mono text-xs font-medium ${
                    state === "right"
                      ? "bg-good text-surface"
                      : state === "wrong"
                        ? "bg-bad text-surface"
                        : "bg-sunken text-subtle"
                  }`}
                >
                  {state === "right" ? <Check className="h-4 w-4" /> : state === "wrong" ? <X className="h-4 w-4" /> : letter}
                </span>
                <span className="min-w-0 pt-0.5 text-[0.95rem] leading-relaxed text-ink">{text}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 min-h-[1.5rem] text-sm" aria-live="polite">
        {needed === 0 && selected.length > 0 && (
          <p className="text-subtle">This question has no answer key yet.</p>
        )}
        {done && <p className="font-medium text-good">Correct. The answer is {correct.join(" and ")}.</p>}
        {!done && needed > 0 && selected.length >= needed && (
          <p className="text-subtle">
            Not quite. The answer is <span className="font-semibold text-ink">{correct.join(" and ")}</span>.
          </p>
        )}
      </div>
    </div>
  );
};

export default QuizCard;
