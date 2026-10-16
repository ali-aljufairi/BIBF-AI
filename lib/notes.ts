import { getMDExcerpt } from "./markdownToHtml";
import { getAllPosts } from "./api";
import { BLOG_DIR, type NoteSummary } from "./format";

export type { NoteSummary };

const CATEGORY_ALIASES: Record<string, string> = {
  "techn insights": "Tech Insights",
  mlops: "ML Ops",
};

export function normalizeCategory(raw?: string): string {
  if (!raw) return "Notes";
  const trimmed = raw.trim();
  return CATEGORY_ALIASES[trimmed.toLowerCase()] ?? trimmed;
}

export function readingMinutes(markdown = ""): number {
  const words = markdown.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/** Splits a leading "# Heading" off the markdown, if there is one. */
export function splitLeadingH1(markdown = ""): { heading: string | null; body: string } {
  const match = markdown.match(/^\s*#\s+(.+?)\s*\n/);
  if (!match) return { heading: null, body: markdown };
  return { heading: match[1], body: markdown.slice(match[0].length) };
}

/** Builds the small, serializable summary used by lists and the index. */
export function toNoteSummary(post: { [key: string]: any }): NoteSummary {
  const content: string = post.content ?? "";
  // Prefer a hand-written summary from frontmatter. Otherwise skip headings so the
  // excerpt opens on prose, and drop a repeated title.
  let excerpt: string = post.description ?? post.summary ?? "";
  if (!excerpt) {
    const prose = content.replace(/^\s*#{1,6}\s.*$/gm, "");
    excerpt = getMDExcerpt(prose, 260).replace(/\s+/g, " ").trim();
    if (excerpt.toLowerCase().startsWith(String(post.title).toLowerCase())) {
      excerpt = excerpt.slice(String(post.title).length).trim();
    }
  }
  return {
    slug: post.slug,
    kind: isPost(post.slug) ? "post" : "note",
    title: post.title,
    excerpt,
    date: post.date ?? null,
    category: normalizeCategory(post.category),
    minutes: readingMinutes(content),
  };
}

export function isPost(slug: string): boolean {
  return slug.split(/[\\/]/)[0] === BLOG_DIR;
}

/** Every Markdown file as a summary, newest first. */
function getAllSummaries() {
  return getAllPosts(["slug", "title", "content", "date", "category", "description", "summary"])
    .map(toNoteSummary)
    .sort((a, b) => (b.date ? Date.parse(b.date) : 0) - (a.date ? Date.parse(a.date) : 0));
}

/** Blog posts (files in common_md/blog/), newest first. */
export function getBlogPosts() {
  return getAllSummaries().filter((n) => n.kind === "post");
}

/** Notes (every other Markdown file), newest first, plus topic counts. */
export function getNoteIndex() {
  const notes = getAllSummaries().filter((n) => n.kind === "note");

  const counts = new Map<string, number>();
  for (const note of notes) counts.set(note.category, (counts.get(note.category) ?? 0) + 1);
  const topics = Array.from(counts.entries())
    .filter(([name]) => name !== "Notes")
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  return { notes, topics };
}
