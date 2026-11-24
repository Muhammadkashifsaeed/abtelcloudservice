"use client";

import React from "react";
import { Palette } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";

export function UiUxDesignHeroSection() {
  return (
    <PageHeroBanner
      align="left"
      badge="Human-Centric Interface Design"
      badgeIcon={<Palette className="h-3.5 w-3.5 text-[var(--brand-lime)]" />}
      title="UI/UX Design"
      highlightWord="Design"
      description="At Abtel Cloud Services, we specialize in delivering exceptional UI/UX design services that elevate your digital presence and user experience. Our dedicated team combines creativity with a deep understanding of user behavior to craft interfaces that captivate and engage. Here’s how we can transform your vision into reality"
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
