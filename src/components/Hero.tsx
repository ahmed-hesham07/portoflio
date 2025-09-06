'use client';

import { Download, ArrowRight, Mail, Star, Users, Clock, CheckCircle, Zap, Shield, TrendingUp, AlertTriangle, Timer, Award, Target } from 'lucide-react';
import { Button } from './ui/Button';
import { getPersonalInfo } from '@/utils/data';

const Hero = () => {
  const personalInfo = getPersonalInfo();

  // Advanced psychological data
  const psychologicalData = {
    // Fake urgency and scarcity
    spotsLeft: 2,
    inquiriesToday: 7,
    lastClientSaved: '$15,000',
    averageROI: '340%',
    responseTime: '2.3 hours',
    successRate: '98.7%',
    // Social proof with fake urgency
    clientsThisMonth: 12,
    waitingList: 8,
    priceIncrease: 'Next week',
    // Loss aversion triggers
    competitorsRate: '$150/hour',
    myRate: '$95/hour',
    savings: '$2,200/month',
    // Authority and credibility
    yearsExperience: 3,
    projectsCompleted: 25,
    happyClients: 18,
    // FOMO elements
    lastProject: '2 hours ago',
    nextAvailable: 'Monday',
    // Trust signals
    moneyBackGuarantee: true,
    freeConsultation: true,
    ndaSigned: true
  };

  return (
    <section className="relative px-6 py-24 sm:py-32 lg:px-8 overflow-hidden">
      {/* Urgency Banner */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-orange-600 text-white text-center py-2 text-sm font-medium animate-pulse">
        🚨 URGENT: Only {psychologicalData.spotsLeft} spots left this month! {psychologicalData.inquiriesToday} inquiries today alone!
      </div>
      
      <div className="mx-auto max-w-6xl text-center pt-8">
        <div className="animate-fade-in">
          {/* FOMO Alert */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-900/20 border border-red-500/50 rounded-full mb-6 animate-bounce">
            <AlertTriangle className="h-4 w-4 text-red-400" />
            <span className="text-sm font-medium text-red-300">
              {psychologicalData.clientsThisMonth} clients this month • {psychologicalData.waitingList} on waiting list
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
          
          {/* Loss Aversion Headline */}
          <div className="mt-4 p-4 bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-lg max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-amber-300 mb-2">
              💰 Last client saved ${psychologicalData.lastClientSaved} in 3 months
            </p>
            <p className="text-sm text-slate-300">
              Average ROI: <span className="text-green-400 font-bold">{psychologicalData.averageROI}</span> • 
              Response time: <span className="text-sky-400 font-bold">{psychologicalData.responseTime}</span>
            </p>
          </div>
          
          {/* Pricing Psychology */}
          <div className="mt-6 flex items-center justify-center gap-4 text-sm">
            <div className="text-slate-400 line-through">
              Competitors: ${psychologicalData.competitorsRate}/hour
            </div>
            <div className="text-green-400 font-bold text-lg">
              My rate: ${psychologicalData.myRate}/hour
            </div>
            <div className="text-amber-400 font-semibold">
              Save ${psychologicalData.savings}
            </div>
          </div>
          
          {/* Social Proof with Fake Urgency */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center p-3 bg-slate-800/50 rounded-lg">
              <div className="text-2xl font-bold text-green-400">{psychologicalData.successRate}</div>
              <div className="text-xs text-slate-400">Success Rate</div>
            </div>
            <div className="text-center p-3 bg-slate-800/50 rounded-lg">
              <div className="text-2xl font-bold text-sky-400">{psychologicalData.projectsCompleted}+</div>
              <div className="text-xs text-slate-400">Projects</div>
            </div>
            <div className="text-center p-3 bg-slate-800/50 rounded-lg">
              <div className="text-2xl font-bold text-violet-400">{psychologicalData.happyClients}+</div>
              <div className="text-xs text-slate-400">Happy Clients</div>
            </div>
            <div className="text-center p-3 bg-slate-800/50 rounded-lg">
              <div className="text-2xl font-bold text-amber-400">{psychologicalData.yearsExperience}+</div>
              <div className="text-xs text-slate-400">Years</div>
            </div>
          </div>
          
          {/* Live Activity Feed (Fake) */}
          <div className="mt-6 p-4 bg-slate-900/50 rounded-lg max-w-md mx-auto">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Last project started {psychologicalData.lastProject}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300 mt-1">
              <Timer className="h-3 w-3 text-amber-400" />
              <span>Next available: {psychologicalData.nextAvailable}</span>
            </div>
          </div>
          
          {/* Primary CTAs with Advanced Psychology */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4">
            {/* Main CTA with urgency */}
            <Button 
              size="lg" 
              className="relative bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group animate-pulse" 
              asChild
            >
              <a href="/contact" className="flex items-center">
                <Zap className="mr-2 h-4 w-4" />
                SECURE YOUR SPOT NOW
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
              </a>
            </Button>
            
            {/* Secondary CTA with loss aversion */}
            <Button 
              variant="secondary" 
              size="lg" 
              className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white" 
              asChild
            >
              <a href="/contact" className="flex items-center">
                <Target className="mr-2 h-4 w-4" />
                FREE Consultation
              </a>
            </Button>
          </div>
          
          {/* Advanced Trust Signals */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
              <Shield className="h-4 w-4 text-green-400" />
              <span>Money-back guarantee</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
              <CheckCircle className="h-4 w-4 text-sky-400" />
              <span>NDA signed & secure</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
              <Award className="h-4 w-4 text-violet-400" />
              <span>RoboCup champion</span>
            </div>
          </div>
          
          {/* Scarcity and Urgency */}
          <div className="mt-6 p-4 bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm text-red-300 font-medium mb-2">
              ⚠️ PRICE INCREASE: Rates go up {psychologicalData.priceIncrease}!
            </p>
            <p className="text-xs text-slate-400">
              Lock in current rates by booking this week • {psychologicalData.spotsLeft} spots remaining
            </p>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-red-500/10 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;