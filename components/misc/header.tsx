import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Moon, Search as SearchIcon, Sun } from "lucide-react";
import Search from "./search";

const NAV: { href: string; label: string; short?: string }[] = [
  { href: "/notes", label: "Notes" },
];

function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const explicit = root.dataset.theme;
    // Dark is the default unless the system asks for light.
    setDark(explicit ? explicit === "dark" : !window.matchMedia("(prefers-color-scheme: light)").matches);
  }, []);

  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      // Storage can be blocked; the choice still applies for this visit.
    }
    setDark(!dark);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="grid h-9 w-9 place-items-center rounded-full text-subtle transition hover:bg-sunken hover:text-ink"
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {dark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  );
}

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

  return (
    <header
      className={`sticky top-0 z-30 border-b transition-colors duration-300 ${
        scrolled ? "border-rule bg-paper/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-2 px-4 sm:px-6">
        <Link href="/" className="group mr-auto flex items-baseline gap-2" aria-label="Ali Aljufairi, home">
          <span className="whitespace-nowrap font-display text-lg font-extrabold uppercase tracking-tight text-ink [font-stretch:120%]">Ali Aljufairi</span>
          <span className="hidden font-mono text-xs text-subtle transition group-hover:text-cobalt sm:inline">/ notes</span>
        </Link>

        <nav className="flex items-center gap-1" aria-label="Main">
          {NAV.map((item) => {
            const active = router.pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  active ? "bg-sunken text-ink" : "text-subtle hover:text-ink"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.short ? (
                  <>
                    <span className="sm:hidden">{item.short}</span>
                    <span className="hidden sm:inline">{item.label}</span>
                  </>
                ) : (
                  item.label
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setSearching(true)}
          className="ml-1 flex h-9 shrink-0 items-center gap-2 rounded-full border border-rule bg-surface/60 px-2.5 text-sm text-subtle md:pl-3 md:pr-2 transition hover:border-ink/40 hover:text-ink"
          aria-label="Search notes"
        >
          <SearchIcon className="h-4 w-4" />
          <span className="hidden md:inline">Search</span>
          <kbd className="hidden rounded border border-rule bg-sunken px-1.5 font-mono text-[0.7rem] md:inline">⌘K</kbd>
        </button>
        <ThemeToggle />
      </div>

      <Search visible={searching} setVisible={setSearching} />
    </header>
  );
};

export default Header;
