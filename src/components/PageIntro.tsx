import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

interface Stat {
  label: string;
  value: string;
  description?: string;
}

interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description: string;
  align?: 'center' | 'left';
  actions?: ReactNode;
  stats?: Stat[];
  className?: string;
}

export function PageIntro({
  eyebrow,
  title,
  description,
  align = 'center',
  actions,
  stats,
  className,
}: PageIntroProps) {
  const textAlign = align === 'center' ? 'mx-auto text-center' : 'text-left';
  const contentWidth = align === 'center' ? 'max-w-3xl' : 'max-w-2xl';

  return (
    <section
      className={cn(
        'py-16 sm:py-20 bg-white dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-800/60',
        className,
      )}
    >
      <div className="container mx-auto px-6">
        <div className={cn('flex flex-col gap-6', align === 'center' ? 'items-center' : 'items-start')}>
          <div className={cn('flex flex-col gap-4', textAlign, contentWidth)}>
            {eyebrow && (
              <span className="inline-flex items-center justify-center rounded-full border border-slate-300/70 dark:border-slate-700/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">
                {eyebrow}
              </span>
            )}

            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              {title}
            </h1>

            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {description}
            </p>
          </div>

          {actions && (
            <div className={cn('flex flex-wrap gap-3', align === 'center' ? 'justify-center' : 'justify-start')}>
              {actions}
            </div>
          )}

          {stats && stats.length > 0 && (
            <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 text-center dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <div className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                  {stat.description && (
                    <div className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                      {stat.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
