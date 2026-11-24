"use client";

import React from "react";
import { Store } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";

export function DigitalMarketplaceHeroSection() {
  return (
    <PageHeroBanner
      align="left"
      badge="Multi-Vendor Architecture & Scale"
      badgeIcon={<Store className="h-3.5 w-3.5 text-[var(--brand-lime)]" />}
      title="Digital Marketplace Services"
      highlightWord="Marketplace"
      description="At Abtel Cloud Services, we specialize in creating robust and scalable digital marketplace solutions tailored to meet your unique business needs. Whether you’re looking to launch a new online marketplace or enhance an existing one, our comprehensive range of services ensures a seamless and successful implementation. Here’s how we can help you"
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
