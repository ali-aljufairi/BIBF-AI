import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Github, Search as SearchIcon } from "lucide-react";
import Search from "./search";

const NAV = [
  { href: "/blog", label: "Blog" },
  { href: "/notes", label: "Notes" },
  { href: "/blog/About This Blog", label: "About" },
];

const Header = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/blog"
      ? router.pathname === "/blog" || (router.asPath.startsWith("/blog/") && !router.asPath.includes("About"))
      : decodeURI(router.asPath).split("?")[0] === href;

  return (
    <header
      className={`sticky top-0 z-30 border-b transition-colors duration-300 ${
        scrolled ? "border-rule bg-paper/85 backdrop-blur-md" : "border-transparent bg-paper"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-1 px-4 sm:px-6">
        <Link href="/" className="mr-auto flex items-center gap-2.5" aria-label="Ali Aljufairi, home">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-signal font-mono text-[0.68rem] font-medium text-white">
            AA
          </span>
          <span className="hidden whitespace-nowrap font-semibold text-ink sm:inline">Ali Aljufairi</span>
        </Link>

        <nav className="flex items-center" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-sm transition ${
                isActive(item.href) ? "text-ink" : "text-subtle hover:text-ink"
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setSearching(true)}
          className="ml-1 flex h-9 shrink-0 items-center gap-2 rounded-lg border border-rule px-2.5 text-sm text-subtle transition hover:border-ink/40 hover:text-ink"
          aria-label="Search"
        >
          <SearchIcon className="h-4 w-4" />
          <kbd className="hidden font-mono text-[0.7rem] md:inline">⌘K</kbd>
        </button>
        <a
          href="https://github.com/Ali-Aljufairi"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 hidden h-9 items-center gap-2 rounded-lg border border-rule px-3 text-sm text-ink transition hover:border-ink/40 md:flex"
        >
          <Github className="h-4 w-4" /> GitHub
        </a>
      </div>

      <Search visible={searching} setVisible={setSearching} />
    </header>
  );
};

export default Header;
