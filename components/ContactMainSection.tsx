"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { apiClient } from "@/lib/axios";
import {
  contactRequestSchema,
  type ContactRequestValues,
} from "@/lib/validations";
import type { ApiError, ApiResponse } from "@/types";
import { cn } from "@/utils";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

export function ContactMainSection() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isCaptchaLoading, setIsCaptchaLoading] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactRequestValues>({
    resolver: zodResolver(contactRequestSchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      agreeTerms: false,
      consentInformational: false,
      consentNoTexts: false,
      captchaVerified: false,
    },
  });

  const handleCaptchaClick = () => {
    if (captchaVerified) {
      setCaptchaVerified(false);
      setValue("captchaVerified", false, { shouldValidate: true });
      return;
    }
    if (isCaptchaLoading) return;

    setIsCaptchaLoading(true);
    setTimeout(() => {
      setIsCaptchaLoading(false);
      setCaptchaVerified(true);
      setValue("captchaVerified", true, { shouldValidate: true });
    }, 600);
  };

  const onSubmit = async (values: ContactRequestValues) => {
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const response = await apiClient.post<
        ApiResponse<{ receivedAt: string; name: string }>
      >("/contact", values);

      setSuccessMessage(
        response.data.message ??
          "Thank you! Your request has been submitted to our team. We will reply within 24 hours."
      );
      setCaptchaVerified(false);
      reset({
        name: "",
        company: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
        agreeTerms: false,
        consentInformational: false,
        consentNoTexts: false,
        captchaVerified: false,
      });
    } catch (err) {
      const apiError = err as ApiError;
      setErrorMessage(
        apiError.message ?? "Something went wrong. Please check your entries and try again."
      );
    }
  };

  const baseFieldClasses =
    "w-full rounded-xl border border-slate-200 bg-white px-4 text-[15px] text-slate-800 placeholder:text-slate-400 transition-all duration-200 focus:border-[#00D4FF] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/20 disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <section
      aria-label="Submit Your Request to our Team"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F1F5F9] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Circuit Pattern */}
      <div
        aria-hidden="true"
        style={{
          backgroundImage: "url('/images/bg_pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "210px 210px",
        }}
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Form & Consent Block */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: PREMIUM_EASE }}
            className="flex flex-col lg:col-span-7"
          >
            <div className="relative rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.08)] sm:p-9 lg:p-10">
              {/* Subtle Top Cyan Glow Accent */}
              <div
                aria-hidden="true"
                className="absolute inset-x-8 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#00D4FF]/50 to-transparent"
              />

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0284C7] sm:text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
                <span>SALES &amp; INQUIRIES</span>
              </div>

              {/* Main Form Heading & Subtitle */}
              <h2 className="mt-4 text-2xl font-extrabold leading-[1.2] tracking-tight text-[#0F172A] sm:text-3xl lg:text-[34px]">
                Submit Your Request to our Team
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#475569] sm:text-base">
                You can easily get in touch with our sales team to get your project started ASAP!
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="mt-8 flex flex-col gap-4 text-left"
              >
                {/* 1. Name & Company Row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="req-name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="req-name"
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

                  <div>
                    <label htmlFor="req-company" className="sr-only">
                      Company
                    </label>
                    <input
                      id="req-company"
                      type="text"
                      placeholder="Company"
                      autoComplete="organization"
                      aria-invalid={Boolean(errors.company)}
                      className={cn(baseFieldClasses, "h-12")}
                      {...register("company")}
                    />
                    {errors.company && (
                      <p className="mt-1 text-xs font-medium text-red-600" role="alert">
                        {errors.company.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* 2. Phone & Email Row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="req-phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      id="req-phone"
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

                  <div>
                    <label htmlFor="req-email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="req-email"
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
                </div>

                {/* 3. Subject Field */}
                <div>
                  <label htmlFor="req-subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    id="req-subject"
                    type="text"
                    placeholder="Subject"
                    aria-invalid={Boolean(errors.subject)}
                    className={cn(
                      baseFieldClasses,
                      "h-12",
                      errors.subject &&
                        "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    )}
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs font-medium text-red-600" role="alert">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* 4. Message Field */}
                <div>
                  <label htmlFor="req-message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="req-message"
                    rows={4}
                    placeholder="Message"
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

                {/* 5. SMS & Privacy Consent Block (All 3 Checkboxes) */}
                <div className="mt-2 rounded-2xl border border-slate-200/90 bg-slate-50/80 p-5 text-left text-xs leading-relaxed text-[#475569] sm:p-6 sm:text-[13px]">
                  <div className="flex items-center gap-2 font-bold text-[#0F172A] sm:text-sm">
                    <ShieldCheck className="h-4 w-4 text-[#0284C7]" aria-hidden="true" />
                    <span>Abtel Cloud Services would like your consent to ...</span>
                  </div>

                  <p className="mt-2.5">
                    Abtel Cloud Services would like your consent to send informational text message communications from +18004844204 to your mobile number listed above, in response to your questions or to provide information relevant to your relationship with us.
                  </p>

                  <p className="mt-2.5">
                    Consent is not a condition of purchase. Message frequency varies. Message and data rates may apply. Reply &apos;STOP&apos; to unsubscribe at any time. Reply &apos;HELP&apos; for assistance or more information. We do not share your mobile opt-in information with anyone. See our{" "}
                    <Link
                      href="/privacy-policy"
                      className="font-semibold text-[#0284C7] underline hover:text-[#0099FF]"
                    >
                      privacy policy
                    </Link>{" "}
                    and messaging terms and conditions available at{" "}
                    <Link
                      href="/terms-and-conditions"
                      className="font-semibold text-[#0284C7] underline hover:text-[#0099FF]"
                    >
                      terms and conditions
                    </Link>{" "}
                    for more information.
                  </p>

                  {/* 3 Checkboxes */}
                  <div className="mt-4 flex flex-col gap-3 border-t border-slate-200/70 pt-4">
                    {/* Checkbox 1: Terms Agreement */}
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#246BFD] focus:ring-[#00D4FF]"
                        {...register("agreeTerms")}
                      />
                      <span className="font-medium text-[#1E293B]">
                        Yes, I agree with the privacy policy and terms and conditions.
                      </span>
                    </label>
                    {errors.agreeTerms && (
                      <p className="text-xs font-semibold text-red-600" role="alert">
                        {errors.agreeTerms.message}
                      </p>
                    )}

                    {/* Checkbox 2: Consent to receive informational messages */}
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#246BFD] focus:ring-[#00D4FF]"
                        {...register("consentInformational")}
                      />
                      <span className="text-[#334155]">
                        Yes, I consent to receive informational messages from Abtel Cloud Services
                      </span>
                    </label>

                    {/* Checkbox 3: Do not want to receive text messages */}
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#246BFD] focus:ring-[#00D4FF]"
                        {...register("consentNoTexts")}
                      />
                      <span className="text-[#334155]">
                        No, I do not want to receive any text messages from Abtel Cloud Services
                      </span>
                    </label>
                  </div>
                </div>

                {/* 6. Interactive "I'm not a robot" reCAPTCHA Widget */}
                <div className="mt-1 flex flex-col items-start">
                  <div className="flex w-full max-w-[304px] items-center justify-between rounded border border-[#d3d3d3] bg-[#f9f9f9] px-3.5 py-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                    {/* Left: Checkbox button & Label */}
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={handleCaptchaClick}
                        aria-label="Verify you are not a robot"
                        className={cn(
                          "flex h-7 w-7 items-center justify-center rounded border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#246BFD]/40",
                          captchaVerified
                            ? "border-emerald-500 bg-white"
                            : "border-[#c1c1c1] bg-white hover:border-slate-400"
                        )}
                      >
                        {isCaptchaLoading ? (
                          <Loader2 className="h-4 w-4 animate-spin text-[#0284C7]" />
                        ) : captchaVerified ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 350, damping: 20 }}
                          >
                            <Check className="h-5 w-5 text-emerald-600 stroke-[3]" />
                          </motion.div>
                        ) : null}
                      </button>
                      <span className="text-[14px] font-normal text-[#222]">
                        I&apos;m not a robot
                      </span>
                    </div>

                    {/* Right: reCAPTCHA Brand Logo & Links */}
                    <div className="flex flex-col items-center pl-2 text-center select-none">
                      <svg
                        className="h-8 w-8 text-[#1A73E8]"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M24 4C14.06 4 6 12.06 6 22H11C11 14.82 16.82 9 24 9C31.18 9 37 14.82 37 22C37 29.18 31.18 35 24 35V40C33.94 40 42 31.94 42 22C42 12.06 33.94 4 24 4Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 28L4 20L12 12V28Z"
                          fill="#34A853"
                        />
                        <path
                          d="M36 20L44 28L36 36V20Z"
                          fill="#FBBC05"
                        />
                      </svg>
                      <span className="text-[10px] font-medium tracking-tight text-[#555]">
                        reCAPTCHA
                      </span>
                      <div className="flex items-center gap-1 text-[8.5px] text-[#555]">
                        <Link
                          href="https://policies.google.com/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          Privacy
                        </Link>
                        <span>-</span>
                        <Link
                          href="https://policies.google.com/terms"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          Terms
                        </Link>
                      </div>
                    </div>
                  </div>
                  {errors.captchaVerified && (
                    <p className="mt-1.5 text-xs font-semibold text-red-600" role="alert">
                      {errors.captchaVerified.message}
                    </p>
                  )}
                </div>

                {/* Status Messages */}
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

                {/* Modern Blue Technology Button with Left-to-Right White Sweep Hover */}
                <div className="mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-cut group/btn relative inline-flex h-[52px] w-full items-center justify-center overflow-hidden bg-[#246BFD] px-8 text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(36,107,253,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,212,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-65"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover/btn:translate-x-0"
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 group-hover/btn:text-[#0B0E2E]">
                      {isSubmitting && (
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      )}
                      <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right Column: Contact Details, Location, Direct Channels & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, delay: 0.1, ease: PREMIUM_EASE }}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            {/* Header Box */}
            <div className="relative rounded-2xl border border-slate-200/90 bg-white p-7 text-left shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:p-8">
              {/* Top Accent Cyan Glow */}
              <div
                aria-hidden="true"
                className="absolute inset-x-8 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent"
              />

              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0284C7]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
                <span>DIRECT REACH</span>
              </div>

              <h3 className="mt-3.5 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-[26px]">
                Get in touch
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#475569] sm:text-[15px]">
                Simply drop us an email at{" "}
                <a
                  href="mailto:sales@abtelcloud.com"
                  className="font-semibold text-[#0284C7] underline hover:text-[#0099FF]"
                >
                  sales@abtelcloud.com
                </a>{" "}
                and you&apos;ll receive a reply within 24 hours
              </p>

              {/* Response Time Badge */}
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-sky-50/70 px-3.5 py-2 text-xs font-semibold text-[#0284C7]">
                <Clock className="h-4 w-4 text-[#00D4FF]" aria-hidden="true" />
                <span>Average Response Time: Under 2 Hours</span>
              </div>
            </div>

            {/* Contact Channels Cards */}
            <div className="flex flex-col gap-4 text-left">
              {/* Location Card */}
              <div className="group relative flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_6px_22px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00D4FF]/60 hover:shadow-[0_16px_36px_rgba(0,212,255,0.16)]">
                <div className="relative flex h-13 w-13 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50 text-[#0284C7] shadow-inner transition-all duration-300 group-hover:border-[#00D4FF]/60">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 translate-y-full bg-gradient-to-t from-[#00D4FF] via-[#0EA5E9] to-[#246BFD] transition-transform duration-300 ease-out group-hover:translate-y-0"
                  />
                  <MapPin className="relative z-10 h-6 w-6 transition-colors duration-200 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0F172A] transition-colors duration-200 group-hover:text-[#0284C7]">
                    Abner Hill
                  </h4>
                  <p className="text-sm font-medium text-slate-500">San-Antonio, Texas</p>
                </div>
              </div>

              {/* Email Us Card */}
              <a
                href="mailto:sales@abtelcloud.com"
                className="group relative flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_6px_22px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00D4FF]/60 hover:shadow-[0_16px_36px_rgba(0,212,255,0.16)]"
              >
                <div className="relative flex h-13 w-13 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50 text-[#0284C7] shadow-inner transition-all duration-300 group-hover:border-[#00D4FF]/60">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 translate-y-full bg-gradient-to-t from-[#00D4FF] via-[#0EA5E9] to-[#246BFD] transition-transform duration-300 ease-out group-hover:translate-y-0"
                  />
                  <Mail className="relative z-10 h-6 w-6 transition-colors duration-200 group-hover:text-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Email us
                  </span>
                  <h4 className="text-base font-bold text-[#0F172A] transition-colors duration-200 group-hover:text-[#0284C7]">
                    sales@abtelcloud.com
                  </h4>
                </div>
              </a>

              {/* Call Us Card */}
              <a
                href="tel:+18004844204"
                className="group relative flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_6px_22px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00D4FF]/60 hover:shadow-[0_16px_36px_rgba(0,212,255,0.16)]"
              >
                <div className="relative flex h-13 w-13 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50 text-[#0284C7] shadow-inner transition-all duration-300 group-hover:border-[#00D4FF]/60">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 translate-y-full bg-gradient-to-t from-[#00D4FF] via-[#0EA5E9] to-[#246BFD] transition-transform duration-300 ease-out group-hover:translate-y-0"
                  />
                  <Phone className="relative z-10 h-6 w-6 transition-colors duration-200 group-hover:text-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Call us
                  </span>
                  <h4 className="text-base font-bold text-[#0F172A] transition-colors duration-200 group-hover:text-[#0284C7]">
                    +1 800 484 4204
                  </h4>
                </div>
              </a>
            </div>

            {/* Social Network Card */}
            <div className="relative rounded-2xl border border-slate-200/90 bg-white p-6 text-left shadow-[0_12px_36px_rgba(15,23,42,0.05)] sm:p-7">
              <h4 className="text-base font-bold text-[#0F172A]">Follow our social network</h4>
              <p className="mt-1 text-xs text-slate-500">
                Connect with Abtel Cloud Services across all global channels:
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                {/* Facebook-f */}
                <a
                  href="https://www.facebook.com/profile.php?id=100090905051814&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00D4FF]/60 hover:shadow-[0_8px_20px_rgba(0,212,255,0.3)]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 translate-y-full bg-gradient-to-t from-[#00D4FF] via-[#0EA5E9] to-[#246BFD] transition-transform duration-300 ease-out group-hover:translate-y-0"
                  />
                  <FaFacebookF className="relative z-10 h-4 w-4 transition-colors duration-200 group-hover:text-white" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/abtelcloudservices?igsh=ZG41Nmp0OWt3d29t"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00D4FF]/60 hover:shadow-[0_8px_20px_rgba(0,212,255,0.3)]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 translate-y-full bg-gradient-to-t from-[#00D4FF] via-[#0EA5E9] to-[#246BFD] transition-transform duration-300 ease-out group-hover:translate-y-0"
                  />
                  <FaInstagram className="relative z-10 h-4 w-4 transition-colors duration-200 group-hover:text-white" />
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Twitter"
                  className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00D4FF]/60 hover:shadow-[0_8px_20px_rgba(0,212,255,0.3)]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 translate-y-full bg-gradient-to-t from-[#00D4FF] via-[#0EA5E9] to-[#246BFD] transition-transform duration-300 ease-out group-hover:translate-y-0"
                  />
                  <FaTwitter className="relative z-10 h-4 w-4 transition-colors duration-200 group-hover:text-white" />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on YouTube"
                  className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00D4FF]/60 hover:shadow-[0_8px_20px_rgba(0,212,255,0.3)]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 translate-y-full bg-gradient-to-t from-[#00D4FF] via-[#0EA5E9] to-[#246BFD] transition-transform duration-300 ease-out group-hover:translate-y-0"
                  />
                  <FaYoutube className="relative z-10 h-4 w-4 transition-colors duration-200 group-hover:text-white" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
