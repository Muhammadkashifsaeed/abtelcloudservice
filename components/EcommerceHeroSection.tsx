"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";

export function EcommerceHeroSection() {
  return (
    <PageHeroBanner
      align="left"
      badge="Headless Commerce & High Conversion"
      badgeIcon={<ShoppingBag className="h-3.5 w-3.5 text-[var(--brand-lime)]" />}
      title="E-commerce"
      description="At Abtel Cloud Services, we offer a full range of e-commerce services designed to help you build, manage, and grow a successful online store. Our team of experts is dedicated to delivering tailored solutions that meet your unique business needs and provide a seamless shopping experience for your customers. Here’s how we can help"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "E-Commerce" },
      ]}
      backgroundImage="/images/showing-cart-trolley-shopping.jpg"
      clearBackground
      cta={{
        text: "Launch Your Storefront",
        href: "/contact",
      }}
    />
  );
}
