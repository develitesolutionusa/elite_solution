"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/reveal";

const faqs = [
  {
    question: "What services does Elite Solution provide?",
    answer:
      "Financial services (accounting, tax, payroll, audit, CFO) and digital services (web development, design, marketing, SEO, email, and help line support).",
  },
  {
    question: "How do we get started?",
    answer:
      "Click Get Started or contact us. We’ll review your goals, propose a clear scope with fixed pricing, and typically onboard within a week.",
  },
  {
    question: "Where do you operate?",
    answer:
      "We serve clients from offices in the USA (Naperville, IL), Saudi Arabia (Al Khobar), and Pakistan (Karachi).",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-[#060b10]">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <div className="text-center">
            <p className="inline-flex rounded-full border border-[#008DDA]/30 bg-[#008DDA]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#008DDA] uppercase">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
              Questions, answered
            </h2>
          </div>
        </Reveal>

        <Reveal variant="up" delay={120}>
          <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#0a121c]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="transition-colors duration-300 hover:bg-white/[0.03]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="glow-row flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#008DDA] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-slate-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
