'use client';

import { m, useReducedMotion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/content';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  index?: number;
}

export default function ProjectCard({ project, featured = false, index = 0 }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <m.article
      initial={prefersReducedMotion ? false : ({ opacity: 0, y: 24 } as const)}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] as const, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={prefersReducedMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
      className={cn(
        'group relative flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden',
        featured && 'md:flex-row md:p-8 md:gap-8'
      )}
    >
      {/* Accent bar */}
      <div
        className="absolute top-0 left-0 h-1 w-full rounded-t-2xl transition-all duration-300 group-hover:h-1.5"
        style={{ backgroundColor: project.color }}
      />

      {/* Content */}
      <div className={cn('flex flex-col gap-4', featured && 'md:flex-1')}>
        <span
          className="w-fit rounded-full border px-3 py-1 text-xs font-medium tracking-wide"
          style={{
            backgroundColor: `${project.color}15`,
            borderColor: `${project.color}40`,
            color: project.color,
          }}
        >
          {project.badge}
        </span>

        <h3 className="font-body text-xl font-semibold text-primary">{project.name}</h3>

        <p className="font-body text-base font-medium text-primary leading-relaxed">
          {project.businessImpact}
        </p>

        {featured && (
          <p className="font-body text-sm text-secondary leading-relaxed">{project.description}</p>
        )}

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.stack.slice(0, featured ? project.stack.length : 5).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
          {!featured && project.stack.length > 5 && (
            <span className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-muted">
              +{project.stack.length - 5}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 pt-2">
          <Link
            href={`/projects/${project.slug}`}
            className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-blue-700 transition-colors duration-200"
          >
            View Case Study
            <ArrowRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} GitHub repository`}
              className="text-muted hover:text-primary transition-colors duration-200"
            >
              <Github size={16} />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo`}
              className="text-muted hover:text-primary transition-colors duration-200"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Featured visual */}
      {featured && (
        <div className="md:w-72 md:shrink-0 mt-6 md:mt-0">
          <div
            className="h-48 md:h-full min-h-[200px] rounded-xl flex items-center justify-center relative overflow-hidden"
            style={{ backgroundColor: `${project.color}08` }}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.name} logo`}
                fill
                className="object-contain p-6"
                sizes="(max-width: 768px) 100vw, 288px"
              />
            ) : (
              <>
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(${project.color}40 1px, transparent 1px), linear-gradient(90deg, ${project.color}40 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                  }}
                />
                <div className="relative z-10 flex flex-col items-center gap-2 text-center p-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-bold font-display"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.name.charAt(0)}
                  </div>
                  <p className="text-xs font-medium font-body" style={{ color: project.color }}>
                    {project.badge}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </m.article>
  );
}
