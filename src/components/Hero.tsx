'use client';

import { Download, ArrowRight, Mail, Star, Users, Clock, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { getPersonalInfo } from '@/utils/data';

const Hero = () => {
  const personalInfo = getPersonalInfo();

  return (
    <section className="relative px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-autography tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">{personalInfo.name.split(' ')[0]} {personalInfo.name.split(' ')[3]}</span>
          </h1>
          
          <h2 className="mt-3 text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl">
            <span className="gradient-text">
              {personalInfo.title}
            </span>
          </h2>
          
          <p className="mt-4 text-sm leading-6 text-slate-300 max-w-xl mx-auto sm:text-base sm:leading-7 md:text-lg md:leading-8 md:max-w-2xl">
            {personalInfo.tagline}
          </p>
          
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400 sm:text-sm">
            <span>📍 {personalInfo.location}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for projects</span>
            </span>
          </div>
          
          {/* Social Proof - Subtle psychological trigger */}
          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-500">
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>18+ clients helped</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 text-yellow-400" />
              <span>98% satisfaction</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>24h response</span>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 sm:mt-10">
            <Button size="lg" asChild>
              <a href="#projects" className="flex items-center">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button variant="secondary" size="lg" asChild>
              <a href="/Ahmed_Hesham_CV.pdf" download className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
            
            {/* Primary CTA with psychological triggers */}
            <Button 
              size="lg" 
              className="relative bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group" 
              asChild
            >
              <a href="/contact" className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                {/* Subtle urgency indicator */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </a>
            </Button>
          </div>
          
          {/* Trust signals and urgency */}
          <div className="mt-6 text-center">
            <p className="text-xs text-slate-500 mb-2">
              <CheckCircle className="inline h-3 w-3 mr-1 text-green-400" />
              Free consultation • No commitment required
            </p>
            <p className="text-xs text-amber-400 font-medium">
              ⚡ Limited spots available this month
            </p>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-violet-400/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;