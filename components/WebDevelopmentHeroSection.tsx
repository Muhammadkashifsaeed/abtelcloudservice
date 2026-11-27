"use client";

import React from "react";
import { Code2 } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";

export function WebDevelopmentHeroSection() {
  return (
    <PageHeroBanner
      align="left"
      badge="Enterprise Frontend & Cloud Backends"
      badgeIcon={<Code2 className="h-3.5 w-3.5 text-[var(--brand-lime)]" />}
      title="Web Development"
      description="At Abtel Cloud Services, we offer comprehensive website and web app development services tailored to meet your specific needs. Our team of experienced developers and designers is dedicated to delivering high-quality, innovative solutions that drive your business forward. Here’s how we can help"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Web Development" },
      ]}
      backgroundImage="/images/process-scaled.jpg"
      clearBackground
      cta={{
        text: "Discuss Your Project",
        href: "/contact",
      }}
    />
  );
}
