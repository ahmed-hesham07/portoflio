'use client';

import { getPortfolioData } from '@/utils/data';

export function BusinessImpact() {
  const portfolioData = getPortfolioData();
  const stats = portfolioData.stats || {};

  const metrics = [
    {
      value: stats.timeSavings || '80-90%',
      label: 'Time Reduction',
      description: 'Cut report generation from hours to minutes per inspection',
      color: 'text-teal-600 dark:text-teal-400'
    },
    {
      value: stats.productivityIncrease || '3-5x',
      label: 'Productivity Increase',
      description: 'Handle more projects with same team size',
      color: 'text-blue-700 dark:text-blue-400'
    },
    {
      value: stats.typicalImplementation || '4-8 weeks',
      label: 'Typical Implementation',
      description: 'From kickoff to full deployment with training',
      color: 'text-orange-600 dark:text-orange-400'
    }
  ];

  return (
    <section className="py-24 bg-blue-950 dark:bg-slate-950" id="impact">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Measurable Results That Impact Your Bottom Line
          </h2>
          <p className="text-lg text-blue-200 dark:text-slate-300 max-w-2xl mx-auto">
            Every solution is designed to deliver quantifiable improvements to your operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-8 rounded-xl text-center border border-slate-200 dark:border-slate-700 shadow-lg"
            >
              <div className={`text-5xl font-bold ${metric.color} mb-4`}>
                {metric.value}
              </div>
              <div className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {metric.label}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-blue-900/50 dark:bg-slate-800 p-8 rounded-xl border border-blue-800 dark:border-slate-700">
          <p className="text-lg italic text-blue-100 dark:text-slate-200 mb-4">
            &quot;After implementing Ahmed&apos;s digital platform, we reduced our report turnaround from 3 days to same-day delivery. Our clients are thrilled and we&apos;ve won 2 new major contracts.&quot;
          </p>
          <p className="text-sm text-blue-300 dark:text-slate-400">
            &mdash; [Client Name], [Inspection Company]
          </p>
        </div>
      </div>
    </section>
  );
}
