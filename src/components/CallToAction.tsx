import { Mail, ArrowRight, FileText, MessageCircle, Download } from 'lucide-react';
import { Button } from './ui/Button';
import { getPersonalInfo } from '@/utils/data';
import Link from 'next/link';

export function CallToAction() {
  const personalInfo = getPersonalInfo();

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Transform Your Inspection Operations?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Take the first step toward digitalized operations. No sales pressure &mdash; just a straightforward conversation about your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all hover:-translate-y-0.5 duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 mb-4">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              Request Demo Reports
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              See your exact report format automated with sample data. 3-5 sample reports relevant to your NDT methods.
            </p>
            <Button className="w-full bg-blue-900 dark:bg-blue-600 text-white hover:bg-blue-800 dark:hover:bg-blue-500" asChild>
              <a href={`mailto:${personalInfo.emailPrimary}?subject=Demo Report Request`}>
                Request Demo
              </a>
            </Button>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-800 hover:shadow-lg transition-all hover:-translate-y-0.5 duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 mb-4">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              Free 30-Min Consultation
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Discuss your specific requirements, pain points, and see potential solutions. Via WhatsApp call or Zoom.
            </p>
            <Button variant="outline" className="w-full border-teal-300 dark:border-teal-700 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/30" asChild>
              <a href="https://wa.me/201284986274" target="_blank" rel="noopener noreferrer">
                Book Consultation
              </a>
            </Button>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all hover:-translate-y-0.5 duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 mb-4">
              <Download className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              Download Case Study
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              See how we digitalized FFS assessments for Vessel Guard. Includes technical details and ROI analysis.
            </p>
            <Button variant="outline" className="w-full" asChild>
              <a href="/Ahmed_Hesham_CV.pdf" target="_blank" rel="noopener noreferrer">
                Download PDF
              </a>
            </Button>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
            Email: <a href={`mailto:${personalInfo.emailPrimary}`} className="text-blue-700 dark:text-blue-400 hover:underline">{personalInfo.emailPrimary}</a> | WhatsApp: <a href="https://wa.me/201284986274" className="text-teal-700 dark:text-teal-400 hover:underline">{personalInfo.phone || '+20 128 498 6274'}</a> (Messages only)
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500">
            Response Time: {personalInfo.responseTime || 'Within 2-4 hours'}
          </p>
        </div>
      </div>
    </section>
  );
}
