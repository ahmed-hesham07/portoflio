import { Mail, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { getPersonalInfo } from '@/utils/data';

export function CallToAction() {
  const personalInfo = getPersonalInfo();

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Let&apos;s Work Together
        </h2>
        
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          Have a project in mind? I&apos;d love to hear about it and explore how we can bring your ideas to life.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100"
            asChild
          >
            <a href="/contact">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            asChild
          >
            <a href={`mailto:${personalInfo.emailPrimary}`}>
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
