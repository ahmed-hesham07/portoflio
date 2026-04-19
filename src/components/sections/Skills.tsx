'use client';

import { m, useReducedMotion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import SkillTag from '@/components/ui/SkillTag';
import { skillGroups } from '@/lib/content';

const EASE = [0, 0, 0.2, 1] as const;
const VP = { once: true, margin: '-40px' };

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills" className="py-24 md:py-32 bg-surface" aria-label="Skills">
      <div className="mx-auto max-w-[1100px] px-6">
        {/* Header */}
        <m.div
          initial={prefersReducedMotion ? false : ({ opacity: 0, y: 24 } as const)}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          viewport={VP}
          className="mb-14 flex flex-col gap-4"
        >
          <SectionLabel>Skills</SectionLabel>
          <h2 className="font-display text-3xl font-semibold text-primary md:text-[36px]">
            What I build with.
          </h2>
          <p className="max-w-lg font-body text-base text-secondary leading-relaxed">
            A working toolkit shaped by real projects — not a list of tutorials completed.
          </p>
        </m.div>

        {/* Skill rows */}
        <div className="flex flex-col gap-8">
          {skillGroups.map((group, groupIndex) => (
            <m.div
              key={group.category}
              initial={prefersReducedMotion ? false : ({ opacity: 0, y: 16 } as const)}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE, delay: groupIndex * 0.08 }}
              viewport={VP}
              className="flex flex-col gap-3 sm:flex-row sm:gap-8"
            >
              {/* Category label */}
              <div className="sm:w-52 sm:shrink-0 sm:pt-1">
                <p className="font-body text-sm font-semibold text-primary">{group.category}</p>
              </div>

              {/* Tags — each animates independently, no variant propagation */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <m.div
                    key={skill}
                    initial={prefersReducedMotion ? false : ({ opacity: 0, scale: 0.9 } as const)}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.18,
                      ease: EASE,
                      delay: groupIndex * 0.06 + skillIndex * 0.03,
                    }}
                    viewport={VP}
                  >
                    <SkillTag>{skill}</SkillTag>
                  </m.div>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
