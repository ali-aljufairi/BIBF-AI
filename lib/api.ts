import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getFilesRecursively } from "./modules/find-files-recusively.mjs";
import { getMDExcerpt } from "./markdownToHtml";

const mdDir = path.join(process.cwd(), process.env.COMMON_MD_DIR || "");

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md(?:#[^\)]*)?$/, "");
  const fullPath = path.join(mdDir, `${realSlug}.md`);
  const data = parseFileToObj(fullPath);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });
  return items;
}

function parseFileToObj(pathToObj: string) {
  const fileContents = fs.readFileSync(pathToObj, "utf8");
  const { data, content } = matter(fileContents);

  data["content"] = content;

  // modify obj
  if (typeof data["excerpt"] === "undefined") {
    data["excerpt"] = getMDExcerpt(content, 500);
  }
  if (typeof data["title"] === "undefined") {
    data["title"] = decodeURI(path.basename(pathToObj, ".md"));
  }
  if (typeof data["date"] === "object") {
    data["date"] = data["date"]?.toISOString();
  } else if (typeof data["date"] !== "undefined") {
    data["date"] = data["date"].toString();
  }
  return data;
}

export function getAllPosts(fields: string[] = []) {
  let files = getFilesRecursively(mdDir, /\.md(?:#[^\)]*)?/);
  let posts = files
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getLinksMapping() {
  const linksMapping: Record<string, string[]> = {};
  const postsMapping = new Map(
    getAllPosts(["slug", "content"]).map((i) => [i.slug, i.content]),
  );
  const allSlugs = new Set(postsMapping.keys());
  postsMapping.forEach((content, slug) => {
    const mdLink = /\[[^\[\]]+\]\(([^\(\)]+)\)/g;
    const matches = Array.from(content.matchAll(mdLink));
    const linkSlugs: string[] = []; // Fix: Initialize linkSlugs as an array of strings
    for (var m of matches) {
      const linkSlug = getSlugFromHref(slug, m[1]);
      if (allSlugs.has(linkSlug)) {
        linkSlugs.push(linkSlug);
      }
    }
    linksMapping[slug] = linkSlugs;
  });
  return linksMapping;
}

export function getSlugFromHref(currSlug: string, href: string) {
  return decodeURI(
    path.join(...currSlug.split(path.sep).slice(0, -1), href),
  ).replace(/\.md(?:#[^\)]*)?$/, "");
}

export function updateMarkdownLinks(markdown: string, currSlug: string) {
  // remove `.md` from links
  markdown = markdown.replaceAll(
    /(\[[^\[\]]+\]\((?:[^()\s]|\([^()\s]*\))+?)(\.md(?:#[^()\s]*)?)(\))/g,
    "$1$3",
  );

  // Point links to files next to the Markdown (images, PDFs) at their copy in
  // public/. Paths may be relative to the note's own folder or to common_md/,
  // and may contain one level of parentheses, e.g. "image (1).png".
  const relAssetDir = path.relative("./public", process.env.MD_ASSET_DIR || "");
  const noteDir = path.dirname(currSlug);
  markdown = markdown.replaceAll(
    /(\[[^\[\]]*\]\()((?:[^()\s]|\([^()\s]*\))+)(\))/g,
    (m, m1, m2: string, m3) => {
      if (/^[a-z]+:|^\/|^#/i.test(m2)) return m;
      for (const candidate of [path.join(noteDir, m2), m2]) {
        let onDisk: string;
        try {
          onDisk = path.join(mdDir, decodeURI(candidate));
        } catch {
          continue;
        }
        if (onDisk.startsWith(mdDir) && fs.existsSync(onDisk) && fs.statSync(onDisk).isFile()) {
          return `${m1}/${path.join(relAssetDir, candidate)}${m3}`;
        }
      }
      return m;
    },
  );
  return markdown;
}
