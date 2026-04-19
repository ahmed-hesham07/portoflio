'use client';

import { m, useReducedMotion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/lib/content';

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32" aria-label="Projects">
      <div className="mx-auto max-w-[1100px] px-6">
        <m.div
          initial={prefersReducedMotion ? false : ({ opacity: 0, y: 24 } as const)}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] as const }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col gap-4"
        >
          <SectionLabel>Projects</SectionLabel>
          <h2 className="font-display text-3xl font-semibold text-primary md:text-[36px]">
            Things I&apos;ve built.
          </h2>
          <p className="max-w-lg font-body text-base text-secondary leading-relaxed">
            Every project starts with a real problem. Business impact first, then the tech.
          </p>
        </m.div>

        {featured && (
          <div className="mb-8">
            <ProjectCard project={featured} featured index={0} />
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
