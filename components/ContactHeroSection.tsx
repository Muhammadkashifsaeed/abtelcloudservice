"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";

export function ContactHeroSection() {
  return (
    <PageHeroBanner
      align="left"
      badge="Project Consultations & Technical Sales"
      badgeIcon={<MessageSquare className="h-3.5 w-3.5 text-[var(--brand-cyan)]" />}
      title="Contact Our Technical Team"
      highlightWord="Technical"
      description="Connect directly with our solutions architects in San Antonio, Texas. We review project requirements, outline architectures, and provide transparent engineering scopes."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Contact Us" },
      ]}
      backgroundImage="/images/about-hero-ai.jpg"
    />
  );
}
