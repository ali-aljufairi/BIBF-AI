// Client-safe helpers shared by lists, the index and note pages.

export type NoteSummary = {
  slug: string;
  /** "post" for files in common_md/blog/, "note" for everything else. */
  kind: "post" | "note";
  title: string;
  excerpt: string;
  date: string | null;
  category: string;
  minutes: number;
};

export function formatDate(date: string | null, style: "iso" | "long" = "long"): string {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return "";
  if (style === "iso") return d.toISOString().slice(0, 10);
  return d.toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
}

export function slugifyCategory(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const BLOG_DIR = "blog";
