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
 * Enterprise SaaS Platform Aesthetics: Slate 900, White, and Electric Blue (#2563EB).
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
        "group inline-flex items-center gap-2.5 select-none transition-transform duration-200 hover:scale-[1.01]",
        sizeClasses,
        className
      )}
    >
      {/* Modern Abtel Mark: Crisp Facet with Electric Blue Accent */}
      <div
        className={cn(
          "relative flex items-center justify-center rounded-lg overflow-hidden shadow-2xs transition-all duration-200 group-hover:shadow-[0_0_16px_rgba(37,99,235,0.25)] shrink-0",
          iconSizes,
          isLight
            ? "bg-[#0F172A] border border-white/20"
            : "bg-[#0F172A] border border-slate-800"
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
          {/* Electric Blue Accent Core Spark */}
          <circle cx="17" cy="18" r="4" fill="#2563EB" />
          {/* Forward-leaning startup speed accent */}
          <path
            d="M20 10L27 17"
            stroke="#2563EB"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={cn(
            "font-heading font-black tracking-[-0.03em] uppercase flex items-center gap-1",
            isLight ? "text-white" : "text-slate-900"
          )}
        >
          <span>ABTEL</span>
          <span className="text-[#2563EB]">CLOUD</span>
        </span>
        <span
          className={cn(
            "font-mono text-[9px] font-semibold tracking-[0.22em] uppercase mt-0.5",
            isLight ? "text-slate-400" : "text-slate-500"
          )}
        >
          SERVICES
        </span>
      </div>
    </div>
  );

  if (withLink) {
    return (
      <Link
        href="/"
        onClick={onClick}
        className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
        aria-label="Abtel Cloud Services Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}

export const DigiStartupLogo = AbtelLogo;
