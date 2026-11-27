import type { Metadata } from "next";
import {
  AboutSection,
  BenefitsSection,
  ContactBlockSection,
  CustomerSupportSection,
  HappyCustomersSection,
  HeroSliderSection,
  IndustriesMarqueeSection,
  OurStorySection,
  PinnedStorySection,
  TeamSection,
  TechMarqueeStripSection,
  WhatWeOfferSection,
  WhyChooseUsSection,
} from "@/components/home";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Software Development & Cloud Solutions | Abtel Cloud Services",
  description:
    "Abtel Cloud Services delivers custom software, cloud infrastructure, web and mobile apps, e-commerce, UI/UX design, and API integrations for businesses.",
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
      {/* 1. Hero: Clean light SaaS hero with red-themed heading, italic serif on "Development", and 3 bottom feature cards */}
      <HeroSliderSection />

      {/* 2. About ("Behind The Solutions"): Image collage, 10+ years badge, 150+ clients avatar stack, business hours, and Discover More CTA */}
      <AboutSection />

      {/* 3. Pinned Story: scrubbed Discover → Design → Deliver with image crossfades */}
      <PinnedStorySection />

      {/* 5. What We Offer: 6 core services with authentic original icons, internal routing, and Learn more CTAs */}
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
