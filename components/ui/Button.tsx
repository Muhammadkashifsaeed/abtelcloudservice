import type { ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "dark";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "rounded-full bg-gradient-to-r from-[var(--brand-royal)] to-[var(--brand-sky)] text-white font-bold btn-sheen shadow-[0_4px_18px_rgba(42,103,174,0.35)] hover:from-[#235896] hover:to-[#2C7DAF] hover:shadow-[0_8px_26px_rgba(34,199,242,0.35)] hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)]",
  secondary:
    "rounded-full border-2 border-[var(--brand-sky)] bg-transparent text-[var(--brand-sky)] font-bold hover:bg-[var(--primary-light)] hover:border-[var(--brand-royal)] hover:text-[var(--brand-royal)] shadow-xs hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-[var(--brand-sky)]",
  outline:
    "rounded-full border-2 border-[var(--brand-sky)] bg-transparent text-[var(--brand-sky)] font-bold hover:bg-[var(--primary-light)] hover:border-[var(--brand-royal)] hover:text-[var(--brand-royal)] hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-[var(--brand-sky)]",
  ghost:
    "rounded-full bg-transparent text-[var(--text-dark)] font-semibold hover:bg-[var(--primary-light)] hover:text-[var(--brand-royal)] focus-visible:ring-2 focus-visible:ring-[var(--brand-sky)]",
  dark:
    "rounded-full bg-white/[0.06] text-white border border-white/15 backdrop-blur-md font-bold hover:bg-white/[0.12] hover:border-[var(--brand-cyan)]/60 hover:text-[var(--brand-cyan)] hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs rounded-full gap-1.5",
  md: "h-11 px-6 text-sm rounded-full gap-2",
  lg: "h-[52px] px-8 text-[15px] rounded-full gap-2.5",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-300 cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
      {children}
    </button>
  );
}
