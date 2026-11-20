import type { HTMLAttributes } from "react";
import { cn } from "@/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white/95 text-foreground shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_16px_40px_rgba(0,212,255,0.12)] hover:-translate-y-1",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-2 p-6 sm:p-8", className)} {...props} />;
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl font-bold leading-snug tracking-tight text-[#0F172A]", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-[14.5px] leading-relaxed text-slate-600", className)} {...props} />;
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-6 pb-6 sm:px-8 sm:pb-8", className)} {...props} />;
}

export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center justify-between gap-4 border-t border-slate-100 px-6 py-4 sm:px-8 sm:py-5", className)}
      {...props}
    />
  );
}
