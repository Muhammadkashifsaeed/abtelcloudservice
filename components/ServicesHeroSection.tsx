"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";

export function ServicesHeroSection() {
  return (
    <PageHeroBanner
      align="left"
      badge="INNOVATIVE CLOUD & SOFTWARE SOLUTIONS"
      badgeIcon={<Sparkles className="h-3 w-3 text-[var(--brand-cyan)]" />}
      title="Product Services"
      description="Full-lifecycle software engineering, cloud infrastructure modernization, API integrations, and digital platforms built for scale."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services" },
      ]}
      backgroundImage="/images/page-title.jpg"
    />
  );
}
