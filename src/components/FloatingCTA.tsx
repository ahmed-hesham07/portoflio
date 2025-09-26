'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, X, Zap, Phone, Mail, AlertTriangle, Timer, Users, TrendingUp, Shield, Star, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { getPersonalInfo } from '@/utils/data';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const personalInfo = getPersonalInfo();

  // Professional data
  const professionalData = {
    projectsCompleted: 25,
    happyClients: 18,
    successRate: '98%',
    responseTime: '2-4 hours',
    yearsExperience: 3,
    lastProject: 'Recently completed',
    nextAvailable: 'Available for new projects'
  };

  useEffect(() => {
    // Show CTA after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isMinimized ? (
        <div className="bg-gradient-to-br from-sky-900/90 to-violet-900/90 border-2 border-sky-500/50 rounded-2xl shadow-2xl p-6 max-w-sm animate-in slide-in-from-bottom-4 duration-500 relative overflow-hidden">
          {/* Professional status */}
          <div className="absolute top-0 left-0 right-0 bg-sky-600 text-white text-center py-1 text-xs font-bold">
            Available for New Projects
          </div>
          
          {/* Close button */}
          <button
            onClick={() => setIsMinimized(true)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-sky-600 hover:bg-sky-700 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="h-3 w-3" />
          </button>

          {/* Content */}
          <div className="space-y-4 pt-4">
            {/* Professional Status */}
            <div className="bg-sky-800/50 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle className="h-4 w-4 text-sky-300" />
                <span className="text-sm font-bold text-sky-300">Professional Services</span>
              </div>
              <div className="text-lg font-bold text-white">
                {professionalData.successRate} Success Rate
              </div>
              <div className="text-xs text-sky-300">Quality guaranteed</div>
            </div>

            {/* Professional Metrics */}
            <div className="flex items-center gap-2 bg-slate-800/30 border border-slate-500/50 rounded-lg p-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="text-xs text-slate-300">
                <div className="font-bold">{professionalData.projectsCompleted}+ projects completed</div>
                <div>{professionalData.happyClients}+ satisfied clients</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                🏆 RoboCup Champion & Engineering Specialist
              </h3>
              <p className="text-sm text-slate-300">
                Expert in engineering software, data analytics, and full-stack development
              </p>
            </div>

            {/* Professional Services */}
            <div className="bg-slate-800/50 rounded-lg p-3">
              <div className="text-center text-sm text-slate-300">
                <div className="font-semibold text-white mb-1">Services Offered</div>
                <div className="text-xs">Engineering Software • Data Analytics • Web Development</div>
              </div>
            </div>

            <div className="space-y-2">
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white font-bold" 
                asChild
              >
                <a href="/contact">
                  <Zap className="mr-2 h-4 w-4" />
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 text-green-400 border-green-400 hover:bg-green-400 hover:text-white" 
                  asChild
                >
                  <a href="tel:+201033120762">
                    <Phone className="mr-1 h-3 w-3" />
                    Call Now
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 text-sky-400 border-sky-400 hover:bg-sky-400 hover:text-white" 
                  asChild
                >
                  <a href={`mailto:${personalInfo.emailPrimary}`}>
                    <Mail className="mr-1 h-3 w-3" />
                    Email
                  </a>
                </Button>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-1 text-green-400">
                <Shield className="h-3 w-3" />
                <span>Confidential</span>
              </div>
              <div className="flex items-center gap-1 text-sky-400">
                <Star className="h-3 w-3" />
                <span>{professionalData.successRate} success</span>
              </div>
            </div>

            {/* Professional Status */}
            <div className="bg-slate-900/50 rounded-lg p-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Status: {professionalData.lastProject}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 mt-1">
                <Users className="h-3 w-3 text-violet-400" />
                <span>{professionalData.happyClients}+ satisfied clients</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="w-16 h-16 bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 rounded-full shadow-2xl flex items-center justify-center text-white relative"
          title="Start Your Project"
        >
          <Zap className="h-8 w-8" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
        </button>
      )}
    </div>
  );
}
