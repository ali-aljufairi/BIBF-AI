import React from "react";
import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

const SOCIALS = [
  { href: "https://github.com/Ali-Aljufairi", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/ali-aljufairi/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.instagram.com/alooy657/", label: "Instagram", Icon: Instagram },
];

const Footer: React.FC = () => {
  return (
    <footer className="mt-24 border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-base font-bold text-ink">Ali Aljufairi</p>
          <p className="mt-1 text-sm text-subtle">
            Notes on machine learning and the cloud. Started at BIBF, kept going since.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Link href="/notes" className="text-sm text-subtle transition hover:text-ink">
            All notes
          </Link>
          <span className="h-4 w-px bg-rule" aria-hidden="true" />
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtle transition hover:text-ink"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <p className="font-mono text-xs text-subtle">© {new Date().getFullYear()} Ali Aljufairi</p>
      </div>
    </footer>
  );
};

export default Footer;
