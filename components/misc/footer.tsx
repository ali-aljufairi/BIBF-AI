import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-500 text-white p-4 border-t border-deep-600">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm text-slate-200">&copy; {new Date().getFullYear()} Ali Aljufairi</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/Ali-Aljufairi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-300 hover:text-spark-300 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ali-aljufairi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-300 hover:text-spark-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/alooy657/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-300 hover:text-spark-300 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
