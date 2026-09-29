import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us — Elite Solution USA",
  description:
    "Get in touch with Elite Solution USA for accounting, tax, payroll, CFO, web development, SEO, and marketing services. Offices in the USA, Saudi Arabia, and Pakistan.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-white/10 bg-[#060b10]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <p className="inline-flex rounded-full border border-[#008DDA]/30 bg-[#0a121c] px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase">
              Contact Us
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Let&apos;s talk about{" "}
              <span className="bg-linear-to-r from-white via-[#008DDA] to-sky-500 bg-clip-text text-transparent">
                your next move
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-400">
              Reach out for a free consultation. Tell us what you need —
              financial, digital, or both — and we&apos;ll reply within one
              business day.
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
