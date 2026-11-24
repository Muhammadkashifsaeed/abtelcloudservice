import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import { ArticleHeroSection } from "@/components";
import {
  createPageMetadata,
  generateArticleJsonLd,
  generateBreadcrumbJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "The ROI of a Professional Website",
  description:
    "Discover the true ROI of a professional website. Learn how custom web engineering drives leads, boosts conversions, and pays for itself over time.",
  path: "/roi-professional-website",
  image: "/images/The-ROI-of-a-Professional-Website.png",
  type: "article",
  publishedTime: "2025-04-04T08:00:00Z",
  modifiedTime: "2025-04-04T08:00:00Z",
  authorName: "Abner Hill",
  authorUrl: "https://abtelcloudservices.com/author/abner/",
  section: "Business Strategy",
  keywords: [
    "ROI of a professional website",
    "custom web development ROI",
    "websites that convert leads",
    "business website essentials",
    "Abtel Cloud Services blog",
  ],
});

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  {
    name: "The ROI of a Professional Website",
    path: "/roi-professional-website",
  },
]);

const articleJsonLd = generateArticleJsonLd({
  title: "The ROI of a Professional Website",
  headline: "The ROI of a Professional Website: Why Your Business Can't Afford to Settle",
  description:
    "Discover the true ROI of a professional website. Learn how custom web engineering drives leads, boosts conversions, and pays for itself over time.",
  path: "/roi-professional-website",
  image: "/images/The-ROI-of-a-Professional-Website.png",
  datePublished: "2025-04-04T08:00:00Z",
  dateModified: "2025-04-04T08:00:00Z",
  authorName: "Abner Hill",
  authorUrl: "https://abtelcloudservices.com/author/abner/",
  authorRole: "Senior Solutions Architect",
  section: "Business Strategy",
  wordCount: 1100,
  keywords: [
    "ROI of a professional website",
    "custom web development ROI",
    "websites that convert leads",
    "business website essentials",
    "Abtel Cloud Services blog",
  ],
});

