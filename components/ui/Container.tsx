import type { HTMLAttributes } from "react";
import { cn } from "@/utils";

export type ContainerSize = "default" | "wide" | "narrow" | "editorial";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
}

const sizeClasses: Record<ContainerSize, string> = {
  default: "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
  wide: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
  narrow: "mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8",
  editorial: "container-editorial",
};

export function Container({ className, size = "default", ...props }: ContainerProps) {
  return <div className={cn(sizeClasses[size], className)} {...props} />;
}