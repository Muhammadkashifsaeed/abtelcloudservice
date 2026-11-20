import type { HTMLAttributes } from "react";
import { cn } from "@/utils";

export type BadgeVariant = "default" | "primary" | "success" | "outline";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-muted text-foreground",
  primary: "bg-primary/10 text-primary border border-primary/20",
  success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
  outline: "border border-border bg-transparent text-muted-foreground",
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
