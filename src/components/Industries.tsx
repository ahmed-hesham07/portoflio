import { getPortfolioData } from '@/utils/data';
import { Droplets, FlaskConical, Zap, Factory, Ship, Building2 } from 'lucide-react';

const industryIcons: Record<string, React.ElementType> = {
  'Oil & Gas': Droplets,
  'Petrochemical': FlaskConical,
  'Power Generation': Zap,
  'Manufacturing': Factory,
  'Marine': Ship,
  'Infrastructure': Building2,
};

export function Industries() {
  const portfolioData = getPortfolioData();
  const industries = portfolioData.industries || [];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900" id="industries">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Serving Critical Industries Worldwide
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Digital transformation solutions tailored to the unique requirements of each industry sector
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const Icon = industryIcons[industry.name] || Factory;
            return (
              <div
                key={industry.name}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-900/50 transition-colors">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  {industry.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {industry.sectors.map((sector) => (
                    <span
                      key={sector}
                      className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
