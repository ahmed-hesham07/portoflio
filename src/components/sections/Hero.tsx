'use client';

import { useState, useEffect } from 'react';
import { m, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';
import { personalInfo } from '@/lib/content';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const skip = prefersReducedMotion;
  const fadeIn = (delay = 0) => ({
    initial: skip ? false : ({ opacity: 0 } as const),
    animate: { opacity: 1 } as const,
    transition: { duration: 0.5, delay },
  });
  const slideUp = (delay = 0) => ({
    initial: skip ? false : ({ opacity: 0, y: 16 } as const),
    animate: { opacity: 1, y: 0 } as const,
    transition: { duration: 0.5, delay },
  });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden dot-grid"
      aria-label="Hero"
    >
      <m.div
        {...fadeIn()}
        transition={{ duration: 0.3 }}
        className="relative z-10 flex flex-col items-center gap-6 px-6 text-center"
      >
        {/* Availability badge */}
        <m.div
          {...slideUp(0.1)}
          className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-2 text-xs font-medium text-accent"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for work · Remote
        </m.div>

        {/* Name */}
        <m.h1
          {...slideUp(0.2)}
          className="font-autography text-[56px] leading-none text-primary sm:text-7xl md:text-[96px]"
        >
          Ahmed Seddik
        </m.h1>

        {/* Animated role */}
        <m.div
          {...slideUp(0.3)}
          className="h-8 overflow-hidden"
          aria-live="polite"
          aria-label="Current role"
        >
          <AnimatePresence mode="wait">
            <m.p
              key={roleIndex}
              initial={skip ? false : ({ opacity: 0, y: 12 } as const)}
              animate={{ opacity: 1, y: 0 }}
              exit={skip ? undefined : ({ opacity: 0, y: -12 } as const)}
              transition={{ duration: 0.3 }}
              className="font-body text-lg font-medium text-accent md:text-xl"
            >
              {personalInfo.roles[roleIndex]}
            </m.p>
          </AnimatePresence>
        </m.div>

        {/* Tagline */}
        <m.p
          {...slideUp(0.4)}
          className="max-w-lg font-body text-base text-secondary md:text-lg leading-relaxed"
        >
          {personalInfo.tagline}
        </m.p>

        {/* Sub-headline */}
        <m.p
          {...slideUp(0.45)}
          className="max-w-xl font-body text-sm text-muted leading-relaxed"
        >
          {personalInfo.heroShort}
        </m.p>

        {/* CTAs */}
        <m.div
          {...slideUp(0.55)}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 active:scale-[0.98] transition-all duration-200"
          >
            See My Work
          </a>
          <a
            href={personalInfo.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-transparent px-6 py-3 text-sm font-medium text-secondary hover:border-accent hover:text-accent active:scale-[0.98] transition-all duration-200"
          >
            <Download size={15} />
            Download CV
          </a>
        </m.div>

        {/* Social links */}
        <m.div
          {...slideUp(0.65)}
          className="flex items-center gap-4"
          aria-label="Social links"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-muted hover:text-accent transition-colors duration-200"
          >
            <Github size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted hover:text-accent transition-colors duration-200"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Send email"
            className="text-muted hover:text-accent transition-colors duration-200"
          >
            <Mail size={20} />
          </a>
        </m.div>
      </m.div>

      {/* Scroll indicator */}
      <m.div
        {...fadeIn(1)}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <ChevronDown
          size={20}
          className="text-muted animate-bounce"
          style={{ animationDuration: '2s' }}
        />
      </m.div>
    </section>
  );
}
