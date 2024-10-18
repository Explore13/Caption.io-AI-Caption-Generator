import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t-2 md:flex-row flex-col font-semibold text-center flex justify-between py-4 px-20 fixed bottom-0 left-0 w-full">
      <p className="text-black/80">Developed by © Surya Ghosh</p>
      <p className="text-red-500">All rights reserved © 2024</p>
      <div className="space-x-4 text-black/80">
        <a href="https://github.com/Explore13" className="hover:text-blue-400">GitHub</a>
        <a href="https://www.instagram.com/_surya_the_explorer_/" className="hover:text-blue-400">Instagram</a>
        <a href="https://www.linkedin.com/in/ghosh-surya/" className="hover:text-blue-400">Linkedin</a>
      </div>
    </footer>
  );
};

export default Footer;
