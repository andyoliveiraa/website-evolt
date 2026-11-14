import * as React from "react";
import { cn } from "../../lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "violet" | "cyan" | "emerald" | "neutral" | "outline";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "violet",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    violet: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    neutral: "bg-surface-raised text-text-muted border-border-subtle",
    outline: "bg-transparent text-text-main border-border-strong",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs font-medium",
    md: "px-2.5 py-1 text-xs font-semibold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border transition-colors select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
