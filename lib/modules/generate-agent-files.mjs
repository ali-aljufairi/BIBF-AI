// Builds the machine-readable files described by https://specification.website
// (llms.txt, llms-full.txt, per-page Markdown, RSS, sitemap, robots.txt) from the
// Markdown in COMMON_MD_DIR, so a new note or post is picked up on the next build.
// Everything is written to public/ and is git-ignored.
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import removeMd from "remove-markdown";
import { getFilesRecursively } from "./find-files-recusively.mjs";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const SITE_NAME = "Ali Aljufairi · Notes on ML & Cloud";
const SITE_DESCRIPTION =
  "Notes on machine learning, AWS and the cloud by Ali Aljufairi, started during the AWS ML program at BIBF.";
const AUTHOR = "Ali Aljufairi";
const BLOG_DIR = "blog";

// Keep in sync with SITE_URL in lib/constants.ts.
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  "https://bibf-ai.vercel.app"
).replace(/\/$/, "");
const mdDir = path.resolve(process.env.COMMON_MD_DIR || "./common_md");
const assetDir = path.relative("./public", process.env.MD_ASSET_DIR || "./public/md_assets");
const publicDir = path.resolve("public");

/** "blog/AI Wrapper" -> "/blog/AI%20Wrapper" */
const urlPath = (slug) => "/" + slug.split(path.sep).map(encodeURIComponent).join("/");
const abs = (p) => siteUrl + p;
const xml = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function excerptOf(data, content) {
  if (data.description || data.summary) return String(data.description || data.summary);
  const prose = content.replace(/^\s*#{1,6}\s.*$/gm, "");
  const text = removeMd(prose).replace(/\s+/g, " ").trim();
  if (text.length <= 200) return text;
  return text.slice(0, 200).replace(/\s+\S*$/, "") + "…";
}

/** Points relative links at absolute URLs: notes at their .md source, files at their public copy. */
function absolutizeLinks(markdown, slug) {
  const noteDir = path.dirname(slug);
  return markdown.replaceAll(/(\[[^\[\]]*\]\()((?:[^()\s]|\([^()\s]*\))+)(\))/g, (m, open, href, close) => {
    if (/^[a-z]+:|^\/|^#/i.test(href)) return m;
    const [target, hash = ""] = href.split(/(?=#)/);
    for (const candidate of [path.join(noteDir, target), target]) {
      let decoded;
      try {
        decoded = decodeURI(candidate);
      } catch {
        continue;
      }
      const onDisk = path.join(mdDir, decoded);
      if (!onDisk.startsWith(mdDir) || !fs.existsSync(onDisk) || !fs.statSync(onDisk).isFile()) continue;
      const url = decoded.endsWith(".md")
        ? abs(urlPath(decoded.replace(/\.md$/, "")) + ".md")
        : abs("/" + path.join(assetDir, decoded).split(path.sep).map(encodeURIComponent).join("/"));
      return `${open}${url}${hash}${close}`;
    }
    return m;
  });
}

function loadPages() {
  return getFilesRecursively(mdDir, /\.md$/)
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { data, content } = matter(fs.readFileSync(path.join(mdDir, file), "utf8"));
      const date = data.date ? new Date(data.date) : null;
      return {
        slug,
        kind: slug.split(path.sep)[0] === BLOG_DIR ? "post" : "note",
        title: String(data.title ?? path.basename(slug)),
        description: excerptOf(data, content),
        date: date && !Number.isNaN(date.getTime()) ? date : null,
        content,
        url: abs(urlPath(slug)),
        mdUrl: abs(urlPath(slug) + ".md"),
      };
    })
    .sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0));
}

function write(relPath, body) {
  const out = path.join(publicDir, relPath);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, body);
}

const listItem = (p) => `- [${p.title}](${p.mdUrl}): ${p.description}`;

function llmsTxt(posts, notes) {
  return `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

Every page is also available as Markdown: add \`.md\` to its URL, or request it with \`Accept: text/markdown\`. The links below point at the Markdown versions. The full text of every page is in [llms-full.txt](${abs("/llms-full.txt")}).

## Blog posts

${posts.map(listItem).join("\n")}

## Notes

${notes.map(listItem).join("\n")}

## Optional

- [RSS feed](${abs("/feed.xml")}): blog posts, newest first
- [Sitemap](${abs("/sitemap.xml")}): every page on the site
- [Source code](https://github.com/ali-aljufairi/BIBF-AI): the site and its Markdown content
`;
}

