import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import { ArticleHeroSection } from "@/components";
import {
  createPageMetadata,
  generateArticleJsonLd,
  generateBreadcrumbJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "5 Things Websites Need in 2025",
  description:
    "Discover the 5 critical features every small business website needs in 2025: lightning speed, trust signals, seamless lead funnels, and CRM automation.",
  path: "/small-business-website-needs-2025",
  image: "/images/Man-Working-At-Laptop-768x768.png",
  type: "article",
  publishedTime: "2025-01-03T08:00:00Z",
  modifiedTime: "2025-01-03T08:00:00Z",
  authorName: "Abner Hill",
  authorUrl: "https://abtelcloudservices.com/author/abner/",
  section: "Digital Growth",
  keywords: [
    "small business website needs 2025",
    "website speed optimization",
    "lead capture conversion funnels",
    "website security trust signals",
    "Abtel Cloud Services blog",
  ],
});

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  {
    name: "5 Things Every Small Business Website Needs in 2025",
    path: "/small-business-website-needs-2025",
  },
]);

const articleJsonLd = generateArticleJsonLd({
  title: "5 Things Every Small Business Website Needs in 2025",
  headline: "5 Things Every Small Business Website Needs in 2025",
  description:
    "The digital landscape is evolving faster than ever. In 2025, your website is your storefront, salesperson, and support hub.",
  path: "/small-business-website-needs-2025",
  image: "/images/Man-Working-At-Laptop-768x768.png",
  datePublished: "2025-01-03T08:00:00Z",
  dateModified: "2025-01-03T08:00:00Z",
  authorName: "Abner Hill",
  authorUrl: "https://abtelcloudservices.com/author/abner/",
  authorRole: "Senior Solutions Architect",
  section: "Digital Growth",
  wordCount: 1050,
  keywords: [
    "small business website needs 2025",
    "website speed optimization",
    "lead capture conversion funnels",
    "website security trust signals",
    "Abtel Cloud Services blog",
  ],
});

