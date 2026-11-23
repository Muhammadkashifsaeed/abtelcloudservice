import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { AboutWhoWeAreSection } from "@/components/AboutWhoWeAreSection";
import { OurStorySection } from "@/components/OurStorySection";
import { WhyChooseUsSection, type WhyChooseFeatureCard } from "@/components/WhyChooseUsSection";
import { AboutCustomersSection } from "@/components/AboutCustomersSection";
import { CurvedUnderline } from "@/components/ui/CurvedUnderline";
import { createPageMetadata, generateBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Us | Global Software Engineers",
  description:
    "Learn about Abtel Cloud Services: an experienced team of software engineers and cloud architects delivering scalable digital solutions worldwide.",
  path: "/about",
  keywords: [
    "about abtel cloud services",
    "software development company",
    "cloud consulting team",
    "enterprise IT partner",
    "agile software engineers",
  ],
});

const ABOUT_WHY_CHOOSE_CARDS: WhyChooseFeatureCard[] = [
  {
    title: "Smart & secure system",
    description:
      "Web applications with advanced features for enhanced usability and safety.",
    imageSrc: "/images/Smart%20%26%20secure%20system.png",
    imageWidth: 54,
    imageHeight: 54,
  },
  {
    title: "24/7 Premium Support",
    description:
      "Enjoy peace of mind with our 24/7 Premium Support, your web services run smoothly at all times.",
    imageSrc: "/images/24%207%20Premium%20Support.png",
    imageWidth: 54,
    imageHeight: 54,
  },
  {
    title: "Professional team",
    description: "Our web developers have a genuine passion for their work",
    imageSrc: "/images/Professional%20team.png",
    imageWidth: 54,
    imageHeight: 54,
  },
  {
    title: "Open communication",
    description:
      "Total transparency and open communication are our trademarks.",
    imageSrc: "/images/Open%20communication.png",
    imageWidth: 54,
    imageHeight: 54,
  },
];

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
]);

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Abtel Cloud Services",
  description:
    "Abtel Cloud Services recruits versatile developers and technical experts who understand and meet your project's unique requirements.",
  url: `${SITE_URL}/about`,
};

export default function AboutPage() {
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
          __html: JSON.stringify(aboutPageJsonLd),
        }}
      />

      {/* 1. Page Hero Banner */}
      <PageHeroBanner
        badge="Software Consulting & Engineering"
        title="We Build Software That Drives Business Growth"
        description="Abtel Cloud Services is an engineering collective based in San Antonio, Texas, dedicated to modern web architectures, enterprise cloud computing, and custom digital platforms."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* 2. Who We Are Section (Right side image with 10+ Years Experience badge) */}
      <AboutWhoWeAreSection />

      {/* 3. Container in between: Our Story Section (A Trusted Team of Software Developers, 150+ Clients, 96% Retention, 10+ Years) */}
      <OurStorySection backgroundImage="/images/it-engineer-specialist.jpg" />

      {/* 4. Why Choose Us Section with exact 4 cards & Learn more linking to /services */}
      <WhyChooseUsSection
        eyebrow="Why Choose us"
        heading="Built-With-Experience, Scalable Websites"
        description="We create lightning-fast, SEO-friendly user interfaces using cutting-edge technologies that perform flawlessly across all devices. Our expertise in both monolithic and micro-frontend solutions ensures performance and scalability, delivering smooth user experiences and high conversion rates."
        ctaHref="/services"
        cards={ABOUT_WHY_CHOOSE_CARDS}
      />

      {/* 5. Enhanced High-Converting Consultation CTA Banner (Placed Above Happy Customers) */}
      <section className="relative w-full overflow-hidden border-y border-white/[0.08] bg-gradient-to-b from-[#071428] via-[#0B1F3A] to-[#071428] py-20 sm:py-24 text-white">
        {/* Subtle Ambient Glow Orb */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-cyan)]/12 blur-[130px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-cyan)] backdrop-blur-md shadow-[0_0_15px_rgba(34,199,242,0.25)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-cyan)] animate-pulse" />
            <span>Ready to Accelerate?</span>
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl leading-[1.18] text-white">
            Let&apos;s Build Your Next Digital Product{" "}
            <span className="relative inline-block text-[var(--brand-cyan)]">
              Together
              <CurvedUnderline color="#22C7F2" />
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed">
            Schedule a 30-minute discovery call with our engineering leads to discuss your requirements, timeline, and architecture.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://calendly.com/abtelcloud/30min"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#22C7F2] px-8 text-sm font-bold text-white shadow-[0_10px_30px_rgba(34,199,242,0.4)] transition-all duration-300 hover:shadow-[0_14px_40px_rgba(34,199,242,0.6)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
              />
              <span className="relative z-10 flex items-center gap-2">
                <span>Book 30-Min Consultation</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>

            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10 hover:-translate-y-0.5"
            >
              <span>Contact Our Team</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Join our 30,000 happy customers with borderless continuous company partner logos */}
      <AboutCustomersSection />
    </div>
  );
}
