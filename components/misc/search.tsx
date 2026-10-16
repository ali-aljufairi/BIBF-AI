import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowUpRight, Search as SearchIcon } from "lucide-react";
import { formatDate } from "../../lib/format";

interface SearchResult {
  item: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
  };
}

type Props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

function Search({ visible, setVisible }: Props) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (visible) inputRef.current?.focus();
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setVisible(true);
      }
      if (e.key === "Escape") setVisible(false);
    };
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  }, [setVisible]);

  useEffect(() => {
    setVisible(false);
  }, [router.asPath, setVisible]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const controller = new AbortController();
    fetch(`/api/search?q=${encodeURIComponent(query)}`, { signal: controller.signal })
      .then((res) => res.json())
      .then(setResults)
      .catch(() => {});
    return () => controller.abort();
  }, [query]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-ink/30 px-4 pt-[12vh] backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) setVisible(false);
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Search notes"
    >
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-rule bg-surface shadow-2xl shadow-ink/20">
        <label htmlFor="search" className="flex items-center gap-3 border-b border-rule px-4">
          <SearchIcon className="h-5 w-5 shrink-0 text-subtle" />
          <input
            ref={inputRef}
            id="search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search notes, e.g. SageMaker, prompt engineering"
            className="h-14 w-full bg-transparent text-base text-ink placeholder:text-subtle focus:outline-none"
            autoComplete="off"
          />
          <kbd className="hidden rounded border border-rule bg-sunken px-1.5 font-mono text-[0.7rem] text-subtle sm:inline">
            Esc
          </kbd>
        </label>

        <div className="max-h-[60vh] overflow-y-auto">
          {query.trim() && results.length === 0 && (
            <p className="px-5 py-8 text-center text-sm text-subtle">No notes match “{query}”.</p>
          )}
          {!query.trim() && (
            <p className="px-5 py-8 text-center text-sm text-subtle">Type to search titles and note text.</p>
          )}
          <ul className="divide-y divide-rule">
            {results.map(({ item }) => (
              <li key={item.slug}>
                <Link
                  href={`/${item.slug}`}
                  className="group flex gap-4 px-5 py-4 transition hover:bg-sunken focus:bg-sunken focus:outline-none"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-3">
                      <h3 className="truncate font-semibold text-ink">{item.title}</h3>
                      <span className="shrink-0 font-mono text-xs text-subtle tabular">{formatDate(item.date, "iso")}</span>
                    </div>
                    <p className="mt-1 line-clamp-2 text-sm text-subtle">{item.excerpt}</p>
                  </div>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-subtle transition group-hover:text-mark" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Search;
