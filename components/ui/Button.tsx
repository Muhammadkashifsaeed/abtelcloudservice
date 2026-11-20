import type { ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "destructive";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[#246BFD] via-[#0EA5E9] to-[#00D4FF] text-white font-semibold shadow-[0_4px_16px_rgba(0,212,255,0.28)] hover:brightness-110 hover:shadow-[0_8px_24px_rgba(0,212,255,0.45)] hover:-translate-y-0.5 focus-visible:ring-[#00D4FF]",
  secondary:
    "border border-slate-200 bg-slate-50 text-slate-800 font-semibold hover:bg-slate-100 hover:border-slate-300 focus-visible:ring-slate-300",
  outline:
    "border border-[#246BFD]/40 bg-transparent text-[#246BFD] font-semibold hover:bg-[#246BFD]/10 hover:border-[#246BFD] focus-visible:ring-[#246BFD]",
  ghost:
    "bg-transparent text-foreground hover:bg-muted focus-visible:ring-ring/40",
  destructive:
    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 focus-visible:ring-destructive/40",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs rounded-xl gap-1.5",
  md: "h-11 px-5 text-sm rounded-xl gap-2",
  lg: "h-12 px-7 text-[15px] rounded-xl gap-2.5",
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
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
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
