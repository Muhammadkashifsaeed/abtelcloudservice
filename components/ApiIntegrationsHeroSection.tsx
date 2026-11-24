"use client";

import React from "react";
import { Network } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";

export function ApiIntegrationsHeroSection() {
  return (
    <PageHeroBanner
      align="left"
      badge="Secure Architecture & Cloud Middleware"
      badgeIcon={<Network className="h-3.5 w-3.5 text-[var(--brand-lime)]" />}
      title="API Integrations"
      highlightWord="Integrations"
      description="At Abtel Cloud Services, we specialize in providing comprehensive API integration services that enhance the functionality and performance of your applications. Our team of experienced developers ensures seamless integration, enabling your systems to communicate effectively and perform optimally. Here’s how we can help"
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
