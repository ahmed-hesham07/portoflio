'use client';

import { Download, ArrowRight, Mail, Star, Users, Clock, CheckCircle, Zap, Shield, TrendingUp, AlertTriangle, Timer, Award, Target } from 'lucide-react';
import { Button } from './ui/Button';
import { getPersonalInfo } from '@/utils/data';

const Hero = () => {
  const personalInfo = getPersonalInfo();

  // Professional data
  const professionalData = {
    // Professional metrics
    yearsExperience: 3,
    projectsCompleted: 25,
    happyClients: 18,
    successRate: '98%',
    responseTime: '2-4 hours',
    // Professional achievements
    lastProject: 'Recently completed',
    nextAvailable: 'Available for new projects',
    // Trust signals
    freeConsultation: true,
    ndaSigned: true
  };

  return (
    <section className="relative px-6 py-24 sm:py-32 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-6xl text-center">
        <div className="animate-fade-in">
          {/* Professional Status */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/20 border border-green-500/50 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-300">
              Available for New Projects
            </span>
          </div>

          <h1 className="text-4xl font-autography tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">{personalInfo.name.split(' ')[0]} {personalInfo.name.split(' ')[3]}</span>
          </h1>
          
          <h2 className="mt-3 text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl">
            <span className="gradient-text">
              {personalInfo.title}
            </span>
          </h2>
          
          {/* Professional Highlights */}
          <div className="mt-4 p-4 bg-gradient-to-r from-sky-900/20 to-violet-900/20 border border-sky-500/30 rounded-lg max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-sky-300 mb-2">
              🏆 RoboCup Champion & Engineering Software Specialist
            </p>
            <p className="text-sm text-slate-300">
              Success Rate: <span className="text-green-400 font-bold">{professionalData.successRate}</span> • 
              Response time: <span className="text-sky-400 font-bold">{professionalData.responseTime}</span>
            </p>
          </div>
          
          {/* Professional Metrics */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center p-3 bg-slate-800/50 rounded-lg">
              <div className="text-2xl font-bold text-green-400">{professionalData.successRate}</div>
              <div className="text-xs text-slate-400">Success Rate</div>
            </div>
            <div className="text-center p-3 bg-slate-800/50 rounded-lg">
              <div className="text-2xl font-bold text-sky-400">{professionalData.projectsCompleted}+</div>
              <div className="text-xs text-slate-400">Projects</div>
            </div>
            <div className="text-center p-3 bg-slate-800/50 rounded-lg">
              <div className="text-2xl font-bold text-violet-400">{professionalData.happyClients}+</div>
              <div className="text-xs text-slate-400">Happy Clients</div>
            </div>
            <div className="text-center p-3 bg-slate-800/50 rounded-lg">
              <div className="text-2xl font-bold text-amber-400">{professionalData.yearsExperience}+</div>
              <div className="text-xs text-slate-400">Years</div>
            </div>
          </div>
          
          {/* Professional Status */}
          <div className="mt-6 p-4 bg-slate-900/50 rounded-lg max-w-md mx-auto">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Status: {professionalData.lastProject}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300 mt-1">
              <CheckCircle className="h-3 w-3 text-green-400" />
              <span>Availability: {professionalData.nextAvailable}</span>
            </div>
          </div>
          
          {/* Primary CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4">
            {/* Main CTA */}
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group" 
              asChild
            >
              <a href="/contact" className="flex items-center">
                <Zap className="mr-2 h-4 w-4" />
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            {/* Secondary CTA */}
            <Button 
              variant="secondary" 
              size="lg" 
              className="border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white" 
              asChild
            >
              <a href="/contact" className="flex items-center">
                <Target className="mr-2 h-4 w-4" />
                Free Consultation
              </a>
            </Button>
          </div>
          
          {/* Professional Trust Signals */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
              <Shield className="h-4 w-4 text-green-400" />
              <span>Confidential & Secure</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
              <CheckCircle className="h-4 w-4 text-sky-400" />
              <span>NDA Compliant</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
              <Award className="h-4 w-4 text-violet-400" />
              <span>RoboCup Champion</span>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;