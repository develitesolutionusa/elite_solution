import Image from "next/image";

export default function HeroMedia() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
      <div className="relative overflow-hidden rounded-3xl bg-[#0a121c] shadow-2xl shadow-black/40">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/hero-premium-office.png"
            alt="Elite Solution team collaborating in a modern office"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 480px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060b10]/30 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}
