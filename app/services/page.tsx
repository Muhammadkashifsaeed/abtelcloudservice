import type { Metadata } from "next";
import {
  CustomerSupportSection,
  ServicesCoreCardsSection,
  ServicesHeroSection,
  ServicesLeadInquirySection,
  ServicesOverviewSection,
  ServicesStepsSection,
  ServicesWhyChooseSection,
  WhatWeOfferSection,
} from "@/components";
import {
  createPageMetadata,
  generateBreadcrumbJsonLd,
  generateServiceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Software & Cloud Services Overview",
  description:
    "Explore our core services: custom software engineering, cloud management, mobile and web apps, API integrations, and digital marketplace platforms.",
  path: "/services",
  keywords: [
    "enterprise software development services",
    "cloud infrastructure services",
    "web application development",
    "custom mobile app development",
    "API integration services",
    "e-commerce solutions",
    "digital marketplace platform",
    "UI UX design services",
  ],
});

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

const servicesJsonLd = generateServiceJsonLd({
  name: "Enterprise Software & Cloud Services",
  description:
    "Full-spectrum software consulting, cloud computing, mobile application engineering, and custom web development by Abtel Cloud Services.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="flex w-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesJsonLd),
        }}
      />
      {/* 1. Hero Section with Background page-title.jpg, "Product services", and "Home . Service" */}
      <ServicesHeroSection />

      {/* 2. Overview Section: Left image __next_static_media_2.fb1d0fcc, Right "All services" with service names */}
      <ServicesOverviewSection />

      {/* 3. Leading Experts & Project Inquiry Form (Background image + Left text/bullets + Right white form) */}
      <ServicesLeadInquirySection />

      {/* 4. 3 Core Dualtone Cards (Custom Software Development, Cloud Services, Web Development) */}
      <ServicesCoreCardsSection />

      {/* 5. 3-Simple-Steps Process: Left (Get Started & Discover More), Center (img1), Right (3 Steps) */}
      <ServicesStepsSection />

      {/* 6. Why Choose Section: Center Heading & 4 Feature Cards with Icons */}
      <ServicesWhyChooseSection />

      {/* 7. What We Offer: 6 Industry Services with Images & Learn More */}
      <WhatWeOfferSection />

      {/* 8. Customer Support Section: Left text & Contact button, Right img_9 */}
      <CustomerSupportSection />
    </div>
  );
}
