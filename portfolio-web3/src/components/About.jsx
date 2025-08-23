import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <section className="py-16 px-4 md:px-16" id="about">
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-4 text-blue-400">About Me</h2>
      <p className="mb-4 text-lg">I am a Data Scientist, Software Developer, and Robotic Engineer passionate about building intelligent engineering solutions. My career goal is to become an independent software engineer & entrepreneur, building my first million dollar business.</p>
      <div className="mb-4">
        <span className="font-semibold">Skills:</span>
        <ul className="list-disc ml-6 mt-2">
          <li>Python, React, FastAPI, SQLAlchemy</li>
          <li>Machine Learning, AI/LLMs, Robotics</li>
          <li>Cloud Architect (in training), Tauri</li>
          <li>Engineering codes (ASME/API)</li>
        </ul>
      </div>
    </motion.div>
  </section>
);

export default About;
