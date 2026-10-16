import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NoteSummary, formatDate } from "../../lib/format";

type Props = {
  note: NoteSummary;
};

/** One line in a notes list: date in the margin, title and excerpt, then category and reading time. */
const NoteRow = ({ note }: Props) => {
  return (
    <li>
      <Link
        href={`/${note.slug}`}
        className="group -mx-4 grid grid-cols-1 gap-x-8 gap-y-2 rounded-2xl px-4 py-6 transition hover:bg-surface sm:grid-cols-[7.5rem_minmax(0,1fr)_auto]"
      >
        <time
          dateTime={note.date ?? undefined}
          className="pt-1 font-mono text-xs text-subtle tabular"
        >
          {formatDate(note.date, "iso")}
        </time>
        <div className="min-w-0">
          <h3 className="font-display text-xl font-bold tracking-tight text-ink transition group-hover:text-cobalt">
            {note.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 max-w-[65ch] text-[0.95rem] leading-relaxed text-subtle">{note.excerpt}</p>
        </div>
        <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-2 sm:pt-1">
          <span className="font-mono text-xs text-ink/80">{note.category}</span>
          <span className="font-mono text-xs text-subtle tabular">{note.minutes} min read</span>
          <ArrowUpRight className="ml-auto h-4 w-4 text-subtle opacity-0 transition group-hover:text-cobalt group-hover:opacity-100 sm:ml-0" />
        </div>
      </Link>
    </li>
  );
};

export default NoteRow;
