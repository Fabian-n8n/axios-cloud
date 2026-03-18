import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-accent text-white hover:bg-accent-light shadow-glow-sm hover:shadow-glow-blue',
        secondary:
          'bg-bg-card text-white border border-bg-border hover:border-accent/40 hover:bg-bg-elevated',
        ghost:
          'text-muted-light hover:text-white hover:bg-bg-elevated',
        outline:
          'border border-accent/30 text-accent-light hover:bg-accent/10 hover:border-accent/60',
        cyan:
          'bg-accent-cyan text-bg font-bold hover:bg-accent-cyan-light shadow-glow-cyan',
        link:
          'text-accent-light underline-offset-4 hover:underline hover:text-white p-0 h-auto',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-8 px-4 text-xs',
        lg: 'h-12 px-8 text-base',
        xl: 'h-14 px-10 text-lg',
        icon: 'h-9 w-9 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = 'Button';

export { Button, buttonVariants };
