import type { HTMLAttributes } from "react";
import { cn } from "@/utils";

export interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: "brand" | "muted" | "light";
}

const toneClasses: Record<NonNullable<EyebrowProps["tone"]>, string> = {
  brand: "text-rose-500",
  muted: "text-slate-400",
  light: "text-white/70",
};

export function Eyebrow({ className, tone = "brand", children, ...props }: EyebrowProps) {
  return (
    <span
      className={cn("eyebrow", toneClasses[tone], className)}
      {...props}
    >
      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-current" />
      {children}
    </span>
  );
}