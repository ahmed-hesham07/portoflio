"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  features: string[];
  link: string;
  github?: string;
  image: string;
  category: 'web' | 'ai' | 'engineering' | 'desktop';
  status: 'completed' | 'in-progress' | 'planning';
}

const projects: Project[] = [
  {
    id: 'business-analysis',
    name: 'Business-wise Analysis Tool',
    description: 'A comprehensive data analytics platform that transforms raw datasets into actionable business insights for strategic decision-making.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Jupyter', 'Plotly'],
    features: [
      'Automated data cleaning and preprocessing',
      'Exploratory and statistical analysis',
      'Interactive visualizations and dashboards',
      'Export reports in multiple formats'
    ],
    link: 'https://github.com/ahmed-hesham07/business-analysis',
    github: 'https://github.com/ahmed-hesham07/business-analysis',
    image: '/assets/business-analysis.png',
    category: 'ai',
    status: 'completed'
  },
  {
    id: 'vessel-guard',
    name: 'Vessel Guard',
    description: 'A full-stack engineering application for Fitness-For-Service (FFS) assessments of pressure vessels and piping systems, built on ASME B31.3 & ASME VIII standards.',
    tech: ['React', 'Tauri', 'FastAPI', 'SQLAlchemy', 'SQLite', 'TypeScript'],
    features: [
      'Automated FFS assessments',
      'Corrosion rate & remaining life calculation',
      'Inspection planning and PDF report generation',
      'Cross-platform desktop build',
      'Standards compliance verification'
    ],
    link: 'https://github.com/ahmed-hesham07/vessel-guard',
    github: 'https://github.com/ahmed-hesham07/vessel-guard',
    image: '/assets/vessel-guard.png',
    category: 'engineering',
    status: 'completed'
  },
  {
    id: 'consultancy-website',
    name: 'Engineering Consultancy Website',
    description: 'A modern, responsive website for engineering consultancy services, featuring professional portfolio, services showcase, and client engagement tools.',
    tech: ['React', 'Tailwind CSS', 'Netlify', 'TypeScript', 'Framer Motion'],
    features: [
      'Fully responsive UI/UX design',
      'Dynamic articles and blog section',
      'Project gallery with filtering',
      'Contact integration and forms',
      'SEO optimized content'
    ],
    link: 'https://heshamragab.dev',
    github: 'https://github.com/ahmed-hesham07/consultancy-website',
    image: '/assets/consultancy-website.png',
    category: 'web',
    status: 'completed'
  },
  {
    id: 'ai-chatbot',
    name: 'AI-Powered Customer Support',
    description: 'Intelligent chatbot system with natural language processing capabilities for automated customer support and engagement.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'Redis'],
    features: [
      'Natural language understanding',
      'Context-aware responses',
      'Integration with existing systems',
      'Analytics and reporting dashboard'
    ],
    link: 'https://github.com/ahmed-hesham07/ai-chatbot',
    github: 'https://github.com/ahmed-hesham07/ai-chatbot',
    image: '/assets/ai-chatbot.png',
    category: 'ai',
    status: 'in-progress'
  }
];

const categories = [
  { id: 'all', name: 'All Projects', icon: '🚀' },
  { id: 'web', name: 'Web Development', icon: '🌐' },
  { id: 'ai', name: 'AI & ML', icon: '🤖' },
  { id: 'engineering', name: 'Engineering', icon: '⚙️' },
  { id: 'desktop', name: 'Desktop Apps', icon: '💻' }
];

const statusColors = {
  completed: 'bg-neon-green/20 text-neon-green border border-neon-green/30',
  'in-progress': 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30',
  planning: 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30'
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-cyber-darker relative overflow-hidden">
      {/* Cyber background effects */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-purple rounded-full opacity-5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-cyber tracking-wider">
            <span className="cyber-text">{'>'}</span> <span className="gradient-text">PROJECT</span> REPOSITORY
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-cyber">
            Quantum-enhanced engineering solutions spanning neural networks, autonomous systems, and enterprise applications
          </p>
        </motion.div>

        {/* Neural Filter Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 font-cyber tracking-wider ${
                selectedCategory === category.id
                  ? 'btn-primary'
                  : 'glass backdrop-blur-xl border border-neon-blue/20 text-gray-300 hover:border-neon-blue/40 hover:text-neon-blue'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="mr-2 text-lg">{category.icon}</span>
              {category.name.toUpperCase()}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="group relative card overflow-hidden hover:shadow-neon-blue/20 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Quantum Interface */}
                <div className="aspect-video relative overflow-hidden bg-cyber-light border-b border-neon-blue/20">
                  {/* Cyber grid overlay */}
                  <div className="absolute inset-0 cyber-grid opacity-20"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl opacity-40 filter drop-shadow-lg">
                      {categories.find(c => c.id === project.category)?.icon}
                    </span>
                  </div>
                  
                  {/* Status indicator */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold font-cyber tracking-wider ${statusColors[project.status]} backdrop-blur-sm`}>
                      {project.status.replace('-', '_').toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Scan line effect */}
                  <div className="absolute inset-0 scan-lines opacity-20"></div>
                </div>

                {/* Neural Data Stream */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 neon-text font-cyber tracking-wider group-hover:animate-neon-flicker transition-all">
                    {project.name.toUpperCase()}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3 font-cyber text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Matrix */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyber-light border border-neon-blue/30 text-neon-blue text-xs rounded-full font-cyber tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-cyber-light border border-neon-purple/30 text-neon-purple text-xs rounded-full font-cyber">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Neural Actions */}
                  <div className="flex gap-3">
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 btn-ghost text-sm font-cyber tracking-wider"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      ACCESS_DATA
                    </motion.button>
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg glass border border-neon-green/30 hover:border-neon-green transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="text-neon-green">⟨⟩</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold">{selectedProject.name}</h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      ✕
                    </button>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1"
                    >
                      View Project
                    </a>
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
