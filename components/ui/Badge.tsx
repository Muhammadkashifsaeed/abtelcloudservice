import type { HTMLAttributes } from "react";
import { cn } from "@/utils";

export type BadgeVariant =
  | "default"
  | "primary"
  | "secondary"
  | "cyan"
  | "success"
  | "warm"
  | "outline"
  | "dark";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "bg-[var(--surface-muted)] text-[var(--text-dark)] border border-[var(--border-light)]",
  primary:
    "bg-[var(--primary-light)] text-[var(--brand-royal)] border border-[var(--brand-sky)]/30 font-bold",
  secondary:
    "bg-[var(--secondary-light)] text-[var(--brand-royal)] border border-[var(--brand-cyan)]/40 font-bold",
  cyan:
    "bg-[var(--brand-cyan)]/15 text-[var(--brand-royal)] border border-[var(--brand-cyan)]/45 font-bold",
  success:
    "bg-[var(--success-light)] text-[var(--success)] border border-[var(--success)]/30 font-bold",
  warm:
    "bg-[var(--accent-warm)]/15 text-amber-800 border border-[var(--accent-warm)]/40 font-bold",
  outline:
    "border border-[var(--border-light)] bg-transparent text-[var(--text-muted)]",
  dark:
    "bg-white/[0.08] text-[var(--brand-cyan)] border border-white/15 backdrop-blur-md font-semibold",
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
