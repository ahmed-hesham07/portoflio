import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section className="flex flex-col items-center justify-center py-20" id="hero">
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Ahmed Seddik</h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-400">Data Scientist | Software Engineer | Robotic Engineer</h2>
      <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">“Building intelligent engineering solutions that merge AI, software, and industry standards.”</p>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <a href="/assets/Ahmed_Seddik_CV.pdf" download className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded shadow">Download CV</a>
  <a href="https://github.com/ahmed-Seddik07" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded shadow">GitHub</a>
  <a href="https://linkedin.com/in/ahmed-Seddik07" target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded shadow">LinkedIn</a>
        <a href="#contact" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow">Contact Me</a>
      </div>
    </motion.div>
  </section>
);

export default Hero;
