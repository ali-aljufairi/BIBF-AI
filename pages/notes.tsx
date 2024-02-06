// pages/allPages.tsx
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../lib/api';
import Footer from '../components/misc/footer';
import Header from '../components/misc/header';

interface notesProps {
  allPages: Page[];
}

interface Page {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
}

const AllPages: React.FC<notesProps> = ({ allPages }) => {
  const handleMouseMove = (e: React.MouseEvent) => {
    // Add logic for the light following the cursor effect if needed
    // You can use the e.pageX and e.pageY to get the cursor position
  };

  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center items-center">
        {allPages.map((page) => (
          <div
            key={page.slug}
            className="card m-4 p-6 shadow-md transition-transform transform hover:scale-105"
            onMouseMove={handleMouseMove}
          >
            <h2 className="text-2xl font-bold">{page.title}</h2>
            <p className="mt-2 text-gray-600">{page.excerpt}</p>
            <Link href={`/posts/${page.slug}`} passHref>
              {/* Place your Link content here if needed */}
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPages = getAllPosts([
    "slug", "title", "content", "author", "date"
  ]);

  return { props: { allPages } };
};

export default AllPages;
