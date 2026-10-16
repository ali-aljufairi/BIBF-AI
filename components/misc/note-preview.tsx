type Props = {
  title: string;
  content: string;
};

// Also rendered to static HTML inside note bodies (hover cards on internal links),
// so it relies only on Tailwind classes and theme tokens.
const NotePreview = ({ title, content }: Props) => {
  return (
    <span className="note-preview block rounded-xl border border-rule bg-surface p-4 text-left transition hover:border-ink/30">
      <span className="block truncate font-display text-[0.95rem] font-semibold leading-snug text-ink">{title}</span>
      <span className="mt-1 line-clamp-3 text-sm font-normal leading-relaxed text-subtle">
        {content}
      </span>
    </span>
  );
};

export default NotePreview;
