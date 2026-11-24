"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronDown,
  Code2,
  Cpu,
  Layers,
  Loader2,
  Mail,
  Phone,
  Send,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  SiPython,
  SiWordpress,
  SiMysql,
  SiPhp,
  SiLaravel,
  SiCodeigniter,
  SiFigma,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { apiClient } from "@/lib/axios";
import {
  projectInquirySchema,
  SERVICE_OPTIONS,
  type ProjectInquiryValues,
} from "@/lib/validations";
import type { ApiError, ApiResponse } from "@/types";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { cn } from "@/utils";

interface SkillMetric {
  label: string;
  category: string;
  percentage: number;
  icon: React.ElementType;
  description: string;
  badge: string;
}

// Exactly as requested by the client from their WordPress site
export const TECHNICAL_SKILLS: SkillMetric[] = [
  {
    label: "MySQL",
    category: "Database Architecture",
    percentage: 100,
    icon: SiMysql,
    description: "High-performance relational schema design, query tuning, indexing & clustering.",
    badge: "100% Mastered",
  },
  {
    label: "Graphics Design",
    category: "UI/UX & Visual Systems",
    percentage: 94,
    icon: SiFigma,
    description: "Figma design systems, interactive prototypes, brand identity & vector design.",
    badge: "94% Precision",
  },
  {
    label: "WORDPRESS",
    category: "CMS & Headless",
    percentage: 81,
    icon: SiWordpress,
    description: "Custom themes, plugins, high-security hardening & headless Next.js backends.",
    badge: "81% Expertise",
  },
  {
    label: "PHP, LARAVEL, CodeIgniter",
    category: "Backend & Web Frameworks",
    percentage: 81,
    icon: SiLaravel,
    description: "Enterprise MVC architectures, REST APIs, payment gateways & legacy refactoring.",
    badge: "81% Proficiency",
  },
  {
    label: "Python",
    category: "APIs & Automation",
    percentage: 65,
    icon: SiPython,
    description: "FastAPI, Django, web scrapers, data pipelines & microservice integrations.",
    badge: "65% Proficiency",
  },
  {
    label: "Amazon Web Services (AWS)",
    category: "Cloud Infrastructure",
    percentage: 65,
    icon: FaAws,
    description: "ECS, Lambda serverless, S3, RDS, CloudFront CDN & zero-downtime CI/CD.",
    badge: "65% Certified",
  },
];

