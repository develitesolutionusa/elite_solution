"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative z-10 flex min-h-svh items-center overflow-hidden bg-transparent"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-2xl text-left">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[#008DDA]" />
            <p className="text-sm font-semibold tracking-[0.18em] text-[#008DDA] uppercase">
              Innovative Solutions for a Smarter Tomorrow
            </p>
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.12]"
          >
            We Build Digital{" "}
            <span className="bg-[linear-gradient(90deg,#008DDA_0%,#7dd3fc_50%,#008DDA_100%)] bg-clip-text text-transparent">
              Solutions
            </span>{" "}
            That Drive Real Business Growth
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300"
          >
            From CPA-led accounting and tax to web development, SEO, and
            marketing — Elite Solution helps businesses scale with clarity and
            confidence.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.36,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="/contact"
              className="glow-btn group inline-flex items-center justify-center gap-2 rounded-lg bg-[#008DDA] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#008DDA]/35 transition-all hover:-translate-y-0.5 hover:bg-[#0099ef]"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="glow-btn-light inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
            >
              Our Services
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#services"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/45 transition-colors hover:text-white/80"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce-soft" />
      </motion.a>
    </section>
  );
}
