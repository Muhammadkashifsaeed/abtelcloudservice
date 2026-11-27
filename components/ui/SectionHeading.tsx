import type { ElementType, ReactNode } from "react";
import { cn } from "@/utils";
import { Eyebrow } from "./Eyebrow";

export interface SectionHeadingProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  as?: ElementType;
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  as: Title = "h2",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Title className={cn("text-title text-white", titleClassName)}>{title}</Title>
      {lede ? <p className={cn("text-lede max-w-2xl")}>{lede}</p> : null}
    </div>
  );
}