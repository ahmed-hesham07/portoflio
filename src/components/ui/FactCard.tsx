'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface FactCardProps {
  emoji: string;
  title: string;
  subtitle: string;
  index?: number;
}

export default function FactCard({ emoji, title, subtitle, index = 0 }: FactCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0, 0, 0.2, 1], delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={prefersReducedMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
      className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <span className="text-2xl" role="img" aria-hidden="true">
        {emoji}
      </span>
      <p className="font-body text-sm font-semibold text-primary leading-snug">{title}</p>
      <p className="font-body text-xs text-muted">{subtitle}</p>
    </motion.div>
  );
}
