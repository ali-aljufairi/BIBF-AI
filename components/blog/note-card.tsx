import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NoteSummary, formatDate } from "../../lib/format";

type Props = {
  note: NoteSummary;
  featured?: boolean;
  className?: string;
};

/** A note as a card for the home page grid. The featured card is larger and shows more text. */
const NoteCard = ({ note, featured = false, className = "" }: Props) => {
  return (
    <Link href={`/${note.slug}`} className={`glow-card group flex flex-col p-6 ${featured ? "md:p-9" : ""} ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full border border-rule px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-subtle">
          {note.category}
        </span>
        <ArrowUpRight className="h-5 w-5 text-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cobalt" />
      </div>
      <h3
        className={`mt-6 font-display font-bold tracking-tight text-ink ${
          featured ? "text-3xl leading-tight md:text-5xl md:leading-[1.05]" : "text-xl leading-snug"
        }`}
      >
        {note.title}
      </h3>
      <p
        className={`mt-3 text-subtle ${
          featured ? "line-clamp-4 max-w-[60ch] text-base leading-relaxed md:text-lg" : "line-clamp-3 text-sm leading-relaxed"
        }`}
      >
        {note.excerpt}
      </p>
      <div className="mt-auto flex items-center gap-3 pt-6 font-mono text-xs text-subtle tabular">
        <time dateTime={note.date ?? undefined}>{formatDate(note.date)}</time>
        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-subtle/60" />
        <span>{note.minutes} min read</span>
      </div>
    </Link>
  );
};

export default NoteCard;
