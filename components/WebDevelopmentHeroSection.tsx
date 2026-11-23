"use client";

import React from "react";
import { Code2 } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";

export function WebDevelopmentHeroSection() {
  return (
    <PageHeroBanner
      align="left"
      badge="Enterprise Frontend & Cloud Backends"
      badgeIcon={<Code2 className="h-3.5 w-3.5 text-[var(--brand-cyan)]" />}
      title="Web Development Services"
      highlightWord="Services"
      description="Abtel Cloud Services builds fast, secure, and responsive web applications and portals using modern frontend frameworks and scalable cloud backends."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Web Development" },
      ]}
      backgroundImage="/images/web-dev-hero-ai.jpg"
      cta={{
        text: "Discuss Your Project",
        href: "/contact",
      }}
    />
  );
}
