import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Globe2, Target, Users } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About Us — Elite Solution USA",
  description:
    "Learn about Elite Solution USA — a CPA-led team delivering financial and digital services from offices in the USA, Saudi Arabia, and Pakistan.",
};

const zigZagBlocks = [
  {
    eyebrow: "Who we are",
    title: "A partner built for business owners who want clarity",
    body: "Elite Solution USA helps small and growing businesses run cleaner books, stay compliant, and grow online — without juggling a dozen vendors. Our financial and digital teams work side by side so your numbers and your marketing stay aligned.",
    points: [
      "CPA-led financial engagements",
      "Dedicated account managers",
      "Fixed, transparent monthly pricing",
    ],
    image: "/about-team.png",
    imageAlt: "Elite Solution team collaborating in a modern office",
    reverse: false,
  },
  {
    eyebrow: "Our expertise",
    title: "Financial depth meets digital delivery",
    body: "From accounting, tax, payroll, audit, and CFO support to web development, design, SEO, and marketing — we cover the full stack of services most growing companies need under one roof.",
    points: [
      "Accurate books and on-time filings",
      "Websites and campaigns that convert",
      "Reporting that drives decisions",
    ],
    image: "/about-expertise.png",
    imageAlt: "Financial experts reviewing reports and dashboards",
    reverse: true,
  },
  {
    eyebrow: "Where we work",
    title: "Local presence. Global reach.",
    body: "With offices in Naperville (USA), Al Khobar (Saudi Arabia), and Karachi (Pakistan), we support clients across regions with the same standard of care — responsive communication, clear scopes, and accountable delivery.",
    points: [
      "USA · Saudi Arabia · Pakistan",
      "Cross-border client support",
      "One team, one process",
    ],
    image: "/about-global.png",
    imageAlt: "Business partners collaborating across regions",
    reverse: false,
  },
];

const values = [
  {
    icon: BadgeCheck,
    title: "Quality first",
    description: "Clean work, clear communication, and no surprises.",
  },
  {
    icon: Target,
    title: "Results focused",
    description: "Every engagement is scoped against real business outcomes.",
  },
  {
    icon: Users,
    title: "Client partnership",
    description: "We treat your books and brand like our own reputation.",
  },
  {
    icon: Globe2,
    title: "Global capability",
    description: "Multi-office coverage with consistent delivery standards.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Page hero */}
        <section className="border-b border-white/10 bg-[#060b10]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <p className="inline-flex rounded-full border border-[#008DDA]/30 bg-[#0a121c] px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase">
              About Elite Solution
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Empowering growth with{" "}
              <span className="bg-linear-to-r from-white via-[#008DDA] to-sky-500 bg-clip-text text-transparent">
                financial clarity and digital strength
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-400">
              We specialize in helping business owners stay compliant, make
              smarter decisions, and scale with confidence — through one
              accountable partner.
            </p>
          </div>
        </section>

        {/* Zigzag sections */}
        <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:space-y-28 lg:px-8 lg:py-24">
          {zigZagBlocks.map((block) => (
            <section
              key={block.title}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                block.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c1828] shadow-lg shadow-black/30">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <p className="inline-flex rounded-full border border-[#008DDA]/30 bg-[#008DDA]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase">
                  {block.eyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {block.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-400">
                  {block.body}
                </p>
                <ul className="mt-6 space-y-3">
                  {block.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-sm font-medium text-slate-300"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                        <BadgeCheck className="h-3.5 w-3.5" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        {/* Values */}
        <section className="border-y border-white/10 bg-[#060b10]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <p className="inline-flex rounded-full border border-[#008DDA]/30 bg-[#0a121c] px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase">
                Our promise
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                What we stand for
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="glow-card rounded-2xl border border-white/10 bg-[#0a121c] p-6 shadow-sm"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-base font-bold text-white">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-600">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:px-8">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Let&apos;s build your next chapter together
              </h2>
              <p className="mt-2 text-brand-100">
                Book a free consultation with our team.
              </p>
            </div>
            <Link
              href="/contact"
              className="glow-btn-light inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#008DDA] transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
