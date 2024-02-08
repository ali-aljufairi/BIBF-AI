// Import necessary libraries and styles
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../lib/api';
import { useState } from 'react';
import Header from '../components/misc/header';
import Footer from '../components/misc/footer';

// Define the interface for page properties
interface NotesProps {
  allPages: Page[];
}

// Define the interface for a page
interface Page {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
}

// Define the Notes component
const Notes: React.FC<NotesProps> = ({ allPages }) => {
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);

  const handleCardHover = (title: string) => {
    setHoveredTitle(title);
  };

  const handleCardLeave = () => {
    setHoveredTitle(null);
  };

return (
    <>
      <Header />
      <div className="relative">
        {/* Background circle effect */}

        {/* Centered content */}
        <div className="flex justify-center items-center h-screen relative z-10">
          {/* Wrapper div for centering */}
          <div className="flex flex-wrap justify-center items-center">
            {allPages.map((page) => (
              <Link key={page.slug} href={`${page.slug}`} passHref>
                <div
                  className={`card m-4 p-6 shadow-md transition-transform transform hover:scale-105 relative ${
                    hoveredTitle === page.title ? 'bg-Pufr-600 text-white' : ''
                  }`}
                  onMouseEnter={() => handleCardHover(page.title)}
                  onMouseLeave={handleCardLeave}
                >
                  {/* Animated border */}
                  {hoveredTitle === page.title && (
                    <div className="absolute inset-0 border-4 border-Pufr-300 animate-pulse"></div>
                  )}
                  <h2 className="text-2xl font-bold">{page.title}</h2>
                  <p className="mt-2 text-gray-50">{page.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Define the static props function
export const getStaticProps: GetStaticProps = async () => {
  const allPages = getAllPosts(['slug', 'title', 'content', 'author', 'date']);

  return { props: { allPages } };
};

// Export the component as default
export default Notes;
