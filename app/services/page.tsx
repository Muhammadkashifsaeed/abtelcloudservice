import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CustomerSupportSection } from "@/components/CustomerSupportSection";
import { Reveal } from "@/components/motion/Reveal";
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

      {/* 1. Page Hero Banner */}
      <PageHeroBanner
        badge="Enterprise Capabilities"
        title="Web Development Services"
        highlightWord="Services"
        description="At Abtel Cloud Services, we offer comprehensive website and web app development services tailored to meet your specific needs. Our team of experienced developers and designers is dedicated to delivering high-quality, innovative solutions that drive your business forward. Here’s how we can help"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* 2. Overview Intro Section */}
      <section className="relative w-full bg-[var(--bg-light)] py-16 border-b border-[var(--border-light)]">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-[22px] border border-[var(--border-light)] bg-white p-6 card-soft-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary-light)] text-[var(--primary)] font-bold">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[var(--text-dark)]">Modern Architecture</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
                Headless Next.js, React microservices, and serverless backends built for sub-second speeds.
              </p>
            </div>

            <div className="rounded-[22px] border border-[var(--border-light)] bg-white p-6 card-soft-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--secondary-light)] text-[var(--text-dark)] font-bold">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[var(--text-dark)]">Zero-Trust Security</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
                Enterprise cloud standards, automated dependency scanning, and zero-trust authentication.
              </p>
            </div>

            <div className="rounded-[22px] border border-[var(--border-light)] bg-white p-6 card-soft-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--success-light)] text-[var(--success)] font-bold">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[var(--text-dark)]">Agile Sprint Velocity</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
                Bi-weekly deliverables, staging previews, and direct Slack communication with engineering leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Services Grid */}
      <ServicesSection />

      {/* 4. 4-Step Engineering Timeline */}
      <ProcessSection />

      {/* 5. Customer Support & Rapid Consultation */}
      <CustomerSupportSection />
    </div>
  );
}
