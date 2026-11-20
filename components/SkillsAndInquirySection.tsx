"use client";

import { useState } from "react";
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

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

interface SkillItem {
  label: string;
  percentage: number;
}

const TECHNOLOGY_SKILLS: SkillItem[] = [
  { label: "Python", percentage: 65 },
  { label: "WordPress", percentage: 81 },
  { label: "Amazon Web Services (AWS)", percentage: 65 },
  { label: "Graphics Design", percentage: 94 },
  { label: "MySQL", percentage: 100 },
  { label: "PHP, Laravel, CodeIgniter", percentage: 81 },
];

export function SkillsAndInquirySection() {
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
          "Thank you! Your project inquiry has been received. We will be in touch ASAP."
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
      aria-label="Technology Skills and Project Inquiry"
      className="relative w-full overflow-x-clip bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F1F5F9] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          {/* Left Column – Technology Skills */}
          <motion.div
            initial={{ opacity: 0, x: -64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.78, ease: PREMIUM_EASE }}
            className="flex flex-col"
          >
            <motion.div
              initial={{ opacity: 0, y: -24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: PREMIUM_EASE }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0284C7] sm:text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
                <span>Technical Stack</span>
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: -24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: PREMIUM_EASE }}
              className="mt-4 text-3xl font-extrabold leading-[1.18] tracking-tight text-[#0F172A] sm:text-4xl lg:text-[42px]"
            >
              We solve business problems with technology
            </motion.h2>

            <p className="mt-4 text-[15px] leading-relaxed text-[#475569] sm:text-base">
              Knowledge is power, and in the current era technical knowledge is
              very important for every person.
            </p>

            {/* Six Horizontal Skill Progress Bars */}
            <div className="mt-8 flex flex-col gap-5">
              {TECHNOLOGY_SKILLS.map((skill, index) => (
                <div
                  key={skill.label}
                  className="relative h-11 w-full overflow-hidden rounded-xl border border-slate-200/70 bg-[#E2E8F0]/60 sm:h-12"
                  role="progressbar"
                  aria-label={skill.label}
                  aria-valuenow={skill.percentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 1.05,
                      delay: 0.1 + index * 0.08,
                      ease: PREMIUM_EASE,
                    }}
                    className="flex h-full items-center justify-between gap-2 rounded-xl bg-gradient-to-r from-[#246BFD] via-[#0EA5E9] to-[#00D4FF] px-4 shadow-[0_0_14px_rgba(0,212,255,0.35)]"
                  >
                    <span className="truncate text-[13px] font-semibold tracking-wide text-white sm:text-sm">
                      {skill.label}
                    </span>
                    <span className="shrink-0 text-[13px] font-bold text-white sm:text-sm">
                      {skill.percentage}%
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column – Project Inquiry Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 64, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.08, ease: PREMIUM_EASE }}
          >
            <div className="relative rounded-2xl border border-slate-200/80 bg-white/95 p-7 shadow-[0_18px_54px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-9 lg:p-10">
              {/* Top Accent Line */}
              <div
                aria-hidden="true"
                className="absolute inset-x-8 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent"
              />

              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#0284C7] sm:text-[13px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
                <span>TELL US ABOUT YOUR PROJECT</span>
              </div>

              <h3 className="mt-3.5 text-xl font-bold leading-snug tracking-tight text-[#0F172A] sm:text-2xl lg:text-[26px]">
                FILL OUT THE FORM AND WE&apos;LL BE IN TOUCH ASAP.
              </h3>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="mt-6 flex flex-col gap-4"
              >
                {/* 1. Name */}
                <div>
                  <label htmlFor="inquiry-name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="inquiry-name"
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
                  <label htmlFor="inquiry-phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    id="inquiry-phone"
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
                  <label htmlFor="inquiry-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="inquiry-email"
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

                {/* 4. Select Service */}
                <div>
                  <label htmlFor="inquiry-service" className="sr-only">
                    Select Service
                  </label>
                  <div className="relative">
                    <select
                      id="inquiry-service"
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
                  <label htmlFor="inquiry-message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={4}
                    placeholder="Message"
                    aria-invalid={Boolean(errors.message)}
                    className={cn(
                      baseFieldClasses,
                      "min-h-[124px] resize-y py-3",
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

                {/* Success / Error Feedback */}
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

                {/* Unified Modern Blue Submit Button */}
                <div className="mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-cut inline-flex h-[52px] w-full items-center justify-center gap-2 bg-gradient-to-r from-[#246BFD] via-[#0EA5E9] to-[#00D4FF] px-6 text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(0,212,255,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_8px_24px_rgba(0,212,255,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-65"
                  >
                    {isSubmitting && (
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    )}
                    <span>{isSubmitting ? "Sending..." : "Send"}</span>
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
