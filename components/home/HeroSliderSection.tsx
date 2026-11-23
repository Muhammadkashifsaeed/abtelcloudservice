"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Clock,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { CurvedUnderline } from "@/components/ui/CurvedUnderline";

const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: "10+ Years Experience",
    desc: "Established custom software engineering and enterprise cloud partner.",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    icon: Users,
    title: "150+ Clients Worldwide",
    desc: "Trusted by founders and product leaders across diverse industries.",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    icon: Clock,
    title: "24/7 Dedicated Support",
    desc: "Direct engineering contact, proactive monitoring, and predictable milestones.",
    gradient: "from-amber-500 to-orange-500",
  },
];

export function HeroSliderSection() {
  return (
    <section
      aria-label="Abtel Cloud Services - Web Development Services & Software Consulting"
      className="relative min-h-[86vh] w-full overflow-hidden bg-gradient-to-b from-[#071428] via-[#0B1F3A] to-[#071428] text-white flex flex-col justify-between"
    >
      {/* Background: Solid corporate lighting matching ACS Navy Logo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[var(--brand-royal)]/15 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[450px] w-[450px] rounded-full bg-[var(--brand-cyan)]/15 blur-[150px]" />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1360px] flex-1 items-center px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 w-full">
          {/* Left Column: Clean High-Contrast Headline & CTAs (Fade Left) */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Eyebrow Badge (Fade Down) */}
            <Reveal variant="fade-down" delay={0.05}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-950/40 px-4 py-1.5 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-[var(--brand-cyan)] animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-cyan)]">
                  WEB DEVELOPMENT SERVICES
                </span>
              </div>
            </Reveal>

            {/* Main Headline: Software Consulting and Development (Fade Left) */}
            <Reveal variant="fade-left" delay={0.12} className="w-full">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.12] text-balance">
                Software Consulting and{" "}
                <span className="relative inline-block text-[var(--brand-cyan)]">
                  Development
                  {/* Signature Thinner Curved Marker Underline */}
                  <CurvedUnderline color="#22C7F2" />
                </span>
              </h1>
            </Reveal>

            {/* Subtext: Authentic Client Mission Statement (Fade Left) */}
            <Reveal variant="fade-left" delay={0.2} className="w-full">
              <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300">
                Our dedicated team is fully committed to providing exceptional service,
                no matter where you are, ensuring you achieve your desired results.
              </p>
            </Reveal>

            {/* Action Buttons (Fade Left - Left Column) */}
            <Reveal variant="fade-left" delay={0.28}>
              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                {/* Button 1: Primary Get Started Action Linking to Calendly (Same Tab) */}
                <a
                  href="https://calendly.com/abtelcloud/30min"
                  className="btn-sheen group/btn relative inline-flex h-[54px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#22C7F2] px-8 text-base font-bold text-white shadow-[0_6px_24px_rgba(34,199,242,0.45)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_32px_rgba(34,199,242,0.65)] hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </span>
                </a>

                {/* Button 2: Secondary Gallery Action */}
                <Link
                  href="/gallery"
                  className="inline-flex h-[54px] items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10 hover:text-cyan-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <span>Gallery</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Software Engineering Consultant Portrait (Fade Right) */}
          <div className="relative lg:col-span-5 flex items-end justify-center self-end lg:-mb-12">
            <Reveal variant="fade-right" delay={0.15} className="w-full flex justify-center">
              <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] flex items-end justify-center">
                {/* Animated Tech Decorative Backdrop Behind Consultant */}
                <div aria-hidden="true" className="pointer-events-none absolute -inset-4 z-0 sm:-inset-6">
                  {/* Dual Ambient Glow Blobs */}
                  <div className="absolute top-[10%] left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[var(--brand-cyan)]/25 via-[var(--brand-royal)]/25 to-transparent blur-3xl sm:h-[360px] sm:w-[360px]" />
                  <div className="absolute right-[4%] bottom-[12%] h-[200px] w-[200px] rounded-full bg-[var(--brand-cyan)]/20 blur-2xl sm:h-[240px] sm:w-[240px]" />

                  {/* Outer Dashed Orbital Tech Ring */}
                  <div className="absolute top-[7%] left-1/2 h-[310px] w-[310px] -translate-x-1/2 rounded-full border border-dashed border-[var(--brand-cyan)]/30 sm:h-[380px] sm:w-[380px] lg:h-[420px] lg:w-[420px] animate-[spin_30s_linear_infinite]" />

                  {/* Counter-Rotating Segmented Tech Arc */}
                  <div className="absolute top-[12%] left-1/2 h-[260px] w-[260px] -translate-x-1/2 rounded-full border-2 border-[var(--brand-cyan)]/40 border-t-transparent border-l-transparent sm:h-[320px] sm:w-[320px] lg:h-[350px] lg:w-[350px] animate-[spin_24s_linear_infinite_reverse]" />

                  {/* Soft Pulsing Inner Ring */}
                  <div className="absolute top-[20%] left-1/2 h-[200px] w-[200px] -translate-x-1/2 rounded-full border border-[var(--brand-cyan)]/30 sm:h-[250px] sm:w-[250px] animate-pulse" />
                </div>

                {/* Foreground Consultant Image with Seamless Feathered Bottom Fade */}
                <div className="relative z-10 w-full flex items-end justify-center [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]">
                  <Image
                    src="/images/img1.png"
                    alt="Software consultant smiling while holding a laptop"
                    width={600}
                    height={701}
                    priority
                    draggable={false}
                    className="block h-auto w-full select-none object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)]"
                  />
                  {/* Soft Atmospheric Feather Mist matching section background */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-[#071428] via-[#071428]/70 to-transparent"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom Row: 3 Corporate Trust Badges (Fade Up Staggered) */}
      <div className="relative z-20 w-full border-t border-white/10 bg-[#071428]/85 backdrop-blur-md">
        <div className="mx-auto max-w-[1360px] px-4 py-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            {TRUST_POINTS.map((pt, idx) => {
              const variant =
                idx === 0 ? "fade-left" : idx === 1 ? "fade-up" : "fade-right";
              return (
                <Reveal key={pt.title} variant={variant} delay={0.1 + idx * 0.1}>
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${pt.gradient} text-white shadow-md`}
                    >
                      <pt.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white leading-tight">
                        {pt.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
