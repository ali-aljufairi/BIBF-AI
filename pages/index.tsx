import { GetStaticProps } from "next";
import React from "react";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { ArrowRight } from "lucide-react";
import Layout from "../components/misc/layout";
import NoteCard from "../components/blog/note-card";
import AsciiHero from "../components/ui/ascii-hero";
import { getBlogPosts, getNoteIndex } from "../lib/notes";
import { NoteSummary, slugifyCategory } from "../lib/format";

interface HomeProps {
  posts: NoteSummary[];
  noteCount: number;
  topics: { name: string; count: number }[];
}

const Home: React.FC<HomeProps> = ({ posts, noteCount, topics }) => {
  return (
    <Layout>
      <NextSeo
        title="Ali Aljufairi · Writing on AI and the cloud"
        description="Ali Aljufairi's blog and notebook: essays on AI products, plus notes from the AWS machine learning program at BIBF."
        openGraph={{
          title: "Ali Aljufairi · Writing on AI and the cloud",
          description:
            "Ali Aljufairi's blog and notebook: essays on AI products, plus notes from the AWS machine learning program at BIBF.",
        }}
      />

      <section className="hero-glow">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 text-center sm:px-6 md:pb-24">
          <AsciiHero className="mx-auto block h-[220px] w-full max-w-3xl sm:h-[320px]" />
          <h1 className="mx-auto mt-6 max-w-[18ch] text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-ink sm:text-5xl md:text-6xl">
            Writing about AI, the cloud, and building things.
          </h1>
          <p className="mx-auto mt-5 max-w-[56ch] text-lg leading-relaxed text-subtle">
            I&apos;m Ali. This is my blog and my notebook: essays on AI products, plus everything I learned in the AWS
            machine learning program at BIBF.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/blog" className="btn-primary">
              Read the blog
            </Link>
            <Link href="/notes" className="btn-ghost">
              Browse notes
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">Latest posts</h2>
          <Link href="/blog" className="flex items-center gap-1 text-sm text-cobalt hover:underline">
            All posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <NoteCard key={post.slug} note={post} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">Notes from BIBF</h2>
          <Link href="/notes" className="flex items-center gap-1 text-sm text-cobalt hover:underline">
            All {noteCount} notes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ul className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-rule bg-rule sm:grid-cols-2 md:grid-cols-3">
          {topics.map((topic) => (
            <li key={topic.name}>
              <Link
                href={`/notes?topic=${slugifyCategory(topic.name)}`}
                className="group flex h-full items-center justify-between bg-paper p-6 transition hover:bg-surface"
              >
                <span>
                  <span className="block font-semibold text-ink">{topic.name}</span>
                  <span className="mt-1 block font-mono text-xs text-subtle tabular">
                    {topic.count} {topic.count === 1 ? "note" : "notes"}
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 text-subtle transition group-hover:translate-x-0.5 group-hover:text-cobalt" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { notes, topics } = getNoteIndex();
  return { props: { posts: getBlogPosts(), noteCount: notes.length, topics } };
};

export default Home;
