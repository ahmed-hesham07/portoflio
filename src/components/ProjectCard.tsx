import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';
import { Badge } from './ui/Badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const statusConfig = {
  'completed': {
    label: 'Completed',
    className: 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800'
  },
  'in-progress': {
    label: 'In Progress',
    className: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800'
  }
};

export function ProjectCard({ project }: ProjectCardProps) {
  const status = statusConfig[project.status];
  
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Status Badge Overlay */}
        <div className="absolute top-3 right-3">
          <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${status.className}`}>
            {status.label}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 rounded-lg bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-sm hover:bg-white/30"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            )}
            {(project.links.demo || project.links.live) && (
              <a
                href={project.links.demo || project.links.live || ''}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 rounded-lg bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-sm hover:bg-white/30"
              >
                <ExternalLink className="h-4 w-4" />
                {project.links.demo ? 'Demo' : 'Live'}
              </a>
            )}
          </div>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
            <Link href={`/projects/${project.slug}`}>
              {project.name}
            </Link>
          </CardTitle>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {project.year}
          </span>
        </div>
        <CardDescription className="line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="tech" size="sm">
                {tech}
              </Badge>
            ))}
            {project.tech.length > 3 && (
              <Badge variant="outline" size="sm">
                +{project.tech.length - 3} more
              </Badge>
            )}
          </div>
          
          <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
            {project.impact}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
