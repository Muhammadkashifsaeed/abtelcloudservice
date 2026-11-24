"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Calendar, ArrowRight, HelpCircle, Phone, Mail } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatePresence, motion } from "framer-motion";

const FAQS = [
  {
    q: "Who owns the code and intellectual property developed during the project?",
    a: "You retain 100% full ownership of all code, assets, repositories, and intellectual property. From sprint one, all work is checked into your designated repositories with complete rights transfer.",
  },
  {
    q: "What technologies and frameworks does Abtel Cloud Services specialize in?",
    a: "Our core engineering expertise covers modern full-stack web and cloud systems: Next.js (App Router), React, TypeScript, Node.js, Python, AWS (ECS, Lambda, S3), Google Cloud, Docker, Shopify Plus, WordPress, and Flutter for cross-platform mobile apps.",
  },
  {
    q: "How does your sprint workflow and communication work?",
    a: "We integrate directly into your workflow via private Slack or Microsoft Teams channels, bi-weekly video sprint reviews, and live staging environments. You have direct access to your lead software engineer and cloud architect without layers of bureaucracy.",
  },
  {
    q: "Can you assist with cloud migration and legacy refactoring?",
    a: "Yes. We frequently re-architect legacy monolithic systems (PHP, WordPress, old ASP.NET) into modern headless Next.js platforms and secure microservices running on AWS or Google Cloud, optimizing speed and reducing server costs.",
  },
  {
    q: "How quickly can we kick off a new project?",
    a: "Following a 30-minute discovery consultation and architecture alignment, our agile squads can typically kick off sprint zero within 5 to 7 business days.",
  },
];

const CALENDLY_LINK = "https://calendly.com/abtelcloud/30min";

export function FaqCtaSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((curr) => (curr === index ? null : index));
  };

  return (
    <section
      aria-label="Frequently Asked Questions & Consultation"
      className="relative w-full section-light bg-[var(--bg-light)] py-20 sm:py-24 lg:py-28 overflow-hidden text-[var(--text-dark)]"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-7">
            <Reveal variant="fade-down">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--primary)]/20 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-royal)] shadow-xs">
                <HelpCircle className="h-3.5 w-3.5 text-[var(--brand-royal)]" />
                <span>Frequently Asked Questions</span>
              </span>
            </Reveal>

            <Reveal variant="fade-up" delay={0.1} className="mt-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-dark)] sm:text-4xl lg:text-[42px] leading-[1.15]">
                Clear Answers to Common{" "}
                <span className="text-[var(--primary)]">Engineering Questions</span>
              </h2>
            </Reveal>

            <div className="mt-10 space-y-3.5">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.q}
                    className={`rounded-[22px] border transition-all duration-300 ${
                      isOpen
                        ? "border-[var(--brand-sky)]/50 bg-white card-soft-shadow"
                        : "border-[var(--border-light)] bg-white/70 hover:bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between p-5 sm:p-6 text-left cursor-pointer"
                    >
                      <span className="text-[15px] sm:text-base font-bold text-[var(--text-dark)] pr-4">
                        {faq.q}
                      </span>
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                          isOpen
                            ? "bg-[var(--brand-royal)] text-white rotate-180"
                            : "bg-[var(--surface-muted)] text-[var(--text-dark)]"
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 sm:px-6 text-sm leading-relaxed text-[var(--text-muted)] border-t border-[var(--border-light)] pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Final High-Impact Consultation Card */}
          <div className="lg:col-span-5">
            <Reveal variant="scale-in" delay={0.15}>
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0B0E14] p-8 text-white shadow-2xl">
                {/* Ambient Lime Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-[var(--brand-lime)]/15 blur-[90px]"
                />

                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--brand-lime)] border border-white/10">
                  <Calendar className="h-3.5 w-3.5" />
                  Free 30-Min Discovery Call
                </span>

                <h3 className="mt-5 text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight text-white">
                  Have an Upcoming Software or Cloud Initiative?
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Speak directly with our technical leadership in San Antonio, Texas. We’ll analyze your requirements, review your technical stack, and provide an actionable roadmap with zero sales pitch.
                </p>

                <div className="mt-8 space-y-3.5">
                  <Link
                    href={CALENDLY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sheen flex h-13 w-full items-center justify-center rounded-full bg-[var(--brand-lime)] text-white text-[15px] font-black shadow-[0_4px_20px_rgba(14, 71, 57,0.35)] transition-all duration-300 hover:bg-[var(--brand-lime-hover)] hover:shadow-[0_8px_26px_rgba(14, 71, 57,0.55)] hover:-translate-y-0.5"
                  >
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Book 30-Min Technical Call</span>
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    className="flex h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 text-white text-sm font-bold transition-all duration-300 hover:bg-white/10 hover:border-[var(--brand-lime)] hover:text-[var(--brand-lime)]"
                  >
                    <span>Send Project RFP / Message</span>
                  </Link>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
                  <a
                    href="tel:+18004844204"
                    className="inline-flex items-center gap-1 font-bold text-white hover:text-[var(--brand-cyan)] transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-[var(--brand-cyan)]" />
                    <span>+1 800 484 4204</span>
                  </a>
                  <a
                    href="mailto:sales@abtelcloud.com"
                    className="inline-flex items-center gap-1 font-bold text-slate-300 hover:text-white transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5 text-[var(--brand-sky)]" />
                    <span>sales@abtelcloud.com</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
