'use client';

import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import { experience, education } from '@/lib/content';
import { GraduationCap } from 'lucide-react';

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-surface"
      aria-label="Experience and Education"
    >
      <div className="mx-auto max-w-[1100px] px-6">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col gap-4"
        >
          <SectionLabel>Experience</SectionLabel>
          <h2 className="font-display text-3xl font-semibold text-primary md:text-[36px]">
            Where I&apos;ve worked.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-0">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border hidden sm:block" aria-hidden="true" />

          {experience.map((item, i) => (
            <motion.div
              key={`${item.company}-${i}`}
              initial={prefersReducedMotion ? false : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0, 0, 0.2, 1], delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col gap-3 pb-12 sm:pl-12"
            >
              {/* Dot */}
              <div
                className="absolute left-3 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-accent bg-background hidden sm:block"
                aria-hidden="true"
              />

              {/* Header */}
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-body text-lg font-semibold text-primary">{item.role}</h3>
                  <p className="font-body text-sm text-accent font-medium">
                    {item.company}
                    <span className="text-muted font-normal"> · {item.type}</span>
                  </p>
                </div>
                <span className="font-body text-xs text-muted whitespace-nowrap pt-1 shrink-0">
                  {item.period}
                </span>
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-2" role="list">
                {item.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 font-body text-sm text-secondary leading-relaxed"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Education */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0, 0, 0.2, 1], delay: experience.length * 0.1 }}
            viewport={{ once: true }}
            className="relative flex flex-col gap-3 sm:pl-12"
          >
            {/* Dot — graduation cap style */}
            <div
              className="absolute left-3 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-accent-warm bg-background hidden sm:block"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <GraduationCap size={16} className="text-accent-warm shrink-0" aria-hidden="true" />
                  <h3 className="font-body text-lg font-semibold text-primary">{education.degree}</h3>
                </div>
                <p className="font-body text-sm text-secondary leading-relaxed">{education.school}</p>
                <p className="font-body text-xs text-muted">{education.location}</p>
              </div>
              <span className="font-body text-xs text-muted whitespace-nowrap pt-1 shrink-0">
                {education.period}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
