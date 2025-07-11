import { GetStaticProps } from "next";
import React, { useState } from "react";
import { getAllPosts } from "../lib/api";
import Link from "next/link";
import Header from "../components/misc/header";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

// Define interfaces
interface HomeProps {
    allPages: Page[];
    featuredPosts: Page[];
}

interface Page {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
}

// Home component
const Home: React.FC<HomeProps> = ({ allPages, featuredPosts }) => {
    const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);

    const handleCardHover = (title: string) => {
        setHoveredTitle(title);
    };

    const handleCardLeave = () => {
        setHoveredTitle(null);
    };

    return (
        <>
            <NextSeo
                title="Personal Blog & Notes"
                description="A personal blog sharing insights on technology, machine learning, and AWS certifications - evolved from AWS ML certification notes."
                openGraph={{
                    title: "Personal Blog & Notes",
                    description: "A personal blog sharing insights on technology, machine learning, and AWS certifications.",
                }}
            />
            <Header />

            {/* Hero Section */}
            <section className="flex flex-col min-h-screen justify-center items-center text-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Welcome to My Personal Blog
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200">
                        This site began as AWS ML certification notes but has evolved into my personal blog due to growing interest.
                        Explore technical insights, notes, and resources on various topics.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/notes" passHref>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
                            >
                                Browse All Notes
                            </motion.button>
                        </Link>
                        <Link href="/BIBF-AI" passHref>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 rounded-lg border border-blue-400 hover:border-blue-500 text-blue-400 hover:text-blue-500 font-medium transition"
                            >
                                Original AWS ML Content
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Featured Posts Section */}
            <section className="py-20 bg-gray-900 bg-opacity-50">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-3xl font-bold mb-12 text-center"
                    >
                        Featured Content
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredPosts.map((post, index) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                            >
                                <Link href={`${post.slug}`} passHref>
                                    <div
                                        className={`h-full card p-6 rounded-xl shadow-lg text-left transition-all hover:shadow-2xl ${hoveredTitle === post.title ? "bg-blue-800 transform scale-105" : "bg-gray-800"
                                            }`}
                                        onMouseEnter={() => handleCardHover(post.title)}
                                        onMouseLeave={handleCardLeave}
                                    >
                                        <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                                        <p className="text-gray-300 mb-6 text-sm">{post.excerpt}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-blue-400 text-sm">{new Date(post.date).toLocaleDateString()}</span>
                                            <span className="text-white hover:text-blue-400">Read more →</span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold mb-6">About This Blog</h2>
                            <p className="text-lg text-gray-300">
                                This website began as a repository of notes from AWS machine learning training conducted at BIBF (Bahrain Institute of Banking and Finance).
                                Due to growing interest from readers, it has evolved into my personal blog where I share insights,
                                technical notes, and resources on various topics including machine learning, cloud computing, and more.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold mb-4">Content Categories</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                <div className="p-4 bg-gray-800 rounded-lg text-center">
                                    <h4 className="font-medium text-blue-400">AWS ML</h4>
                                </div>
                                <div className="p-4 bg-gray-800 rounded-lg text-center">
                                    <h4 className="font-medium text-blue-400">Data Science</h4>
                                </div>
                                <div className="p-4 bg-gray-800 rounded-lg text-center">
                                    <h4 className="font-medium text-blue-400">Cloud Computing</h4>
                                </div>
                                <div className="p-4 bg-gray-800 rounded-lg text-center">
                                    <h4 className="font-medium text-blue-400">ML Ops</h4>
                                </div>
                                <div className="p-4 bg-gray-800 rounded-lg text-center">
                                    <h4 className="font-medium text-blue-400">Tutorials</h4>
                                </div>
                                <div className="p-4 bg-gray-800 rounded-lg text-center">
                                    <h4 className="font-medium text-blue-400">Tech Insights</h4>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

// Get static props
export const getStaticProps: GetStaticProps = async () => {
    const allPages = getAllPosts(["slug", "title", "excerpt", "author", "date"]);

    // Sort by date for featured posts (assuming newest first)
    const sortedPages = [...allPages].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Get first 6 posts as featured posts
    const featuredPosts = sortedPages.slice(0, 6);

    return {
        props: {
            allPages,
            featuredPosts
        }
    };
};

export default Home;
