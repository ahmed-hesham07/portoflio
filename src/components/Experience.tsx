"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'internship' | 'freelance' | 'full-time';
  details: string[];
  technologies: string[];
  achievements: string[];
  icon: string;
}

const experiences: Experience[] = [
  {
    id: 'aed-intern',
    role: 'Data Science Intern',
    company: 'Accur Digital (AED)',
    period: '2025',
    location: 'Remote',
    type: 'internship',
    icon: '📊',
    details: [
      'Developed and optimized customer segmentation models to improve targeting accuracy and personalization by 35%.',
      'Conducted comprehensive dataset research, cleaning, and feature engineering to support predictive analytics.',
      'Assisted in building and enhancing an AI-powered chatbot for customer engagement, increasing response efficiency by 40%.'
    ],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'SQL', 'Power BI'],
    achievements: [
      'Improved customer segmentation accuracy by 35%',
      'Reduced data preprocessing time by 50%',
      'Enhanced chatbot response efficiency by 40%'
    ]
  },
  {
    id: 'freelance-dev',
    role: 'Freelance Full-Stack Developer',
    company: 'Independent Contractor',
    period: '2024 - Present',
    location: 'Remote',
    type: 'freelance',
    icon: '💻',
    details: [
      'Designed and delivered custom full-stack software solutions using React, FastAPI, and SQL technologies for 10+ clients.',
      'Built robotics and automation tools to streamline operations and improve efficiency for manufacturing clients.',
      'Developed AI/ML applications, including predictive models and data-driven business insights for various industries.',
      'Provided engineering consultancy services specializing in pressure vessel design and integrity assessment.'
    ],
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS', 'Tauri', 'Python'],
    achievements: [
      'Delivered 15+ successful projects',
      'Achieved 100% client satisfaction rate',
      'Reduced operational costs by 30% for automation clients',
      'Delivered high-value solutions for clients'
    ]
  },
  {
    id: 'engineering-projects',
    role: 'Engineering Project Lead & Full-Stack Developer',
    company: 'Personal Projects',
    period: '2024 - Present',
    location: 'Egypt',
    type: 'full-time',
    icon: '⚙️',
    details: [
      'Led development of Vessel Guard application for pressure vessel integrity assessment according to ASME standards.',
      'Conducted structural analysis and fitness-for-service evaluations for industrial equipment.',
      'Collaborated with multidisciplinary teams on robotics and automation projects.',
      'Published research on AI applications in engineering and structural integrity.'
    ],
    technologies: ['ASME Standards', 'FEA Software', 'CAD Tools', 'MATLAB', 'React', 'FastAPI', 'PostgreSQL', 'Docker', 'Tauri', 'Python'],
    achievements: [
      'Completed 5+ major engineering projects',
      'Developed proprietary FFS assessment tool',
      'Improved inspection efficiency by 60%',
      'Co-authored 2 technical papers'
    ]
  }
];

const typeColors = {
  internship: {
    bg: 'from-blue-500 to-blue-600',
    text: 'text-blue-600 dark:text-blue-400',
    accent: 'bg-blue-100 dark:bg-blue-900',
    label: 'Internship'
  },
  freelance: {
    bg: 'from-green-500 to-green-600',
    text: 'text-green-600 dark:text-green-400',
    accent: 'bg-green-100 dark:bg-green-900',
    label: 'Freelance'
  },
  'full-time': {
    bg: 'from-purple-500 to-purple-600',
    text: 'text-purple-600 dark:text-purple-400',
    accent: 'bg-purple-100 dark:bg-purple-900',
    label: 'Project Lead'
  }
};

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [activeTab, setActiveTab] = useState<'details' | 'achievements' | 'tech'>('details');
  const tabs: Array<{ id: 'details' | 'achievements' | 'tech'; label: string; icon: string }> = [
    { id: 'details', label: 'Details', icon: '📝' },
    { id: 'achievements', label: 'Achievements', icon: '🏆' },
    { id: 'tech', label: 'Technologies', icon: '⚙️' }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 px-4 bg-cyber-dark relative overflow-hidden">
      {/* Cyber background effects */}
      <div className="absolute inset-0 cyber-grid opacity-15"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-neon-green rounded-full opacity-5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-cyber tracking-wider">
            <span className="cyber-text">{'>'}</span> NEURAL <span className="gradient-text">PATHWAYS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-cyber">
            Evolutionary progression through quantum computing, autonomous systems, and neural network architectures
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600 z-0" />
              )}

              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 ${typeColors[exp.type].accent} rounded-xl flex items-center justify-center relative z-10`}>
                    <span className="text-2xl">{exp.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[exp.type].accent} ${typeColors[exp.type].text}`}>
                        {typeColors[exp.type].label}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <span className="mr-2">🏢</span>
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">📅</span>
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">📍</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Short description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.details[0]}
                    </p>

                    {/* Tech stack preview */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-sm rounded-full">
                          +{exp.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <motion.button
                      onClick={() => setSelectedExperience(exp)}
                      className="btn-ghost"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Detail Modal */}
        <AnimatePresence>
          {selectedExperience && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedExperience(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${typeColors[selectedExperience.type].accent} rounded-xl flex items-center justify-center`}>
                        <span className="text-2xl">{selectedExperience.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{selectedExperience.role}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{selectedExperience.company}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedExperience(null)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Tab Navigation */}
                  <div className="flex space-x-1 mb-6 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                          activeTab === tab.id
                            ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm'
                            : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                        }`}
                      >
                        <span className="mr-2">{tab.icon}</span>
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {activeTab === 'details' && (
                        <div className="space-y-4">
                          <h4 className="font-semibold text-lg mb-4">Role Details</h4>
                          <ul className="space-y-3">
                            {selectedExperience.details.map((detail, index) => (
                              <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {activeTab === 'achievements' && (
                        <div className="space-y-4">
                          <h4 className="font-semibold text-lg mb-4">Key Achievements</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {selectedExperience.achievements.map((achievement, index) => (
                              <div key={index} className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                                <div className="flex items-center mb-2">
                                  <span className="text-green-600 dark:text-green-400 mr-2">🎯</span>
                                  <span className="font-medium text-green-800 dark:text-green-200">{achievement}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeTab === 'tech' && (
                        <div className="space-y-4">
                          <h4 className="font-semibold text-lg mb-4">Technologies & Tools</h4>
                          <div className="flex flex-wrap gap-3">
                            {selectedExperience.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;
