import type { ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "dark" | "accent";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "rounded-lg bg-[#2563EB] text-white font-semibold text-sm shadow-sm ring-1 ring-inset ring-white/20 hover:bg-[#1D4ED8] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2",
  accent:
    "rounded-lg bg-[#0F172A] text-white font-semibold text-sm shadow-sm ring-1 ring-inset ring-white/15 hover:bg-slate-800 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2",
  secondary:
    "rounded-lg border border-slate-200/90 bg-white/95 text-slate-800 font-semibold text-sm shadow-2xs hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2",
  outline:
    "rounded-lg border border-slate-200 bg-transparent text-slate-800 font-semibold text-sm hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2",
  ghost:
    "rounded-lg bg-transparent text-slate-700 font-semibold text-sm hover:bg-slate-100 hover:text-slate-900 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-slate-400",
  dark:
    "rounded-lg bg-[#0F172A] text-white border border-white/10 font-semibold text-sm shadow-sm hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-xs rounded-lg gap-1.5",
  md: "h-11 px-5 text-sm rounded-lg gap-2",
  lg: "h-12 px-6 text-[15px] rounded-lg gap-2.5",
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
        "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none",
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
