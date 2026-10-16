import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { NextSeo } from "next-seo";
import { Filter } from "lucide-react";
import Layout from "../components/misc/layout";
import NoteRow from "../components/blog/note-row";
import { getNoteIndex } from "../lib/notes";
import { NoteSummary, slugifyCategory } from "../lib/format";

interface NotesProps {
  notes: NoteSummary[];
  topics: { name: string; count: number }[];
}

const Notes: React.FC<NotesProps> = ({ notes, topics }) => {
  const router = useRouter();
  const [filter, setFilter] = useState("");
  const topicSlug = typeof router.query.topic === "string" ? router.query.topic : null;
  const activeTopic = topics.find((t) => slugifyCategory(t.name) === topicSlug)?.name ?? null;

  const setTopic = (name: string | null) => {
    const query = name ? { topic: slugifyCategory(name) } : {};
    router.replace({ pathname: "/notes", query }, undefined, { shallow: true, scroll: false });
  };

  const visible = useMemo(() => {
    const q = filter.trim().toLowerCase();
    return notes.filter(
      (n) =>
        (!activeTopic || n.category === activeTopic) &&
        (!q || n.title.toLowerCase().includes(q) || n.excerpt.toLowerCase().includes(q)),
    );
  }, [notes, activeTopic, filter]);

  return (
    <Layout>
      <NextSeo title="All notes · Ali Aljufairi" description="Every note on machine learning, AWS and the cloud." />

      <section className="dot-grid border-b border-rule">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-14 sm:px-6 md:pt-20">
          <p className="eyebrow">Index</p>
          <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-ink md:text-6xl">All notes</h1>
          <p className="mt-4 max-w-[60ch] text-lg text-subtle">
            {notes.length} notes on machine learning, AWS and the cloud, newest first.
          </p>

          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by topic">
              <button type="button" className="chip" aria-pressed={!activeTopic} onClick={() => setTopic(null)}>
                All <span className="tabular opacity-70">{notes.length}</span>
              </button>
              {topics.map((t) => (
                <button
                  key={t.name}
                  type="button"
                  className="chip"
                  aria-pressed={activeTopic === t.name}
                  onClick={() => setTopic(activeTopic === t.name ? null : t.name)}
                >
                  {t.name} <span className="tabular opacity-70">{t.count}</span>
                </button>
              ))}
            </div>
            <label className="relative block md:w-72" htmlFor="notes-filter">
              <span className="sr-only">Filter notes</span>
              <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
              <input
                id="notes-filter"
                type="search"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Filter by title or text"
                className="h-10 w-full rounded-full border border-rule bg-surface pl-9 pr-4 text-sm text-ink placeholder:text-subtle focus:border-ink/40 focus:outline-none"
              />
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        {visible.length > 0 ? (
          <ul className="divide-y divide-rule">
            {visible.map((note) => (
              <NoteRow key={note.slug} note={note} />
            ))}
          </ul>
        ) : (
          <div className="py-20 text-center">
            <p className="font-display text-xl font-semibold text-ink">No notes match that filter.</p>
            <button
              type="button"
              className="mt-4 text-sm font-medium text-cobalt hover:underline"
              onClick={() => {
                setFilter("");
                setTopic(null);
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: getNoteIndex() };
};

export default Notes;