export function SkillsSection() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProjectInquiryValues>({
    resolver: zodResolver(projectInquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (values: ProjectInquiryValues) => {
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const response = await apiClient.post<
        ApiResponse<{ receivedAt: string; name: string; service: string }>
      >("/contact", values);

      setSuccessMessage(
        response.data.message ??
        "Thank you! Your project inquiry has been received. Our lead architect will be in touch within 24 hours."
      );
      reset();
    } catch (err) {
      const apiError = err as ApiError;
      setErrorMessage(
        apiError.message ?? "Something went wrong. Please try again shortly or call +1 800 484 4204."
      );
    }
  };

  const baseFieldClasses =
    "w-full rounded-2xl border border-[var(--border-light)] bg-white px-4 text-[14.5px] sm:text-[15px] font-medium text-[var(--text-dark)] placeholder:text-slate-400 placeholder:font-normal transition-all duration-200 hover:border-slate-300 focus:border-[var(--brand-sky)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-sky)]/20 disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <section
      id="skills"
      aria-label="Technical Skills and Direct Project Inquiry"
      className="relative w-full section-light bg-[var(--bg-light)] py-20 sm:py-24 lg:py-28 overflow-hidden text-[var(--text-dark)] border-b border-[var(--border-light)]"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Left Column: Technical Skills with Animated Progress Bars (7 cols) */}
          <div className="flex flex-col lg:col-span-7">
            <Reveal variant="fade-down">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--primary)]/20 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-royal)] shadow-xs">
                <Cpu className="h-3.5 w-3.5 text-[var(--brand-royal)]" />
                <span>Verified Technical Stack</span>
              </span>
            </Reveal>

            <Reveal variant="fade-up" delay={0.1} className="mt-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-dark)] sm:text-4xl lg:text-[44px] leading-[1.15]">
                We Solve Complex Business Problems With{" "}
                <span className="heading-curved-underline text-[var(--brand-royal)]">
                  Proven Technical Mastery
                </span>
              </h2>
            </Reveal>

            <Reveal variant="fade-up" delay={0.16} className="mt-4">
              <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl leading-relaxed">
                Our senior engineering team combines decades of specialized experience in modern web frameworks, battle-tested databases, and resilient cloud architectures.
              </p>
            </Reveal>

            {/* Technical Skill Progress Bars */}
            <div className="mt-10 space-y-6">
              {TECHNICAL_SKILLS.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.label}
                    className="group rounded-2xl border border-[var(--border-light)] bg-white p-5 shadow-xs transition-all duration-300 hover:border-[var(--brand-sky)]/40 hover:shadow-md"
                  >
                    {/* Header: Icon, Label, Percentage Badge */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-muted)] text-[var(--brand-royal)] transition-colors group-hover:bg-[var(--brand-royal)] group-hover:text-white">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-base font-bold text-[var(--text-dark)]">
                              {skill.label}
                            </h3>
                            <span className="hidden sm:inline-block rounded-full bg-[var(--primary-light)] px-2 py-0.5 text-[10px] font-bold text-[var(--brand-royal)]">
                              {skill.badge}
                            </span>
                          </div>
                          <p className="text-xs text-[var(--text-muted)]">{skill.category}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="font-heading text-lg font-black text-[var(--brand-royal)]">
                          {skill.percentage}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar Track with Smooth Fill */}
                    <div
                      className="mt-3.5 relative h-2.5 w-full overflow-hidden rounded-full bg-slate-100"
                      role="progressbar"
                      aria-label={skill.label}
                      aria-valuenow={skill.percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          duration: 1.1,
                          delay: 0.08 + index * 0.08,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="relative h-full rounded-full bg-[var(--brand-lime)] shadow-[0_0_12px_rgba(156,238,105,0.4)]"
                      >
                        {/* Shimmer light on leading edge */}
                        <div className="absolute right-0 top-0 bottom-0 w-2 rounded-full bg-white/60 shadow-sm" />
                      </motion.div>
                    </div>

                    <p className="mt-2.5 text-xs text-[var(--text-muted)] line-clamp-1">
                      {skill.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 3D Project Inquiry Form Card (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal variant="scale-in" delay={0.15}>
              <TiltCard maxTilt={3} scaleOnHover={1.01} className="w-full">
                <div className="relative overflow-hidden rounded-[28px] border border-[var(--border-light)] bg-white p-7 sm:p-9 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                  {/* Top Glowing Brand Accent Line */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-8 top-0 h-[3px] rounded-full bg-gradient-to-r from-[var(--brand-royal)] via-[var(--brand-cyan)] to-[var(--brand-sky)]"
                  />

                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--brand-royal)]">
                      <Sparkles className="h-3.5 w-3.5 text-[var(--brand-lime)]" />
                      <span>Start Your Project</span>
                    </span>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200">
                      24h Response
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl sm:text-2xl font-extrabold tracking-tight text-[var(--text-dark)] leading-snug">
                    Request an Architecture Scope &amp; Estimate
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[var(--text-muted)]">
                    Share your requirements with our Texas software leadership. No obligation, 100% confidential.
                  </p>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="mt-6 flex flex-col gap-3.5"
                  >
                    {/* Name */}
                    <div>
                      <label htmlFor="skill-inquiry-name" className="sr-only">
                        Your Name
                      </label>
                      <input
                        id="skill-inquiry-name"
                        type="text"
                        placeholder="Your Full Name"
                        autoComplete="name"
                        aria-invalid={Boolean(errors.name)}
                        className={cn(
                          baseFieldClasses,
                          "h-11",
                          errors.name && "border-red-500 focus:border-red-500"
                        )}
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs font-medium text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="skill-inquiry-email" className="sr-only">
                        Work Email
                      </label>
                      <input
                        id="skill-inquiry-email"
                        type="email"
                        placeholder="Work Email Address"
                        autoComplete="email"
                        aria-invalid={Boolean(errors.email)}
                        className={cn(
                          baseFieldClasses,
                          "h-11",
                          errors.email && "border-red-500 focus:border-red-500"
                        )}
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs font-medium text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="skill-inquiry-phone" className="sr-only">
                        Phone Number
                      </label>
                      <input
                        id="skill-inquiry-phone"
                        type="tel"
                        placeholder="Phone Number"
                        autoComplete="tel"
                        aria-invalid={Boolean(errors.phone)}
                        className={cn(
                          baseFieldClasses,
                          "h-11",
                          errors.phone && "border-red-500 focus:border-red-500"
                        )}
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs font-medium text-red-600">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Select Service */}
                    <div>
                      <label htmlFor="skill-inquiry-service" className="sr-only">
                        Select Service
                      </label>
                      <div className="relative">
                        <select
                          id="skill-inquiry-service"
                          aria-invalid={Boolean(errors.service)}
                          className={cn(
                            baseFieldClasses,
                            "h-11 appearance-none pr-10",
                            errors.service && "border-red-500 focus:border-red-500"
                          )}
                          {...register("service")}
                        >
                          <option value="">Select Primary Service</option>
                          {SERVICE_OPTIONS.map((svc) => (
                            <option key={svc} value={svc}>
                              {svc}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      </div>
                      {errors.service && (
                        <p className="mt-1 text-xs font-medium text-red-600">
                          {errors.service.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="skill-inquiry-message" className="sr-only">
                        Project Overview
                      </label>
                      <textarea
                        id="skill-inquiry-message"
                        rows={3}
                        placeholder="Tell us briefly about your goals, stack, or timeline..."
                        aria-invalid={Boolean(errors.message)}
                        className={cn(
                          baseFieldClasses,
                          "min-h-[85px] resize-y py-2.5",
                          errors.message && "border-red-500 focus:border-red-500"
                        )}
                        {...register("message")}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs font-medium text-red-600">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Feedback Messages */}
                    {successMessage && (
                      <div
                        role="status"
                        className="flex items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs font-semibold text-emerald-800"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{successMessage}</span>
                      </div>
                    )}

                    {errorMessage && (
                      <div
                        role="alert"
                        className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700"
                      >
                        {errorMessage}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-sheen mt-2 flex h-12 w-full items-center justify-center rounded-full bg-[var(--brand-lime)] text-black text-sm font-black shadow-[0_4px_18px_rgba(156,238,105,0.35)] transition-all duration-300 hover:bg-[var(--brand-lime-hover)] hover:shadow-[0_8px_24px_rgba(156,238,105,0.55)] hover:-translate-y-0.5 disabled:opacity-60 cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span>Submitting Scope...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Project Inquiry</span>
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </span>
                    </button>
                  </form>

                  {/* Direct Contact Footer */}
                  <div className="mt-5 border-t border-[var(--border-light)] pt-3.5 flex items-center justify-between text-xs text-[var(--text-muted)]">
                    <a
                      href="tel:+18004844204"
                      className="inline-flex items-center gap-1 font-bold text-[var(--brand-royal)] hover:underline"
                    >
                      <Phone className="h-3 w-3" />
                      <span>+1 800 484 4204</span>
                    </a>
                    <a
                      href="mailto:sales@abtelcloud.com"
                      className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text-dark)]"
                    >
                      <Mail className="h-3 w-3" />
                      <span>sales@abtelcloud.com</span>
                    </a>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
