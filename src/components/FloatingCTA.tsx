'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, X, Zap, Phone, Mail, AlertTriangle, Timer, Users, TrendingUp, Shield, Star } from 'lucide-react';
import { Button } from './ui/Button';
import { getPersonalInfo } from '@/utils/data';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const personalInfo = getPersonalInfo();

  // Advanced psychological data
  const psychologicalData = {
    spotsLeft: 2,
    inquiriesToday: 7,
    lastClientSaved: '$15,000',
    averageROI: '340%',
    responseTime: '2.3 hours',
    successRate: '98.7%',
    clientsThisMonth: 12,
    waitingList: 8,
    priceIncrease: 'Next week',
    competitorsRate: '$150/hour',
    myRate: '$95/hour',
    savings: '$2,200/month',
    lastProject: '2 hours ago',
    nextAvailable: 'Monday'
  };

  // Countdown timer effect
  useEffect(() => {
    if (!isVisible || isMinimized) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) return 15 * 60; // Reset to 15 minutes
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible, isMinimized]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
        <div className="bg-gradient-to-br from-red-900/90 to-orange-900/90 border-2 border-red-500/50 rounded-2xl shadow-2xl p-6 max-w-sm animate-in slide-in-from-bottom-4 duration-500 relative overflow-hidden">
          {/* Urgency overlay */}
          <div className="absolute top-0 left-0 right-0 bg-red-600 text-white text-center py-1 text-xs font-bold animate-pulse">
            🚨 URGENT: Only {psychologicalData.spotsLeft} spots left!
          </div>
          
          {/* Close button */}
          <button
            onClick={() => setIsMinimized(true)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="h-3 w-3" />
          </button>

          {/* Content */}
          <div className="space-y-4 pt-4">
            {/* Countdown Timer */}
            <div className="bg-red-800/50 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Timer className="h-4 w-4 text-red-300" />
                <span className="text-sm font-bold text-red-300">Limited Time Offer</span>
              </div>
              <div className="text-2xl font-bold text-white font-mono">
                {formatTime(timeLeft)}
              </div>
              <div className="text-xs text-red-300">Price increases after timer!</div>
            </div>

            {/* FOMO Alert */}
            <div className="flex items-center gap-2 bg-amber-900/30 border border-amber-500/50 rounded-lg p-2">
              <AlertTriangle className="h-4 w-4 text-amber-400" />
              <div className="text-xs text-amber-300">
                <div className="font-bold">{psychologicalData.inquiriesToday} inquiries today!</div>
                <div>{psychologicalData.waitingList} people waiting</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                💰 Save ${psychologicalData.savings}/month!
              </h3>
              <p className="text-sm text-slate-300">
                Last client saved ${psychologicalData.lastClientSaved} • {psychologicalData.successRate} success rate
              </p>
            </div>

            {/* Pricing Psychology */}
            <div className="bg-slate-800/50 rounded-lg p-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400 line-through">Competitors: ${psychologicalData.competitorsRate}/hr</span>
                <span className="text-green-400 font-bold">My rate: ${psychologicalData.myRate}/hr</span>
              </div>
              <div className="text-center text-xs text-amber-400 font-semibold mt-1">
                You save ${psychologicalData.savings} per month!
              </div>
            </div>

            <div className="space-y-2">
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold animate-pulse" 
                asChild
              >
                <a href="/contact">
                  <Zap className="mr-2 h-4 w-4" />
                  SECURE YOUR SPOT NOW
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
                <span>Money-back</span>
              </div>
              <div className="flex items-center gap-1 text-sky-400">
                <Star className="h-3 w-3" />
                <span>{psychologicalData.successRate} success</span>
              </div>
            </div>

            {/* Live Activity */}
            <div className="bg-slate-900/50 rounded-lg p-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Last project: {psychologicalData.lastProject}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 mt-1">
                <Users className="h-3 w-3 text-violet-400" />
                <span>{psychologicalData.clientsThisMonth} clients this month</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 rounded-full shadow-2xl flex items-center justify-center text-white animate-bounce relative"
          title="SECURE YOUR SPOT NOW!"
        >
          <Zap className="h-8 w-8" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full animate-ping"></div>
        </button>
      )}
    </div>
  );
}
