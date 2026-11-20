import type { Metadata } from "next";
import {
  CustomerSupportSection,
  DigitalMarketplaceHeroSection,
  DigitalMarketplaceServicesSection,
} from "@/components";
import {
  createPageMetadata,
  generateBreadcrumbJsonLd,
  generateServiceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Marketplaces | Multi-Vendor Stores",
  description:
    "Build scalable multi-vendor marketplaces with Abtel Cloud Services. Complete seller onboarding, vendor management, and secure automated transactions.",
  path: "/services/digital-marketplace",
  keywords: [
    "digital marketplace services",
    "multi vendor marketplace development",
    "custom marketplace solutions",
    "B2B marketplace platform",
    "peer to peer marketplace",
    "marketplace vendor management",
    "split payment gateway",
  ],
});

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Digital Marketplace", path: "/services/digital-marketplace" },
]);

const serviceJsonLd = generateServiceJsonLd({
  name: "Digital Marketplace Services",
  description:
    "End-to-end digital marketplace engineering featuring vendor onboarding, catalog management, escrow payments, and commission engines.",
  path: "/services/digital-marketplace",
});

export default function DigitalMarketplacePage() {
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
      <DigitalMarketplaceHeroSection />

      {/* 2. 30 Marketplace Capabilities in Centered, Zoom-Enhanced 3-Box-Per-Row Grid */}
      <DigitalMarketplaceServicesSection />

      {/* 3. Customer Support & Rapid Consultation Section */}
      <CustomerSupportSection />
    </div>
  );
}
