import type { Metadata } from "next";
import Link from "next/link";
import { TermsHeroSection } from "@/components";
import {
  FileText,
  ChevronRight,
  ShieldAlert,
  CreditCard,
  Lock,
  Mail,
  Phone,
  Globe,
  AlertTriangle,
  Scale,
} from "lucide-react";
import { CurvedUnderline } from "@/components/ui/CurvedUnderline";
import { createPageMetadata, generateBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms & Conditions | Service Agreement - Abtel Cloud Services",
  description:
    "Review terms, conditions, and usage policies governing access to all software platforms, web apps, and cloud services provided by Abtel Cloud Services.",
  path: "/terms-and-conditions",
  keywords: [
    "terms and conditions",
    "service agreement",
    "Abtel Cloud Services terms",
    "software usage terms",
    "cloud consulting SLA",
  ],
});

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Terms and Conditions", path: "/terms-and-conditions" },
]);

const TERMS_TOC = [
  { id: "preamble", label: "Overview & Acceptance" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "third-party-services", label: "Third Party Services" },
  { id: "accounts", label: "Accounts & Security" },
  { id: "billing", label: "Billing & Subscriptions" },
  { id: "cancellation", label: "Cancellation Policy" },
  { id: "termination", label: "Termination" },
  { id: "disclaimer", label: "Disclaimer & Warranties" },
  { id: "contact-terms", label: "Contact Us" },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="flex w-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* Hero Section */}
      <TermsHeroSection />

      {/* Main Legal Documentation Section */}
      <section className="relative w-full bg-[#F8FAFC] py-10 sm:py-14 lg:py-16">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Sticky Table of Contents Sidebar */}
            <aside className="hidden lg:col-span-4 lg:block sticky top-28">
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
                <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-[var(--brand-lime)]">
                    <Scale className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Agreement Navigation
                  </span>
                </div>

                <nav className="mt-4 flex flex-col space-y-1 text-xs font-medium text-slate-600">
                  {TERMS_TOC.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="group flex items-center justify-between rounded-xl px-3 py-2 transition-all duration-150 hover:bg-slate-100 hover:text-black"
                    >
                      <span>{sec.label}</span>
                      <ChevronRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ))}
                </nav>

                <div className="mt-6 border-t border-slate-100 pt-4 text-xs text-slate-500">
                  <p className="font-semibold text-slate-700">Abtel Cloud Services</p>
                  <p className="mt-1">
                    Direct inquiries:{" "}
                    <a
                      href="mailto:info@abtelcloud.com"
                      className="font-bold text-slate-900 hover:text-black underline"
                    >
                      info@abtelcloud.com
                    </a>
                  </p>
                </div>
              </div>
            </aside>

            {/* Legal Document Main Column */}
            <main className="lg:col-span-8">
              <div className="relative rounded-3xl border border-slate-200/90 bg-white p-6 text-left shadow-[0_4px_30px_rgba(15,23,42,0.05)] sm:p-10 lg:p-12">
                {/* Top Subtle Lime Glow Accent */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-8 top-0 h-[3px] rounded-full bg-gradient-to-r from-slate-900 via-[var(--brand-lime)] to-slate-900"
                />

                {/* Introductory Preamble Header */}
                <div id="preamble" className="border-b border-slate-100 pb-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-800">
                    <FileText className="h-3.5 w-3.5 text-slate-900" />
                    <span>Legal Agreement</span>
                  </div>

                  <h1 className="relative inline-block mt-4 text-2xl font-black tracking-tight text-[var(--brand-lime)] sm:text-3xl lg:text-4xl">
                    <span>Terms &amp; Conditions</span>
                    <CurvedUnderline color="#2563EB" className="-bottom-2 sm:-bottom-3" />
                  </h1>

                  <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700 sm:text-base lg:text-[16.5px]">
                    <p>
                      These Terms govern your access to, usage of all content, Product and Services available at{" "}
                      <strong className="text-slate-900">
                        https://www.abtelcloudservices.com
                      </strong>{" "}
                      website (the &ldquo;Service&rdquo;) operated by Abtel Cloud Services (&ldquo;us&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;).
                    </p>

                    <p>
                      Your access to our services are subject to your acceptance, without modification, of all of the terms and conditions contained herein and all other operating rules and policies published and that may be published from time to time by us.
                    </p>

                    <p>
                      Please read the Agreement carefully before accessing or using our Services. By accessing or using any part of our Services, you agree to be bound by these Terms. If you do not agree to any part of the terms of the Agreement, then you may not access or use our Services.
                    </p>
                  </div>
                </div>

                {/* Document Body */}
                <div className="space-y-9 pt-8 text-[15px] leading-relaxed text-slate-700 sm:text-base lg:text-[16.5px]">
                  {/* INTELLECTUAL PROPERTY */}
                  <div id="intellectual-property" className="pt-2">
                    <h2 className="text-lg font-bold uppercase tracking-tight text-slate-900 sm:text-xl lg:text-[22px]">
                      INTELLECTUAL PROPERTY
                    </h2>
                    <p className="mt-2.5 text-slate-700">
                      The Agreement does not transfer from Us to you any of Ours or third party intellectual property, and all right, title, and interest in and to such property will remain (as between the parties) solely with Abtel Cloud Services and its licensors.
                    </p>
                  </div>

                  {/* THIRD PARTY SERVICES */}
                  <div id="third-party-services" className="pt-2">
                    <h2 className="text-lg font-bold uppercase tracking-tight text-slate-900 sm:text-xl lg:text-[22px]">
                      THIRD PARTY SERVICES
                    </h2>
                    <p className="mt-2.5 text-slate-700">
                      In using the Services, you may use third-party services, products, software, embeds, or applications developed by a third party (&ldquo;Third Party Services&rdquo;). If you use any Third Party Services, you understand that:
                    </p>
                    <ul className="mt-3.5 list-disc space-y-2 pl-6 text-slate-700">
                      <li className="pl-1">
                        Any use of a Third Party Service is at your own risk, and we shall not be responsible or liable to anyone for Third Party websites or Services.
                      </li>
                      <li className="pl-1">
                        You acknowledge and agree that We shall not be responsible or liable for any damage or loss caused or alleged to be caused by or in connection with the use of any such content, goods or services available on or through any such web sites or services.
                      </li>
                    </ul>
                  </div>

                  {/* ACCOUNTS */}
                  <div id="accounts" className="pt-2">
                    <h2 className="text-lg font-bold uppercase tracking-tight text-slate-900 sm:text-xl lg:text-[22px]">
                      ACCOUNTS
                    </h2>
                    <p className="mt-2.5 text-slate-700">
                      Where use of any part of our Services requires an account, you agree to provide us with complete and accurate information when you register for an account. You will be solely responsible and liable for any activity that occurs under your account. You are responsible for keeping your account information up-to-date and for keeping your password secure. You are responsible for maintaining the security of your account that you use to access the Service. You shall not share or misuse your access credentials. You must notify us immediately of any unauthorized uses of your account or upon becoming aware of any other breach of security.
                    </p>
                  </div>

                  {/* BILLING */}
                  <div
                    id="billing"
                    className="rounded-2xl border border-slate-200/90 bg-slate-50/80 p-6 sm:p-8"
                  >
                    <div className="flex items-center gap-2.5 text-lg font-bold uppercase tracking-tight text-slate-900 sm:text-xl lg:text-[22px]">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-[var(--brand-lime)]">
                        <CreditCard className="h-4.5 w-4.5" />
                      </div>
                      <h2>BILLING</h2>
                    </div>
                    <p className="mt-3.5 text-slate-800 leading-relaxed">
                      All monthly service plans provided by Abtel Cloud Services are considered recurring monthly subscriptions. Upfront fees for one-time development services are specified as such on the invoice where applicable. Customer agrees at time of purchase to authorize charges both at the time of purchase and recurring monthly auto-billing for all subscription plans. All subscription plans require a payment method to be saved on file for monthly billing. All sales are non-refundable after development, hosting services, and/or access to the Software has been provided. Upfront development services are non-refundable if the development services have been rendered to client.
                    </p>
                  </div>

                  {/* CANCELLATION POLICY */}
                  <div id="cancellation" className="pt-2">
                    <h2 className="text-lg font-bold uppercase tracking-tight text-slate-900 sm:text-xl lg:text-[22px]">
                      CANCELLATION POLICY
                    </h2>
                    <p className="mt-2.5 text-slate-700">
                      We at Abtel Cloud Services strive to provide excellent service to our customers. However, we understand that circumstances may change, and you may need to cancel your subscription with us. Therefore, we have outlined our cancellation policy below: You may cancel your monthly subscription at any time by logging into your account on our website and following the cancellation instructions. If you cancel your subscription before the end of your current billing cycle, your subscription will remain active until the end of that billing cycle. You will not be charged for the following month. We do not offer refunds for any unused portion of your subscription. If you wish to reactivate your subscription after cancelling, you may do so at any time by logging into your account and resubscribing. Please note that a reactivation fee will apply.
                    </p>
                  </div>

                  {/* TERMINATION */}
                  <div id="termination" className="pt-2">
                    <h2 className="text-lg font-bold uppercase tracking-tight text-slate-900 sm:text-xl lg:text-[22px]">
                      TERMINATION
                    </h2>
                    <p className="mt-2.5 text-slate-700">
                      We may terminate or suspend your access to all or any part of our Services at any time, with or without cause, with or without notice, effective immediately. If you wish to terminate the Agreement or your Abtel Cloud Services account, you may simply discontinue using our Services. All provisions of the Agreement which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                    </p>
                  </div>

                  {/* DISCLAIMER */}
                  <div
                    id="disclaimer"
                    className="rounded-2xl border border-amber-200/90 bg-amber-50/50 p-6 sm:p-8"
                  >
                    <div className="flex items-center gap-2.5 text-lg font-bold uppercase tracking-tight text-slate-900 sm:text-xl lg:text-[22px]">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-white">
                        <AlertTriangle className="h-4.5 w-4.5" />
                      </div>
                      <h2>DISCLAIMER</h2>
                    </div>
                    <p className="mt-3.5 text-slate-800 leading-relaxed">
                      Our Services are provided &ldquo;AS IS.&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis. Abtel Cloud Services and its suppliers and licensors hereby disclaim all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose and non-infringement. Neither Abtel Cloud Services, nor its suppliers and licensors, makes any warranty that our Services will be error free or that access thereto will be continuous or uninterrupted. You understand that you download from, or otherwise obtain content or services through, our Services at your own discretion and risk. Abtel Cloud Services reserves the right, at our sole discretion, to modify or replace these Terms at any time. If we make changes that are material, we will let you know by posting on our website, or by sending you an email or other communication before the changes take effect. The notice will designate a reasonable period of time after which the new terms will take effect. If you disagree with our changes, then you should stop using our Services within the designated notice period, or once the changes become effective. Your continued use of our Services will be subject to the new terms.
                    </p>
                  </div>

                  {/* CONTACT US */}
                  <div
                    id="contact-terms"
                    className="border-t border-slate-200 pt-8"
                  >
                    <h2 className="text-lg font-bold uppercase tracking-tight text-slate-900 sm:text-xl lg:text-[22px]">
                      CONTACT US
                    </h2>
                    <p className="mt-2 text-slate-700">
                      If you have questions, feedback, or concerns regarding these Terms and Conditions, please contact us:
                    </p>

                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
                      <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
                        <Globe className="h-5 w-5 shrink-0 text-slate-900" />
                        <div>
                          <p className="text-xs uppercase font-bold text-slate-500">Website</p>
                          <a
                            href="https://www.abtelcloudservices.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-slate-900 hover:text-black"
                          >
                            https://www.abtelcloudservices.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
                        <Mail className="h-5 w-5 shrink-0 text-slate-900" />
                        <div>
                          <p className="text-xs uppercase font-bold text-slate-500">General Inquiries</p>
                          <a
                            href="mailto:info@abtelcloud.com"
                            className="font-semibold text-slate-900 hover:text-black"
                          >
                            info@abtelcloud.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
                        <Mail className="h-5 w-5 shrink-0 text-slate-900" />
                        <div>
                          <p className="text-xs uppercase font-bold text-slate-500">Support Desk</p>
                          <a
                            href="mailto:support@abtelcloud.com"
                            className="font-semibold text-slate-900 hover:text-black"
                          >
                            support@abtelcloud.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
                        <Phone className="h-5 w-5 shrink-0 text-slate-900" />
                        <div>
                          <p className="text-xs uppercase font-bold text-slate-500">Phone</p>
                          <a
                            href="tel:+18004844204"
                            className="font-semibold text-slate-900 hover:text-black"
                          >
                            +1 (800) 484-4204
                          </a>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-xs text-slate-500">
                      Abtel Cloud Services &bull; San Antonio, Texas, United States &bull; All Rights Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
