import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Portfolio — Elite Solution USA",
  description:
    "Explore selected Elite Solution USA projects across accounting, CFO advisory, web development, branding, SEO, and email marketing.",
};

type Project = {
  title: string;
  category: string;
  description: string;
  result: string;
  image: string;
  imageAlt: string;
  tags: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Naperville Restaurant Group",
    category: "Financial Services",
    description:
      "Full bookkeeping, payroll, and monthly reporting for a multi-location restaurant group — giving ownership a clear view of margin by location.",
    result: "Month-end close cut from 18 days to 6",
    image: "/portfolio-hospitality.png",
    imageAlt: "Restaurant operations and financial analytics review",
    tags: ["Accounting", "Payroll", "Reporting"],
    featured: true,
  },
  {
    title: "Growth SaaS Website Rebuild",
    category: "Web Development",
    description:
      "A conversion-focused marketing site with clean architecture, fast load times, and a CMS the internal team can update without a developer.",
    result: "+42% qualified demo requests",
    image: "/portfolio-web.png",
    imageAlt: "Laptop showing a modern website dashboard",
    tags: ["Next.js", "UI/UX", "CMS"],
    featured: true,
  },
  {
    title: "Distribution Co. CFO Dashboards",
    category: "CFO Services",
    description:
      "Board-ready expense and cash-flow dashboards that replaced spreadsheet chaos with live, decision-ready reporting.",
    result: "Weekly cash visibility for leadership",
    image: "/portfolio-finance.png",
    imageAlt: "Financial reports and CFO expense dashboards",
    tags: ["CFO", "Forecasting", "Dashboards"],
  },
  {
    title: "Professional Services Brand System",
    category: "Graphic Designing",
    description:
      "Complete brand identity, pitch decks, and marketing collateral that positioned a boutique firm for enterprise clients.",
    result: "Consistent brand across 12+ assets",
    image: "/portfolio-brand.png",
    imageAlt: "Brand identity design workspace",
    tags: ["Branding", "Collateral", "Identity"],
  },
  {
    title: "Local SEO for Service Business",
    category: "SEO Services",
    description:
      "Technical SEO, local pack optimization, and content strategy that lifted organic visibility in competitive service categories.",
    result: "+68% organic traffic in 5 months",
    image: "/portfolio-seo.png",
    imageAlt: "SEO analytics and search ranking dashboards",
    tags: ["Technical SEO", "Local SEO", "Content"],
  },
  {
    title: "Nurture Email Automation",
    category: "Email Marketing",
    description:
      "Lifecycle email flows and campaigns that re-engaged cold leads and improved retention for a B2B services company.",
    result: "3.1x email-attributed pipeline",
    image: "/portfolio-email.png",
    imageAlt: "Email marketing campaign planning on monitors",
    tags: ["Automation", "Campaigns", "Retention"],
  },
];

const filters = [
  "All",
  "Financial Services",
  "Web Development",
  "CFO Services",
  "Graphic Designing",
  "SEO Services",
  "Email Marketing",
];

export default function PortfolioPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="border-b border-white/10 bg-[#060b10]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <p className="inline-flex rounded-full border border-[#008DDA]/30 bg-[#0a121c] px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase">
              Portfolio
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Selected work that{" "}
              <span className="bg-linear-to-r from-white via-[#008DDA] to-sky-500 bg-clip-text text-transparent">
                drives real outcomes
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-400">
              A look at how Elite Solution pairs financial clarity with digital
              execution — across accounting, websites, branding, SEO, and growth
              campaigns.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {filters.map((filter, index) => (
                <span
                  key={filter}
                  className={`glow-btn-light rounded-full border px-4 py-1.5 text-xs font-semibold ${
                    index === 0
                      ? "border-brand-600 bg-brand-600 text-white"
                      : "border-white/10 bg-[#0a121c] text-slate-300"
                  }`}
                >
                  {filter}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured projects — large zigzag-style cards */}
        <section className="mx-auto max-w-7xl space-y-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          {featured.map((project, index) => (
            <article
              key={project.title}
              className={`grid glow-card overflow-hidden rounded-3xl border border-white/10 bg-[#0a121c] shadow-sm lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <p className="text-xs font-semibold tracking-wide text-brand-600 uppercase">
                  {project.category}
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {project.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <p className="mt-5 inline-flex w-fit rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-400">
                  {project.result}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-[#0c1828] px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Grid projects */}
        <section className="border-t border-white/10 bg-[#0a121c]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                More selected projects
              </h2>
              <p className="mt-3 text-lg text-slate-400">
                Additional engagements across finance, design, SEO, and lifecycle
                marketing.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              {rest.map((project) => (
                <article
                  key={project.title}
                  className="glow-card group overflow-hidden rounded-2xl border border-white/10 bg-[#0a121c] shadow-sm transition-all hover:-translate-y-1 hover:border-[#008DDA]/30 hover:shadow-xl hover:shadow-brand-600/5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0c1828]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#008DDA] opacity-0 shadow transition-opacity group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] font-semibold tracking-wide text-brand-600 uppercase">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-base font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-emerald-400">
                      {project.result}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-600">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:px-8">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Want results like these?
              </h2>
              <p className="mt-2 text-brand-100">
                Tell us about your project — financial, digital, or both.
              </p>
            </div>
            <Link
              href="/contact"
              className="glow-btn-light inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#008DDA] transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