export default function ProfessionalWebsiteRoiPage() {
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
        title="The ROI of a Professional Website"
        category="Business Strategy"
        backgroundImage="/images/The-ROI-of-a-Professional-Website.png"
        date="April 4, 2025"
        isoDate="2025-04-04"
        readTime="5 min read"
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

          {/* Key ROI Metrics Callout Grid */}
          <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 shadow-xs">
              <div className="flex items-center gap-2 text-[var(--primary)]">
                <TrendingUp className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Conversion Boost</span>
              </div>
              <div className="mt-2 text-3xl font-extrabold text-[var(--text-dark)]">+240%</div>
              <p className="mt-1 text-xs text-[var(--text-muted)]">Higher lead-to-opportunity rate vs. templated sites</p>
            </div>

            <div className="rounded-2xl border border-amber-200/80 bg-amber-50/60 p-5 shadow-xs">
              <div className="flex items-center gap-2 text-amber-700">
                <Zap className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Performance</span>
              </div>
              <div className="mt-2 text-3xl font-extrabold text-[var(--text-dark)]">&lt; 1.8s</div>
              <p className="mt-1 text-xs text-[var(--text-muted)]">Average page speed across all global mobile devices</p>
            </div>

            <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/60 p-5 shadow-xs">
              <div className="flex items-center gap-2 text-[var(--success)]">
                <BarChart3 className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Compounding ROI</span>
              </div>
              <div className="mt-2 text-3xl font-extrabold text-[var(--text-dark)]">3.8x</div>
              <p className="mt-1 text-xs text-[var(--text-muted)]">Net return over a 3-year digital lifecycle</p>
            </div>
          </div>

          {/* Lead Section */}
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl lg:text-4xl">
              Why Your Business Can’t Afford to Settle
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              In today’s digital-first economy, your website is not an online business card—it is your{" "}
              <strong className="text-[#0F172A]">24/7 salesperson</strong>, your{" "}
              <strong className="text-[#0F172A]">brand ambassador</strong>, and your primary{" "}
              <strong className="text-[#0F172A]">customer acquisition engine</strong>. Yet, an alarming number of businesses continue relying on sluggish, cookie-cutter website builders that quietly leak revenue each month.
            </p>

            <p className="mt-4 text-[17px] leading-relaxed text-slate-600">
              At <strong className="text-slate-800">Abtel Cloud Services</strong>, we engineer web platforms specifically designed to attract high-intent traffic, build immediate credibility, and convert visits into pipeline revenue.
            </p>
          </div>

          {/* Highlighted Quote Callout */}
          <div className="my-10 rounded-r-2xl border-l-4 border-[var(--primary)] bg-gradient-to-r from-sky-50/70 via-sky-50/30 to-transparent p-6 sm:p-8">
            <p className="text-lg font-semibold italic text-[#0F172A] sm:text-xl leading-relaxed">
              “A custom website isn’t an operational expense—it is a high-yield asset. When engineered with precision, every dollar invested in speed, design, and user psychology returns multiples in customer lifetime value.”
            </p>
          </div>

          {/* Section: Why ROI Matters */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold tracking-tight text-[#0F172A] sm:text-[28px]">
              Why ROI Matters in Web Engineering
            </h3>
            <p className="mt-3.5 text-[16.5px] leading-relaxed text-slate-600">
              Many teams view web design purely through an aesthetic lens. But true ROI comes from quantifiable business outcomes:
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Driving Organic Search Dominance (SEO)",
                  desc: "Custom clean code, schema markup, and Core Web Vitals compliance help you rank ahead of competitors on high-value commercial keywords.",
                },
                {
                  title: "Frictionless Lead Funnels & Form Completion",
                  desc: "Streamlined mobile forms, autofill optimizations, and instant validation increase submission rates by removing micro-frustrations.",
                },
                {
                  title: "Enhanced Trust & Enterprise Credibility",
                  desc: "First impressions are formed in 50 milliseconds. A bespoke, polished UI establishes authority and justifies premium pricing.",
                },
                {
                  title: "Lower Long-Term Churn & Higher Retention",
                  desc: "Fast portals, intuitive client dashboards, and responsive self-service workflows keep existing clients satisfied and renewing.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 rounded-xl border border-slate-200/80 p-4 transition-all hover:border-[var(--primary)]/50 hover:bg-slate-50/50"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--success)]" />
                  <div>
                    <h4 className="text-base font-bold text-[#0F172A]">{item.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: DIY vs Professional */}
          <div className="mt-14">
            <h3 className="text-2xl font-bold tracking-tight text-[#0F172A] sm:text-[28px]">
              DIY vs. Professional Web Design: The Hidden Costs
            </h3>
            <p className="mt-3 text-[16.5px] leading-relaxed text-slate-600">
              Templated platforms like Wix or basic Shopify themes advertise ease of entry. But the true costs emerge shortly after launch:
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-xs">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <tr>
                    <th className="px-5 py-4">Evaluation Dimension</th>
                    <th className="px-5 py-4 text-red-600">Templated DIY Platform</th>
                    <th className="px-5 py-4 text-emerald-600 font-bold">Abtel Professional Build</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-5 py-3.5 font-semibold text-slate-800">Mobile Speed (LCP)</td>
                    <td className="px-5 py-3.5 text-slate-500">3.5s – 6.0s (Heavy plugins)</td>
                    <td className="px-5 py-3.5 font-bold text-emerald-600">&lt; 1.8s (Zero bloat)</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-semibold text-slate-800">SEO Technical Freedom</td>
                    <td className="px-5 py-3.5 text-slate-500">Restricted scripts &amp; urls</td>
                    <td className="px-5 py-3.5 font-bold text-emerald-600">Full control &amp; JSON-LD</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-semibold text-slate-800">Custom API &amp; CRM Sync</td>
                    <td className="px-5 py-3.5 text-slate-500">Fragile zapier workarounds</td>
                    <td className="px-5 py-3.5 font-bold text-emerald-600">Native enterprise endpoints</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-semibold text-slate-800">Scalability Bottleneck</td>
                    <td className="px-5 py-3.5 text-slate-500">Rebuild required at scale</td>
                    <td className="px-5 py-3.5 font-bold text-emerald-600">Modular cloud architecture</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section: Websites That Work While You Sleep */}
          <div className="mt-14">
            <h3 className="text-2xl font-bold tracking-tight text-[#0F172A] sm:text-[28px]">
              Websites That Work While You Sleep
            </h3>
            <p className="mt-3 text-[16.5px] leading-relaxed text-slate-600">
              When Abtel Cloud Services architects your digital presence, we implement a four-pillar growth engine:
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-[var(--brand-lime)]">
                  <Cpu className="h-5 w-5" />
                </div>
                <h4 className="mt-3 text-base font-bold text-[#0F172A]">Sub-Second Cloud Architecture</h4>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  Edge deployment, server-side caching, and modern asset compression keep bounce rates below 15%.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-[var(--brand-lime)]">
                  <Layers className="h-5 w-5" />
                </div>
                <h4 className="mt-3 text-base font-bold text-[#0F172A]">Frictionless Funnel Engineering</h4>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  Every page guides visitors toward a high-value action with strategic visual hierarchy and micro-interactions.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h4 className="mt-3 text-base font-bold text-[#0F172A]">Enterprise Security &amp; Compliance</h4>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  Automated backups, TLS 1.3 encryption, and GDPR/CCPA privacy compliance protect customer data and brand equity.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <h4 className="mt-3 text-base font-bold text-[#0F172A]">Real-Time ROI Analytics</h4>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  Transparent event tracking and conversion analytics allow you to quantify customer acquisition costs accurately.
                </p>
              </div>
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
                  Abner Hill is a Senior Solutions Architect at Abtel Cloud Services, specializing in cloud-native application development, high-conversion enterprise web engineering, and technical ROI optimization for growing businesses.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Banner */}
          <div className="mt-16 rounded-2xl border border-white/10 bg-[var(--bg-dark)] p-8 text-white shadow-xl sm:p-10">
            <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Ready to See Your Website ROI Multiply?
            </h3>
            <p className="mt-3 text-sm text-slate-300 sm:text-base leading-relaxed max-w-2xl">
              Don’t settle for an underperforming website. Let our engineering team build a scalable, high-converting digital platform tailored to your revenue goals.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-sheen group/btn relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[var(--brand-lime)] px-7 text-sm font-black uppercase tracking-wider text-white shadow-[0_6px_20px_rgba(14, 71, 57,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-lime-hover)] hover:shadow-[0_10px_28px_rgba(14, 71, 57,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                <span className="relative z-10 flex items-center text-black">
                  <span>Schedule a Project Consultation</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1.5" />
                </span>
              </Link>
              <Link
                href="/services"
                className="group/btn2 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-lime)] hover:bg-[var(--brand-lime)]/20 hover:text-[var(--brand-lime)]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover/btn2:translate-x-full"
                />
                <span className="relative z-10 flex items-center text-white">
                  <span>View Our Services</span>
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
                href="/why-diy-website-builders-cost-more"
                className="group flex flex-col justify-between rounded-[20px] border border-[var(--border-light)] p-6 transition-all hover:border-[var(--primary)]/50 hover:shadow-lg card-soft-shadow"
              >
                <div>
                  <span className="text-xs font-bold text-[var(--primary)]">Web Development</span>
                  <h4 className="mt-2 text-base font-bold text-[var(--text-dark)] group-hover:text-[var(--primary)] transition-colors">
                    Why DIY Website Builders Cost You More in the Long Run
                  </h4>
                  <p className="mt-2 text-xs text-[var(--text-muted)] line-clamp-2">
                    Discover how hidden recurring costs, SEO roadblocks, and rigid templates hurt small business growth.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[var(--primary)]">
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                href="/small-business-website-needs-2025"
                className="group flex flex-col justify-between rounded-[20px] border border-[var(--border-light)] p-6 transition-all hover:border-[var(--primary)]/50 hover:shadow-lg card-soft-shadow"
              >
                <div>
                  <span className="text-xs font-bold text-[var(--primary)]">Digital Growth</span>
                  <h4 className="mt-2 text-base font-bold text-[var(--text-dark)] group-hover:text-[var(--primary)] transition-colors">
                    5 Things Every Small Business Website Needs in 2025
                  </h4>
                  <p className="mt-2 text-xs text-[var(--text-muted)] line-clamp-2">
                    Speed benchmarks, trust signals, and lead conversion pathways essential for modern digital success.
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
