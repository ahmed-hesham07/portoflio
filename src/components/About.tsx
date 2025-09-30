"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const About = () => {
  const achievements = [
    {
      title: 'RoboCup Champion',
      description: 'National Champion at RoboCup Junior Egypt (2019)'
    },
    {
      title: 'International Competitor',
      description: 'Asia-Pacific RoboCup Participant (2018)'
    },
    {
      title: 'Academic Excellence',
      description: 'Computer Engineering at AASTMT Alexandria'
    },
    {
      title: 'Industry Standards',
      description: 'Specialized in ASME B31.3 & VIII compliance'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-violet-500/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Building intelligent engineering software at the intersection of AI, cloud, and industry standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Software Engineer & Data Scientist
            </h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I specialize in developing engineering software, data analytics solutions, and full-stack applications. 
                My work focuses on creating practical tools that solve real-world problems in engineering and business contexts.
              </p>
              <p>
                With expertise spanning from machine learning and data science to desktop and web applications, 
                I bring a comprehensive approach to software development that emphasizes both technical excellence and user experience.
              </p>
              <p>
                Currently pursuing Computer Engineering at AASTMT Alexandria, I combine academic knowledge with 
                practical experience gained from working with diverse clients and challenging projects.
              </p>
            </div>

            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <h4 className="text-lg font-semibold mb-3 text-white">
                  {achievement.title}
                </h4>
                <p className="text-slate-400 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
