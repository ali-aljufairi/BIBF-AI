import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

const SOCIALS = [
  { href: "https://github.com/Ali-Aljufairi", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/ali-aljufairi/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.instagram.com/alooy657/", label: "Instagram", Icon: Instagram },
];

const Footer: React.FC = () => {
  return (
    <footer className="mt-28 border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-subtle sm:px-6">
        <p>© {new Date().getFullYear()} Ali Aljufairi</p>
        <div className="flex items-center gap-5">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-ink"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
