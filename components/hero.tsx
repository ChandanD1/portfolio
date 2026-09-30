"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { WordCycler } from "./word-cycler";

export function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-start justify-center relative overflow-hidden bg-white pt-[22vh]">
      {/* Very subtle grid — radial fade, barely visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, oklch(0.14 0.01 240 / 5%) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(0.14 0.01 240 / 5%) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
        }}
      />

      <div className="max-w-2xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          {/* Emoji greeting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="text-3xl select-none"
          >
            👋
          </motion.div>

          {/* Name — bold, serif-like weight */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            Chandan Dhumale
          </motion.h1>

          {/* One-line lowercase descriptor */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.18, duration: 0.6 }}
            className="text-base text-muted-foreground font-light"
          >
            founder. engineer. chronic problem-solver.
          </motion.p>

          {/* Personal paragraph bio */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7 }}
            className="pt-4 space-y-4"
          >
            <p className="text-base md:text-lg text-foreground leading-relaxed font-light">
              I&apos;m the Founder &amp; CEO of{" "}
              <a
                href="https://github.com/ChandanD1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-normal underline underline-offset-3 decoration-border/60 hover:decoration-foreground transition-all"
              >
                Astittva
              </a>
              , an AI-powered Vedic astrology platform I built from zero. I&apos;m also pursuing B.Tech in CSE with a Cybersecurity specialization. I spend my time building products, securing systems, and figuring out how technology can create real human value.
            </p>

            {/* Word cycler — the animated statement */}
            <div className="text-base md:text-lg leading-relaxed">
              <WordCycler className="text-foreground" />
            </div>
          </motion.div>

          {/* Soft metadata line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-xs text-muted-foreground/60 font-light pt-2"
          >
            Based in Mumbai, India · Open to collabs &amp; conversations
          </motion.p>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="pt-8"
          >
            <button
              onClick={() => scrollTo("#about")}
              aria-label="Scroll to about"
              className="text-muted-foreground/40 hover:text-foreground/60 transition-colors cursor-pointer inline-block"
            >
              <ArrowDown className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}