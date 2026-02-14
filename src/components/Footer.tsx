'use client';

import Link from 'next/link';
import { Mail, Github, Linkedin, MapPin, Heart, ArrowUp, MessageCircle, Phone } from 'lucide-react';
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
            <p className="text-slate-400 mb-2 max-w-md">
              NDT &amp; FFS Digital Transformation Specialist. Building intelligent inspection management platforms 
              that transform traditional manual workflows into automated digital processes.
            </p>
            <p className="text-slate-500 text-sm mb-4 max-w-md">
              Custom solutions for API 579, ASME, AWS compliance. Serving oil &amp; gas, petrochemical, 
              power generation, and manufacturing industries worldwide.
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/projects" 
                  className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
                >
                  NDT/FFS Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/experience" 
                  className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
                >
                  Experience &amp; Track Record
                </Link>
              </li>
              <li>
                <Link 
                  href="/skills" 
                  className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
                >
                  Technical Expertise
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
                >
                  About Me
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
                className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>{personalInfo.emailPrimary}</span>
              </a>
              <a 
                href="https://wa.me/201284986274"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp (Messages Only)</span>
              </a>
              <a 
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors text-sm"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a 
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors text-sm"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Industries Served */}
        <div className="pt-6 pb-6 border-t border-slate-800">
          <p className="text-xs text-slate-500 text-center mb-3">Industries Served</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <span>Oil &amp; Gas</span>
            <span>Petrochemical</span>
            <span>Power Generation</span>
            <span>Manufacturing</span>
            <span>Marine &amp; Offshore</span>
            <span>Infrastructure</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>&copy; {currentYear} {personalInfo.name}. All rights reserved.</span>
              <span className="hidden sm:inline">&bull;</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span className="hidden sm:inline">in {personalInfo.location}</span>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-all duration-300 border border-slate-700 hover:border-slate-500"
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
