import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/reveal";

const previewProjects = [
  {
    title: "Naperville Restaurant Group",
    category: "Financial Services",
    result: "Month-end close cut from 18 days to 6",
    image: "/portfolio-hospitality.png",
    imageAlt: "Restaurant operations and financial analytics review",
  },
  {
    title: "Growth SaaS Website Rebuild",
    category: "Web Development",
    result: "+42% qualified demo requests",
    image: "/portfolio-web.png",
    imageAlt: "Laptop showing a modern website dashboard",
  },
  {
    title: "Distribution Co. CFO Dashboards",
    category: "CFO Services",
    result: "Weekly cash visibility for leadership",
    image: "/portfolio-finance.png",
    imageAlt: "Financial reports and CFO expense dashboards",
  },
  {
    title: "Local SEO for Service Business",
    category: "SEO Services",
    result: "+68% organic traffic in 5 months",
    image: "/portfolio-seo.png",
    imageAlt: "SEO analytics and search ranking dashboards",
  },
];

export default function PortfolioPreview() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-28 border-t border-white/5 bg-[#060b10]/55 backdrop-blur-[2px]"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Reveal variant="up">
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex rounded-full border border-[#008DDA]/30 bg-[#008DDA]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#008DDA] uppercase">
              Portfolio
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Selected Work
            </h2>
            <p className="mt-3 text-lg text-slate-400">
              A snapshot of recent engagements across finance, web, and growth.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {previewProjects.map((project, index) => (
            <Reveal key={project.title} variant="scale" delay={index * 110}>
              <Link
                href="/portfolio"
                className="glow-card group block overflow-hidden rounded-2xl border border-white/10 bg-[#0a121c] shadow-sm transition-all hover:-translate-y-2 hover:border-[#008DDA]/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0c1828]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060b10]/70 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-100" />
                  <span className="absolute top-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/90 text-[#008DDA] opacity-0 shadow transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-semibold tracking-wide text-[#008DDA] uppercase">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-base font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold text-emerald-400">
                    {project.result}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={200}>
          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="glow-btn inline-flex items-center gap-2 rounded-xl bg-[#008DDA] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0099ef]"
            >
              View full portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
