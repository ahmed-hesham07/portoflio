import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  Programming: ['Python', 'C++', 'JavaScript', 'SQL', 'Rust basics'],
  Frameworks: ['React', 'FastAPI', 'Tauri', 'Node.js'],
  'AI/ML': ['Scikit-learn', 'TensorFlow', 'PyTorch', 'LLM integration'],
  Tools: ['GitHub', 'Docker', 'Cloud platforms'],
  'Engineering Knowledge': ['ASME/API standards', 'Structural integrity analysis']
};

const Skills = () => (
  <section className="py-16 px-4 md:px-16" id="skills">
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-2 text-blue-300">{category}</h3>
            <ul className="list-disc ml-6 text-sm">
              {items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Skills;
