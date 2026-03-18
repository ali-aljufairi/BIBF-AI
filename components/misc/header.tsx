import Link from "next/link";
import { useEffect, useState } from "react";
import Search from "./search";
import { Search as SearchIcon } from "lucide-react";

const Header = () => {
  const [top, setTop] = useState(true);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 transition duration-300 ease-in-out ${!top ? "bg-air/80 backdrop-blur-md shadow-sm border-b border-slate-200" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <h2 className="shrink-0 mr-4 text-2xl text-deep-500 font-bold tracking-tight md:tracking-tighter leading-tight">
            <Link
              href="/"
              className="block hover:text-cloud-600 transition-colors"
              aria-label="Ali Aljufairi Notes"
            >
              Ali Aljufairi
            </Link>
          </h2>

          <h2 className="shrink-0 mr-4 text-2xl text-deep-500 font-bold tracking-tight md:tracking-tighter leading-tight">
            <Link
              href="/notes"
              className="block hover:text-cloud-600 transition-colors"
              aria-label="notes"
            >
              Notes
            </Link>
          </h2>

          {/* Move the Search button and ⌘k to the left of the search icon */}
          <ul className="flex grow justify-end flex-wrap items-center">
            <li className="flex items-center">
              <h1 className="text-deep-400 mr-0 text-sm font-medium hidden md:block">⌘k</h1>
              <button
                className="w-8 h-8 flex items-center justify-center my-auto mx-2 rounded-full hover:bg-slate-200 transition-colors"
                aria-label="Search"
                onClick={() => setSearching(!searching)}
                disabled={searching}
              >
                <SearchIcon className="w-5 h-5 text-deep-500" />
              </button>
            </li>
          </ul>

          {/* Search */}
          <Search visible={searching} setVisible={setSearching} />
        </div>
      </div>
    </header>
  );
};

export default Header;
