<div align="center">

<img src=".github/images/logo.gif" alt="fabriclogo" width="400" height="400"/>

</div>

# My Personal Blog & Notes 📝

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

### Quiz ❓

- Interactive quizzes on technical topics to test knowledge (preserved from the original site).

## Contributing 🤝

Pull requests are welcome. For any changes, please open an issue first to discuss what you would like to change.