'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Project } from '@/lib/content';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const EASE = [0, 0, 0.2, 1] as const;

interface Props {
  project: Project;
  nextProject: Project;
}

export default function ProjectPageClient({ project, nextProject }: Props) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Back link */}
        <div className="mx-auto max-w-[1100px] px-6 pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-body text-sm text-muted hover:text-accent transition-colors duration-200 group"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            All Projects
          </Link>
        </div>

        {/* Header */}
        <motion.header
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mx-auto max-w-[1100px] px-6 py-12"
        >
          <span
            className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide mb-4"
            style={{
              backgroundColor: `${project.color}15`,
              borderColor: `${project.color}40`,
              color: project.color,
            }}
          >
            {project.badge}
          </span>

          <h1 className="font-display text-4xl font-bold text-primary mb-4 md:text-5xl">
            {project.name}
          </h1>

          <p className="max-w-2xl font-display text-xl text-secondary leading-relaxed md:text-2xl">
            {project.businessImpact}
          </p>
        </motion.header>

        {/* Accent bar */}
        <div className="h-1 w-full" style={{ backgroundColor: project.color }} aria-hidden="true" />

        {/* Main content */}
        <section className="py-16 bg-surface">
          <div className="mx-auto max-w-[1100px] px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {/* Left: main content */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
                className="lg:col-span-2 flex flex-col gap-10"
              >
                <div>
                  <h2 className="font-body text-lg font-semibold text-primary mb-3">Overview</h2>
                  <p className="font-body text-base text-secondary leading-[1.8]">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h2 className="font-body text-lg font-semibold text-primary mb-4">Key Features</h2>
                  <ul className="flex flex-col gap-3" role="list">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: project.color }}
                          aria-hidden="true"
                        />
                        <span className="font-body text-base text-secondary leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-body text-lg font-semibold text-primary mb-3">Architecture</h2>
                  <div className="rounded-xl border border-border bg-background px-5 py-4">
                    <p className="font-mono text-sm text-secondary leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>
                </div>

                <div
                  className="rounded-2xl border-l-4 bg-background px-6 py-5"
                  style={{ borderLeftColor: project.color }}
                >
                  <h2 className="font-body text-sm font-semibold tracking-wide uppercase text-muted mb-3">
                    What I Learned
                  </h2>
                  <p className="font-body text-base text-secondary leading-[1.8] italic">
                    &ldquo;{project.whatILearned}&rdquo;
                  </p>
                </div>
              </motion.div>

              {/* Right: sidebar */}
              <motion.aside
                initial={prefersReducedMotion ? false : { opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
                className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start"
              >
                <div className="rounded-2xl border border-border bg-background p-6">
                  <h2 className="font-body text-sm font-semibold tracking-wide uppercase text-muted mb-4">
                    Tech Stack
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-background p-6 flex flex-col gap-3">
                  <h2 className="font-body text-sm font-semibold tracking-wide uppercase text-muted mb-1">
                    Links
                  </h2>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-body text-sm font-medium text-accent hover:text-blue-700 transition-colors duration-200"
                    >
                      <Github size={15} />
                      View on GitHub
                      <ArrowRight
                        size={13}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-body text-sm font-medium text-accent hover:text-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                      <ArrowRight
                        size={13}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </a>
                  )}

                  {!project.github && !project.liveUrl && (
                    <p className="font-body text-xs text-muted">
                      No public links available for this project.
                    </p>
                  )}
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        {/* Next project */}
        <section className="py-16 border-t border-border">
          <div className="mx-auto max-w-[1100px] px-6 text-center">
            <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-muted mb-4">
              Next Project
            </p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group inline-flex flex-col items-center gap-2"
            >
              <h3 className="font-display text-2xl font-semibold text-primary group-hover:text-accent transition-colors duration-200 md:text-3xl">
                {nextProject.name}
              </h3>
              <span className="font-body text-sm text-muted text-center max-w-md">
                {nextProject.businessImpact}
              </span>
              <ArrowRight
                size={18}
                className="text-accent mt-1 transition-transform duration-200 group-hover:translate-x-2"
              />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
