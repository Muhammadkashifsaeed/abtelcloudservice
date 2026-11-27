"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function CustomerSupportSection() {
  return (
    <section
      aria-label="Customer Support"
      className="relative w-full overflow-hidden border-t border-slate-200/80 bg-white text-[#0B0E14]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 bottom-0 h-80 w-80 rounded-full bg-[#E11D48]/[0.04] blur-[120px] lg:h-96 lg:w-96"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-8 px-4 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-12">
        <div className="flex flex-col items-start pb-4 text-left lg:col-span-6 lg:py-16">
          <Reveal variant="fade-down">
            <span className="eyebrow-premium">Dedicated Partner Support</span>
          </Reveal>

          <Reveal variant="fade-left" delay={0.08}>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold tracking-tight text-[#0B0E14] sm:text-4xl lg:text-[44px] leading-[1.14]">
              Need more information about{" "}
              <span
                className="relative inline-block"
                style={{ fontFamily: "var(--font-serif,'Georgia',serif)", fontStyle: "italic", fontWeight: 700, background: "linear-gradient(135deg,#E11D48,#fb7185)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                our agency services?
              </span>
            </h2>
          </Reveal>

          <Reveal variant="fade-left" delay={0.14}>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
              Contact us for expert guidance on custom software, mobile apps, digital marketing funnels, and e-commerce platforms. Our senior engineers respond within hours.
            </p>
          </Reveal>

          <Reveal variant="fade-left" delay={0.2} className="mt-8">
            <Link
              href="/contact"
              className="btn-sheen group/btn relative inline-flex h-[50px] min-w-[180px] items-center justify-center overflow-hidden rounded-lg bg-[#E11D48] px-8 text-[15px] font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#BE123C] hover:shadow-sm hover:-translate-y-0.5 active:scale-95 ring-1 ring-inset ring-white/20"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                <span>Contact us</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="relative flex items-end justify-center self-end lg:col-span-6">
          <Reveal variant="fade-right" delay={0.1} className="relative flex w-full max-w-[460px] items-end justify-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-[#E11D48]/15 via-slate-100 to-transparent blur-2xl"
            />

            <div className="absolute top-10 -left-6 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 backdrop-blur-xl shadow-xl">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-[#E11D48]">
                <Clock className="h-5 w-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-[#0B0E14]">Rapid Response</span>
                <span className="text-[10px] font-semibold text-slate-500">Avg. &lt; 2 Hours</span>
              </div>
            </div>

            <div className="absolute -bottom-2 -left-2 z-20 hidden sm:flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-3.5 py-2 backdrop-blur-xl shadow-xl">
              <ShieldCheck className="h-4 w-4 text-[#E11D48]" />
              <span className="text-xs font-bold text-[#0B0E14]">Direct Lead Developer Access</span>
            </div>

            <div className="relative z-10 w-full flex items-end justify-center">
              <Image
                src="/images/img_9.png"
                alt="Abtel Cloud Services customer support specialist ready to assist with software inquiries"
                width={920}
                height={720}
                className="pointer-events-none block h-auto w-full max-w-[380px] sm:max-w-[430px] lg:max-w-[480px] object-contain object-bottom drop-shadow-[0_20px_36px_rgba(15,23,42,0.14)]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}