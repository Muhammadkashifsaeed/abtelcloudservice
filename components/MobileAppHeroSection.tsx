"use client";

import React from "react";
import { Smartphone } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";

export function MobileAppHeroSection() {
  return (
    <PageHeroBanner
      align="left"
      badge="Native iOS & Android Engineering"
      badgeIcon={<Smartphone className="h-3.5 w-3.5 text-[var(--brand-cyan)]" />}
      title="Mobile App Development"
      highlightWord="Development"
      description="Native and cross-platform mobile apps engineered for fluid performance, exceptional usability, and enterprise cloud scalability."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Mobile App Development" },
      ]}
      backgroundImage="/images/mobile-app-hero-ai.jpg"
      cta={{
        text: "Discuss Your Mobile App",
        href: "/contact",
      }}
    />
  );
}
