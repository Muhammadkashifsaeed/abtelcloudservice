"use client";

import React from "react";
import { Smartphone } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";

export function MobileAppHeroSection() {
  return (
    <PageHeroBanner
      align="left"
      badge="Native iOS & Android Engineering"
      badgeIcon={<Smartphone className="h-3.5 w-3.5 text-[var(--brand-lime)]" />}
      title="Mobile App Development"
      description="At Abtel Cloud Services, we offer a comprehensive suite of mobile app development services designed to bring your ideas to life and drive your business forward. Our team of seasoned developers and designers is committed to delivering high-quality, innovative mobile solutions that meet your specific needs. Here’s how we can help"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Mobile App Development" },
      ]}
      backgroundImage="/images/process-scaled.jpg"
      clearBackground
      cta={{
        text: "Discuss Your Mobile App",
        href: "/contact",
      }}
    />
  );
}
