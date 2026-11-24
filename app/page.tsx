import type { Metadata } from "next";
import {
  AboutSection,
  BenefitsSection,
  BigTextStripSection,
  ContactBlockSection,
  CustomerSupportSection,
  HappyCustomersSection,
  HeroSliderSection,
  IndustriesMarqueeSection,
  OurStorySection,
  TeamSection,
  TechMarqueeStripSection,
  WhatWeOfferSection,
  WhyChooseUsSection,
} from "@/components/home";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Modern Software Development & Cloud Solutions | Abtel Cloud Services",
  description:
    "Abtel Cloud Services provides modern software development, enterprise cloud solutions, web engineering, mobile app development, digital marketing, e-commerce, UI/UX design, and scalable API integrations.",
  path: "/",
  keywords: [
    "Abtel Cloud Services",
    "abtelcloudservices",
    "software development agency",
    "cloud infrastructure services",
    "web development services",
    "mobile app developers",
    "digital marketing agency",
    "ecommerce solutions",
    "UI UX design agency",
    "API integrations",
    "custom software engineering",
  ],
});

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Slider: Full viewport 2-slide slider with autoplay, dark navy background, faint network image, Ken Burns zoom, and 3 bottom trust points */}
      <HeroSliderSection />

      {/* 2. About ("Behind The Solutions"): Image collage, 10+ years badge, 150+ clients avatar stack, business hours, and Discover More CTA */}
      <AboutSection />

      {/* 3. Big Scrolling Text Strip: 6 services alternating filled and outlined text with sparkle stars */}
      <BigTextStripSection />

      {/* 4. What We Offer: 6 core services with authentic original icons, internal routing, and Learn more CTAs (No AI-generated hero cards) */}
      <WhatWeOfferSection />

      {/* 5. Customer Support: Need more information about services? Contact us with support specialist image */}
      <CustomerSupportSection />

      {/* 6. Why Choose Us ("Built-With-Experience"): 2-column feature breakdown with 4 dualtone value propositions */}
      <WhyChooseUsSection />

      {/* 6. Our Benefits ("What Makes Our Solutions Different"): 3 icon feature rows, image with 3 animated progress bars and verified tech skills */}
      <BenefitsSection />

      {/* 7. Second Scrolling Strip: Opposite direction marquee with technology keywords and balanced height */}
      <TechMarqueeStripSection />

      {/* 8. Our Story: Dedicated team of software developers, pioneers in innovative technology (150+ Clients, 96% Retention, 10+ Years) */}
      <OurStorySection />

      {/* 9. Team ("Our Team of Experts"): Driven by /data/team.ts with SHOW_TEAM = false by default */}
      <TeamSection />

      {/* 9. Third Automatic Carousel: Enterprise Industry Solutions Marquee (Deep Midnight Navy) */}
      <IndustriesMarqueeSection />

      {/* 10. Social Proof: Join our 30,000 happy customers with circular logo carousel */}
      <HappyCustomersSection />

      {/* 11. "Let's Talk" Contact Block: Left San Antonio details & contact rows, right consultation form with honeypot */}
      <ContactBlockSection />
    </>
  );
}
