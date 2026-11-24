"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/utils";

export interface AbtelLogoProps {
  className?: string;
  variant?: "light" | "dark" | "auto";
  size?: "sm" | "md" | "lg";
  withLink?: boolean;
  onClick?: () => void;
}

export type DigiStartupLogoProps = AbtelLogoProps;

/**
 * Abtel Cloud Services Brand Identity Logo
 * Source of truth for brand colors: Pitch Black, White, and Electric Lime (#FF5E14).
 */
export function AbtelLogo({
  className,
  variant = "dark",
  size = "md",
  withLink = true,
  onClick,
}: AbtelLogoProps) {
  const isLight = variant === "light"; // true when rendered on dark/black backgrounds like Footer

  const sizeClasses = {
    sm: "h-7 text-lg",
    md: "h-9 text-xl",
    lg: "h-11 text-2xl",
  }[size];

  const iconSizes = {
    sm: "h-7 w-7",
    md: "h-9 w-9",
    lg: "h-11 w-11",
  }[size];

  const content = (
    <div
      className={cn(
        "group inline-flex items-center gap-2.5 select-none transition-transform duration-200 hover:scale-[1.02]",
        sizeClasses,
        className
      )}
    >
      {/* Modern Abtel Mark: Crisp Black Facet with Electric Lime Spark */}
      <div
        className={cn(
          "relative flex items-center justify-center rounded-xl overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255, 94, 20,0.5)] shrink-0",
          iconSizes,
          isLight
            ? "bg-black border border-white/20"
            : "bg-black border border-black/10"
        )}
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full p-1.5"
          aria-hidden="true"
        >
          {/* Stylized Modern Startup D shape */}
          <path
            d="M8 8H18C23.5228 8 28 12.4772 28 18C28 23.5228 23.5228 28 18 28H8V8Z"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Electric Lime Accent Core Spark */}
          <circle cx="17" cy="18" r="4" fill="var(--brand-lime, #FF5E14)" />
          {/* Forward-leaning startup speed accent */}
          <path
            d="M20 10L27 17"
            stroke="var(--brand-lime, #FF5E14)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={cn(
            "font-heading font-black tracking-[-0.035em] uppercase flex items-center gap-1",
            isLight ? "text-white" : "text-black"
          )}
        >
          <span>ABTEL</span>
          <span className="text-[var(--brand-lime,#FF5E14)]">CLOUD</span>
        </span>
        <span
          className={cn(
            "text-[9px] font-bold tracking-[0.22em] uppercase mt-0.5",
            isLight ? "text-slate-400" : "text-slate-500"
          )}
        >
          Services
        </span>
      </div>
    </div>
  );

  if (withLink) {
    return (
      <Link
        href="/"
        aria-label="Abtel Cloud Services Home"
        onClick={onClick}
        className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-lime)] rounded-lg"
      >
        {content}
      </Link>
    );
  }

  return content;
}

export const DigiStartupLogo = AbtelLogo;
