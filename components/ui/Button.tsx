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
    "rounded-full bg-[var(--brand-lime)] text-black font-black btn-sheen shadow-[0_4px_18px_rgba(197, 216, 46,0.35)] hover:bg-[var(--brand-lime-hover)] hover:shadow-[0_8px_26px_rgba(197, 216, 46,0.55)] hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-black",
  secondary:
    "rounded-full border border-slate-300 bg-white text-slate-800 font-bold hover:border-black hover:text-black shadow-xs hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-black",
  outline:
    "rounded-full border border-slate-300 bg-transparent text-slate-800 font-bold hover:border-black hover:text-black hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-black",
  ghost:
    "rounded-full bg-transparent text-slate-800 font-semibold hover:bg-slate-100 hover:text-black focus-visible:ring-2 focus-visible:ring-black",
  dark:
    "rounded-full bg-black text-white border border-white/20 font-bold hover:bg-slate-900 hover:border-[var(--brand-lime)] hover:text-[var(--brand-lime)] hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-[var(--brand-lime)]",
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
