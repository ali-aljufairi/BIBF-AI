import { GetStaticProps } from "next";
import React, { useState } from "react";
import { getAllPosts } from "../lib/api";
import Link from "next/link";
import Header from "../components/misc/header";
import Footer from "../components/misc/footer";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Brain,
    Cloud,
    Database,
    GitBranch,
    BookOpen,
    Lightbulb,
    Calendar
} from "lucide-react";

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const categories = [
        { name: "AWS ML", icon: <Brain className="w-6 h-6 text-spark-500" /> },
        { name: "Data Science", icon: <Database className="w-6 h-6 text-cloud-500" /> },
        { name: "Cloud Computing", icon: <Cloud className="w-6 h-6 text-cloud-400" /> },
        { name: "ML Ops", icon: <GitBranch className="w-6 h-6 text-deep-400" /> },
        { name: "Tutorials", icon: <BookOpen className="w-6 h-6 text-spark-400" /> },
        { name: "Tech Insights", icon: <Lightbulb className="w-6 h-6 text-yellow-500" /> },
    ];

    return (
        <div className="bg-air min-h-screen flex flex-col font-sans text-slate-700 selection:bg-cloud-200 selection:text-deep-900">
            <NextSeo
                title="Personal Blog & Notes | Ali Aljufairi"
                description="A personal blog sharing insights on technology, machine learning, and AWS certifications."
                openGraph={{
                    title: "Personal Blog & Notes | Ali Aljufairi",
                    description: "A personal blog sharing insights on technology, machine learning, and AWS certifications.",
                }}
            />
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-cloud-50 text-cloud-600 text-sm font-medium mb-6 border border-cloud-100">
                                Welcome to my digital garden
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-deep-500 tracking-tight leading-tight">
                                Exploring <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3672B0] to-slate-700">Intelligence</span> <br />
                                & Cloud Architecture
                            </h1>
                            <p className="text-xl md:text-2xl mb-10 text-slate-500 max-w-2xl mx-auto leading-relaxed">
                                Insights on machine learning, cloud computing, and technology.
                                Evolved from AWS notes to a personal knowledge base.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href="/notes" passHref>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="px-8 py-4 rounded-xl bg-deep-500 hover:bg-deep-600 text-white font-semibold transition shadow-lg hover:shadow-xl shadow-deep-500/20 flex items-center justify-center gap-2"
                                    >
                                        Browse Notes <ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </Link>
                                <Link href="/BIBF-AI" passHref>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="px-8 py-4 rounded-xl bg-white border border-slate-200 hover:border-cloud-300 text-slate-700 hover:text-cloud-600 font-medium transition shadow-sm hover:shadow-md flex items-center justify-center"
                                    >
                                        AWS ML Content
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Abstract Background Decoration */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
                        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-cloud-100 blur-3xl"></div>
                        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-spark-50 blur-3xl"></div>
                    </div>
                </section>

                {/* Featured Posts Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-end mb-12 max-w-6xl mx-auto">
                            <div>
                                <h2 className="text-3xl font-bold text-deep-500 mb-2">Featured Writing</h2>
                                <p className="text-slate-500">Latest thoughts and tutorials</p>
                            </div>
                            <Link href="/notes" className="hidden md:flex items-center text-cloud-600 hover:text-cloud-700 font-medium transition">
                                View all <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                        >
                            {featuredPosts.map((post, index) => (
                                <motion.div
                                    key={post.slug}
                                    variants={itemVariants}
                                >
                                    <Link href={`${post.slug}`} passHref>
                                        <div
                                            className={`h-full group p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden ${hoveredTitle === post.title
                                                ? "border-cloud-200 shadow-xl shadow-cloud-100/50 -translate-y-1 bg-white"
                                                : "border-slate-100 bg-slate-50/50 hover:bg-white"
                                                }`}
                                            onMouseEnter={() => handleCardHover(post.title)}
                                            onMouseLeave={handleCardLeave}
                                        >
                                            <div className="flex items-center gap-2 text-xs font-semibold text-cloud-600 mb-4 uppercase tracking-wider">
                                                <Calendar className="w-3 h-3" />
                                                {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </div>

                                            <h3 className="text-xl font-bold mb-3 text-deep-500 group-hover:text-cloud-600 transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-slate-500 mb-6 text-sm leading-relaxed line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center text-sm font-medium text-deep-400 group-hover:text-spark-500 transition-colors mt-auto">
                                                Read article <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="mt-10 text-center md:hidden">
                            <Link href="/notes" className="inline-flex items-center text-cloud-600 hover:text-cloud-700 font-medium transition">
                                View all posts <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* About / Categories Section */}
                <section className="py-24 bg-air">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-3xl font-bold mb-6 text-deep-500">What I Write About</h2>
                                <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                                    My content spans across various domains of modern technology,
                                    focusing on practical applications and deep conceptual understanding.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {categories.map((category, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ y: -5 }}
                                            className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center gap-4"
                                        >
                                            <div className="p-3 rounded-lg bg-slate-50 group-hover:bg-cloud-50 transition-colors">
                                                {category.icon}
                                            </div>
                                            <h4 className="font-semibold text-deep-500">{category.name}</h4>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

// Get static props
export const getStaticProps: GetStaticProps = async () => {
    const allPages = getAllPosts(["slug", "title", "excerpt", "author", "date"]);

    // Sort by date - newest first (latest date at the top)
    const sortedPages = [...allPages].sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA; // Descending order (newest first)
    });

    // Get first 6 posts as featured posts (latest 6 posts)
    const featuredPosts = sortedPages.slice(0, 6);

    return {
        props: {
            allPages,
            featuredPosts
        }
    };
};

export default Home;
