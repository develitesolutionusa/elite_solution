import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative -mt-[5.5rem] overflow-hidden bg-[#060b10] pt-[5.5rem]"
    >
      {/* Animated orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="anim-orb absolute top-[18%] left-[8%] h-40 w-40 rounded-full bg-[#008DDA]/20 blur-3xl" />
        <div className="anim-orb absolute top-[55%] left-[35%] h-28 w-28 rounded-full bg-[#008DDA]/15 blur-2xl [animation-delay:1.2s]" />
        <div className="absolute top-[30%] left-[20%] h-3 w-3 animate-bounce-soft rounded-full bg-[#008DDA]/70" />
        <div className="absolute top-[62%] left-[12%] h-2 w-2 animate-bounce-soft rounded-full bg-white/40 [animation-delay:0.6s]" />
        <div className="absolute top-[42%] left-[42%] h-2.5 w-2.5 animate-float rounded-full bg-[#008DDA]/50 [animation-delay:1s]" />
      </div>

      {/* Full-bleed right image */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] lg:block"
      >
        <Image
          src="/hero-premium-office.png"
          alt=""
          fill
          priority
          sizes="54vw"
          className="animate-ken-burns object-cover object-[center_8%] will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060b10] via-[#060b10]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b10]/40 via-transparent to-transparent" />
        <div className="absolute -left-8 top-1/4 h-48 w-48 animate-glow-pulse rounded-full bg-[#008DDA]/25 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pt-12 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-24 lg:pt-14">
        <div className="relative z-10 max-w-xl">
          <Reveal variant="blur" delay={0}>
            <p className="text-sm font-semibold tracking-wide text-[#008DDA]">
              Innovative Solutions for a Smarter Tomorrow
            </p>
          </Reveal>

          <Reveal variant="up" delay={120}>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              We Build Digital{" "}
              <span className="anim-shimmer bg-[linear-gradient(90deg,#008DDA_0%,#7dd3fc_40%,#008DDA_80%)] bg-clip-text text-transparent">
                Solutions
              </span>{" "}
              That Drive Real Business Growth
            </h1>
          </Reveal>

          <Reveal variant="up" delay={240}>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              From CPA-led accounting and tax to web development, SEO, and
              marketing — Elite Solution helps businesses scale with clarity and
              confidence.
            </p>
          </Reveal>

          <Reveal variant="up" delay={360}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="glow-btn group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#008DDA] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#008DDA]/30 transition-all hover:-translate-y-0.5 hover:bg-[#0099ef]"
              >
                <span className="absolute inset-0 anim-shimmer bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.25)_50%,transparent_80%)] opacity-40" />
                <span className="relative">Get Started</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="glow-btn-light inline-flex items-center justify-center gap-2 rounded-lg border border-white/80 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                Our Services
              </a>
            </div>
          </Reveal>
        </div>

        {/* Mobile / tablet image */}
        <Reveal variant="scale" delay={200} className="lg:hidden">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/11]">
            <Image
              src="/hero-premium-office.png"
              alt="Elite Solution team collaborating in a modern office"
              fill
              priority
              sizes="100vw"
              className="animate-ken-burns object-cover object-[center_15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060b10] via-transparent to-[#060b10]/40" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
