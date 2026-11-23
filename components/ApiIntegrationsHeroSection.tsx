"use client";

import React from "react";
import { Network } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";

export function ApiIntegrationsHeroSection() {
  return (
    <PageHeroBanner
      align="left"
      badge="Secure Architecture & Cloud Middleware"
      badgeIcon={<Network className="h-3.5 w-3.5 text-[var(--brand-cyan)]" />}
      title="API Integrations & Microservices"
      highlightWord="Microservices"
      description="Connect distributed services, CRM platforms, ERP systems, and secure payment processors with robust, fault-tolerant API pipelines."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "API Integrations" },
      ]}
      backgroundImage="/images/api-hero-ai.jpg"
      cta={{
        text: "Integrate Your Systems",
        href: "/contact",
      }}
    />
  );
}
