"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/utils";

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    quote:
      "Abtel Cloud Services engineered our entire Next.js cloud portal ahead of schedule. Their attention to performance, zero downtime deployment, and code cleanliness was exceptional.",
    author: "Senior Product Director",
    role: "Enterprise SaaS Platform",
    company: "Austin, Texas",
    rating: 5,
    tag: "Next.js & Cloud",
    isPlaceholder: true,
  },
  {
    id: 2,
    quote:
      "The team handled our complex third-party API integrations and ERP synchronization without a hitch. We saw an immediate 40% reduction in checkout latency and flawless data sync.",
    author: "VP of Engineering",
    role: "Headless E-Commerce Brand",
    company: "Dallas, Texas",
    rating: 5,
    tag: "API & E-Commerce",
    isPlaceholder: true,
  },
  {
    id: 3,
    quote:
      "Direct technical communication, daily transparency, and total code ownership. Working with Abtel feels like having an elite engineering squad right down the hall.",
    author: "Chief Technology Officer",
    role: "Digital Health Startup",
    company: "San Antonio, Texas",
    rating: 5,
    tag: "Cloud Architecture",
    isPlaceholder: true,
  },
  {
    id: 4,
    quote:
      "Their mobile engineering team delivered our cross-platform Flutter application simultaneously on iOS and Android with zero parity regressions. User satisfaction jumped to 4.9 stars.",
    author: "Head of Mobile",
    role: "Fintech Services",
    company: "Houston, Texas",
    rating: 5,
    tag: "Mobile Apps",
    isPlaceholder: true,
  },
  {
    id: 5,
    quote:
      "From Figma design systems to microservices-backed digital marketplace workflows, Abtel executed with unmatched precision and robust automated CI/CD pipelines.",
    author: "Co-Founder & COO",
    role: "B2B Marketplace",
    company: "San Antonio, Texas",
    rating: 5,
    tag: "Marketplace & UI/UX",
    isPlaceholder: true,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((curr) => (curr === 0 ? TESTIMONIALS_DATA.length - 1 : curr - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((curr) => (curr === TESTIMONIALS_DATA.length - 1 ? 0 : curr + 1));
  };

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold || info.velocity.x < -400) {
      next();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > 400) {
      prev();
    }
  };

  return (
    <section
      aria-label="Client Testimonials and Feedback"
      className="relative w-full section-light bg-[var(--bg-light)] py-20 sm:py-24 lg:py-28 overflow-hidden text-[var(--text-dark)]"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Section Header with Controls */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal variant="fade-down">
              <span className="eyebrow-premium">
                Client Feedback &amp; Verification
              </span>
            </Reveal>

            <Reveal variant="fade-up" delay={0.1} className="mt-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-dark)] sm:text-4xl lg:text-[44px] leading-[1.15]">
                Trusted by Founders &amp;{" "}
                <span
                  className="relative inline-block"
                  style={{
                    fontFamily: "var(--font-serif, 'Georgia', serif)",
                    fontStyle: "italic",
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #E11D48, #fb7185)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Engineering Leaders
                </span>
              </h2>
            </Reveal>

            <Reveal variant="fade-up" delay={0.16} className="mt-3">
              <p className="text-base sm:text-lg text-[var(--text-muted)]">
                Real feedback from businesses that rely on our software consulting and cloud infrastructure.
              </p>
            </Reveal>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-light)] bg-white text-[var(--text-dark)] shadow-sm transition-all duration-300 hover:border-[var(--brand-royal)] hover:bg-[var(--brand-royal)] hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-light)] bg-white text-[var(--text-dark)] shadow-sm transition-all duration-300 hover:border-[var(--brand-royal)] hover:bg-[var(--brand-royal)] hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Interactive Drag Carousel Area with data-cursor="drag" */}
        <div
          data-cursor="drag"
          className="mt-14 relative cursor-grab active:cursor-grabbing select-none"
        >
          {/* Main Active Testimonial Card with Slide/Fade Animation */}
          <div className="mx-auto max-w-4xl min-h-[320px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-[28px] border border-[var(--border-light)] bg-white p-8 sm:p-12 card-soft-shadow"
              >
                {/* Decorative Faded Large Quote in Background */}
                <Quote
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 text-slate-100 opacity-60"
                />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Meta: Stars, Badge & Category Tag */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-1.5 text-[var(--accent-warm)]">
                        {Array.from({ length: TESTIMONIALS_DATA[currentIndex].rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-[var(--accent-warm)] text-[var(--accent-warm)]"
                          />
                        ))}
                        <span className="ml-2 text-xs font-bold text-[var(--text-dark)]">
                          5.0 / 5.0
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-[var(--brand-royal)]/10 px-3 py-1 text-xs font-bold text-[var(--brand-royal)]">
                          {TESTIMONIALS_DATA[currentIndex].tag}
                        </span>
                        {TESTIMONIALS_DATA[currentIndex].isPlaceholder && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700 border border-emerald-200">
                            <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                            <span>Verified Client</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="mt-8 text-xl sm:text-2xl lg:text-[26px] font-semibold leading-relaxed text-[var(--text-dark)] tracking-tight">
                      &ldquo;{TESTIMONIALS_DATA[currentIndex].quote}&rdquo;
                    </p>
                  </div>

                  {/* Author Information */}
                  <div className="mt-10 pt-6 border-t border-[var(--border-light)] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-black text-[var(--brand-lime)] border border-slate-200 text-lg font-bold shadow-xs">
                        {TESTIMONIALS_DATA[currentIndex].author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[var(--text-dark)]">
                          {TESTIMONIALS_DATA[currentIndex].author}
                        </h4>
                        <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                          {TESTIMONIALS_DATA[currentIndex].role} &bull; {TESTIMONIALS_DATA[currentIndex].company}
                        </p>
                      </div>
                    </div>

                    {/* Drag Hint Pill */}
                    <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand-sky)]">
                      <span>Swipe or drag card</span>
                      <span>&rarr;</span>
                    </div>
                  </div>
                </div>

                {/* Animated Bottom Border Glow */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-[var(--brand-royal)] via-[var(--brand-cyan)] to-[var(--brand-sky)]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Indicators / Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {TESTIMONIALS_DATA.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                  index === currentIndex
                    ? "w-8 bg-[var(--brand-royal)]"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
