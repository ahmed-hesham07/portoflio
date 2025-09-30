'use client';

import { useState } from 'react';
import { Search, Filter, ArrowRight, Zap } from 'lucide-react';
import { getProjects } from '@/utils/data';
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
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Social proof and credibility data
  const socialProof = {
    projectsCompleted: 25,
    clientsSatisfied: 18,
    yearsExperience: 3,
    successRate: '98%',
    responseTime: '2-4 hours'
  };

  const heroStats = [
    { label: 'Projects delivered', value: `${socialProof.projectsCompleted}+` },
    { label: 'Happy clients', value: `${socialProof.clientsSatisfied}+` },
    { label: 'Years of experience', value: `${socialProof.yearsExperience}+` },
    { label: 'Success rate', value: socialProof.successRate },
  ];

  // Get unique years and technologies
  const years = [...new Set(projects.map(p => p.year))].sort((a, b) => b - a);
  const allTech = [...new Set(projects.flatMap(p => p.tech))].sort();

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = !selectedYear || project.year === selectedYear;
    const matchesTech = !selectedTech || project.tech.includes(selectedTech);
    
    return matchesSearch && matchesYear && matchesTech;
  });

  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Real-world software and data products"
        description="A curated selection of engineering, analytics, and product builds shipped for clients across energy, operations, and SaaS. Each project balances technical depth with thoughtful user experience."
        stats={heroStats}
        actions={[
          <Button key="primary" size="lg" asChild>
            <a href="/contact">
              Start your project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>,
          <Button key="secondary" size="lg" variant="outline" asChild>
            <a href="/contact">
              <Zap className="mr-2 h-5 w-5" />
              Get a consultation
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
                  Search by name, year, or technology stack.
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedYear(null);
                  setSelectedTech(null);
                }}
              >
                Reset filters
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-[1fr_auto] lg:grid-cols-[2fr_auto] lg:items-start">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by project name or description"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-10 pr-4 text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-sky-400 dark:focus:ring-sky-400/30"
                />
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                <Filter className="h-4 w-4" />
                <span>Refine by year and technology</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedYear(null)}
                  className={cn(
                    'rounded-full border border-slate-200 px-3 py-1 text-sm font-medium text-slate-600 transition hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-sky-500 dark:hover:text-sky-400',
                    selectedYear === null && 'border-sky-500 bg-sky-500 text-white dark:text-white',
                  )}
                >
                  All years
                </button>
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={cn(
                      'rounded-full border border-slate-200 px-3 py-1 text-sm font-medium text-slate-600 transition hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-sky-500 dark:hover:text-sky-400',
                      selectedYear === year && 'border-sky-500 bg-sky-500 text-white dark:text-white',
                    )}
                  >
                    {year}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTech(null)}
                  className={cn(
                    'rounded-full border border-slate-200 px-3 py-1 text-sm font-medium text-slate-600 transition hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-sky-500 dark:hover:text-sky-400',
                    selectedTech === null && 'border-sky-500 bg-sky-500 text-white dark:text-white',
                  )}
                >
                  All tech
                </button>
                {allTech.slice(0, 8).map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(tech)}
                    className={cn(
                      'rounded-full border border-slate-200 px-3 py-1 text-sm font-medium text-slate-600 transition hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-sky-500 dark:hover:text-sky-400',
                      selectedTech === tech && 'border-sky-500 bg-sky-500 text-white dark:text-white',
                    )}
                  >
                    {tech}
                  </button>
                ))}
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