function pageMarkdown(p) {
  const front = [
    "---",
    `title: ${JSON.stringify(p.title)}`,
    `canonical: ${p.url}`,
    p.date ? `date: ${p.date.toISOString().slice(0, 10)}` : null,
    `description: ${JSON.stringify(p.description)}`,
    `author: ${JSON.stringify(AUTHOR)}`,
    "---",
  ].filter(Boolean);
  return `${front.join("\n")}\n\n${absolutizeLinks(p.content, p.slug).trim()}\n`;
}

function listingMarkdown(title, description, pages) {
  return `# ${title}\n\n> ${description}\n\n${pages.map(listItem).join("\n")}\n`;
}

function llmsFullTxt(pages) {
  const parts = pages.map(
    (p) => `# ${p.title}\n\nURL: ${p.url}\n${p.date ? `Date: ${p.date.toISOString().slice(0, 10)}\n` : ""}\n${absolutizeLinks(p.content, p.slug).trim()}`,
  );
  return `# ${SITE_NAME}\n\n> ${SITE_DESCRIPTION}\n\n${parts.join("\n\n---\n\n")}\n`;
}

function feedXml(posts) {
  const updated = posts[0]?.date ?? new Date();
  const items = posts
    .map(
      (p) => `    <item>
      <title>${xml(p.title)}</title>
      <link>${xml(p.url)}</link>
      <guid isPermaLink="true">${xml(p.url)}</guid>
      ${p.date ? `<pubDate>${p.date.toUTCString()}</pubDate>` : ""}
      <description>${xml(p.description)}</description>
    </item>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/">
  <channel>
    <title>${xml(SITE_NAME)}</title>
    <link>${xml(abs("/blog"))}</link>
    <description>${xml(SITE_DESCRIPTION)}</description>
    <language>en</language>
    <lastBuildDate>${updated.toUTCString()}</lastBuildDate>
    <atom:link href="${xml(abs("/feed.xml"))}" rel="self" type="application/rss+xml"/>
    <sy:updatePeriod>weekly</sy:updatePeriod>
    <sy:updateFrequency>1</sy:updateFrequency>
${items}
  </channel>
</rss>
`;
}

function sitemapXml(pages) {
  const newest = pages[0]?.date;
  const entries = [
    { loc: abs("/"), lastmod: newest },
    { loc: abs("/blog"), lastmod: pages.find((p) => p.kind === "post")?.date },
    { loc: abs("/notes"), lastmod: pages.find((p) => p.kind === "note")?.date },
    ...pages.map((p) => ({ loc: p.url, lastmod: p.date })),
  ];
  const urls = entries
    .map(
      (e) =>
        `  <url>\n    <loc>${xml(e.loc)}</loc>\n${e.lastmod ? `    <lastmod>${e.lastmod.toISOString().slice(0, 10)}</lastmod>\n` : ""}  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function robotsTxt() {
  // Search engines and AI agents are all welcome; Content-Signal states that explicitly.
  return `User-agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=yes
Allow: /

Sitemap: ${abs("/sitemap.xml")}
`;
}

const pages = loadPages();
const posts = pages.filter((p) => p.kind === "post");
const notes = pages.filter((p) => p.kind === "note");

for (const p of pages) write(p.slug + ".md", pageMarkdown(p));
write("index.md", llmsTxt(posts, notes));
write("blog.md", listingMarkdown("Blog", "Essays and write-ups on AI products, machine learning and the cloud.", posts));
write("notes.md", listingMarkdown("Notes", "Study notes on machine learning, AWS and the cloud.", notes));
write("llms.txt", llmsTxt(posts, notes));
write("llms-full.txt", llmsFullTxt(pages));
write("feed.xml", feedXml(posts));
write("sitemap.xml", sitemapXml(pages));
write("robots.txt", robotsTxt());

console.log(`Generated agent files for ${pages.length} pages (${posts.length} posts) at ${siteUrl}`);
