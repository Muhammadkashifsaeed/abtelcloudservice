"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

// Ultra-smooth agency cubic-bezier curve (silky decelerating glide)
const PAGE_EASE = [0.22, 1, 0.36, 1] as const;

export function PageTransition({
  children,
  className = "",
}: PageTransitionProps) {
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={`flex flex-1 flex-col w-full ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 10, filter: "blur(3px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.32,
        ease: PAGE_EASE,
      }}
      className={`flex flex-1 flex-col w-full ${className}`}
    >
      {children}
    </motion.div>
  );
}
