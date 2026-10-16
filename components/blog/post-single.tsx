import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Backlinks from "../misc/backlinks";
import PostBody from "./post-body";
import { formatDate, slugifyCategory } from "../../lib/format";

type Props = {
  title: string;
  content: string;
  date?: string;
  category: string;
  minutes: number;
  dek: string | null;
  backlinks: {
    [k: string]: {
      title: string;
      excerpt: string;
    };
  };
};

function PostSingle({ title, date, category, minutes, dek, content, backlinks }: Props) {
  const hasBacklinks = Object.keys(backlinks).length > 0;

  return (
    <article>
      <header className="relative isolate -mt-16 overflow-hidden border-b border-rule pt-16">
        <div className="glow absolute inset-0 -z-10" aria-hidden="true" />
        <div className="grid-lines absolute inset-0 -z-10" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 md:pb-16 md:pt-14">
          <Link
            href="/notes"
            className="inline-flex items-center gap-1.5 text-sm text-subtle transition hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" /> All notes
          </Link>
          <div className="mt-10 max-w-3xl">
            <Link
              href={`/notes?topic=${slugifyCategory(category)}`}
              className="inline-flex rounded-full border border-rule bg-surface/60 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-cobalt transition hover:border-cobalt/50"
            >
              {category}
            </Link>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-ink [font-stretch:112%] sm:text-5xl md:text-6xl">
              {title}
            </h1>
            {dek && <p className="mt-5 max-w-[60ch] text-xl leading-snug text-subtle">{dek}</p>}
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-subtle">
              {date && (
                <time dateTime={date} className="tabular">
                  {formatDate(date)}
                </time>
              )}
              {date && <span aria-hidden="true">·</span>}
              <span className="tabular">{minutes} min read</span>
              <span aria-hidden="true">·</span>
              <span>Ali Aljufairi</span>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-16 px-4 pt-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <div className="min-w-0">
          <PostBody content={content} />
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow">Linked from</p>
          {hasBacklinks ? (
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Backlinks backlinks={backlinks} />
            </div>
          ) : (
            <p className="mt-3 text-sm leading-relaxed text-subtle">No other notes link here yet.</p>
          )}
          <Link
            href="/notes"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-cobalt hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all notes
          </Link>
        </aside>
      </div>
    </article>
  );
}

export default PostSingle;
