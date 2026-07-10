import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const variants = {
  primary: 'bg-primary/15 text-primary border border-primary/30',

  secondary: 'bg-secondary/15 text-secondary border border-secondary/30',

  success: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',

  warning: 'bg-amber-500/15 text-amber-400 border border-amber-500/30',

  danger: 'bg-red-500/15 text-red-400 border border-red-500/30',

  outline: 'bg-transparent text-white border border-white/15',

  glass: 'bg-white/5 backdrop-blur-xl border border-white/10 text-white',

  info: 'bg-sky-500/15 text-sky-400 border border-sky-500/30',
};


const pulseColors = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-emerald-400",
  warning: "bg-amber-400",
  danger: "bg-red-400",
  outline: "bg-white",
  glass: "bg-primary",
  info: "bg-sky-400",
};

const sizes = {
  xs: 'px-2 py-0.5 text-[11px]',
  sm: 'px-2.5 py-1 text-xs',
  md: 'px-3.5 py-1.5 text-sm',
  lg: 'px-4 py-2 text-base',
  xl: 'px-5 py-2.5 text-lg',
};

const Badge = forwardRef(
  (
    {
      children,
      className,
      variant = 'glass',
      size = 'md',
      leftIcon,
      rightIcon,
      animate = false,
      rounded = true,
      pulse= false,
      ...props
    },
    ref
  ) => {
    const Component = animate ? motion.span : 'span';

    return (
      <Component
        ref={ref}
        initial={animate ? { opacity: 0, y: 8 } : undefined}
        animate={animate ? { opacity: 1, y: 0 } : undefined}
        transition={
          animate
            ? {
                duration: 0.35,
              }
            : undefined
        }
        className={cn(
          'inline-flex items-center justify-center gap-2',

          'font-medium',

          'whitespace-nowrap',

          'transition-all duration-300',

          rounded ? 'rounded-full' : 'rounded-xl',

          variants[variant],

          sizes[size],

          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          {pulse && (
            <span className="relative flex h-2.5 w-2.5">
              <span
                className={`absolute inline-flex h-full w-full rounded-full animate-ping ${pulseColors[variant]}`}
              />
              <span
                className={`relative inline-flex h-2.5 w-2.5 rounded-full ${pulseColors[variant]}`}
              />
            </span>
          )}

          {leftIcon && <span className="flex items-center">{leftIcon}</span>}
        </div>

        <span>{children}</span>

        {rightIcon && <span className="flex items-center">{rightIcon}</span>}
      </Component>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
