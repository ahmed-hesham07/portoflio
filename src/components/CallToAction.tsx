import { Mail, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { getPersonalInfo } from '@/utils/data';

export function CallToAction() {
  const personalInfo = getPersonalInfo();

  return (
    <section className="py-16 bg-gradient-to-r from-sky-500 to-violet-400">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Open to Freelance & Consulting
        </h2>
        <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
          Ready to build intelligent engineering solutions together? Let's discuss your next project.
        </p>
        
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button 
            size="lg" 
            className="bg-white text-sky-500 hover:bg-slate-50 [&_a]:text-sky-500 hover:[&_a]:text-sky-600"
            asChild
          >
            <a href={`mailto:${personalInfo.emailContact}`}>
              <Mail className="mr-2 h-4 w-4" />
              Start a Project
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-sky-500 [&_a]:text-white hover:[&_a]:text-sky-500"
            asChild
          >
            <a href="#contact">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
