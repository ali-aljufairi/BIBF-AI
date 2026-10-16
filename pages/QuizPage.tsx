import React, { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import QuizCard from "../components/misc/QuizCard";
import Layout from "../components/misc/layout";

// Practice questions for the AWS Certified Machine Learning Specialty exam.
const questions = require("../public/Quiz/Exam_Dumbs.json");

const QuizPage: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const total = questions.length;
  const finished = index >= total;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === "INPUT") return;
      if (e.key === "ArrowRight") setIndex((i) => Math.min(total, i + 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  return (
    <Layout>
      <NextSeo title="Practice quiz · AWS ML Specialty" description="Practice questions for the AWS Certified Machine Learning Specialty exam." />

      <section className="dot-grid border-b border-rule">
        <div className="mx-auto max-w-3xl px-4 pb-8 pt-12 sm:px-6 md:pt-16">
          <p className="eyebrow">AWS Certified Machine Learning · Specialty</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">Practice quiz</h1>
          <p className="mt-3 max-w-[60ch] text-subtle">
            Pick an answer to check it. Some questions need more than one. Use the arrow keys to move between questions.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-sunken" aria-hidden="true">
              <div
                className="h-full rounded-full bg-mark transition-[width] duration-300"
                style={{ width: `${(Math.min(index + 1, total) / total) * 100}%` }}
              />
            </div>
            <span className="font-mono text-xs text-subtle tabular">
              {Math.min(index + 1, total)} / {total}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pt-10 sm:px-6">
        {finished ? (
          <div className="rounded-2xl border border-rule bg-surface p-10 text-center">
            <p className="font-display text-3xl font-bold text-ink">That was the last question.</p>
            <p className="mt-2 text-subtle">You went through all {total} practice questions.</p>
            <button type="button" className="btn-primary mt-8" onClick={() => setIndex(0)}>
              <RotateCcw className="h-4 w-4" /> Start again
            </button>
          </div>
        ) : (
          <>
            <p className="mb-4 font-mono text-xs text-subtle">Question #{questions[index].question_number}</p>
            <QuizCard key={index} questionData={questions[index]} />
          </>
        )}

        <div className="mt-8 flex items-center justify-between border-t border-rule pt-6">
          <button
            type="button"
            className="btn-ghost disabled:pointer-events-none disabled:opacity-40"
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
          >
            <ArrowLeft className="h-4 w-4" /> Previous
          </button>
          {!finished && (
            <button type="button" className="btn-primary" onClick={() => setIndex((i) => i + 1)}>
              {index === total - 1 ? "Finish" : "Next question"} <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default QuizPage;
