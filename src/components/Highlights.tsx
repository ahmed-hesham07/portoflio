import { Code, Briefcase, Trophy } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    value: '5+',
    label: 'Years Coding',
    description: 'Building software solutions'
  },
  {
    icon: Briefcase,
    value: '10+',
    label: 'Projects Shipped',
    description: 'From concept to deployment'
  },
  {
    icon: Trophy,
    value: '3',
    label: 'Key Domains',
    description: 'AI/ML, Engineering, Software'
  }
];

export function Highlights() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950" id="highlights">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {highlight.value}
                </div>
                <div className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {highlight.label}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {highlight.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
