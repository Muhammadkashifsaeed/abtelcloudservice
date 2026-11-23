"use client";

import React from "react";
import { Store } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";

export function DigitalMarketplaceHeroSection() {
  return (
    <PageHeroBanner
      align="left"
      badge="Multi-Vendor Architecture & Scale"
      badgeIcon={<Store className="h-3.5 w-3.5 text-[var(--brand-cyan)]" />}
      title="Digital Marketplace Platforms"
      highlightWord="Marketplace"
      description="Custom multi-vendor marketplaces with automated seller onboarding, split-payment gateways, escrow workflows, and enterprise compliance."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Digital Marketplace" },
      ]}
      backgroundImage="/images/digital-marketplace-hero-ai.jpg"
      cta={{
        text: "Build Your Marketplace",
        href: "/contact",
      }}
    />
  );
}
