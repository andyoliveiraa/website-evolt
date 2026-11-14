import * as React from "react";
import { cn } from "../../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: "violet" | "cyan" | "emerald" | "none";
  hoverEffect?: boolean;
}

export function Card({
  className,
  glow = "none",
  hoverEffect = true,
  children,
  ...props
}: CardProps) {
  const glowStyles = {
    none: "",
    violet: "hover:border-violet-500/40 hover:shadow-violet-500/10",
    cyan: "hover:border-cyan-500/40 hover:shadow-cyan-500/10",
    emerald: "hover:border-emerald-500/40 hover:shadow-emerald-500/10",
  };

  return (
    <div
      className={cn(
        "rounded-2xl bg-surface border border-border-subtle p-6 transition-all duration-300",
        hoverEffect && "hover:-translate-y-1 hover:shadow-xl",
        glowStyles[glow],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
