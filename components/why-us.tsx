import { ArrowRight } from "lucide-react";
import Reveal from "@/components/reveal";

export default function WhyUs() {
  return (
    <section className="scroll-mt-20 bg-transparent py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c1828] via-[#0a2040] to-[#008DDA]/40">
            <div
              aria-hidden
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="anim-orb pointer-events-none absolute -right-10 top-10 h-48 w-48 rounded-full bg-[#008DDA]/30 blur-3xl" />
            <div className="anim-orb pointer-events-none absolute -left-8 bottom-8 h-36 w-36 rounded-full bg-sky-400/20 blur-3xl [animation-delay:1s]" />

            <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-12 lg:p-14">
              <Reveal variant="left" delay={100}>
                <div>
                  <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase">
                    Why Choose Us?
                  </p>
                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Your Trusted Partner in Digital Transformation
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-300">
                    We combine CPA-led financial expertise with modern digital
                    delivery — so you get accurate books, compliant filings, and
                    growth systems that actually work together.
                  </p>
                  <a
                    href="/contact"
                    className="glow-btn mt-8 inline-flex items-center gap-2 rounded-xl bg-[#008DDA] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0099ef]"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>

              <Reveal variant="right" delay={200}>
                <div className="relative">
                  <div className="overflow-hidden rounded-2xl bg-white/5 shadow-2xl ring-1 ring-white/15 backdrop-blur-sm">
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-[#008DDA]/25 to-[#060b10]/80 p-6">
                      <div className="absolute inset-0 flex items-end justify-center gap-3 pb-6">
                        {[0, 1, 2].map((i) => (
                          <div
                            key={i}
                            className="flex flex-col items-center animate-float"
                            style={{
                              transform: `translateY(${i === 1 ? 0 : 12}px)`,
                              animationDelay: `${i * 0.35}s`,
                            }}
                          >
                            <div
                              className={`rounded-2xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-sm ${
                                i === 1 ? "h-36 w-28" : "h-32 w-24"
                              }`}
                            >
                              <div className="mx-auto mt-4 h-12 w-12 rounded-full bg-[#008DDA]/40" />
                              <div className="mx-auto mt-3 h-2 w-14 rounded bg-white/20" />
                              <div className="mx-auto mt-2 h-2 w-10 rounded bg-white/10" />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="absolute top-6 right-6 animate-bounce-soft rounded-xl border border-white/10 bg-[#0a121c]/90 px-4 py-3 shadow-lg backdrop-blur-sm">
                        <p className="text-xs font-semibold text-white">
                          Trusted by 150+ Businesses
                        </p>
                        <p className="text-[11px] text-slate-400">Worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
