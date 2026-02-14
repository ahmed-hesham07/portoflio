'use client';

import { ArrowRight, Mail, Github, Linkedin, Download, FileText, MessageCircle, Workflow, Settings, Rocket } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/Button';
import { getPersonalInfo, getPortfolioData } from '@/utils/data';

const vpIcons: Record<string, React.ElementType> = {
  workflow: Workflow,
  settings: Settings,
  rocket: Rocket,
};

const Hero = () => {
  const personalInfo = getPersonalInfo();
  const portfolioData = getPortfolioData();
  const valuePropositions = portfolioData.valuePropositions || [];

  return (
    <section className="relative px-6 py-24 sm:py-32 lg:px-8 min-h-screen flex items-center bg-gradient-to-b from-blue-950/5 via-transparent to-transparent dark:from-blue-950/20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center space-y-8 mb-16">
          {/* NDT/FFS Badge */}
          <div className="inline-flex items-center rounded-full border border-teal-300/50 dark:border-teal-700/50 bg-teal-50 dark:bg-teal-900/20 px-4 py-1.5 text-sm font-medium text-teal-700 dark:text-teal-300">
            NDT &amp; FFS Digital Transformation Specialist
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl max-w-5xl mx-auto leading-tight">
            {personalInfo.tagline}
          </h1>
          
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {personalInfo.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-blue-900 dark:bg-blue-600 text-white hover:bg-blue-800 dark:hover:bg-blue-500 shadow-lg"
              asChild
            >
              <Link href="/contact">
                <FileText className="mr-2 h-4 w-4" />
                See Demo Reports
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-teal-300 dark:border-teal-600 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/30"
              asChild
            >
              <Link href="/contact">
                <MessageCircle className="mr-2 h-4 w-4" />
                Book Free Consultation
              </Link>
            </Button>
          </div>
        </div>

        {/* Value Propositions */}
        {valuePropositions.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {valuePropositions.map((prop, index) => {
              const Icon = vpIcons[prop.icon] || Workflow;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800/80 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {prop.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-center text-sm text-slate-600 dark:text-slate-400 mb-4">
            Trusted by inspection companies across oil &amp; gas, petrochemical, and power generation sectors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <span className="text-teal-500">&#10003;</span> 5+ years NDT/FFS software experience
            </span>
            <span className="flex items-center gap-1">
              <span className="text-teal-500">&#10003;</span> All NDT methods supported (UT, RT, MT, PT, PAUT, TOFD, VT)
            </span>
            <span className="flex items-center gap-1">
              <span className="text-teal-500">&#10003;</span> Code compliant (API 579, ASME, AWS, ASTM, EN)
            </span>
            <span className="flex items-center gap-1">
              <span className="text-teal-500">&#10003;</span> 98% client satisfaction
            </span>
          </div>
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
    </section>
  );
};

export default Hero;
