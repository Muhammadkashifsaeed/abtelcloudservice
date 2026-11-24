"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";

export function AboutHeroSection() {
  return (
    <PageHeroBanner
      badge="Software Consulting & Engineering"
      badgeIcon={<Sparkles className="h-3 w-3 text-[var(--brand-lime)]" />}
      title="We Build Software That Drives Business Growth"
      highlightWord="Growth"
      description="Abtel Cloud Services is an engineering collective based in San Antonio, Texas, dedicated to modern web architectures, enterprise cloud computing, and custom digital platforms."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "About Us" },
      ]}
      backgroundImage="/images/about-hero-ai.jpg"
    />
  );
}
