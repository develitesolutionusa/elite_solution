import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import {
  financialServices,
  nonFinancialServices,
  type ServiceItem,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — Elite Solution USA",
  description:
    "Financial services including accounting, tax, payroll, audit, and CFO — plus non-financial services for web, design, marketing, SEO, email, and help line support.",
};

function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon;
  return (
    <article className="glow-card flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/5">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-lg font-bold text-brand-950">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">
        {service.description}
      </p>
      <ul className="mt-5 space-y-2.5">
        {service.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm text-slate-600"
          >
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function CategorySection({
  id,
  eyebrow,
  title,
  description,
  services,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  services: ServiceItem[];
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="max-w-2xl">
        <p className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-950 uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-lg text-slate-500">{description}</p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Page hero */}
        <section className="border-b border-slate-100 bg-slate-50/80">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <p className="inline-flex rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-950 uppercase">
              Our Services
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Two practice areas.{" "}
              <span className="bg-linear-to-r from-brand-950 via-brand-600 to-sky-500 bg-clip-text text-transparent">
                One accountable partner.
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-500">
              Choose Financial Services for your books and compliance, or Non
              Financial Services for digital growth — or combine both under one
              team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#financial"
                className="glow-btn inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                Financial Services
              </a>
              <a
                href="#non-financial"
                className="glow-btn-light inline-flex items-center gap-2 rounded-xl border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-400"
              >
                Non Financial Services
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl space-y-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <CategorySection
            id="financial"
            eyebrow="Category 01"
            title="Financial Services"
            description="CPA-led accounting, tax, payroll, audit, and CFO support that keeps your numbers clean and your business compliant."
            services={financialServices}
          />

          <CategorySection
            id="non-financial"
            eyebrow="Category 02"
            title="Non Financial Services"
            description="Web, design, marketing, SEO, email, and help line services that grow your brand and fill your pipeline."
            services={nonFinancialServices}
          />
        </div>

        {/* CTA */}
        <section className="border-t border-slate-100 bg-brand-600">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:px-8">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Ready to get started?
              </h2>
              <p className="mt-2 text-brand-100">
                Tell us what you need — financial, digital, or both.
              </p>
            </div>
            <Link
              href="/contact"
              className="glow-btn-light inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-brand-700 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Request a free consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
