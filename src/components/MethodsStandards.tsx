import { getPortfolioData } from '@/utils/data';
import { Badge } from './ui/Badge';

export function MethodsStandards() {
  const portfolioData = getPortfolioData();
  const ndtMethods = portfolioData.ndtMethods || [];
  const codesStandards = portfolioData.codesStandards || [];

  return (
    <section className="py-24 bg-white dark:bg-slate-950" id="methods">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Comprehensive Coverage of NDT Methods &amp; Standards
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Software solutions supporting every major inspection method and international code requirement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* NDT Methods */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              NDT Methods
            </h3>
            <div className="flex flex-wrap gap-3">
              {ndtMethods.map((method) => (
                <div
                  key={method.code}
                  className="group relative"
                >
                  <span className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-900 dark:bg-blue-800 text-white text-sm font-semibold hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors cursor-default">
                    {method.code}
                  </span>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    <div className="font-semibold">{method.name}</div>
                    <div className="text-slate-300">{method.description}</div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900 dark:border-t-slate-700" />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
              Hover over any method to see details. All conventional and advanced NDT methods supported.
            </p>
          </div>

          {/* Codes & Standards */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              Codes &amp; Standards
            </h3>
            <div className="space-y-4">
              {codesStandards.map((category) => (
                <div key={category.category}>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.standards.map((standard) => (
                      <span
                        key={standard.code}
                        className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800"
                      >
                        {standard.code}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
