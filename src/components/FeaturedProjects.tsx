import Link from 'next/link';
import { ArrowRight, Smartphone, Database, Brain, FileText, Link2, Settings } from 'lucide-react';
import { Button } from './ui/Button';

const workflowSteps = [
  {
    title: 'Field Inspection',
    details: ['Tablet/Mobile', 'Desktop Entry', 'Equipment Sync'],
    color: 'bg-blue-900 dark:bg-blue-800',
  },
  {
    title: 'Data Management',
    details: ['Centralized Database', 'Historical Tracking', 'Team Collaboration'],
    color: 'bg-blue-800 dark:bg-blue-700',
  },
  {
    title: 'Intelligent Processing',
    details: ['Auto-calculations', 'Code Compliance', 'Trend Analysis'],
    color: 'bg-teal-700 dark:bg-teal-700',
  },
  {
    title: 'Professional Output',
    details: ['PDF/Word/Excel', 'Custom Templates', 'Client Portals'],
    color: 'bg-teal-600 dark:bg-teal-600',
  },
];

const features = [
  {
    icon: Smartphone,
    title: 'Flexible Data Collection',
    description: 'Desktop, web, tablet, or mobile input. Import from Excel/CSV. Equipment integration (UT gauges, etc.)',
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
  },
  {
    icon: Brain,
    title: 'Intelligent Processing',
    description: 'Automatic calculations (corrosion rate, remaining life, MAWP, RSF, etc.). Code compliance verification.',
    color: 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400'
  },
  {
    icon: Database,
    title: 'Data Management & Analytics',
    description: 'Centralized inspection database. Historical trending and CML tracking. Multi-project management.',
    color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400'
  },
  {
    icon: FileText,
    title: 'Professional Report Generation',
    description: 'Your exact templates and formats. Company branding and logos. Photo/sketch integration.',
    color: 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400'
  },
  {
    icon: Link2,
    title: 'Integration Capabilities',
    description: 'API connectivity to existing systems. Database integration (SQL, Oracle). Cloud or on-premise deployment.',
    color: 'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400'
  },
  {
    icon: Settings,
    title: 'Customization & Flexibility',
    description: 'Any NDT method, any code/standard. Multi-language support. Tailored to your workflow.',
    color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
  }
];

export function FeaturedProjects() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950" id="solutions">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Complete Digital Transformation for NDT &amp; FFS
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Not just software &mdash; a complete operational upgrade from field to final report
          </p>
        </div>

        {/* Workflow Visualization */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {workflowSteps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className={`${step.color} text-white p-5 rounded-xl text-center`}>
                  <div className="text-sm font-bold mb-2">{step.title}</div>
                  <div className="space-y-1">
                    {step.details.map((detail) => (
                      <div key={detail} className="text-xs opacity-90">{detail}</div>
                    ))}
                  </div>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-6 h-6 items-center justify-center text-slate-400">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all hover:-translate-y-0.5 duration-300"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-900 dark:bg-blue-600 text-white hover:bg-blue-800 dark:hover:bg-blue-500" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
