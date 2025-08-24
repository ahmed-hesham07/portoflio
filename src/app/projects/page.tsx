'use client';

import { useState } from 'react';
import type { Metadata } from "next";
import { Search, Filter } from 'lucide-react';
import { getProjects } from '@/utils/data';
import { ProjectCard } from '@/components/ProjectCard';

export default function ProjectsPage() {
  const projects = getProjects();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

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
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            All Projects
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A collection of engineering software, data science tools, and modern web applications built with cutting-edge technologies.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-slate-500" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Filter by:</span>
            </div>
            
            {/* Year Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedYear(null)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedYear === null
                    ? 'bg-sky-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                All Years
              </button>
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedYear === year
                      ? 'bg-sky-500 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* Tech Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTech(null)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedTech === null
                    ? 'bg-violet-400 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                All Tech
              </button>
              {allTech.slice(0, 8).map(tech => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedTech === tech
                      ? 'bg-violet-400 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-slate-600 dark:text-slate-400">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              No projects found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedYear(null);
                setSelectedTech(null);
              }}
              className="mt-4 text-sky-500 hover:text-sky-600 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}