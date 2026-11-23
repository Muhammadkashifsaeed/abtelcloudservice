"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";

export function BlogHeroSection() {
  return (
    <PageHeroBanner
      align="left"
      badge="Insights & Engineering"
      badgeIcon={<Sparkles className="h-3 w-3 text-[var(--brand-cyan)]" />}
      title="Latest Insights & Articles"
      description="In-depth analysis, engineering best practices, and modern technology guides curated by Abtel Cloud Services architects."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Blog" },
      ]}
      backgroundImage="/images/ai-cloud-lab-bg.jpg"
    />
  );
}
