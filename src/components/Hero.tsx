'use client';

import { ArrowRight, Mail, Github, Linkedin, Download } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/Button';
import { getPersonalInfo } from '@/utils/data';
import { autography } from '@/styles/fonts';

const Hero = () => {
  const personalInfo = getPersonalInfo();

  return (
    <section className="relative px-6 py-24 sm:py-32 lg:px-8 min-h-screen flex items-center">
      <div className="mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl">
            <span className={`${autography.className} block text-6xl sm:text-7xl md:text-8xl leading-none text-slate-900 dark:text-white`}>
              {personalInfo.name.split(' ')[0]}
            </span>
            <span className={`${autography.className} block text-5xl sm:text-6xl md:text-7xl leading-tight text-slate-600 dark:text-slate-300`}>
              {personalInfo.name.split(' ')[3]}
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-light">
            {personalInfo.title}
          </p>
          
          <p className="text-lg leading-relaxed text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            {personalInfo.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100"
              asChild
            >
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              asChild
            >
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a 
              href={personalInfo.social.github} 
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href={personalInfo.social.linkedin} 
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="/Ahmed_Hesham_CV.pdf" 
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV"
            >
              <Download className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;