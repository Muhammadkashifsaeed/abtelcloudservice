import type { Metadata } from "next";
import {
  CustomerSupportSection,
  ExpertiseSection,
  HappyCustomersSection,
  HeroSection,
  IndustryExpertiseSection,
  OurStorySection,
  ServiceCardsSection,
  SkillsAndInquirySection,
  WhatWeOfferSection,
  WhyChooseUsSection,
} from "@/components";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Custom Software & Cloud Solutions | Abtel Cloud Services",
  description:
    "Abtel Cloud Services provides custom software development, cloud infrastructure management, web and mobile engineering, and enterprise API integrations.",
  path: "/",
  keywords: [
    "custom software development company",
    "cloud services provider",
    "web application development",
    "mobile app developers",
    "enterprise API integration",
    "IT consulting San Antonio",
    "cloud architecture AWS Azure GCP",
  ],
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceCardsSection />
      <HappyCustomersSection />
      <ExpertiseSection />
      <IndustryExpertiseSection />
      <WhatWeOfferSection />
      <CustomerSupportSection />
      <WhyChooseUsSection />
      <OurStorySection />
      <SkillsAndInquirySection />
    </>
  );
}
