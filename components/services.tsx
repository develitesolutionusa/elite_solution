import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { coreServices } from "@/lib/content";
import Reveal from "@/components/reveal";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 bg-[#060b10]/55 backdrop-blur-[2px]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Reveal variant="up">
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex rounded-full border border-[#008DDA]/30 bg-[#008DDA]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#008DDA] uppercase">
              Our Services
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mt-3 text-lg text-slate-400">
              Two clear categories — financial and non-financial — so you always
              know who owns the work.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal
                key={service.title}
                variant={index % 2 === 0 ? "left" : "right"}
                delay={index * 140}
              >
                <Link
                  href={service.href}
                  className="glow-card group block overflow-hidden rounded-xl border border-white/10 bg-[#0a121c] shadow-sm transition-all hover:-translate-y-1 hover:border-[#008DDA]/40"
                >
                  <div className="relative h-36 overflow-hidden bg-[#0c1828] sm:h-40">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060b10]/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#008DDA] text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white">
                      {service.title}
                    </h3>
                    <ul className="mt-4 grid gap-2.5">
                      {service.items.map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <li
                            key={item.title}
                            className="flex items-center gap-2 text-sm text-slate-300 transition-colors group-hover:text-white"
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#008DDA]/15 text-[#008DDA]">
                              <ItemIcon className="h-3.5 w-3.5" />
                            </span>
                            {item.title}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="up" delay={200}>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="glow-btn inline-flex items-center gap-2 rounded-xl bg-[#008DDA] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0099ef]"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
