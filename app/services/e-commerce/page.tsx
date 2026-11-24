import type { Metadata } from "next";
import {
  CustomerSupportSection,
  EcommerceHeroSection,
  EcommerceServicesSection,
} from "@/components";
import {
  createPageMetadata,
  generateBreadcrumbJsonLd,
  generateServiceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "E-Commerce | Scalable Online Stores",
  description:
    "At Abtel Cloud Services, we offer a full range of e-commerce services designed to help you build, manage, and grow a successful online store. Our team of experts is dedicated to delivering tailored solutions.",
  path: "/services/e-commerce",
  image: "/images/ecommerce-hero.jpg",
  keywords: [
    "e-commerce website development",
    "Shopify integration",
    "WooCommerce development",
    "Magento solutions",
    "custom shopping cart",
    "payment gateway integration",
    "online store optimization",
  ],
});

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "E-Commerce", path: "/services/e-commerce" },
]);

const serviceJsonLd = generateServiceJsonLd({
  name: "E-Commerce Solutions & Development",
  description:
    "Full lifecycle e-commerce architecture including custom shopping carts, catalog management, CRM integration, and secure checkout systems.",
  path: "/services/e-commerce",
});

export default function EcommercePage() {
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
      {/* 1. AI-Generated E-commerce Hero Section with Left-Aligned Heading & Introduction */}
      <EcommerceHeroSection />

      {/* 2. 40 E-commerce Capabilities in Centered, Zoom-Enhanced 3-Box-Per-Row Grid */}
      <EcommerceServicesSection />

      {/* 3. Customer Support & Rapid Consultation Section */}
      <CustomerSupportSection />
    </div>
  );
}
