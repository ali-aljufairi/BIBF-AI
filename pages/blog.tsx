import { GetStaticProps } from "next";
import React from "react";
import { NextSeo } from "next-seo";
import Layout from "../components/misc/layout";
import NoteRow from "../components/blog/note-row";
import { getBlogPosts } from "../lib/notes";
import { NoteSummary } from "../lib/format";

const Blog: React.FC<{ posts: NoteSummary[] }> = ({ posts }) => {
  return (
    <Layout>
      <NextSeo title="Blog · Ali Aljufairi" description="Essays and write-ups on AI products, machine learning and the cloud." />
      <section className="hero-glow border-b border-rule">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-14 sm:px-6 md:pt-20">
          <p className="eyebrow">Blog</p>
          <h1 className="mt-3 text-4xl font-bold tracking-[-0.035em] text-ink md:text-6xl">Writing</h1>
          <p className="mt-4 max-w-[60ch] text-lg text-subtle">
            Essays and write-ups on AI products, machine learning and the cloud.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="divide-y divide-rule">
          {posts.map((post) => (
            <NoteRow key={post.slug} note={post} />
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { posts: getBlogPosts() } };
};

export default Blog;
