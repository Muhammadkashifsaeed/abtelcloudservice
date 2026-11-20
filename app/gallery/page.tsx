import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GalleryHeroSection } from "@/components";
import {
  createPageMetadata,
  generateBreadcrumbJsonLd,
  SITE_URL,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Portfolio Gallery | Website Templates",
  description:
    "Explore our live website templates and turnkey digital platforms built by Abtel Cloud Services for healthcare, cybersecurity, e-commerce, and SaaS.",
  path: "/gallery",
  keywords: [
    "website templates",
    "turnkey website platforms",
    "software portfolio",
    "Med Tech Solutions",
    "Shieldbyte Solutions",
    "Vista Cart Solutions",
    "Solar Flux Energy",
    "web development agency showcase",
  ],
});

interface WebsiteTemplateItem {
  id: string;
  title: string;
  url: string;
  domain: string;
  image: string;
  description: string;
}

const WEBSITE_TEMPLATES: WebsiteTemplateItem[] = [
  {
    id: "med-tech-solutions",
    title: "Med Tech Solutions",
    url: "https://www.medtechsolutions.abtelcloud.com/",
    domain: "medtechsolutions.abtelcloud.com",
    image: "/images/TVstartup1.png",
    description:
      "System is a term used to refer to an organized collection symbols and processes that may be used to operate on such symbols. Perspiciatis omnis natus error voupems accusa",
  },
  {
    id: "shieldbyte-solutions",
    title: "Shieldbyte Solutions",
    url: "http://shieldbyte.abtelcloud.com/",
    domain: "shieldbyte.abtelcloud.com",
    image: "/images/TVstartup2.png",
    description:
      "Nam libero tempore, cum soluta nobis eligendi optio cumque quo minus quod maxime placeat facere possimus assumenda omnis dolor repellendu sautem Temporibus quibusdam et aut officiis nam libero tempore",
  },
  {
    id: "vista-cart-solutions",
    title: "Vista Cart Solutions",
    url: "https://www.vistacart.abtelcloud.com/",
    domain: "vistacart.abtelcloud.com",
    image: "/images/TVstartup3.png",
    description:
      "In eu mi bibendum neque. Enim nec dui nunc mattis. A diam maecenas sed enim. Praesent elementum facilisis leo vel. Adipiscing elit ut aliquam purus sit amet luctus venenatis aliquet at elementum.",
  },
  {
    id: "solar-flux-energy",
    title: "Solar Flux Energy",
    url: "https://www.solarfluxenergy.abtelcloud.com/",
    domain: "solarfluxenergy.abtelcloud.com",
    image: "/images/TVstartup4.png",
    description:
      "Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua. Ut enim ad minim veniam, quisq wiusmod ut tempor incididunt ut labore et dolore sed do magna aliqua.",
  },
  {
    id: "pinnacle-wealth-partners",
    title: "Pinnacle Wealth Partners",
    url: "http://pinnaclewealthpartners.abtelcloud.com/",
    domain: "pinnaclewealthpartners.abtelcloud.com",
    image: "/images/TVstartup5.png",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.",
  },
  {
    id: "aerius-space-works",
    title: "Aerius Space Works",
    url: "https://www.aeriusspaceworks.abtelcloud.com/",
    domain: "aeriusspaceworks.abtelcloud.com",
    image: "/images/TVstartup6.png",
    description:
      "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore sed do magna aliqua. Ut enim ad minim veniam, quis nostrud. Wiusmod tempor incididunt.",
  },
];

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
]);

const galleryItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Website Templates & Industry Platform Showcase",
  description:
    "Curated collection of live turnkey website solutions designed and developed by Abtel Cloud Services.",
  numberOfItems: WEBSITE_TEMPLATES.length,
  itemListElement: WEBSITE_TEMPLATES.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.title,
    url: item.url,
    description: item.description,
    image: `${SITE_URL}${item.image}`,
  })),
};

export default function GalleryPage() {
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
          __html: JSON.stringify(galleryItemListJsonLd),
        }}
      />
      {/* 1. Hero Section with Home Background, Centered Zooming Logo & Big WEBSITE TEMPLATES Title */}
      <GalleryHeroSection />

      {/* 2. 6 Large Templates in 2 Columns Grid */}
      <section className="relative w-full bg-[#F8FAFC] py-14 sm:py-18 lg:py-24">
        {/* Subtle geometric pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-40"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {/* Section Sub-header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#0284C7]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
              <span>Modern Turnkey Solutions</span>
            </div>
            <h2 className="mt-3.5 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[42px]">
              Ready-to-Deploy Industry Platforms
            </h2>
            <p className="mt-3.5 text-base leading-relaxed text-[#475569] sm:text-lg">
              Explore our curated portfolio of bespoke digital platforms, medical portals, cybersecurity systems, and modern e-commerce storefronts.
            </p>
          </div>

          {/* 6 Large Template Cards: 2 Columns on md+ */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10 xl:gap-12">
            {WEBSITE_TEMPLATES.map((item, index) => (
              <article
                key={item.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00D4FF]/60 hover:shadow-[0_20px_48px_rgba(0,212,255,0.18)]"
              >
                {/* Browser Mockup Top Bar */}
                <div className="flex items-center justify-between border-b border-slate-100 bg-[#F1F5F9]/80 px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300 transition-colors group-hover:bg-[#EF4444]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300 transition-colors group-hover:bg-[#F59E0B]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300 transition-colors group-hover:bg-[#10B981]" />
                  </div>
                  <span className="truncate px-2 font-mono text-[11px] font-medium text-slate-500">
                    {item.domain}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/70 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Template 0{index + 1}</span>
                  </span>
                </div>

                {/* Large Preview Screenshot with Live Link */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open live preview for ${item.title}`}
                  className="relative block aspect-[16/9] w-full overflow-hidden bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle hover sweep overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0A0E33]/85 via-[#0A0E33]/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center"
                  >
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#0A0E33] shadow-lg">
                      <span>View Live Site</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </a>

                {/* Content Details */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Heading Link */}
                  <h3 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#0F172A] transition-colors hover:text-[#246BFD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#246BFD]"
                    >
                      <span>{item.title}</span>
                      <ExternalLink
                        className="h-4 w-4 shrink-0 text-[#246BFD] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </h3>

                  {/* Description Paragraph */}
                  <p className="mt-3.5 flex-1 text-[15px] leading-relaxed text-[#475569] sm:text-base">
                    {item.description}
                  </p>

                  {/* Bottom Action Row */}
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cut group/btn relative inline-flex h-[42px] items-center justify-center overflow-hidden bg-[#246BFD] px-6 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(36,107,253,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,212,255,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover/btn:translate-x-0"
                      />
                      <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-[#0B0E2E]">
                        <span>Visit Website</span>
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </a>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden text-xs font-semibold uppercase tracking-wider text-slate-400 transition-colors hover:text-[#0284C7] sm:inline-flex items-center gap-1"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
