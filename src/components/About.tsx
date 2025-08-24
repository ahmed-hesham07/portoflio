"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const About = () => {
  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '15+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies Mastered' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  const highlights = [
    {
      icon: '🎯',
      title: 'Mission-Driven',
      description: 'Building my first million-dollar business through innovative engineering solutions'
    },
    {
      icon: '🚀',
      title: 'Versatile Skills',
      description: 'Combining AI, software development, and engineering expertise'
    },
    {
      icon: '💡',
      title: 'Innovation Focus',
      description: 'Leveraging cutting-edge technology to solve real-world problems'
    },
    {
      icon: '🔬',
      title: 'Research-Oriented',
      description: 'Continuous learning and staying ahead of technology trends'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
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
    <section id="about" className="py-20 px-4 bg-cyber-dark relative overflow-hidden">
      {/* Cyber background effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-blue rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-purple rounded-full opacity-5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-cyber tracking-wider">
            <span className="cyber-text">{'>'}</span> ABOUT <span className="gradient-text">PROTOCOL</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-cyber">
            Engineering intelligent solutions that bridge quantum computing, neural networks, 
            and autonomous systems for next-generation applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass backdrop-blur-xl rounded-2xl p-8 border border-neon-blue/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-cyber tracking-wider">
              <span className="neon-text">SYSTEM_ARCHITECT</span>
            </h3>
            <div className="space-y-4 text-gray-300 font-cyber leading-relaxed">
              <p>
                I am a <strong className="text-neon-blue">Quantum Data Scientist</strong>, 
                <strong className="text-neon-purple"> Neural Network Engineer</strong>, and 
                <strong className="text-neon-green"> Autonomous Systems Designer</strong> dedicated to 
                architecting next-generation intelligent solutions.
              </p>
              <p>
                My expertise spans across quantum computing algorithms, deep learning architectures, 
                and robotic automation systems that comply with industry standards including ASME and API protocols. 
                I specialize in merging theoretical AI research with practical engineering implementations.
              </p>
              <p>
                <span className="cyber-text">{'> current_mission:'}</span> Building my first million-dollar enterprise 
                through revolutionary engineering solutions that push the boundaries of what's possible 
                in autonomous intelligence and quantum-enhanced systems.
              </p>
            </div>

            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="/contact" 
                className="btn-primary inline-block"
              >
                <span className="mr-2">📡</span>
                ESTABLISH_CONNECTION
              </Link>
            </motion.div>
          </motion.div>

          {/* Neural Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Holographic interface */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto glass backdrop-blur-xl rounded-2xl border border-neon-blue/30 flex items-center justify-center relative overflow-hidden">
                {/* Cyber grid overlay */}
                <div className="absolute inset-0 cyber-grid opacity-30"></div>
                
                {/* Central avatar */}
                <div className="relative z-10">
                  <div className="w-32 h-32 rounded-full border-2 border-neon-blue bg-cyber-light flex items-center justify-center mb-4 animate-glow-pulse">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                  <div className="text-center">
                    <div className="cyber-text text-xs mb-2">{'> system_status: online'}</div>
                    <div className="neon-text text-sm font-mono-cyber">AHMED_HESHAM_OS</div>
                  </div>
                </div>
                
                {/* Scan lines */}
                <div className="absolute inset-0 scan-lines opacity-20"></div>
              </div>
              
              {/* Floating data nodes */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotateY: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-4 right-4 glass p-3 rounded-xl border border-neon-purple/30"
              >
                <span className="text-neon-purple text-xl">🧠</span>
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotateY: [0, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute bottom-4 left-4 glass p-3 rounded-xl border border-neon-green/30"
              >
                <span className="text-neon-green text-xl">⚙️</span>
              </motion.div>
              <motion.div
                animate={{ 
                  x: [0, 5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 left-4 glass p-2 rounded-lg border border-neon-cyan/30"
              >
                <span className="text-neon-cyan text-sm">🔬</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Neural Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center glass backdrop-blur-xl rounded-xl p-6 border border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold neon-text mb-2 font-mono-cyber">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium font-cyber text-sm tracking-wider">
                {stat.label.toUpperCase()}
              </div>
              <div className="w-full h-1 bg-cyber-light rounded-full mt-3 overflow-hidden">
                <motion.div
                  className="h-full bg-neon-blue"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Protocols */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              variants={itemVariants}
              className="group text-center card-hover relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Holographic border effect */}
              <div className="holographic-border absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative z-10 p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold mb-3 neon-text font-cyber tracking-wider">
                  {highlight.title.toUpperCase()}
                </h4>
                <p className="text-gray-300 text-sm font-cyber leading-relaxed">
                  {highlight.description}
                </p>
                
                {/* Data stream effect */}
                <div className="mt-4 flex justify-center">
                  <div className="w-16 h-1 bg-neon-blue rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
