"use client";

import React from "react";
import { Palette } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";

export function UiUxDesignHeroSection() {
  return (
    <PageHeroBanner
      align="left"
      badge="Human-Centric Interface Design"
      badgeIcon={<Palette className="h-3.5 w-3.5 text-[var(--brand-cyan)]" />}
      title="UI/UX Design Systems"
      highlightWord="Design"
      description="Intuitive user journeys, design systems, and high-fidelity prototypes engineered to captivate users and maximize conversion metrics."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "UI/UX Design" },
      ]}
      backgroundImage="/images/uiux-hero-ai.jpg"
      cta={{
        text: "Upgrade Your Experience",
        href: "/contact",
      }}
    />
  );
}
