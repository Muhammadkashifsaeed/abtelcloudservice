"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";

export function EcommerceHeroSection() {
  return (
    <PageHeroBanner
      align="left"
      badge="Headless Commerce & High Conversion"
      badgeIcon={<ShoppingBag className="h-3.5 w-3.5 text-[var(--brand-cyan)]" />}
      title="E-Commerce Solutions"
      highlightWord="Solutions"
      description="Modern online stores and headless commerce architectures engineered for rapid checkout speeds, high conversion rates, and global scalability."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "E-Commerce" },
      ]}
      backgroundImage="/images/ecommerce-hero-ai.jpg"
      cta={{
        text: "Launch Your Storefront",
        href: "/contact",
      }}
    />
  );
}
