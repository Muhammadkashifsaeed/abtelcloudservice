"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import { apiClient } from "@/lib/axios";
import { Card3D } from "@/components/Card3D";
import {
  projectInquirySchema,
  SERVICE_OPTIONS,
  type ProjectInquiryValues,
} from "@/lib/validations";
import type { ApiError, ApiResponse } from "@/types";
import { cn } from "@/utils";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

interface SkillItem {
  label: string;
  percentage: number;
}

const TECHNOLOGY_SKILLS: SkillItem[] = [
  { label: "Python", percentage: 65 },
  { label: "WORDPRESS", percentage: 81 },
  { label: "Amazon Web Services (AWS)", percentage: 65 },
  { label: "Graphics Design", percentage: 94 },
  { label: "MySQL", percentage: 100 },
  { label: "PHP, LARAVEL, CodeIgniter", percentage: 81 },
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
    "w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 text-[14.5px] sm:text-[15px] font-medium text-slate-800 placeholder:text-slate-400 placeholder:font-normal transition-all duration-200 hover:border-slate-300 focus:border-[#3D96CE] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3D96CE]/20 disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <section
      aria-label="Technology Skills and Project Inquiry"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F4F8FC] to-[#EBF3FA] py-18 sm:py-22 lg:py-26"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          {/* Left Column – Technology Skills (Fade Left) */}
          <motion.div
            initial={{ opacity: 0, x: -65 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.75, ease: LUXURY_EASE }}
            className="flex flex-col"
          >
            <div className="mb-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#3D96CE]/10 border border-[#3D96CE]/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#3D96CE] shadow-sm">
                Technical Stack
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#101B3F] sm:text-4xl lg:text-[44px] leading-[1.16]">
              We solve business problems with technology
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-slate-600 sm:text-base">
              Knowledge is power, and in the current era technical knowledge is very important for every person.
            </p>

            {/* Modern Technology Skill Bars */}
            <div className="mt-8 flex flex-col gap-5">
              {TECHNOLOGY_SKILLS.map((skill, index) => (
                <div key={skill.label} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-[#101B3F]">
                    <span>{skill.label}</span>
                    <span className="font-mono font-bold text-[#3D96CE]">{skill.percentage}%</span>
                  </div>
                  <div
                    className="relative h-3 w-full overflow-hidden rounded-full bg-slate-200/80"
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
                        duration: 0.95,
                        delay: 0.08 + index * 0.08,
                        ease: LUXURY_EASE,
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-[#303E99] to-[#3D96CE] shadow-[0_0_12px_rgba(61,150,206,0.4)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column – 3D Project Inquiry Form Card (Fade Right) */}
          <motion.div
            initial={{ opacity: 0, x: 65, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8, delay: 0.08, ease: LUXURY_EASE }}
          >
            <Card3D
              maxTilt={4}
              scaleOnHover={1.01}
              glareOpacity={0.10}
              borderGlowColor="rgba(61, 150, 206, 0.25)"
              className="rounded-3xl"
            >
              <div className="relative rounded-3xl border border-slate-200/90 bg-white/95 p-7 sm:p-9 lg:p-10 shadow-[0_16px_50px_rgba(15,23,42,0.08),0_0_1px_1px_rgba(255,255,255,0.8)_inset] backdrop-blur-sm [transform-style:preserve-3d]">
                {/* Top Accent Line */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-10 top-0 h-[2.5px] rounded-full bg-gradient-to-r from-[#303E99] via-[#3D96CE] to-[#303E99]"
                />

                <div className="mb-2 [transform:translateZ(10px)]">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3D96CE]">
                    TELL US ABOUT YOUR PROJECT
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-bold tracking-tight text-[#101B3F] sm:text-2xl lg:text-[25px] [transform:translateZ(14px)]">
                  Fill out the form and our engineering team will be in touch within 24 hours.
                </h3>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="mt-6 flex flex-col gap-4 [transform:translateZ(10px)]"
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
                        "min-h-[120px] resize-y py-3",
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

                  {/* Modern Submit Button with Luminous Sheen Hover Animation */}
                  <div className="mt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group/btn relative inline-flex h-[50px] w-full items-center justify-center overflow-hidden rounded-full bg-[#3D96CE] px-6 text-[15px] font-semibold text-white shadow-[0_4px_18px_rgba(61,150,206,0.4)] transition-all duration-300 hover:bg-[#2C7DAF] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(61,150,206,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D96CE] disabled:pointer-events-none disabled:opacity-60"
                    >
                      {/* Luminous sheen animation on hover (no white fill) */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
                      />
                      <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                        {isSubmitting && (
                          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        )}
                        <span>{isSubmitting ? "Sending..." : "Send"}</span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
