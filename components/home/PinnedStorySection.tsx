"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion";

const STEPS = [
  {
    no: "01",
    kicker: "Discover",
    title: "We map the problem before we write a line.",
    body: "Stakeholder workshops, technical audits and a clear roadmap — so we build the right thing, not just a thing.",
  },
  {
    no: "02",
    kicker: "Design",
    title: "We design systems that scale with you.",
    body: "Architecture, UI systems and API contracts crafted for performance, accessibility and long-term maintainability.",
  },
  {
    no: "03",
    kicker: "Deliver",
    title: "We ship production-grade, owned by you.",
    body: "Clean code, CI/CD pipelines and full IP ownership — launched with the engineering rigor enterprise demands.",
  },
];

export function PinnedStorySection() {
  return (
    <section
      aria-label="How we work"
      className="relative w-full overflow-hidden border-y border-white/[0.06] bg-[#05070C] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-32 top-1/3 h-[520px] w-[520px] rounded-full bg-[#E11D48]/[0.10] blur-[170px]" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#FB7185]/[0.06] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — steps */}
          <div className="lg:col-span-6">
            <Reveal variant="fade-down">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-[#FB7185]">
                How we work
              </span>
            </Reveal>

            <Reveal variant="fade-left" delay={0.08}>
              <h2 className="mt-4 text-title text-white">
                From <span className="font-serif italic text-gradient-brand">discovery</span> to delivery.
              </h2>
            </Reveal>

            <div className="mt-8 flex flex-col gap-8">
              {STEPS.map((s, i) => (
                <Reveal key={s.no} variant="fade-left" delay={0.12 + i * 0.08}>
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#0A0E17] font-mono text-xs font-bold text-[#E11D48]">
                        {s.no}
                      </span>
                      {i < STEPS.length - 1 && (
                        <span className="mt-2 block min-h-[40px] w-px flex-1 bg-gradient-to-b from-[#E11D48]/60 to-white/10" />
                      )}
                    </div>

                    <div className="pb-2">
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                        {s.kicker}
                      </span>
                      <h3 className="mt-2 max-w-md text-xl font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-2xl">
                        {s.title}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="lg:col-span-6">
            <Reveal variant="fade-right" delay={0.15}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-8 rounded-[2.5rem] blur-[70px]"
                  style={{ background: "rgba(225,29,72,0.14)" }}
                />

                <div className="relative z-10 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-2 backdrop-blur-md">
                  <ImageReveal
                    variant="clip-up"
                    duration={1}
                    className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.35rem] bg-[#0A0E17]"
                  >
                    <Image
                      src="/images/process-scaled.jpg"
                      alt="Abtel Cloud Services process — discover, design, deliver"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070C]/80 via-[#05070C]/10 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                  </ImageReveal>

                  {/* Corner ticks */}
                  <span className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-white/30" />
                  <span className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r border-t border-white/30" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 left-4 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0A0E17]/90 px-4 py-3 backdrop-blur-xl sm:left-6">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-[#E11D48] ring-2 ring-white/20" />
                  <div className="text-left">
                    <p className="text-xs font-bold leading-tight text-white">Agile 2-Week Sprints</p>
                    <p className="text-[11px] font-medium text-white/50">Transparent milestone delivery</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}