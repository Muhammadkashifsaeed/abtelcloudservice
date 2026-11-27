import type { HTMLAttributes } from "react";
import { cn } from "@/utils";

export interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "base" | "raised" | "card";
  hover?: boolean;
}

const variantClasses: Record<NonNullable<SurfaceProps["variant"]>, string> = {
  base: "surface-dark",
  raised: "bg-[#0A0E17] border border-white/10",
  card: "surface-card",
};

export function Surface({ className, variant = "card", hover = false, ...props }: SurfaceProps) {
  return (
    <div
      className={cn(
        variantClasses[variant],
        hover &&
          "transition-colors duration-300 hover:border-white/20 motion-reduce:transition-none",
        className
      )}
      {...props}
    />
  );
}