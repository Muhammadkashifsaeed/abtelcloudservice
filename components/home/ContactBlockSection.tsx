"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { CurvedUnderline } from "@/components/ui/CurvedUnderline";
import { COMPANY_DATA } from "@/data/company";

export function ContactBlockSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: "",
    website_hp: "", // Honeypot field
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (fieldErrors[e.target.name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[e.target.name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFieldErrors({});
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setResponseMsg(data.message || "Thank you! We will be in touch shortly.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Web Development",
          message: "",
          website_hp: "",
        });
      } else {
        setStatus("error");
        setResponseMsg(data.message || "Please correct the highlighted fields.");
        if (data.errors) {
          const errs: Record<string, string> = {};
          for (const key in data.errors) {
            if (data.errors[key]?.[0]) {
              errs[key] = data.errors[key][0];
            }
          }
          setFieldErrors(errs);
        }
      }
    } catch {
      setStatus("error");
      setResponseMsg("Network error. Please try again or email us directly at sales@abtelcloud.com");
    }
  };

  return (
    <section
      id="contact-consultation"
      aria-label="Let's Talk Software"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF5FC] py-20 sm:py-26 border-t border-slate-200/80"
    >
      {/* Ambient Lighting Gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 h-[500px] w-[500px] rounded-full bg-sky-200/30 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 h-[420px] w-[420px] rounded-full bg-blue-100/40 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(61,150,206,0.06),transparent_65%)]"
      />

      {/* Main Contact Grid */}
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Location Card & Direct Contact Channels (Fade Left) */}
          <div className="flex flex-col items-start lg:col-span-5">
            <Reveal variant="fade-down">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0284C7]/30 bg-[#0284C7]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#0284C7] shadow-xs">
                <Sparkles className="h-3.5 w-3.5 text-[#0284C7]" />
                <span>Let&apos;s Connect</span>
              </div>
            </Reveal>

            <Reveal variant="fade-left" delay={0.1} className="mt-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0B1F3A] sm:text-4xl lg:text-[44px] leading-[1.16]">
                Have A Project In Mind?{" "}
                <span className="relative inline-block text-[#0284C7]">
                  Let&apos;s Build Together
                  <CurvedUnderline color="#0284C7" />
                </span>.
              </h2>
            </Reveal>

            <Reveal variant="fade-left" delay={0.16} className="mt-4">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Whether you need a modern web application, native mobile app, or enterprise cloud integration, our Texas engineering team is ready to deliver.
              </p>
            </Reveal>

            {/* San Antonio Location Card */}
            <Reveal variant="fade-left" delay={0.22} className="mt-8 w-full">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-all duration-300 hover:border-sky-300 hover:shadow-[0_8px_28px_rgba(2,132,199,0.12)] hover:-translate-y-0.5">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0284C7] to-cyan-500 text-white shadow-[0_4px_14px_rgba(2,132,199,0.3)]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1F3A]">United States Headquarters</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      {COMPANY_DATA.location}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Serving North American and global enterprise clients.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Contact Rows with Distinctly Styled Cards */}
            <div className="mt-6 flex flex-col gap-4 w-full">
              {/* Phone */}
              <Reveal variant="fade-left" delay={0.28}>
                <a
                  href={`tel:${COMPANY_DATA.phone.replace(/\s+/g, "")}`}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs transition-all duration-300 hover:border-emerald-400/80 hover:bg-emerald-50/30 hover:shadow-[0_6px_22px_rgba(16,185,129,0.12)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 text-white shadow-[0_4px_14px_rgba(16,185,129,0.3)] transition-transform duration-300 group-hover:scale-105">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Technical Sales &amp; Inquiries
                    </span>
                    <p className="text-sm sm:text-base font-bold text-[#0B1F3A] group-hover:text-emerald-600 transition-colors">
                      {COMPANY_DATA.phone}
                    </p>
                  </div>
                </a>
              </Reveal>

              {/* Email */}
              <Reveal variant="fade-left" delay={0.34}>
                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs transition-all duration-300 hover:border-sky-400/80 hover:bg-sky-50/30 hover:shadow-[0_6px_22px_rgba(2,132,199,0.12)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0284C7] to-cyan-400 text-white shadow-[0_4px_14px_rgba(2,132,199,0.3)] transition-transform duration-300 group-hover:scale-105">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Direct Email Response
                    </span>
                    <p className="text-sm sm:text-base font-bold text-[#0B1F3A] group-hover:text-[#0284C7] transition-colors">
                      {COMPANY_DATA.email}
                    </p>
                  </div>
                </a>
              </Reveal>

              {/* Hours */}
              <Reveal variant="fade-left" delay={0.4}>
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 text-white shadow-[0_4px_14px_rgba(245,158,11,0.3)]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Standard Availability
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-700">
                      {COMPANY_DATA.hours}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Clean White Card "Tell Us About Your Project" Form (Fade Right) */}
          <div className="relative lg:col-span-7">
            <Reveal variant="fade-right" duration={0.75}>
              <div className="relative rounded-[28px] border border-slate-200/90 bg-white/95 p-6 sm:p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(15,23,42,0.07),0_0_1px_1px_rgba(255,255,255,0.9)_inset]">
                {/* Subtle Cyan Ambient Corner Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-8 -right-8 h-36 w-36 rounded-full bg-sky-300/25 blur-3xl"
                />

                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0B1F3A]">
                    Tell Us About{" "}
                    <span className="relative inline-block text-[#0284C7]">
                      Your Project
                      <CurvedUnderline color="#0284C7" />
                    </span>
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600">
                    Fill out the form and we&apos;ll be in touch ASAP.
                  </p>
                </div>

                {status === "success" ? (
                  <div className="rounded-2xl border border-emerald-300 bg-emerald-50/80 p-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white mb-4 shadow-[0_0_20px_rgba(16,185,129,0.35)]">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h4 className="text-lg font-bold text-emerald-900">Inquiry Received</h4>
                    <p className="mt-2 text-sm text-emerald-700">{responseMsg}</p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-[#0284C7] px-6 text-xs font-bold text-white shadow-sm hover:bg-[#026aa0] transition-colors"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Honeypot anti-spam field hidden */}
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        name="website_hp"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.website_hp}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Name & Phone Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                        >
                          Name
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Name"
                          className={`w-full rounded-xl border bg-slate-50/80 px-4 py-3.5 text-sm text-[#0B1F3A] placeholder-slate-400 shadow-xs focus:bg-white focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 transition-all ${
                            fieldErrors.name ? "border-rose-500 bg-rose-50/50" : "border-slate-200"
                          }`}
                        />
                        {fieldErrors.name && (
                          <p className="mt-1.5 text-xs text-rose-500">{fieldErrors.name}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                        >
                          Phone
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone"
                          className={`w-full rounded-xl border bg-slate-50/80 px-4 py-3.5 text-sm text-[#0B1F3A] placeholder-slate-400 shadow-xs focus:bg-white focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 transition-all ${
                            fieldErrors.phone ? "border-rose-500 bg-rose-50/50" : "border-slate-200"
                          }`}
                        />
                        {fieldErrors.phone && (
                          <p className="mt-1.5 text-xs text-rose-500">{fieldErrors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Email & Select Service Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                        >
                          Email
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email"
                          className={`w-full rounded-xl border bg-slate-50/80 px-4 py-3.5 text-sm text-[#0B1F3A] placeholder-slate-400 shadow-xs focus:bg-white focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 transition-all ${
                            fieldErrors.email ? "border-rose-500 bg-rose-50/50" : "border-slate-200"
                          }`}
                        />
                        {fieldErrors.email && (
                          <p className="mt-1.5 text-xs text-rose-500">{fieldErrors.email}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-service"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                        >
                          Select Service
                        </label>
                        <select
                          id="contact-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={`w-full rounded-xl border bg-slate-50/80 px-4 py-3.5 text-sm text-[#0B1F3A] shadow-xs focus:bg-white focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 transition-all cursor-pointer ${
                            fieldErrors.service ? "border-rose-500" : "border-slate-200"
                          }`}
                        >
                          <option value="Select Service" disabled>
                            Select Service
                          </option>
                          <option value="Web Development">Web Development</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="API Integrations">API Integrations</option>
                          <option value="E-commerce">E-commerce</option>
                          <option value="Digital Marketplace Services">Digital Marketplace Services</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                        </select>
                        {fieldErrors.service && (
                          <p className="mt-1.5 text-xs text-rose-500">{fieldErrors.service}</p>
                        )}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className={`w-full rounded-xl border bg-slate-50/80 px-4 py-3.5 text-sm text-[#0B1F3A] placeholder-slate-400 shadow-xs focus:bg-white focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 transition-all ${
                          fieldErrors.message ? "border-rose-500 bg-rose-50/50" : "border-slate-200"
                        }`}
                      />
                      {fieldErrors.message && (
                        <p className="mt-1.5 text-xs text-rose-500">{fieldErrors.message}</p>
                      )}
                    </div>

                    {/* Error Banner */}
                    {status === "error" && responseMsg && (
                      <div className="rounded-xl border border-rose-300 bg-rose-50 p-3 text-xs text-rose-700 font-medium">
                        {responseMsg}
                      </div>
                    )}

                    {/* Send Button */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-sheen group relative flex h-[54px] w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#22C7F2] text-base font-bold text-white shadow-[0_6px_24px_rgba(34,199,242,0.4)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_10px_32px_rgba(34,199,242,0.6)] disabled:opacity-70 disabled:pointer-events-none active:scale-95"
                    >
                      <span className="relative z-10 flex items-center gap-2.5">
                        {status === "loading" ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send</span>
                            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
