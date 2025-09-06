'use client';

import { getSkills } from '@/utils/data';
import { Badge } from './ui/Badge';
import { Star, Users, Award, CheckCircle, ArrowRight, Zap, TrendingUp, Clock, Shield, Target, ArrowUpRight, Trophy } from 'lucide-react';

const Skills = () => {
  const skills = getSkills();

  // Social proof and credibility data
  const socialProof = {
    projectsCompleted: 25,
    clientsSatisfied: 18,
    yearsExperience: 3,
    successRate: '98%',
    responseTime: '2-4 hours'
  };

  const skillCategories = [
    {
      title: 'Programming & Data',
      skills: skills.programmingAndData,
      variant: 'default' as const
    },
    {
      title: 'Frameworks & Tools',
      skills: skills.frameworksTools,
      variant: 'secondary' as const
    },
    {
      title: 'Concepts',
      skills: skills.concepts,
      variant: 'tech' as const
    },
    {
      title: 'Soft Skills',
      skills: skills.soft,
      variant: 'outline' as const
    }
  ];

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden" id="skills">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-violet-500/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header with Social Proof */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/20 border border-green-500/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-300">Available for New Projects</span>
          </div>
          
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">25+ Technologies</span> Mastered
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            From <span className="text-sky-400 font-semibold">quantum computing</span> to <span className="text-violet-400 font-semibold">neural networks</span>—a comprehensive toolkit that has helped 18+ clients build amazing solutions.
          </p>

          {/* Technology Mastery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400 mb-1">25+</div>
              <div className="text-sm text-slate-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">90%</div>
              <div className="text-sm text-slate-400">ML Expertise</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-400 mb-1">85%</div>
              <div className="text-sm text-slate-400">Full-Stack</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-1">80%</div>
              <div className="text-sm text-slate-400">Engineering</div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white px-8 py-4 text-lg font-semibold rounded-lg flex items-center"
              onClick={() => window.location.href = '/contact'}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              className="border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white px-8 py-4 text-lg rounded-lg flex items-center"
              onClick={() => window.location.href = '/contact'}
            >
              <Zap className="mr-2 h-5 w-5" />
              Get Free Consultation
            </button>
          </div>
        </div>

        {/* Skills Grid with Psychology */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-xl border border-slate-700 hover:border-sky-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center">
                  <Target className="h-4 w-4 text-sky-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant={category.variant} className="group-hover:scale-105 transition-transform">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose My Expertise?</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Proven track record of delivering exceptional results using cutting-edge technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-slate-900/50 rounded-xl">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Proven Expertise</h4>
              <p className="text-sm text-slate-400">25+ projects delivered with 98% success rate</p>
            </div>
            
            <div className="text-center p-6 bg-slate-900/50 rounded-xl">
              <div className="w-12 h-12 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-sky-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Fast Delivery</h4>
              <p className="text-sm text-slate-400">2-4 hour response time, on-time project delivery</p>
            </div>
            
            <div className="text-center p-6 bg-slate-900/50 rounded-xl">
              <div className="w-12 h-12 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-violet-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Quality Guarantee</h4>
              <p className="text-sm text-slate-400">Money-back guarantee, 24/7 support</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-sky-900/20 to-violet-900/20 rounded-2xl p-8 border border-sky-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how my technical expertise can help bring your vision to life. 
              Free consultation with no commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white px-8 py-4 text-lg font-semibold rounded-lg flex items-center justify-center"
                onClick={() => window.location.href = '/contact'}
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                className="border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white px-8 py-4 text-lg rounded-lg flex items-center justify-center"
                onClick={() => window.location.href = '/contact'}
              >
                <Zap className="mr-2 h-5 w-5" />
                Get Free Consultation
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              <Shield className="inline h-3 w-3 mr-1" />
              Secure communication • Confidential project handling
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;