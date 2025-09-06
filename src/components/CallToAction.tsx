import { Mail, ArrowRight, Star, Users, Clock, CheckCircle, Zap, Shield } from 'lucide-react';
import { Button } from './ui/Button';
import { getPersonalInfo } from '@/utils/data';

export function CallToAction() {
  const personalInfo = getPersonalInfo();

  // Social proof data
  const socialProof = {
    projectsCompleted: 25,
    clientsSatisfied: 18,
    successRate: '98%',
    responseTime: '2-4 hours'
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-violet-500/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Availability indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/20 border border-green-500/30 rounded-full mb-6">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-green-300">Available for New Projects</span>
        </div>

        <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Build Something 
          <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent"> Amazing?</span>
        </h2>
        
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join <span className="text-sky-400 font-semibold">18+ satisfied clients</span> who've transformed their ideas into powerful engineering solutions. 
          From concept to deployment, I'll help you build software that makes a real impact.
        </p>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-sky-400 mb-1">{socialProof.projectsCompleted}+</div>
            <div className="text-sm text-slate-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-1">{socialProof.successRate}</div>
            <div className="text-sm text-slate-400">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-violet-400 mb-1">{socialProof.clientsSatisfied}+</div>
            <div className="text-sm text-slate-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-1">{socialProof.responseTime}</div>
            <div className="text-sm text-slate-400">Avg Response</div>
          </div>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span>Free consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-sky-400" />
            <span>Money-back guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-violet-400" />
            <span>24/7 support</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            asChild
          >
            <a href="/contact">
              <Zap className="mr-2 h-5 w-5" />
              Start Your Project Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white px-8 py-4 text-lg font-semibold"
            asChild
          >
            <a href={`mailto:${personalInfo.emailPrimary}?subject=Free Consultation&body=Hi Ahmed, I'd like to schedule a free consultation to discuss my project:%0D%0A%0D%0A`}>
              <Mail className="mr-2 h-5 w-5" />
              Get Free Consultation
            </a>
          </Button>
        </div>

        {/* Urgency message */}
        <p className="text-sm text-amber-400 font-medium mt-6">
          ⚡ Limited spots available this month • Book your consultation now
        </p>
      </div>
    </section>
  );
}
