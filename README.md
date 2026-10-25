<div align="center">

<img src=".github/images/logo.gif" alt="fabriclogo" width="400" height="400"/>

</div>

# My Personal Blog & Notes 📝

Live site: https://notes.aljufairi.org

Pageview-only analytics loads `https://metrics.aljufairi.org/script.js` from `app/layout.tsx` with this site's public website ID. It sends origin/path and origin-only referrers, excludes queries/fragments/titles, uses no cookies or storage, respects Do Not Track, and has no session replay. Change the public website ID in the layout when moving to another collector; no secret is required. The authenticated dashboard is private: https://sin.koi-procyon.ts.net:9443 (Tailscale required).

> **Updated July 2025:** This website was originally created as a repository of notes from AWS machine learning training conducted at BIBF (Bahrain Institute of Banking and Finance). Due to growing interest in these resources, it has evolved into my personal blog and knowledge-sharing platform.

This website now serves as my personal blog where I share insights, notes, and resources on technology, machine learning, cloud computing, MLOps, and other technical topics that interest me and my readers.

<br/>

## Installation and Setup ⚙️

<br/>

### Local Development 🖥️

```bash
git clone https://github.com/Ali-Aljufairi/BIBF-AI
cd BIBF-AI
npm install
npm run dev
```
<br/>

### Docker 🐳

```bash
git clone https://github.com/Ali-Aljufairi/BIBF-AI
docker build -t bibf-ai .
docker run -p 3000:3000 bibf-ai
```

<br/>

### Just want to see the website? 🌐

<br/>

<a href="https://bibf-ai.vercel.app/BIBF-AI" style="text-decoration: none;">
  <img src="https://img.shields.io/badge/Go%20to%20the%20website-BIBF AI-6281d8?style=flat-square" alt="Go to the website" />
</a>


<br/>

## Writing a new post or note ✍️

Every Markdown file in `common_md/` becomes a page automatically. There is no code to change: add the file, commit, push to `main`, and Vercel rebuilds the site with it.

- **Blog post:** put the file in `common_md/blog/`. It shows up on the home page and on `/blog`, at `/blog/<file name>`.
- **Note:** put the file anywhere else in `common_md/`. It shows up on `/notes`, grouped by its `category`.

Start the file with a small frontmatter block:

```markdown
---
title: "My new post"            # optional, defaults to the file name
date: 2026-10-16                # used for sorting, newest first
category: "Tech Insights"       # optional; notes are grouped by this
description: "One sentence."    # optional; shown in lists instead of an auto excerpt
---

# My new post

Write the rest in normal Markdown: headings, lists, tables, code blocks and images.
```

Images go in `common_md/attachments/` and are linked with a relative path, for example `![Diagram](attachments/diagram.png)`. Links to other notes, such as `[SageMaker](Amazon%20Sage%20Maker.md)`, get a hover preview and show up under "Linked from" on the other note.

To preview locally before pushing, run `npm run dev` and open http://localhost:3000.

##  Project Structure 📂

- `@/`: Contains reusable components and libraries.
- `@types/`: Contains TypeScript type definitions.
- `app/`: Contains the main application code.
- `common_md/`: Contains blog posts and notes in markdown format.
- `components/`: Contains React components for blog layout and functionality.
- `Excalidraw/`: Contains drawings and diagrams used in blog posts.
- `interfaces/`: Contains TypeScript interfaces for blog post types.
- `lib/`: Contains libraries for markdown processing and API functions.
- `pages/`: Contains Next.js pages including blog post rendering.
- `public/`: Contains images and other static assets.
- `styles/`: Contains styling for the blog.
- `utils/`: Contains utility functions.

<br/>

## Content Structure 📋

### Home Page 🏠

- Introduces the blog, its evolution from an AWS ML notes repository to a personal blog, and highlights featured content.
- Presents a modern, clean interface with easy navigation to various blog posts and categories.

### Blog Posts & Notes 📝

- Contains a collection of technical articles, insights, and the original AWS ML certification notes.
- Organized by topics and dates for easy browsing.

### AWS ML Resources ☁️

- Preserved section of the original AWS machine learning training notes and resources.
- Organized learning path for those interested in AWS ML certification.

## Contributing 🤝

Pull requests are welcome. For any changes, please open an issue first to discuss what you would like to change.