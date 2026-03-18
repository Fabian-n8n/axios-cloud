import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'border-accent/30 bg-accent/10 text-accent-light',
        secondary: 'border-bg-border bg-bg-card text-muted-light',
        cyan: 'border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan-light',
        purple: 'border-accent-purple/30 bg-accent-purple/10 text-purple-300',
        green: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
        outline: 'border-bg-border text-muted-light',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
