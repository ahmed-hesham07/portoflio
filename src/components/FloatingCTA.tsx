'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, X, Zap, Phone, Mail } from 'lucide-react';
import { Button } from './ui/Button';
import { getPersonalInfo } from '@/utils/data';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const personalInfo = getPersonalInfo();

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
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 max-w-sm animate-in slide-in-from-bottom-4 duration-500">
          {/* Close button */}
          <button
            onClick={() => setIsMinimized(true)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            <X className="h-3 w-3" />
          </button>

          {/* Content */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-300">Available Now</span>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Ready to Start Your Project?
              </h3>
              <p className="text-sm text-slate-300">
                Join 18+ satisfied clients who've built amazing solutions with me.
              </p>
            </div>

            <div className="space-y-2">
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white" 
                asChild
              >
                <a href="/contact">
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
                    Call
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

            <div className="text-xs text-slate-500 text-center">
              <Zap className="inline h-3 w-3 mr-1" />
              Free consultation • No commitment
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="w-14 h-14 bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 rounded-full shadow-2xl flex items-center justify-center text-white animate-bounce"
          title="Start Your Project"
        >
          <Zap className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
