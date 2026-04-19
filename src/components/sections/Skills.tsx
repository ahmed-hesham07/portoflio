'use client';

import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import SkillTag from '@/components/ui/SkillTag';
import { skillGroups } from '@/lib/content';

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-surface"
      aria-label="Skills"
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
          <SectionLabel>Skills</SectionLabel>
          <h2 className="font-display text-3xl font-semibold text-primary md:text-[36px]">
            What I build with.
          </h2>
          <p className="max-w-lg font-body text-base text-secondary leading-relaxed">
            A working toolkit shaped by real projects — not a list of tutorials completed.
          </p>
        </motion.div>

        {/* Skill rows */}
        <div className="flex flex-col gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0, 0, 0.2, 1],
                delay: groupIndex * 0.1,
              }}
              viewport={{ once: true }}
              className="flex flex-col gap-3 sm:flex-row sm:gap-8"
            >
              {/* Category label */}
              <div className="sm:w-52 sm:shrink-0 sm:pt-0.5">
                <p className="font-body text-sm font-semibold text-primary">{group.category}</p>
              </div>

              {/* Tags */}
              <motion.div
                className="flex flex-wrap gap-2"
                initial={prefersReducedMotion ? false : 'hidden'}
                whileInView="visible"
                viewport={{ once: true }}
                variants={
                  prefersReducedMotion
                    ? {}
                    : {
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.04,
                            delayChildren: groupIndex * 0.1 + 0.1,
                          },
                        },
                      }
                }
              >
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={
                      prefersReducedMotion
                        ? {}
                        : {
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: {
                              opacity: 1,
                              scale: 1,
                              transition: { duration: 0.2 },
                            },
                          }
                    }
                  >
                    <SkillTag>{skill}</SkillTag>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
