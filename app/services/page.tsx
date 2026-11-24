import type { Metadata } from "next";
import { ServicesLeadInquirySection } from "@/components/ServicesLeadInquirySection";
import { ServicesCoreCardsSection } from "@/components/ServicesCoreCardsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ServicesWhyChooseSection } from "@/components/ServicesWhyChooseSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CustomerSupportSection } from "@/components/CustomerSupportSection";
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

      {/* 1. Hero Section: Leading Experts in Software Development */}
      <ServicesLeadInquirySection />

      {/* 2. Core Feature Cards (Custom Software, Cloud Services, Web Development matching Home Page) */}
      <ServicesCoreCardsSection />

      {/* 3. Core Services Grid */}
      <ServicesSection />

      {/* 4. Why Choose Section (Compact Height & Single-Line Heading) */}
      <ServicesWhyChooseSection />

      {/* 5. 4-Step Engineering Timeline */}
      <ProcessSection />

      {/* 6. Customer Support & Rapid Consultation */}
      <CustomerSupportSection />
    </div>
  );
}
