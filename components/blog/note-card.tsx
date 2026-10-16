import Link from "next/link";
import { NoteSummary, formatDate } from "../../lib/format";

type Props = {
  note: NoteSummary;
  className?: string;
};

/** A blog post as a card: label, title, summary, date. */
const NoteCard = ({ note, className = "" }: Props) => {
  const label = note.category === "Notes" ? "Essay" : note.category;
  return (
    <Link href={`/${note.slug}`} className={`card group flex min-h-[13rem] flex-col p-6 ${className}`}>
      <span className="eyebrow">{label}</span>
      <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-ink">{note.title}</h3>
      <p className="mt-2 line-clamp-3 text-[0.94rem] leading-relaxed text-subtle">{note.excerpt}</p>
      <div className="mt-auto flex items-center gap-3 pt-6 font-mono text-xs text-subtle/80 tabular">
        <time dateTime={note.date ?? undefined}>{formatDate(note.date)}</time>
        <span aria-hidden="true">·</span>
        <span>{note.minutes} min read</span>
      </div>
    </Link>
  );
};

export default NoteCard;
