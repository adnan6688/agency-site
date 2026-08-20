"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Workflow, Layout } from "lucide-react";
import {
  SiTypescript, 
  SiNodedotjs, 
  SiPython, 
  SiMysql, 
  SiReact, 
  SiMongodb, 
  SiDocker, 
  SiDart
} from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070707] px-6 pt-20">

      {/* ================= BACKGROUND GLOWS & PATTERNS ================= */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-125 w-125 rounded-full bg-[#CFFF92]/7 blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-125 w-125 rounded-full bg-indigo-500/5 blur-[160px]" />

      {/* Subtle Radial Dot Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* ================= 3D / GEOMETRIC SHAPES & TECH/SKILL LOGOS ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        
        {/* Top Center: TypeScript */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute left-[38%] top-[12%] hidden rounded-xl border border-white/15 bg-white/4 p-3 backdrop-blur-md md:flex items-center gap-2.5 shadow-xl"
        >
          <SiTypescript className="text-blue-400 text-xl" />
          <span className="text-xs font-semibold text-white tracking-wider">TypeScript</span>
        </motion.div>

        {/* Top Right: UI/UX Design Badge */}
        <motion.div
          animate={{ y: [8, -8, 8] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute right-[35%] top-[14%] hidden rounded-xl border border-purple-500/30 bg-purple-500/10 p-3 backdrop-blur-md md:flex items-center gap-2.5 shadow-xl"
        >
          <Layout className="text-purple-400 text-xl" />
          <span className="text-xs font-semibold text-white tracking-wider">UI/UX Design</span>
        </motion.div>

        {/* Top Left: Node.js */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute left-[6%] top-[18%] hidden h-28 w-28 rounded-2xl border border-[#CFFF92]/40 bg-[#CFFF92]/10 backdrop-blur-md md:flex flex-col items-center justify-center gap-2 shadow-[0_0_30px_rgba(207,255,146,0.2)]"
        >
          <SiNodedotjs className="text-[#CFFF92] text-3xl" />
          <span className="text-[10px] text-[#CFFF92] font-bold uppercase tracking-widest">Node.js</span>
        </motion.div>

        {/* Mid Left: Python */}
        <motion.div
          animate={{ y: [12, -12, 12] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="absolute left-[10%] top-[42%] hidden rounded-2xl border border-white/10 bg-white/3 p-4 backdrop-blur-md md:flex items-center gap-3 shadow-xl"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10">
            <SiPython className="text-yellow-400 text-2xl" />
          </div>
          <div>
            <p className="text-xs font-bold text-white">Python</p>
            <p className="text-[10px] text-white/40">Backend & AI</p>
          </div>
        </motion.div>

        {/* Bottom Left: Mobile App Development */}
        <motion.div
          animate={{ y: [-8, 8, -8], rotate: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
          className="absolute left-[7%] bottom-[16%] hidden h-32 w-44 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 backdrop-blur-md lg:flex flex-col items-center justify-center gap-2 shadow-2xl -rotate-6"
        >
          <SiDart className="text-emerald-400 text-3xl" />
          <span className="text-[11px] font-semibold text-white/90">Mobile Apps</span>
        </motion.div>

        {/* Top Right: React / Next.js */}
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute right-[8%] top-[24%] hidden rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-3.5 backdrop-blur-md md:flex items-center gap-3 shadow-[0_0_25px_rgba(6,182,212,0.2)]"
        >
          <SiReact className="text-cyan-400 text-2xl animate-spin-slow" />
          <div>
            <p className="text-xs font-bold text-white">React / Next.js</p>
            <p className="text-[10px] text-cyan-300/70">Frontend Core</p>
          </div>
        </motion.div>

        {/* Mid Right: n8n Automation */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 7.5, ease: "easeInOut" }}
          className="absolute right-[12%] top-[48%] hidden rounded-2xl border border-orange-500/30 bg-orange-500/10 p-3.5 backdrop-blur-md md:flex items-center gap-3 shadow-[0_0_25px_rgba(249,115,22,0.2)]"
        >
          <Workflow className="text-orange-400 text-2xl" />
          <div>
            <p className="text-xs font-bold text-white">n8n Automation</p>
            <p className="text-[10px] text-orange-300/70">Workflow & APIs</p>
          </div>
        </motion.div>

        {/* Bottom Right: MySQL */}
        <motion.div
          animate={{ y: [-12, 12, -12], rotate: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute right-[10%] bottom-[15%] hidden h-36 w-44 rounded-3xl border border-white/20 bg-linear-to-br from-white/5 via-blue-500/5 to-transparent p-5 backdrop-blur-xl lg:flex flex-col items-center justify-center gap-2 shadow-2xl"
        >
          <SiMysql className="text-blue-400 text-4xl" />
          <span className="text-xs font-extrabold tracking-widest text-white">MySQL</span>
        </motion.div>

        {/* Bottom Center: Docker & MongoDB Badges */}
        <motion.div
          animate={{ y: [6, -6, 6] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute left-1/2 -translate-x-1/2 bottom-[16%] hidden md:flex items-center gap-4 rounded-full border border-white/10 bg-black/75 px-5 py-2 backdrop-blur-md shadow-lg"
        >
          <div className="flex items-center gap-1.5">
            <SiDocker className="text-blue-500 text-sm" />
            <span className="text-[11px] text-white/70">Docker</span>
          </div>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-1.5">
            <SiMongodb className="text-green-500 text-sm" />
            <span className="text-[11px] text-white/70">MongoDB</span>
          </div>
        </motion.div>

      </div>

      {/* ================= CENTRAL MAIN CONTENT ================= */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">

        {/* Top Agency Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-black/40 px-5 py-2 backdrop-blur-xl shadow-inner"
        >
          <span className="h-2 w-2 rounded-full bg-[#CFFF92] shadow-[0_0_12px_rgba(207,255,146,0.8)] animate-pulse" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/90">
            Digital Creative Agency
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(3rem,7.5vw,6.2rem)] font-extrabold uppercase leading-[0.92] tracking-tight text-white drop-shadow-lg"
        >
          We Make
          <br />
          <span className="text-[#CFFF92] drop-shadow-[0_0_35px_rgba(207,255,146,0.3)]">
            Ideas
          </span>
          <br />
          Matter<span className="text-[#CFFF92]">.</span>
        </motion.h1>

        {/* Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 max-w-lg text-sm font-normal leading-relaxed text-white/60 md:text-base"
        >
          We turn bold ideas into meaningful digital experiences that help ambitious brands move forward.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="group flex items-center gap-2.5 rounded-xl bg-[#CFFF92] px-7 py-4 text-xs font-bold uppercase text-black transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(207,255,146,0.5)]"
          >
            Explore Our Work
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <a
            href="#about"
            className="group flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/2 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white/90 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:text-white"
          >
            Discover
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white/40 group-hover:text-white"
            />
          </a>
        </motion.div>
      </div>

      {/* ================= BOTTOM BAR (SCROLL & LOCATION) ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.25em] text-white/40"
      >
        <div className="flex items-center gap-2">
          <span className="text-[#CFFF92] text-sm">↓</span>
          <span className="hidden sm:inline">Scroll to explore</span>
        </div>
        
        <div className="rounded-lg border border-white/10 bg-white/2 px-4 py-2 backdrop-blur-md text-white/70">
          Dhaka · Bangladesh
        </div>
      </motion.div>
    </section>
  );
}