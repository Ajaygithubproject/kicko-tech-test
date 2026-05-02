"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const viewportHeight = window.innerHeight || 1;
      const progress = Math.min(window.scrollY / viewportHeight, 1);
      setScrollProgress(progress);
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  const imageScale = 1 + scrollProgress * 0.22;
  const imageLift = scrollProgress * -38;

  return (
    <section id="home" className="section-shell flex min-h-screen items-center pt-28">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.92fr]">
        <div className="animate-fade-up">
          <p className="mb-5 inline-flex rounded-full border border-white/80 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-xl">
            Web, mobile, cloud, and AI product engineering
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.04] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            We Build <span className="gradient-text">Smart</span>{" "}
            <span className="gradient-text">Digital</span> Solutions
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Kicko Tech designs and ships secure, scalable software for modern
            teams, from polished SaaS platforms to mobile apps and cloud-native
            AI systems.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="btn-3d">
              Get Started
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-white/80 bg-white/55 px-7 py-3 font-semibold text-slate-900 shadow-lg shadow-slate-200/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/80"
            >
              View Projects
            </a>
          </div>
        </div>

        <div
          className="relative mx-auto w-full max-w-xl animate-float lg:max-w-none"
          style={{
            transform: `translateY(${imageLift}px)`,
            transition: "transform 180ms ease-out"
          }}
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />

          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85"
              alt="Developer workspace with code on screens"
              width={1200}
              height={900}
              priority
              className="h-[360px] w-full rounded-[1.5rem] object-cover transition-transform duration-200 ease-out sm:h-[460px] lg:h-[540px]"
              style={{
                transform: `scale(${imageScale})`,
                transformOrigin: "center"
              }}
            />
          </div>
          <div className="glass-panel absolute -left-2 top-8 rounded-2xl px-5 py-3 text-sm font-bold text-slate-900 sm:-left-8">
            Secure
          </div>
          <div className="glass-panel absolute -right-2 bottom-10 rounded-2xl px-5 py-3 text-sm font-bold text-slate-900 sm:-right-8">
            Scalable
          </div>
        </div>
      </div>
    </section>
  );
}
