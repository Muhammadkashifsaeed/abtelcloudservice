import type { Metadata } from "next";
import { TermsHeroSection } from "@/components";
import { createPageMetadata, generateBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms & Conditions | Legal Policy",
  description:
    "Review terms, conditions, and usage policies governing access to all software platforms, web apps, and cloud services provided by Abtel Cloud Services.",
  path: "/terms-and-conditions",
  keywords: [
    "terms and conditions",
    "service agreement",
    "Abtel Cloud Services terms",
    "software usage terms",
  ],
});

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Terms and Conditions", path: "/terms-and-conditions" },
]);

export default function TermsAndConditionsPage() {
  return (
    <div className="flex w-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      {/* 1. Hero Section with Background software-programer.jpg */}
      <TermsHeroSection />

      {/* 2. Main Terms Documentation Section (All black text, no duplicate headings, plain URL text) */}
      <section className="relative w-full bg-white py-8 sm:py-10 lg:py-12">
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-black text-[15px] leading-relaxed sm:text-base lg:text-[16.5px]">
            {/* Introductory Preamble (Plain text, no links, no extra boxes) */}
            <p className="text-black">
              These Terms govern your access to, usage of all content, Product and Services available at https://www.abtelcloudservices.com website (the &ldquo;Service&rdquo;) operated by Abtel Cloud Services (&ldquo;us&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;).
            </p>

            <p className="text-black">
              Your access to our services are subject to your acceptance, without modification, of all of the terms and conditions contained herein and all other operating rules and policies published and that may be published from time to time by us.
            </p>

            <p className="text-black">
              Please read the Agreement carefully before accessing or using our Services. By accessing or using any part of our Services, you agree to be bound by these Terms. If you do not agree to any part of the terms of the Agreement, then you may not access or use our Services.
            </p>

            {/* INTELLECTUAL PROPERTY */}
            <div className="pt-2">
              <h2 className="text-lg font-bold uppercase tracking-tight text-black sm:text-xl lg:text-[22px]">
                INTELLECTUAL PROPERTY
              </h2>
              <p className="mt-2.5 text-black">
                The Agreement does not transfer from Us to you any of Ours or third party intellectual property, and all right, title, and interest in and to such property will remain (as between the parties) solely with Abtel Cloud Services and its licensors.
              </p>
            </div>

            {/* THIRD PARTY SERVICES */}
            <div className="pt-2">
              <h2 className="text-lg font-bold uppercase tracking-tight text-black sm:text-xl lg:text-[22px]">
                THIRD PARTY SERVICES
              </h2>
              <p className="mt-2.5 text-black">
                In using the Services, you may use third-party services, products, software, embeds, or applications developed by a third party (&ldquo;Third Party Services&rdquo;). If you use any Third Party Services, you understand that:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-black">
                <li className="pl-1">
                  Any use of a Third Party Service is at your own risk, and we shall not be responsible or liable to anyone for Third Party websites or Services.
                </li>
                <li className="pl-1">
                  You acknowledge and agree that We shall not be responsible or liable for any damage or loss caused or alleged to be caused by or in connection with the use of any such content, goods or services available on or through any such web sites or services.
                </li>
              </ul>
            </div>

            {/* ACCOUNTS */}
            <div className="pt-2">
              <h2 className="text-lg font-bold uppercase tracking-tight text-black sm:text-xl lg:text-[22px]">
                ACCOUNTS
              </h2>
              <p className="mt-2.5 text-black">
                Where use of any part of our Services requires an account, you agree to provide us with complete and accurate information when you register for an account. You will be solely responsible and liable for any activity that occurs under your account. You are responsible for keeping your account information up-to-date and for keeping your password secure. You are responsible for maintaining the security of your account that you use to access the Service. You shall not share or misuse your access credentials. You must notify us immediately of any unauthorized uses of your account or upon becoming aware of any other breach of security.
              </p>
            </div>

            {/* BILLING */}
            <div className="pt-2">
              <h2 className="text-lg font-bold uppercase tracking-tight text-black sm:text-xl lg:text-[22px]">
                BILLING
              </h2>
              <p className="mt-2.5 text-black">
                All monthly service plans provided by Abtel Cloud Services are considered recurring monthly subscriptions. Upfront fees for one-time development services are specified as such on the invoice where applicable. Customer agrees at time of purchase to authorize charges both at the time of purchase and recurring monthly auto-billing for all subscription plans. All subscription plans require a payment method to be saved on file for monthly billing. All sales are non-refundable after development, hosting services, and/or access to the Software has been provided. Upfront development services are non-refundable if the development services have been rendered to client.
              </p>
            </div>

            {/* CANCELLATION POLICY */}
            <div className="pt-2">
              <h2 className="text-lg font-bold uppercase tracking-tight text-black sm:text-xl lg:text-[22px]">
                CANCELLATION POLICY
              </h2>
              <p className="mt-2.5 text-black">
                We at Abtel Cloud Services strive to provide excellent service to our customers. However, we understand that circumstances may change, and you may need to cancel your subscription with us. Therefore, we have outlined our cancellation policy below: You may cancel your monthly subscription at any time by logging into your account on our website and following the cancellation instructions. If you cancel your subscription before the end of your current billing cycle, your subscription will remain active until the end of that billing cycle. You will not be charged for the following month. We do not offer refunds for any unused portion of your subscription. If you wish to reactivate your subscription after cancelling, you may do so at any time by logging into your account and resubscribing. Please note that a reactivation fee will apply.
              </p>
            </div>

            {/* TERMINATION */}
            <div className="pt-2">
              <h2 className="text-lg font-bold uppercase tracking-tight text-black sm:text-xl lg:text-[22px]">
                TERMINATION
              </h2>
              <p className="mt-2.5 text-black">
                We may terminate or suspend your access to all or any part of our Services at any time, with or without cause, with or without notice, effective immediately. If you wish to terminate the Agreement or your Abtel Cloud Services account, you may simply discontinue using our Services. All provisions of the Agreement which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </div>

            {/* DISCLAIMER */}
            <div className="pt-2">
              <h2 className="text-lg font-bold uppercase tracking-tight text-black sm:text-xl lg:text-[22px]">
                DISCLAIMER
              </h2>
              <p className="mt-2.5 text-black">
                Our Services are provided &ldquo;AS IS.&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis. Abtel Cloud Services and its suppliers and licensors hereby disclaim all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose and non-infringement. Neither Abtel Cloud Services, nor its suppliers and licensors, makes any warranty that our Services will be error free or that access thereto will be continuous or uninterrupted. You understand that you download from, or otherwise obtain content or services through, our Services at your own discretion and risk. Abtel Cloud Services reserves the right, at our sole discretion, to modify or replace these Terms at any time. If we make changes that are material, we will let you know by posting on our website, or by sending you an email or other communication before the changes take effect. The notice will designate a reasonable period of time after which the new terms will take effect. If you disagree with our changes, then you should stop using our Services within the designated notice period, or once the changes become effective. Your continued use of our Services will be subject to the new terms.
              </p>
            </div>

            {/* CONTACT INFORMATION (Pure text form, no links) */}
            <div className="border-t border-slate-200 pt-6">
              <h2 className="text-lg font-bold uppercase tracking-tight text-black sm:text-xl lg:text-[22px]">
                CONTACT US
              </h2>
              <p className="mt-2.5 text-black">
                If you have questions, feedback, or concerns regarding these Terms and Conditions, please contact us:
              </p>
              <div className="mt-3.5 space-y-1.5 text-black text-[15px] sm:text-base">
                <p>
                  <span className="font-bold">Website:</span> https://www.abtelcloudservices.com
                </p>
                <p>
                  <span className="font-bold">Email:</span> info@abtelcloud.com
                </p>
                <p>
                  <span className="font-bold">Support:</span> support@abtelcloud.com
                </p>
                <p>
                  <span className="font-bold">Phone:</span> +1 (800) 484-4204
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