export default function SmallBusinessWebsiteNeeds2025Page() {
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
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      {/* 1. Enhanced Tall Hero Section with Dynamic Background Image & High Clarity */}
      <ArticleHeroSection
        title="5 Things Every Small Business Website Needs in 2025"
        category="Digital Growth"
        backgroundImage="/images/Man-Working-At-Laptop-768x768.png"
        date="January 3, 2025"
        isoDate="2025-01-03"
        readTime="4 min read"
        author={{
          name: "Abner Hill",
          avatar: "/images/Abner Hill.png",
          role: "Cloud & Solutions Architect",
        }}
      />

      {/* 2. Main Article Body */}
      <article className="relative w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="relative z-10 mx-auto w-full max-w-[960px] px-4 sm:px-6 lg:px-8">
          {/* Back to Blog Navigation */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to all insights</span>
            </Link>
          </div>

          {/* Lead Section */}
          <div>
            <p className="text-lg leading-relaxed text-slate-700">
              The digital landscape is evolving faster than ever. For small businesses, your website is no longer merely an online business card—it is your{" "}
              <strong className="text-[#0F172A]">digital storefront</strong>, your{" "}
              <strong className="text-[#0F172A]">primary salesperson</strong>, and your{" "}
              <strong className="text-[#0F172A]">customer support hub</strong> all rolled into one integrated system.
            </p>

            <p className="mt-4 text-[17px] leading-relaxed text-slate-600">
              In 2025, consumer expectations have reached an all-time high. Users demand instantaneous loading, verified security credentials, and effortless conversion pathways. If your platform isn’t delivering, you are leaving valuable clients and revenue on the table.
            </p>
          </div>

          {/* Section Heading */}
          <h2 className="mt-12 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">
            Here are five things every modern small business website needs in 2025:
          </h2>

          {/* 5 Points Cards */}
          <div className="mt-8 space-y-10">
            {/* 1. Speed & Mobile Optimization */}
            <div className="rounded-2xl border border-slate-200 p-6 sm:p-8 bg-slate-50/50 shadow-xs">
              <div className="flex items-center gap-3 text-[#0284C7]">
                <div className="rounded-lg bg-sky-100 p-2 text-[#0284C7]">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] sm:text-2xl">
                  1. Lightning-Fast Performance &amp; Mobile-First Architecture
                </h3>
              </div>
              <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
                Speed is completely non-negotiable. With Google’s Core Web Vitals directly impacting search rankings, a website taking longer than 2.5 seconds to load loses over 50% of its mobile visitors before they even read your headline.
              </p>
              <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50/70 p-4 text-sm text-slate-700">
                <strong>2025 Benchmark:</strong> Over 64% of global web traffic originates on mobile devices. Abtel Cloud Services utilizes modern edge CDN caching and next-gen WebP/AVIF image pipelines to guarantee sub-2-second loading worldwide.
              </div>
            </div>

            {/* 2. Strong Security & Trust Signals */}
            <div className="rounded-2xl border border-slate-200 p-6 sm:p-8 bg-slate-50/50 shadow-xs">
              <div className="flex items-center gap-3 text-emerald-600">
                <div className="rounded-lg bg-emerald-100 p-2 text-emerald-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] sm:text-2xl">
                  2. Strong Security Credentials &amp; Trust Signals
                </h3>
              </div>
              <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
                Cybersecurity awareness among everyday consumers is at an all-time peak. A website lacking visible security signals instantly triggers bounce behavior:
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-2.5 rounded-lg border border-slate-200/90 bg-white p-3.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">Automated SSL / TLS 1.3 encryption</span>
                </div>
                <div className="flex items-start gap-2.5 rounded-lg border border-slate-200/90 bg-white p-3.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">Transparent GDPR &amp; CCPA privacy compliance</span>
                </div>
                <div className="flex items-start gap-2.5 rounded-lg border border-slate-200/90 bg-white p-3.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">Two-factor authentication for administrative backends</span>
                </div>
                <div className="flex items-start gap-2.5 rounded-lg border border-slate-200/90 bg-white p-3.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">Verified client reviews and case study highlights</span>
                </div>
              </div>
            </div>

            {/* 3. Seamless Lead Capture */}
            <div className="rounded-2xl border border-slate-200 p-6 sm:p-8 bg-slate-50/50 shadow-xs">
              <div className="flex items-center gap-3 text-[var(--primary)]">
                <div className="rounded-lg bg-sky-100 p-2 text-[var(--primary)]">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] sm:text-2xl">
                  3. Seamless Lead Capture &amp; Frictionless Funnels
                </h3>
              </div>
              <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
                Every visitor who lands on your site is a potential client, provided you offer clear, effortless next steps. Modern websites treat every single page as an intentional conversion funnel:
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                  <span>Single-step mobile contact forms with instant client-side validation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                  <span>Integrated calendar booking widgets (Calendly, Cal.com) for instantaneous consultations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                  <span>High-contrast Call-to-Action (CTA) buttons with clear value-oriented copy</span>
                </li>
              </ul>
            </div>

            {/* 4. Marketing & Automation */}
            <div className="rounded-2xl border border-slate-200 p-6 sm:p-8 bg-slate-50/50 shadow-xs">
              <div className="flex items-center gap-3 text-purple-600">
                <div className="rounded-lg bg-purple-100 p-2 text-purple-600">
                  <Workflow className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] sm:text-2xl">
                  4. Integrated Marketing &amp; Automation Pipelines
                </h3>
              </div>
              <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
                In 2025, competitive small businesses scale by automating operational friction. When inquiry forms seamlessly integrate into your CRM (HubSpot, Salesforce, Zoho), new leads trigger automated SMS confirmations, CRM deal creation, and sales team alerts in real time.
              </p>
            </div>

            {/* 5. Authentic Content */}
            <div className="rounded-2xl border border-slate-200 p-6 sm:p-8 bg-slate-50/50 shadow-xs">
              <div className="flex items-center gap-3 text-indigo-600">
                <div className="rounded-lg bg-indigo-100 p-2 text-indigo-600">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] sm:text-2xl">
                  5. Authentic, High-Value Content &amp; Case Studies
                </h3>
              </div>
              <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
                Generic stock photography and placeholder copy no longer convert modern buyers. Visitors want transparent evidence of your team’s expertise, technical capabilities, and real-world results through detailed case studies, architectural breakdowns, and helpful engineering guides.
              </p>
            </div>
          </div>

          {/* Author Bio Box */}
          <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-7">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-[var(--primary)] shadow-sm">
                <Image
                  src="/images/Abner Hill.png"
                  alt="Abner Hill"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h4 className="text-lg font-bold text-[#0F172A]">Written by Abner Hill</h4>
                  <span className="text-xs font-semibold text-[var(--primary)]">Solutions Architect</span>
                </div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Abner Hill is a Senior Solutions Architect at Abtel Cloud Services, specializing in enterprise cloud architecture, high-performance web systems, and small business digital modernization.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Banner */}
          <div className="mt-16 rounded-2xl border border-white/10 bg-[var(--bg-dark)] p-8 text-white shadow-xl sm:p-10">
            <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Equip Your Business for 2025 Success
            </h3>
            <p className="mt-3 text-sm text-slate-300 sm:text-base leading-relaxed max-w-2xl">
              At Abtel Cloud Services, we engineer websites that are fast, secure, and built from the ground up to convert visitors into loyal clients.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group/btn relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[var(--brand-royal)] to-[var(--brand-sky)] px-7 text-sm font-bold uppercase tracking-wider text-white shadow-[0_6px_20px_rgba(42,103,174,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(34,199,242,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
                />
                <span className="relative z-10 flex items-center text-white">
                  <span>Schedule a Strategy Session</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1.5" />
                </span>
              </Link>
              <Link
                href="/gallery"
                className="group/btn2 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:bg-[var(--primary)]/20"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover/btn2:translate-x-full"
                />
                <span className="relative z-10 flex items-center text-white">
                  <span>View Website Templates</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Related Articles Navigation (Clean Short Slugs in SAME TAB) */}
          <div className="mt-16 border-t border-[var(--border-light)] pt-12">
            <h3 className="text-xl font-bold tracking-tight text-[var(--text-dark)]">
              Related Articles
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Link
                href="/roi-professional-website"
                className="group flex flex-col justify-between rounded-[20px] border border-[var(--border-light)] p-6 transition-all hover:border-[var(--primary)]/50 hover:shadow-lg card-soft-shadow"
              >
                <div>
                  <span className="text-xs font-bold text-[var(--primary)]">Business Strategy</span>
                  <h4 className="mt-2 text-base font-bold text-[var(--text-dark)] group-hover:text-[var(--primary)] transition-colors">
                    The ROI of a Professional Website
                  </h4>
                  <p className="mt-2 text-xs text-[var(--text-muted)] line-clamp-2">
                    Learn how a strategic website turns visitors into loyal customers and multiplies your ROI.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[var(--primary)]">
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                href="/why-diy-website-builders-cost-more"
                className="group flex flex-col justify-between rounded-[20px] border border-[var(--border-light)] p-6 transition-all hover:border-[var(--primary)]/50 hover:shadow-lg card-soft-shadow"
              >
                <div>
                  <span className="text-xs font-bold text-[var(--primary)]">Web Development</span>
                  <h4 className="mt-2 text-base font-bold text-[var(--text-dark)] group-hover:text-[var(--primary)] transition-colors">
                    Why DIY Website Builders Cost You More in the Long Run
                  </h4>
                  <p className="mt-2 text-xs text-[var(--text-muted)] line-clamp-2">
                    Discover how hidden costs, SEO limitations, and rigid templates hurt small business growth.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[var(--primary)]">
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
