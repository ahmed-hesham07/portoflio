'use client';

import Link from 'next/link';
import { Mail, Github, Linkedin, MapPin, Heart, ArrowUp } from 'lucide-react';
import { getPersonalInfo } from '@/utils/data';
import { motion } from 'framer-motion';

export function Footer() {
  const personalInfo = getPersonalInfo();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-autography text-2xl text-white tracking-wide">
                {personalInfo.shortName}
              </span>
            </Link>
            <p className="text-slate-400 mb-4 max-w-md">
              Software Engineer & Data Scientist building intelligent solutions at the intersection of AI, 
              cloud, and industry standards.
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/projects" 
                  className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/experience" 
                  className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link 
                  href="/skills" 
                  className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a 
                href={`mailto:${personalInfo.emailPrimary}`}
                className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </a>
              <a 
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors text-sm"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a 
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors text-sm"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span className="hidden sm:inline">in {personalInfo.location}</span>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-sky-400 transition-all duration-300 border border-slate-700 hover:border-sky-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
