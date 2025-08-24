import { cn } from '@/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline' | 'tech';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className 
}: BadgeProps) => {
  const baseStyles = 'inline-flex items-center rounded-full font-medium transition-colors';
  
  const variants = {
    default: 'bg-sky-500/10 text-sky-500 border border-sky-500/20',
    secondary: 'bg-violet-400/10 text-violet-400 border border-violet-400/20',
    outline: 'border border-slate-300 text-slate-700 dark:border-slate-600 dark:text-slate-300',
    tech: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
  };

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
};
