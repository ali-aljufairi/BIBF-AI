import { GetStaticProps } from "next";
import React from "react";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { ArrowRight, BookOpen, Brain, Cloud, Database, GitBranch, Lightbulb } from "lucide-react";
import Layout from "../components/misc/layout";
import NoteCard from "../components/blog/note-card";
import { getNoteIndex } from "../lib/notes";
import { NoteSummary, slugifyCategory } from "../lib/format";

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
  const [featured, ...rest] = latest;
  const since = stats.first ? new Date(stats.first).getUTCFullYear() : null;

  return (
    <Layout>
      <NextSeo
        title="Ali Aljufairi · Notes on ML & Cloud"
        description="Notes on machine learning and the cloud, started during the AWS ML program at BIBF."
        openGraph={{
          title: "Ali Aljufairi · Notes on ML & Cloud",
          description: "Notes on machine learning and the cloud, started during the AWS ML program at BIBF.",
        }}
      />

      {/* Hero */}
      <section className="relative isolate -mt-16 overflow-hidden pt-16">
        <div className="glow absolute inset-0 -z-10" aria-hidden="true" />
        <div className="grid-lines absolute inset-0 -z-10" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 md:pb-24 md:pt-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-rule bg-surface/60 px-3 py-1.5 font-mono text-xs text-subtle backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--aurora-a))] shadow-[0_0_10px_rgb(var(--aurora-a))]" />
            Notes from BIBF&apos;s AWS ML program
          </p>
          <h1 className="headline mt-8 text-[clamp(2.4rem,7.4vw,6.6rem)] text-ink">
            Learning machine learning <span className="aurora-text">in public.</span>
          </h1>
          <p className="mt-8 max-w-[56ch] text-lg leading-relaxed text-subtle md:text-xl">
            My notes on SageMaker, data engineering, MLOps and generative AI. They began in class at the Bahrain
            Institute of Banking and Finance and keep growing as I learn.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/notes" className="btn-primary">
              Explore the notes <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/BIBF-AI" className="btn-ghost">
              Read the BIBF story
            </Link>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-rule bg-rule md:grid-cols-4">
            {[
              { label: "Notes", value: String(stats.notes) },
              { label: "Topics", value: String(topics.length) },
              { label: "Hours of reading", value: (stats.minutes / 60).toFixed(1) },
              { label: "Writing since", value: since ? String(since) : "" },
            ].map((item) => (
              <div key={item.label} className="bg-paper/90 p-5 md:p-6">
                <dt className="eyebrow">{item.label}</dt>
                <dd className="mt-2 font-display text-4xl font-extrabold tracking-tight text-ink tabular md:text-5xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Latest */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="headline text-3xl text-ink md:text-5xl">Latest notes</h2>
          <Link href="/notes" className="flex items-center gap-1 text-sm font-medium text-cobalt hover:underline">
            All {stats.notes} notes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured && <NoteCard note={featured} featured className="md:col-span-2 lg:row-span-2" />}
          {rest.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      </section>

      {/* Topics */}
      <section className="mx-auto max-w-6xl px-4 pt-24 sm:px-6">
        <h2 className="headline text-3xl text-ink md:text-5xl">Browse by topic</h2>
        <ul className="mt-8 border-t border-rule">
          {topics.map((topic) => {
            const Icon = TOPIC_ICONS[topic.name] ?? BookOpen;
            return (
              <li key={topic.name} className="border-b border-rule">
                <Link
                  href={`/notes?topic=${slugifyCategory(topic.name)}`}
                  className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5 py-6 transition md:gap-8"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-rule bg-surface text-subtle transition group-hover:border-transparent group-hover:text-paper group-hover:[background-image:linear-gradient(135deg,rgb(var(--aurora-a)),rgb(var(--aurora-b)))]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-bold tracking-tight text-ink transition group-hover:text-cobalt md:text-3xl">
                      {topic.name}
                    </h3>
                    {TOPIC_BLURBS[topic.name] && (
                      <p className="mt-1 text-sm text-subtle md:text-base">{TOPIC_BLURBS[topic.name]}</p>
                    )}
                  </div>
                  <span className="flex items-center gap-3 font-mono text-sm text-subtle tabular">
                    {topic.count}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:text-cobalt" />
                  </span>
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
