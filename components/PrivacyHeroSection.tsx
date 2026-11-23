"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";

export function PrivacyHeroSection() {
  return (
    <PageHeroBanner
      align="left"
      badge="Legal & Compliance"
      badgeIcon={<ShieldCheck className="h-3.5 w-3.5 text-[var(--brand-cyan)]" />}
      title="Privacy Policy"
      description="Learn how Abtel Cloud Services collects, safeguards, and processes corporate client data in strict compliance with international security and data protection regulations."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Privacy Policy" },
      ]}
      backgroundImage="/images/privacy-hero-ai.jpg"
    />
  );
}
