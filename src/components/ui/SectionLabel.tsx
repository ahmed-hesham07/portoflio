import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent',
        className
      )}
    >
      {children}
    </p>
  );
}
