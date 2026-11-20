"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronDown, Loader2, Sparkles } from "lucide-react";
import { apiClient } from "@/lib/axios";
import {
  projectInquirySchema,
  SERVICE_OPTIONS,
  type ProjectInquiryValues,
} from "@/lib/validations";
import type { ApiError, ApiResponse } from "@/types";
import { cn } from "@/utils";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

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
    "w-full rounded-xl border border-slate-200 bg-white px-4 text-[15px] text-slate-800 placeholder:text-slate-400 transition-all duration-200 focus:border-[#00D4FF] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/20 disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <section
      aria-label="Lead Project Inquiry"
      className="relative w-full overflow-hidden bg-[#0A0E33] py-20 text-white sm:py-24 lg:py-28"
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
        {/* Deep Tech Blue Gradient Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0A0E33]/96 via-[#0C1242]/92 to-[#070A26]/95"
        />
        {/* Subtle Circuit Overlay */}
        <div
          aria-hidden="true"
          style={{
            backgroundImage: "url('/images/bg_pattern.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "210px 210px",
          }}
          className="absolute inset-0 opacity-[0.16] mix-blend-screen"
        />
      </div>

      {/* Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[#00D4FF]/16 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-[#246BFD]/18 blur-[130px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading, Subheading, Description, & Service Bullets */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: PREMIUM_EASE }}
            className="flex flex-col items-start text-left lg:col-span-6"
          >
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#00D4FF] backdrop-blur-sm sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#00D4FF]" />
              <span>UNITED STATES TECH EXCELLENCE</span>
            </div>

            {/* Main Heading */}
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-white drop-shadow-sm sm:text-4xl lg:text-[44px]">
              Leading Experts in Software Development
            </h2>

            {/* Subheading */}
            <p className="mt-3 text-lg font-semibold text-[#7DD3FC] sm:text-xl">
              Leading Software Development Company in United States
            </p>

            {/* Description */}
            <p className="mt-3.5 text-base leading-relaxed text-slate-300">
              Working on high-performance software that is customized according to your needs.
            </p>

            {/* Services Bullet List */}
            <div className="mt-8 flex w-full flex-col gap-3.5 sm:mt-10">
              {BULLET_SERVICES.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-sm transition-all duration-200 hover:border-[#00D4FF]/40 hover:bg-white/[0.08]"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#00D4FF]/20 text-[#00D4FF] shadow-[0_0_12px_rgba(0,212,255,0.4)]">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <span className="text-[15px] font-medium text-slate-100 transition-colors duration-200 group-hover:text-[#7DD3FC]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: White Card Form "Tell Us About Your Project" */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.1, ease: PREMIUM_EASE }}
            className="flex flex-col lg:col-span-6"
          >
            <div className="relative rounded-2xl border border-slate-200/90 bg-white p-7 text-slate-900 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:p-9 lg:p-10">
              {/* Top Accent Cyan Glow Line */}
              <div
                aria-hidden="true"
                className="absolute inset-x-8 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent"
              />

              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#0284C7]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
                <span>START YOUR PROJECT</span>
              </div>

              {/* Card Title */}
              <h3 className="mt-3.5 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-[26px]">
                Tell Us About Your Project
              </h3>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Fill out the form and our technical advisors will reply with a detailed estimate.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="mt-6 flex flex-col gap-4 text-left"
              >
                {/* 1. Name */}
                <div>
                  <label htmlFor="lead-name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    placeholder="Name"
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
                    placeholder="Phone"
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
                    placeholder="Email"
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

                {/* 4. About Project */}
                <div>
                  <label htmlFor="lead-service" className="sr-only">
                    About Project
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
                      <option value="">About Project</option>
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
                    placeholder="Tell us more about your project, needs and budget"
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

                {/* Status Feedback */}
                {successMessage && (
                  <div
                    role="status"
                    className="flex items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
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
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                  >
                    {errorMessage}
                  </div>
                )}

                {/* Modern Blue Technology Button with Left-to-Right White Sweep */}
                <div className="mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-cut group/btn relative inline-flex h-[50px] w-full items-center justify-center overflow-hidden bg-[#246BFD] px-6 text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(36,107,253,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,212,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-65"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover/btn:translate-x-0"
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 group-hover/btn:text-[#0B0E2E]">
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
