'use client';

import { cn } from '@/lib/utils';

interface SkillTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function SkillTag({ children, className }: SkillTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-secondary transition-all duration-200 hover:border-accent hover:text-accent cursor-default',
        className
      )}
    >
      {children}
    </span>
  );
}
