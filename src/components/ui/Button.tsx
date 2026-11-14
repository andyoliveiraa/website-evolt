import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-violet hover:bg-violet-600 text-white shadow-lg shadow-violet-500/20 focus-visible:ring-violet-500",
        secondary:
          "bg-surface-raised hover:bg-surface-hover text-text-main border border-border-subtle focus-visible:ring-neutral-400",
        cyan:
          "bg-brand-cyan hover:bg-cyan-600 text-neutral-950 font-bold shadow-lg shadow-cyan-500/20 focus-visible:ring-cyan-400",
        emerald:
          "bg-brand-emerald hover:bg-emerald-600 text-neutral-950 font-bold shadow-lg shadow-emerald-500/20 focus-visible:ring-emerald-400",
        ghost:
          "hover:bg-surface-raised text-text-muted hover:text-text-main focus-visible:ring-neutral-400",
        outline:
          "border border-border-subtle hover:border-border-strong hover:bg-surface-raised text-text-main focus-visible:ring-violet-500",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
