import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'warm' | 'success' | 'danger';
  className?: string;
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-surface border-border text-secondary',
    accent: 'bg-accent/10 border-accent/30 text-accent',
    warm: 'bg-accent-warm/10 border-accent-warm/30 text-accent-warm',
    success: 'bg-success/10 border-success/30 text-success',
    danger: 'bg-danger/10 border-danger/30 text-danger',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
