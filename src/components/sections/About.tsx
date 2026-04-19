'use client';

import { m, useReducedMotion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import FactCard from '@/components/ui/FactCard';
import { aboutParagraphs, aboutStats, factCards } from '@/lib/content';

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  const vp = { once: true };
  const slide = (delay = 0) => ({
    initial: prefersReducedMotion ? false : ({ opacity: 0, y: 24 } as const),
    whileInView: { opacity: 1, y: 0 } as const,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const, delay },
    viewport: vp,
  });

  return (
    <section id="about" className="py-24 md:py-32" aria-label="About Ahmed Seddik">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 items-start">
          {/* Left: Text */}
          <div className="flex flex-col gap-8">
            <m.div {...slide(0)} className="flex flex-col gap-4">
              <SectionLabel>About</SectionLabel>
              <h2 className="font-display text-3xl font-semibold text-primary leading-tight md:text-[36px]">
                Building software that works in the real world.
              </h2>
            </m.div>

            <div className="flex flex-col gap-5">
              {aboutParagraphs.map((para, i) => (
                <m.p
                  key={i}
                  {...slide(0.1 + i * 0.1)}
                  className="font-body text-base text-secondary leading-[1.75]"
                >
                  {para}
                </m.p>
              ))}
            </div>

            <m.div
              {...slide(0.4)}
              className="flex flex-col gap-3 sm:flex-row sm:gap-6 pt-2"
            >
              {aboutStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5 border-l-2 border-accent pl-4">
                  <span className="font-body text-xl font-bold text-primary">{stat.value}</span>
                  <span className="font-body text-xs text-muted">{stat.label}</span>
                </div>
              ))}
            </m.div>
          </div>

          {/* Right: Fact cards 2×2 */}
          <div className="grid grid-cols-2 gap-4">
            {factCards.map((card, i) => (
              <FactCard
                key={card.title}
                emoji={card.emoji}
                title={card.title}
                subtitle={card.subtitle}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
