import { Clock3, Handshake, Network, Settings2 } from "lucide-react";
import Reveal from "@/components/reveal";

const features = [
  {
    title: "Expert Team",
    description: "Skilled professionals with industry experience",
    icon: Network,
  },
  {
    title: "Innovative Solutions",
    description: "Future-ready technology for your business",
    icon: Settings2,
  },
  {
    title: "On-Time Delivery",
    description: "We value your time and commitments",
    icon: Clock3,
  },
  {
    title: "Ongoing Support",
    description: "We're with you, always",
    icon: Handshake,
  },
];

export default function FeatureStrip() {
  return (
    <section className="border-y border-white/5 bg-[#0a121c]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:px-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Reveal key={feature.title} variant="up" delay={index * 120}>
              <div className="group flex items-center gap-4 transition-transform duration-300 hover:-translate-y-1">
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#008DDA]/35 bg-[#008DDA]/10 text-[#008DDA] transition-all duration-300 group-hover:scale-110 group-hover:border-[#008DDA] group-hover:bg-[#008DDA]/20 group-hover:shadow-[0_0_24px_rgba(0,141,218,0.45)]">
                  <span className="absolute inset-0 animate-pulse-ring rounded-full border border-[#008DDA]/40" />
                  <Icon className="relative h-6 w-6" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-0.5 text-sm leading-snug text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
