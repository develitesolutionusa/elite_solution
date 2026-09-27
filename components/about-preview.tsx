import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import Reveal from "@/components/reveal";

const highlights = [
  "CPA-led financial engagements",
  "Dedicated account managers",
  "USA · Saudi Arabia · Pakistan",
];

export default function AboutPreview() {
  return (
    <section id="about" className="scroll-mt-28 bg-[#0a121c]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Reveal variant="up">
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex rounded-full border border-[#008DDA]/30 bg-[#008DDA]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#008DDA] uppercase">
              About Us
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Who We Are
            </h2>
            <p className="mt-3 text-lg text-slate-400">
              One accountable partner for financial clarity and digital growth.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left" delay={80}>
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c1828] shadow-lg shadow-black/30">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/about-team.png"
                  alt="Elite Solution team collaborating in a modern office"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#008DDA]/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={160}>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                A partner built for business owners who want clarity
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                Elite Solution USA helps growing businesses run cleaner books,
                stay compliant, and scale online — without juggling a dozen
                vendors. Our financial and digital teams work side by side so
                your numbers and your marketing stay aligned.
              </p>
              <ul className="mt-6 space-y-3">
                {highlights.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-slate-200"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#008DDA] text-white shadow-[0_0_16px_rgba(0,141,218,0.45)]">
                      <BadgeCheck className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="glow-btn mt-8 inline-flex items-center gap-2 rounded-xl bg-[#008DDA] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0099ef]"
              >
                Learn more about us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
