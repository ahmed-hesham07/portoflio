'use client';

import { useState } from 'react';
import { Search, Filter, ArrowRight, Zap } from 'lucide-react';
import { getProjects, getPortfolioData } from '@/utils/data';
import { ProjectCard } from '@/components/ProjectCard';
import { cn } from '@/utils/cn';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PageIntro } from '@/components/PageIntro';
import { Button } from '@/components/ui/Button';

export default function ProjectsPage() {
  const projects = getProjects();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const portfolioData = getPortfolioData();
  const stats = portfolioData.stats || {};

  const heroStats = [
    { label: 'NDT/FFS Projects', value: stats.projectsCompleted || '25+' },
    { label: 'Oil & Gas/Petrochem Clients', value: stats.clients || '18+' },
    { label: 'Years Dedicated to NDT/FFS', value: stats.yearsExperience || '5+' },
    { label: 'Code Compliant Solutions', value: '100%' },
  ];

  // Get unique filter values
  const years = [...new Set(projects.map(p => p.year))].sort((a, b) => b - a);
  const projectTypes = [...new Set(projects.flatMap(p => p.projectType || []))].sort();
  const industries = [...new Set(projects.flatMap(p => p.industry || []))].sort();

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (project.tagline && project.tagline.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesYear = !selectedYear || project.year === selectedYear;
    const matchesType = !selectedType || (project.projectType && project.projectType.includes(selectedType));
    const matchesIndustry = !selectedIndustry || (project.industry && project.industry.includes(selectedIndustry));
    const matchesStatus = !selectedStatus || project.status === selectedStatus;
    
    return matchesSearch && matchesYear && matchesType && matchesIndustry && matchesStatus;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedYear(null);
    setSelectedType(null);
    setSelectedIndustry(null);
    setSelectedStatus(null);
  };

  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="NDT & FFS Digital Transformation Portfolio"
        description="Explore our portfolio of NDT and FFS digital transformation projects. Each solution is custom-built to meet specific client requirements while maintaining the highest standards of code compliance and professional quality."
        stats={heroStats}
        actions={[
          <Button key="primary" size="lg" className="bg-blue-900 dark:bg-blue-600 text-white hover:bg-blue-800 dark:hover:bg-blue-500" asChild>
            <a href="/contact">
              Request Demo Reports
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>,
          <Button key="secondary" size="lg" variant="outline" asChild>
            <a href="/contact">
              <Zap className="mr-2 h-5 w-5" />
              Free Consultation
            </a>
          </Button>,
        ]}
      />

      <section className="bg-slate-50 py-16 dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Filter projects</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Search by project name, or filter by year, project type, industry, or status.
                </p>
              </div>
              <Button variant="outline" size="sm" onClick={resetFilters}>
                Reset filters
              </Button>
            </div>

            <div className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by project name or description"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-10 pr-4 text-slate-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-teal-400 dark:focus:ring-teal-400/30"
                />
              </div>

              {/* Year Filter */}
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">Year</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedYear(null)}
                    className={cn(
                      'rounded-full border px-3 py-1 text-sm font-medium transition',
                      selectedYear === null
                        ? 'border-blue-900 bg-blue-900 text-white dark:border-blue-600 dark:bg-blue-600'
                        : 'border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300'
                    )}
                  >
                    All
                  </button>
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={cn(
                        'rounded-full border px-3 py-1 text-sm font-medium transition',
                        selectedYear === year
                          ? 'border-blue-900 bg-blue-900 text-white dark:border-blue-600 dark:bg-blue-600'
                          : 'border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300'
                      )}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Type Filter */}
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">Project Type</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedType(null)}
                    className={cn(
                      'rounded-full border px-3 py-1 text-sm font-medium transition',
                      selectedType === null
                        ? 'border-teal-600 bg-teal-600 text-white dark:border-teal-500 dark:bg-teal-500'
                        : 'border-slate-200 text-slate-600 hover:border-teal-400 hover:text-teal-600 dark:border-slate-700 dark:text-slate-300'
                    )}
                  >
                    All
                  </button>
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={cn(
                        'rounded-full border px-3 py-1 text-sm font-medium transition',
                        selectedType === type
                          ? 'border-teal-600 bg-teal-600 text-white dark:border-teal-500 dark:bg-teal-500'
                          : 'border-slate-200 text-slate-600 hover:border-teal-400 hover:text-teal-600 dark:border-slate-700 dark:text-slate-300'
                      )}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Industry Filter */}
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">Industry</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedIndustry(null)}
                    className={cn(
                      'rounded-full border px-3 py-1 text-sm font-medium transition',
                      selectedIndustry === null
                        ? 'border-orange-600 bg-orange-600 text-white dark:border-orange-500 dark:bg-orange-500'
                        : 'border-slate-200 text-slate-600 hover:border-orange-400 hover:text-orange-600 dark:border-slate-700 dark:text-slate-300'
                    )}
                  >
                    All
                  </button>
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      onClick={() => setSelectedIndustry(industry)}
                      className={cn(
                        'rounded-full border px-3 py-1 text-sm font-medium transition',
                        selectedIndustry === industry
                          ? 'border-orange-600 bg-orange-600 text-white dark:border-orange-500 dark:bg-orange-500'
                          : 'border-slate-200 text-slate-600 hover:border-orange-400 hover:text-orange-600 dark:border-slate-700 dark:text-slate-300'
                      )}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Filter */}
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">Status</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedStatus(null)}
                    className={cn(
                      'rounded-full border px-3 py-1 text-sm font-medium transition',
                      selectedStatus === null
                        ? 'border-slate-600 bg-slate-600 text-white dark:border-slate-500 dark:bg-slate-500'
                        : 'border-slate-200 text-slate-600 hover:border-slate-400 dark:border-slate-700 dark:text-slate-300'
                    )}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setSelectedStatus('completed')}
                    className={cn(
                      'rounded-full border px-3 py-1 text-sm font-medium transition',
                      selectedStatus === 'completed'
                        ? 'border-green-600 bg-green-600 text-white'
                        : 'border-slate-200 text-slate-600 hover:border-green-400 hover:text-green-600 dark:border-slate-700 dark:text-slate-300'
                    )}
                  >
                    Completed
                  </button>
                  <button
                    onClick={() => setSelectedStatus('in-progress')}
                    className={cn(
                      'rounded-full border px-3 py-1 text-sm font-medium transition',
                      selectedStatus === 'in-progress'
                        ? 'border-blue-600 bg-blue-600 text-white'
                        : 'border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300'
                    )}
                  >
                    In Progress
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 text-center text-sm text-slate-600 dark:text-slate-400">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg text-slate-500 dark:text-slate-400">
                No projects matched your filters. Try adjusting the inputs above.
              </p>
            </div>
          )}
        </div>
      </section>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
