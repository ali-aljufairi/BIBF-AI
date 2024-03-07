import React from "react";

import { GitHub, Linkedin, Instagram } from "react-feather";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2024 Ali Aljufairi</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/Ali-Aljufairi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-Pufr-300"
          >
            <GitHub size={20} />
            <span className="ml-2"></span>
          </a>
          <a
            href="https://www.linkedin.com/in/ali-aljufairi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-Pufr-300"
          >
            <Linkedin size={20} />
            <span className="ml-2"></span>
          </a>
          <a
            href="https://www.instagram.com/alooy657/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-Pufr-300"
          >
            <Instagram size={20} />
            <span className="ml-2"></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
