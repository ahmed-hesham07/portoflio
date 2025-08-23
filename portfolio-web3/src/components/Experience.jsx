import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';

const Experience = () => (
  <section className="py-16 px-4 md:px-16" id="experience">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Experience & Internships</h2>
      <div className="space-y-6">
        {experience.map((exp, idx) => (
          <div key={idx} className="bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-1">{exp.role} <span className="text-blue-300">@ {exp.company}</span></h3>
            <div className="text-sm text-gray-400 mb-2">{exp.period}</div>
            <ul className="list-disc ml-6 text-sm">
              {exp.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Experience;
