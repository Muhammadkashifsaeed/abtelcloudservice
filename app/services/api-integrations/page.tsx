import type { Metadata } from "next";
import {
  ApiIntegrationsHeroSection,
  ApiIntegrationsServicesSection,
  CustomerSupportSection,
} from "@/components";
import {
  createPageMetadata,
  generateBreadcrumbJsonLd,
  generateServiceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "API Integration | REST & SOAP APIs",
  description:
    "At Abtel Cloud Services, we specialize in providing comprehensive API integration services that enhance the functionality and performance of your applications. Our team of experienced developers ensures seamless integration.",
  path: "/services/api-integrations",
  keywords: [
    "API integration services",
    "custom API development",
    "RESTful API services",
    "SOAP API development",
    "third party API integration",
    "payment gateway API",
    "cloud API architecture",
  ],
});

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "API Integrations", path: "/services/api-integrations" },
]);

const serviceJsonLd = generateServiceJsonLd({
  name: "API Integration Services",
  description:
    "Robust API integrations and custom development connecting software ecosystems, legacy databases, SaaS platforms, and enterprise microservices.",
  path: "/services/api-integrations",
});

export default function ApiIntegrationsPage() {
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
          __html: JSON.stringify(serviceJsonLd),
        }}
      />
      {/* 1. Neon Coding Hero Section with Left-Aligned Heading & Introduction */}
      <ApiIntegrationsHeroSection />

      {/* 2. 30 API Integration Capabilities in Centered, Zoom-Enhanced 3-Box-Per-Row Grid */}
      <ApiIntegrationsServicesSection />

      {/* 3. Customer Support & Rapid Consultation Section */}
      <CustomerSupportSection />
    </div>
  );
}
