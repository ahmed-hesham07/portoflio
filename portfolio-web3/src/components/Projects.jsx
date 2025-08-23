import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Projects = () => (
  <section className="py-16 px-4 md:px-16" id="projects">
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Projects Showcase</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.name}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col"
          >
            <img src={project.image} alt={`Screenshot of ${project.name} project`} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="mb-2">{project.description}</p>
            <div className="mb-2 text-sm text-blue-300">Tech: {project.tech.join(', ')}</div>
            <ul className="list-disc ml-6 mb-2 text-sm">
              {project.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <a href={project.link} className="mt-auto text-blue-500 hover:underline">View Project</a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Projects;
