"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 pt-20">

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CFFF92]/[0.07] blur-[130px]" />

      <div className="pointer-events-none absolute left-[15%] top-[20%] h-45 w-45 rounded-full bg-[#CFFF92]/2.5 blur-[80px]" />

      {/* ================= GRID ================= */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ================= LARGE GRID BOXES ================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Top Left Box */}
        <div className="absolute left-[8%] top-[18%] h-28 w-28 border border-white/12 md:h-40 md:w-40">
          <div className="absolute -right-1 -top-1 h-2 w-2 bg-[#CFFF92]" />
        </div>

        {/* Top Right Box */}
        <div className="absolute right-[8%] top-[12%] h-20 w-20 border border-white/8 md:h-32 md:w-32" />

        {/* Bottom Left Box */}
        <div className="absolute bottom-[14%] left-[14%] h-20 w-20 border border-white/8 md:h-28 md:w-28" />

        {/* Bottom Right Box */}
        <div className="absolute bottom-[18%] right-[12%] h-28 w-28 border border-white/10 md:h-40 md:w-40">
          <div className="absolute -bottom-1 -left-1 h-2 w-2 bg-[#CFFF92]" />
        </div>

        {/* Center Decorative Box */}
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/3.5 md:h-125 md:w-125" />

      </div>

      {/* ================= CENTER CROSS ================= */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">

        <div className="absolute left-1/2 top-1/2 h-px w-150 -translate-x-1/2 bg-white/5" />

        <div className="absolute left-1/2 top-1/2 h-150 w-px -translate-y-1/2 bg-white/5" />

      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">

        {/* Small Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-[#CFFF92] shadow-[0_0_15px_rgba(207,255,146,0.5)]" />

          <span className="text-xs uppercase tracking-[0.35em] text-white/50">
            Digital Creative Agency
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-viga text-[clamp(3.5rem,8vw,7rem)] uppercase leading-[0.85] tracking-[-0.04em] text-white"
        >
          We Make
          <br />

          <span className="text-[#CFFF92] drop-shadow-[0_0_25px_rgba(207,255,146,0.12)]">
            Ideas
          </span>
          <br />

          Matter<span className="text-[#CFFF92]">.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 max-w-md text-sm leading-7 text-white/50 md:text-base"
        >
          We turn bold ideas into meaningful digital experiences that help
          ambitious brands move forward.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="#work"
            className="group flex items-center gap-2 rounded-full bg-[#CFFF92] px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-white"
          >
            Explore Our Work

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          <a
            href="#about"
            className="group flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            Discover

            <ArrowDownRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>

      {/* ================= BOTTOM LEFT ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-6 hidden text-[10px] uppercase tracking-[0.3em] text-white/30 md:block"
      >
        <span className="mr-3 text-[#CFFF92]">↓</span>
        Scroll to explore
      </motion.div>

      {/* ================= BOTTOM RIGHT ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 right-6 hidden text-[10px] uppercase tracking-[0.3em] text-white/30 md:block"
      >
        Dhaka · Bangladesh
      </motion.div>

    </section>
  );
}