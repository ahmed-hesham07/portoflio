import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getProjects } from '@/utils/data';
import { ProjectCard } from './ProjectCard';
import { Button } from './ui/Button';

export function FeaturedProjects() {
  const projects = getProjects();
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-16 bg-slate-900" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Building intelligent engineering software and data-driven solutions that deliver real business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
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
