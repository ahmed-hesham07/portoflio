import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    const variants = {
      primary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm [&_a]:text-white [&_a]:no-underline dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white',
      secondary: 'bg-violet-400 text-white hover:bg-violet-500 shadow-sm [&_a]:text-white [&_a]:no-underline',
      outline: 'border border-slate-600 bg-transparent text-slate-300 hover:bg-slate-800 [&_a]:text-inherit [&_a]:no-underline',
      ghost: 'text-slate-300 hover:bg-slate-800 [&_a]:text-inherit [&_a]:no-underline'
    };

    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 py-2',
      lg: 'h-11 px-8 text-lg'
    };

    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';
