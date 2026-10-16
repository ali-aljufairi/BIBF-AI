import { GetStaticProps } from "next";
import React from "react";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { ArrowRight, BookOpen, Brain, Cloud, Database, GitBranch, Lightbulb, NotebookPen } from "lucide-react";
import Layout from "../components/misc/layout";
import NoteRow from "../components/blog/note-row";
import { getNoteIndex } from "../lib/notes";
import { NoteSummary, formatDate, slugifyCategory } from "../lib/format";

type Topic = { name: string; count: number };

interface HomeProps {
  latest: NoteSummary[];
  topics: Topic[];
  stats: { notes: number; minutes: number; first: string | null; last: string | null };
}

const TOPIC_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "AWS ML": Brain,
  "Data Science": Database,
  "Cloud Computing": Cloud,
  "ML Ops": GitBranch,
  Tutorials: BookOpen,
  "Tech Insights": Lightbulb,
};

const TOPIC_BLURBS: Record<string, string> = {
  "AWS ML": "SageMaker, Comprehend, Rekognition and the rest of the AWS ML stack.",
  "Data Science": "Exploratory analysis, feature work and the maths underneath.",
  "Cloud Computing": "Architecture, containers and the services everything runs on.",
  "ML Ops": "Pipelines, deployment and keeping models healthy in production.",
  Tutorials: "Week-by-week course notes and step-by-step walkthroughs.",
  "Tech Insights": "Opinions and essays on where the field is going.",
};

const Home: React.FC<HomeProps> = ({ latest, topics, stats }) => {
  return (
    <Layout>
      <NextSeo
        title="Ali Aljufairi · Notes on ML & Cloud"
        description="A working notebook on machine learning and the cloud, started during the AWS ML program at BIBF."
        openGraph={{
          title: "Ali Aljufairi · Notes on ML & Cloud",
          description: "A working notebook on machine learning and the cloud, started during the AWS ML program at BIBF.",
        }}
      />

      {/* Hero */}
      <section className="dot-grid border-b border-rule">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-14 sm:px-6 md:pb-24 md:pt-20 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
          <div className="min-w-0">
            <p className="eyebrow">Machine learning · Cloud · MLOps</p>
            <h1 className="mt-5 max-w-[16ch] font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl">
              A working notebook on <span className="marker">machine learning</span> and the cloud.
            </h1>
            <p className="mt-7 max-w-[58ch] text-lg leading-relaxed text-subtle">
              It started as my notes from the AWS machine learning program at BIBF, the Bahrain Institute of Banking
              and Finance. Now it is where I write up SageMaker, data engineering, MLOps and generative AI as I learn
              them.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/notes" className="btn-primary">
                Browse all notes <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/BIBF-AI" className="btn-ghost">
                Start with the BIBF notes
              </Link>
            </div>
          </div>

          {/* Index card */}
          <aside className="rounded-2xl border border-rule bg-surface p-6 shadow-[0_1px_0_rgb(var(--rule)),0_24px_48px_-24px_rgb(var(--ink)/0.18)]">
            <div className="flex items-center justify-between">
              <p className="eyebrow">In the notebook</p>
              <NotebookPen className="h-4 w-4 text-mark" />
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5">
              <div>
                <dt className="text-xs text-subtle">Notes</dt>
                <dd className="mt-1 font-display text-4xl font-bold text-ink tabular">{stats.notes}</dd>
              </div>
              <div>
                <dt className="text-xs text-subtle">Topics</dt>
                <dd className="mt-1 font-display text-4xl font-bold text-ink tabular">{topics.length}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-xs text-subtle">Reading time, all notes</dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-ink tabular">
                  {Math.floor(stats.minutes / 60)} h {stats.minutes % 60} min
                </dd>
              </div>
            </dl>
            <div className="mt-6 space-y-2 border-t border-dashed border-rule pt-4 font-mono text-xs text-subtle">
              <div className="flex justify-between">
                <span>First entry</span>
                <span className="tabular text-ink">{formatDate(stats.first, "iso")}</span>
              </div>
              <div className="flex justify-between">
                <span>Latest entry</span>
                <span className="tabular text-ink">{formatDate(stats.last, "iso")}</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Latest */}
      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <div className="flex items-end justify-between gap-4 border-b border-rule pb-4">
          <div>
            <p className="eyebrow">Latest</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink">Recent notes</h2>
          </div>
          <Link href="/notes" className="flex items-center gap-1 text-sm font-medium text-cobalt hover:underline">
            View all {stats.notes} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ul className="divide-y divide-rule">
          {latest.map((note) => (
            <NoteRow key={note.slug} note={note} />
          ))}
        </ul>
      </section>

      {/* Topics */}
      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <div className="border-b border-rule pb-4">
          <p className="eyebrow">Topics</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink">What the notes cover</h2>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const Icon = TOPIC_ICONS[topic.name] ?? BookOpen;
            return (
              <li key={topic.name}>
                <Link
                  href={`/notes?topic=${slugifyCategory(topic.name)}`}
                  className="group flex h-full flex-col rounded-2xl border border-rule bg-surface p-5 transition hover:-translate-y-0.5 hover:border-ink/30"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-subtle transition group-hover:text-mark" />
                    <span className="font-mono text-xs text-subtle tabular">
                      {topic.count} {topic.count === 1 ? "note" : "notes"}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold text-ink">{topic.name}</h3>
                  {TOPIC_BLURBS[topic.name] && (
                    <p className="mt-1 text-sm leading-relaxed text-subtle">{TOPIC_BLURBS[topic.name]}</p>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { notes, topics } = getNoteIndex();
  const dated = notes.filter((n) => n.date);
  return {
    props: {
      latest: notes.slice(0, 6),
      topics,
      stats: {
        notes: notes.length,
        minutes: notes.reduce((sum, n) => sum + n.minutes, 0),
        first: dated.length ? dated[dated.length - 1].date : null,
        last: dated.length ? dated[0].date : null,
      },
    },
  };
};

export default Home;
