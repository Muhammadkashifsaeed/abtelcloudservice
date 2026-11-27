"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { apiClient } from "@/lib/axios";
import {
  contactRequestSchema,
  SERVICE_OPTIONS,
  type ContactRequestValues,
} from "@/lib/validations";
import type { ApiError, ApiResponse } from "@/types";
import { cn } from "@/utils";

const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const;
const CALENDLY_LINK = "https://calendly.com/abtelcloud/30min";

export function ContactMainSection() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isCaptchaLoading, setIsCaptchaLoading] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [selectedService, setSelectedService] = useState("");

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
    }, 500);
  };

  const onSubmit = async (values: ContactRequestValues) => {
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const response = await apiClient.post<
        ApiResponse<{ receivedAt: string; name: string }>
      >("/contact", {
        ...values,
        subject: selectedService ? `[${selectedService}] ${values.subject}` : values.subject,
      });

      setSuccessMessage(
        response.data.message ??
        "Thank you! Your request has been submitted to our team. We will reply within 24 hours."
      );
      setCaptchaVerified(false);
      setSelectedService("");
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
    "w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 text-[14.5px] sm:text-[15px] font-medium text-slate-800 placeholder:text-slate-400 placeholder:font-normal transition-all duration-200 focus:bg-white focus:border-black focus:outline-none focus:ring-4 focus:ring-[var(--brand-lime)]/20 disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <section
      aria-label="Submit Your Request to our Team"
      className="relative w-full overflow-hidden bg-[var(--bg-light)] py-16 sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Form & Consent Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: PREMIUM_EASE }}
            className="flex flex-col lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-7 sm:p-10 shadow-[0_12px_45px_rgba(15,23,42,0.06)]">
              {/* Soft Ambient Decorative Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[var(--brand-lime)]/15 blur-[80px]"
              />

              {/* Eyebrow */}
              <div className="mb-2 self-start">
                <span className="eyebrow-premium">
                  SALES &amp; INQUIRIES
                </span>
              </div>

              {/* Main Heading & Subtitle (Requested Exact Copy) */}
              <h2 className="mt-3 text-2xl font-black leading-[1.2] tracking-tight text-[#0B0E14] sm:text-3xl lg:text-[34px] font-heading">
                Submit Your Request to our Team
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:text-base font-normal">
                You can easily get in touch with our sales team to get your project started ASAP!
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="mt-8 flex flex-col gap-4 text-left"
              >
                {/* Honeypot Anti-Spam Field (hidden from real users) */}
                <input
                  type="text"
                  name="website_hp"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden pointer-events-none"
                  aria-hidden="true"
                />

                {/* 1. Name & Company Row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="req-name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="req-name"
                      type="text"
                      placeholder="Your Name"
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                      className={cn(
                        baseFieldClasses,
                        "h-12",
                        errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      )}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs font-semibold text-red-600" role="alert">
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
                      placeholder="Company Name"
                      autoComplete="organization"
                      aria-invalid={Boolean(errors.company)}
                      className={cn(baseFieldClasses, "h-12")}
                      {...register("company")}
                    />
                    {errors.company && (
                      <p className="mt-1 text-xs font-semibold text-red-600" role="alert">
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
                      placeholder="Phone Number"
                      autoComplete="tel"
                      aria-invalid={Boolean(errors.phone)}
                      className={cn(
                        baseFieldClasses,
                        "h-12",
                        errors.phone && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      )}
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs font-semibold text-red-600" role="alert">
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
                      placeholder="Email Address"
                      autoComplete="email"
                      aria-invalid={Boolean(errors.email)}
                      className={cn(
                        baseFieldClasses,
                        "h-12",
                        errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      )}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs font-semibold text-red-600" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* 3. Service Select Dropdown & Subject */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="req-service" className="sr-only">
                      Service Interested In
                    </label>
                    <select
                      id="req-service"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className={cn(baseFieldClasses, "h-12 cursor-pointer text-slate-700")}
                    >
                      <option value="">Select Service (Optional)</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

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
                        errors.subject && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      )}
                      {...register("subject")}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs font-semibold text-red-600" role="alert">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* 4. Message Field */}
                <div>
                  <label htmlFor="req-message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="req-message"
                    rows={4}
                    placeholder="Tell us about your project requirements, goals, and target timeline..."
                    aria-invalid={Boolean(errors.message)}
                    className={cn(
                      baseFieldClasses,
                      "min-h-[120px] resize-y py-3",
                      errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    )}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs font-semibold text-red-600" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* 5. SMS & Privacy Consent Block */}
                <div className="mt-2 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-left text-xs leading-relaxed text-slate-600 sm:p-6 sm:text-[13px]">
                  <p>
                    Abtel Cloud Services would like your consent to send informational text message communications from +18004844204 to your mobile number listed above, in response to your questions or to provide information relevant to your relationship with us.
                  </p>

                  <p className="mt-2.5">
                    Consent is not a condition of purchase. Message frequency varies. Message and data rates may apply. Reply &apos;STOP&apos; to unsubscribe at any time. Reply &apos;HELP&apos; for assistance or more information. We do not share your mobile opt-in information with anyone. See our privacy policy and messaging terms and conditions available at https://www.abtelcloudservices.com/privacy-policy/ and https://www.abtelcloudservices.com/terms-and-conditions/ for more information.
                  </p>

                  <div className="mt-4 flex flex-col gap-3 border-t border-slate-200 pt-4">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-black accent-[var(--brand-lime)] focus:ring-[var(--brand-lime)]"
                        {...register("agreeTerms")}
                      />
                      <span className="font-semibold text-slate-800">
                        Yes, I agree with the privacy policy and terms and conditions. *
                      </span>
                    </label>
                    {errors.agreeTerms && (
                      <p className="text-xs font-bold text-red-600" role="alert">
                        {errors.agreeTerms.message}
                      </p>
                    )}

                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-black accent-[var(--brand-lime)] focus:ring-[var(--brand-lime)]"
                        {...register("consentInformational")}
                      />
                      <span className="text-slate-600">
                        Yes, I consent to receive informational messages from Abtel Cloud Services
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-black accent-[var(--brand-lime)] focus:ring-[var(--brand-lime)]"
                        {...register("consentNoTexts")}
                      />
                      <span className="text-slate-600">
                        No, I do not want to receive any text messages from Abtel Cloud Services
                      </span>
                    </label>
                  </div>
                </div>

                {/* 6. Human Verification Check */}
                <div className="mt-1 flex flex-col items-start">
                  <div className="flex w-full max-w-[304px] items-center justify-between rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 shadow-xs">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={handleCaptchaClick}
                        aria-label="Verify you are human"
                        className={cn(
                          "flex h-7 w-7 items-center justify-center rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-[var(--brand-lime)]/40",
                          captchaVerified
                            ? "border-[var(--success)] bg-white"
                            : "border-slate-400 bg-white hover:border-slate-500"
                        )}
                      >
                        {isCaptchaLoading ? (
                          <Loader2 className="h-4 w-4 animate-spin text-black" />
                        ) : captchaVerified ? (
                          <Check className="h-5 w-5 text-[var(--success)] stroke-[3]" />
                        ) : null}
                      </button>
                      <span className="text-[13.5px] font-medium text-slate-800">
                        I&apos;m not a robot
                      </span>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <ShieldCheck className="h-5 w-5 text-slate-700" />
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                        Security
                      </span>
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
                    className="flex items-start gap-2.5 rounded-2xl border border-[var(--success)]/30 bg-[var(--success-light)] p-4 text-sm font-semibold text-[var(--success)]"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--success)]" />
                    <span>{successMessage}</span>
                  </div>
                )}

                {errorMessage && (
                  <div
                    role="alert"
                    className="rounded-2xl border border-red-300 bg-red-50 p-4 text-sm font-semibold text-red-700"
                  >
                    {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <div className="mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-sheen group/btn relative inline-flex h-[54px] w-full items-center justify-center overflow-hidden rounded-lg bg-[var(--brand-lime)] px-8 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[var(--brand-lime-hover)] hover:shadow-sm hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:opacity-60 ring-1 ring-inset ring-white/20"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting && <Loader2 className="h-4 w-4 animate-spin text-black" />}
                      <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right Column: Calendly CTA, Contact Details & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1, ease: PREMIUM_EASE }}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            {/* Right Column Header: Get in touch */}
            <div className="flex flex-col items-start pb-1">
              <span className="eyebrow-premium">
                DIRECT CHANNELS
              </span>
              <h3 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-[#0B0E14] font-heading">
                Get in touch
              </h3>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                Have questions or need immediate technical scoping? Connect directly with our senior cloud architects and software leads.
              </p>
            </div>

            {/* 1. Calendly 30-min Consultation Card (Prominent & High-Converting) */}
            <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#080A0F] p-7 sm:p-8 text-white shadow-xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-[var(--brand-lime)]/15 blur-[70px]"
              />

              <span className="eyebrow-premium-dark">
                Prefer a Live Call?
              </span>

              <h3 className="mt-3.5 text-2xl font-black tracking-tight text-white font-heading">
                Book a 30-Min Discovery Session
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-white/85">
                Choose a time that works best for you to speak directly with our senior cloud architects and software leads.
              </p>

              <div className="mt-6">
                <a
                  href={CALENDLY_LINK}
                  className="btn-sheen group/cal relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-lg bg-[var(--brand-lime)] px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[var(--brand-lime-hover)] hover:shadow-sm hover:-translate-y-0.5 active:scale-95 ring-1 ring-inset ring-white/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Select Time on Calendly</span>
                  </span>
                </a>
              </div>
            </div>

            {/* 2. Direct Channels Cards */}
            <div className="flex flex-col gap-4 text-left">
              {/* Location Card */}
              <div className="flex items-center gap-4 rounded-[22px] border border-[var(--border-light)] bg-white p-5 card-soft-shadow">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary-light)] text-[var(--primary)]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[var(--text-dark)]">Headquarters</h4>
                  <p className="text-sm text-[var(--text-muted)]">San-Antonio, Texas, United States</p>
                </div>
              </div>

              {/* Email Us Card */}
              <a
                href="mailto:sales@abtelcloud.com"
                className="group flex items-center gap-4 rounded-[22px] border border-[var(--border-light)] bg-white p-5 card-soft-shadow transition-all hover:border-[var(--primary)]/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--secondary-light)] text-[var(--text-dark)] transition-transform group-hover:scale-105">
                  <Mail className="h-5 w-5 text-[var(--primary)]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    Email Technical Sales
                  </span>
                  <h4 className="text-base font-bold text-[var(--text-dark)] transition-colors group-hover:text-[var(--primary)]">
                    sales@abtelcloud.com
                  </h4>
                </div>
              </a>

              {/* Call Us Card */}
              <a
                href="tel:+18004844204"
                className="group flex items-center gap-4 rounded-[22px] border border-[var(--border-light)] bg-white p-5 card-soft-shadow transition-all hover:border-[var(--primary)]/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--success-light)] text-[var(--success)] transition-transform group-hover:scale-105">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    Toll-Free Phone
                  </span>
                  <h4 className="text-base font-bold text-[var(--text-dark)] transition-colors group-hover:text-[var(--primary)]">
                    +1 800 484 4204
                  </h4>
                </div>
              </a>
            </div>

            {/* 3. Social Media Links */}
            <div className="rounded-[22px] border border-[var(--border-light)] bg-white p-6 card-soft-shadow">
              <h4 className="text-sm font-bold text-[var(--text-dark)]">Follow Our Engineering Channels</h4>
              <p className="mt-1 text-xs text-[var(--text-muted)]">
                Connect with Abtel Cloud Services across all digital networks:
              </p>

              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-light)] bg-[var(--surface-muted)] text-[var(--text-dark)] transition-all hover:bg-[var(--primary)] hover:text-white"
                >
                  <FaFacebookF className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-light)] bg-[var(--surface-muted)] text-[var(--text-dark)] transition-all hover:bg-[var(--primary)] hover:text-white"
                >
                  <FaInstagram className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
