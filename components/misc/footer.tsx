// Footer.tsx

import React from 'react';
import { GitHub, Linkedin } from 'react-feather';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2024 Ali Aljufairi</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/Ali-Aljufairi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-400"
          >
            <GitHub size={20} />
            <span className="ml-2"></span>
          </a>
          <a
            href="https://www.linkedin.com/in/ali-aljufairi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-400"
          >
            <Linkedin size={20} />
            <span className="ml-2"></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
