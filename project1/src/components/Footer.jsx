import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Lukas D.</h2>
          <div className="flex space-x-6 mb-8">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Lukas D. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;