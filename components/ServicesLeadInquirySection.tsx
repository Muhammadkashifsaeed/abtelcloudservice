"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import { apiClient } from "@/lib/axios";
import {
  projectInquirySchema,
  SERVICE_OPTIONS,
  type ProjectInquiryValues,
} from "@/lib/validations";
import type { ApiError, ApiResponse } from "@/types";
import { cn } from "@/utils";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

const BULLET_SERVICES = [
  "Custom Software Development",
  "Flutter App Development",
  "Cloud Services",
  "Web Development",
  "Mobile development",
];

export function ServicesLeadInquirySection() {
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
          "Thank you! Your project details have been received. We will connect with you shortly."
      );
      reset();
    } catch (err) {
      const apiError = err as ApiError;
      setErrorMessage(
        apiError.message ?? "Something went wrong. Please try again shortly."
      );
    }
  };

  const baseFieldClasses =
    "w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 text-[14.5px] sm:text-[15px] font-medium text-slate-800 placeholder:text-slate-400 placeholder:font-normal transition-all duration-200 hover:border-slate-300 focus:border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/15 disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <section
      aria-label="Services Hero - Leading Experts in Software Development"
      className="relative w-full overflow-hidden border-b border-white/[0.08] bg-[#070A1E] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 text-white"
    >
      {/* Background Image: software-programe.jpg */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/software-programe.jpg"
          alt="Software Development Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Deep Obsidian Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#070A1E]/96 via-[#0B1033]/92 to-[#070A1E]/96"
        />
      </div>

      {/* Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[var(--brand-lime)]/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Text & Bullets */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE }}
            className="flex flex-col items-start text-left lg:col-span-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-lime)]/35 bg-[var(--brand-lime)]/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-lime)] backdrop-blur-md shadow-[0_2px_14px_rgba(197, 216, 46,0.2)]">
              <span>UNITED STATES TECH EXCELLENCE</span>
            </div>

            {/* Main Hero Heading */}
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[46px] leading-[1.12]">
              Leading Experts in Software Development
            </h1>

            {/* Subheading */}
            <p className="mt-3 text-lg font-semibold text-[var(--brand-lime)] sm:text-xl">
              Leading Software Development Company in United States
            </p>

            {/* Description */}
            <p className="mt-3.5 text-base leading-relaxed text-slate-300">
              Working on high-performance software that is customized according to your needs.
            </p>

            {/* Bullet Services */}
            <div className="mt-6 flex flex-col gap-2.5">
              {BULLET_SERVICES.map((bullet) => (
                <div key={bullet} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--brand-lime)] text-black">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-200 sm:text-base">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: LUXURY_EASE }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] text-slate-800">
              {/* Top Accent Line */}
              <div
                aria-hidden="true"
                className="absolute inset-x-10 top-0 h-[2.5px] rounded-full bg-gradient-to-r from-transparent via-[var(--brand-lime)] to-transparent"
              />

              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-800">
                  PROJECT INQUIRY
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-[#090D24] sm:text-2xl">
                Get Your Project Estimation
              </h3>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="mt-6 flex flex-col gap-4"
              >
                {/* 1. Name */}
                <div>
                  <label htmlFor="lead-name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    placeholder="Your Name"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    className={cn(
                      baseFieldClasses,
                      "h-12",
                      errors.name &&
                        "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    )}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs font-medium text-red-600" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* 2. Phone */}
                <div>
                  <label htmlFor="lead-phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    id="lead-phone"
                    type="tel"
                    placeholder="Phone Number"
                    autoComplete="tel"
                    aria-invalid={Boolean(errors.phone)}
                    className={cn(
                      baseFieldClasses,
                      "h-12",
                      errors.phone &&
                        "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    )}
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs font-medium text-red-600" role="alert">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* 3. Email */}
                <div>
                  <label htmlFor="lead-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    placeholder="Email Address"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    className={cn(
                      baseFieldClasses,
                      "h-12",
                      errors.email &&
                        "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    )}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs font-medium text-red-600" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* 4. Select Service */}
                <div>
                  <label htmlFor="lead-service" className="sr-only">
                    Select Service
                  </label>
                  <div className="relative">
                    <select
                      id="lead-service"
                      aria-invalid={Boolean(errors.service)}
                      className={cn(
                        baseFieldClasses,
                        "h-12 appearance-none pr-10",
                        errors.service &&
                          "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      )}
                      {...register("service")}
                    >
                      <option value="">Select Service</option>
                      {SERVICE_OPTIONS.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />
                  </div>
                  {errors.service && (
                    <p className="mt-1 text-xs font-medium text-red-600" role="alert">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                {/* 5. Message */}
                <div>
                  <label htmlFor="lead-message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="lead-message"
                    rows={4}
                    placeholder="Briefly describe your project..."
                    aria-invalid={Boolean(errors.message)}
                    className={cn(
                      baseFieldClasses,
                      "min-h-[110px] resize-y py-3",
                      errors.message &&
                        "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    )}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs font-medium text-red-600" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Feedback */}
                {successMessage && (
                  <div
                    role="status"
                    className="flex items-start gap-2.5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />
                    <span>{successMessage}</span>
                  </div>
                )}

                {errorMessage && (
                  <div
                    role="alert"
                    className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                  >
                    {errorMessage}
                  </div>
                )}

                {/* Modern Submit Button */}
                <div className="mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-sheen group/btn relative inline-flex h-[50px] w-full items-center justify-center overflow-hidden rounded-full bg-[var(--brand-lime)] hover:bg-[var(--brand-lime-hover)] px-6 text-[15px] font-black text-black shadow-[0_4px_18px_rgba(197, 216, 46,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(197, 216, 46,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-60"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 text-black">
                      {isSubmitting && (
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      )}
                      <span>{isSubmitting ? "Submitting..." : "Submit Inquiry"}</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
