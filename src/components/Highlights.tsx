import { Clock, AlertTriangle, TrendingDown, Users } from 'lucide-react';

const painPoints = [
  {
    icon: Clock,
    stat: '40-60%',
    title: 'Inspector Time on Paperwork',
    description: 'Inspectors spend more time on paperwork than actual inspection work',
    color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
  },
  {
    icon: AlertTriangle,
    stat: 'Project Delays',
    title: 'Delayed Deliverables',
    description: 'Reports delivered days or weeks late to clients',
    color: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
  },
  {
    icon: TrendingDown,
    stat: 'Human Errors',
    title: 'Calculation Mistakes',
    description: 'Transcription errors and calculation mistakes in manual reports',
    color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400'
  },
  {
    icon: Users,
    stat: "Can't Scale",
    title: 'Scaling Challenges',
    description: 'More work = more admin staff = higher costs with no efficiency gains',
    color: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400'
  }
];

export function Highlights() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900" id="highlights">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Is Manual Reporting Holding Your Business Back?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            The inspection industry&apos;s biggest bottleneck isn&apos;t technology - it&apos;s outdated workflows
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${point.color} mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {point.stat}
                </div>
                <div className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {point.title}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {point.description}
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">
            Your competitors are digitalizing. Are you being left behind?
          </p>
        </div>
      </div>
    </section>
  );
}
