'use client';

import { m, useReducedMotion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import { experience, education } from '@/lib/content';
import { GraduationCap } from 'lucide-react';

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();
  const vp = { once: true };

  return (
    <section id="experience" className="py-24 md:py-32 bg-surface" aria-label="Experience and Education">
      <div className="mx-auto max-w-[1100px] px-6">
        <m.div
          initial={prefersReducedMotion ? false : ({ opacity: 0, y: 24 } as const)}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] as const }}
          viewport={vp}
          className="mb-14 flex flex-col gap-4"
        >
          <SectionLabel>Experience</SectionLabel>
          <h2 className="font-display text-3xl font-semibold text-primary md:text-[36px]">
            Where I&apos;ve worked.
          </h2>
        </m.div>

        <div className="relative flex flex-col gap-0">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border hidden sm:block" aria-hidden="true" />

          {experience.map((item, i) => (
            <m.div
              key={`${item.company}-${i}`}
              initial={prefersReducedMotion ? false : ({ opacity: 0, x: -16 } as const)}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] as const, delay: i * 0.1 }}
              viewport={vp}
              className="relative flex flex-col gap-3 pb-12 sm:pl-12"
            >
              <div
                className="absolute left-3 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-accent bg-background hidden sm:block"
                aria-hidden="true"
              />

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

              <ul className="flex flex-col gap-2" role="list">
                {item.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-3 font-body text-sm text-secondary leading-relaxed">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </m.div>
          ))}

          <m.div
            initial={prefersReducedMotion ? false : ({ opacity: 0, x: -16 } as const)}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] as const, delay: experience.length * 0.1 }}
            viewport={vp}
            className="relative flex flex-col gap-3 sm:pl-12"
          >
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
          </m.div>
        </div>
      </div>
    </section>
  );
}
