"use client";

import React from "react";
import { FileText } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";

export function TermsHeroSection() {
  return (
    <PageHeroBanner
      align="left"
      badge="Legal & Agreements"
      badgeIcon={<FileText className="h-3.5 w-3.5 text-[var(--brand-lime)]" />}
      title="Terms & Conditions"
      description="Standard service terms, technical warranties, intellectual property protections, and cloud consulting service level agreements governing client engagements."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Terms and Conditions" },
      ]}
      backgroundImage="/images/software-program.jpg"
      clearBackground
    />
  );
}
