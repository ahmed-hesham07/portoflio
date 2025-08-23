import React from 'react';

const Navbar = () => (
  <nav className="w-full flex justify-between items-center py-4 px-8 bg-gray-950 shadow-lg sticky top-0 z-50">
    <div className="font-bold text-xl tracking-wide">Ahmed Seddik</div>
    <div className="space-x-6">
      <a href="#about" className="hover:text-blue-400">About</a>
      <a href="#projects" className="hover:text-blue-400">Projects</a>
      <a href="#experience" className="hover:text-blue-400">Experience</a>
      <a href="#skills" className="hover:text-blue-400">Skills</a>
      <a href="#web3" className="hover:text-blue-400">Web3</a>
      <a href="#contact" className="hover:text-blue-400">Contact</a>
    </div>
  </nav>
);

export default Navbar;
