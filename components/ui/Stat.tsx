import type { HTMLAttributes } from "react";
import { cn } from "@/utils";

export interface StatProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
}

export function Stat({ value, label, className, ...props }: StatProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)} {...props}>
      <span className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {value}
      </span>
      <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
        {label}
      </span>
    </div>
  );
}