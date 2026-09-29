"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";

export default function PageBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTime = useRef(0);
  const seeking = useRef(false);
  const reduceMotion = useReducedMotion();
  const lenis = useLenis();

  useEffect(() => {
    if (reduceMotion) return;

    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.muted = true;
    video.setAttribute("playsinline", "true");

    const getProgress = (scroll: number) => {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      return Math.min(Math.max(scroll / maxScroll, 0), 1);
    };

    const applyTarget = (scroll: number) => {
      const duration = video.duration;
      if (!Number.isFinite(duration) || duration <= 0) return;
      targetTime.current = getProgress(scroll) * Math.max(duration - 0.08, 0);
      requestSeek();
    };

    const requestSeek = () => {
      if (seeking.current) return;
      if (video.readyState < 1) return;

      const target = targetTime.current;
      if (Math.abs(video.currentTime - target) < 0.04) return;

      seeking.current = true;
      try {
        video.currentTime = target;
      } catch {
        seeking.current = false;
      }
    };

    const onSeeked = () => {
      seeking.current = false;
      // Catch up if scroll moved during the seek
      if (Math.abs(video.currentTime - targetTime.current) > 0.05) {
        requestSeek();
      }
    };

    const onScroll = () => applyTarget(window.scrollY);

    const onLenisScroll = (instance: { scroll: number }) => {
      applyTarget(instance.scroll);
    };

    video.addEventListener("seeked", onSeeked);
    video.addEventListener("loadedmetadata", onScroll);
    video.addEventListener("loadeddata", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    if (lenis) {
      lenis.on("scroll", onLenisScroll);
    }

    // Force load metadata / first frame
    video.load();
    onScroll();

    return () => {
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("loadedmetadata", onScroll);
      video.removeEventListener("loadeddata", onScroll);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (lenis) lenis.off("scroll", onLenisScroll);
    };
  }, [reduceMotion, lenis]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {reduceMotion ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/hero-premium-office.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full scale-105 object-cover"
          muted
          playsInline
          preload="auto"
          poster="/hero-premium-office.png"
        >
          <source src="/media/page-bg.mp4?v=scrub2" type="video/mp4" />
        </video>
      )}

      {/* Lighter wash so scroll frames are visible */}
      <div className="absolute inset-0 bg-[#050910]/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050910]/40 via-[#050910]/35 to-[#050910]/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(0,141,218,0.12),transparent_55%)]" />
    </div>
  );
}
