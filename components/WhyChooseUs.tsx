"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Zap,
  Target,
  ShieldCheck,
  Gauge,
  Users,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Built With Purpose",
    description:
      "We don't build just to ship. Every feature, decision and interaction has a clear purpose behind it.",
    icon: Target,
  },
  {
    number: "02",
    title: "Fast & Focused",
    description:
      "We keep things lean, move quickly and focus on what actually creates value for your business.",
    icon: Zap,
  },
  {
    number: "03",
    title: "Scalable By Default",
    description:
      "Our products are built with clean architecture and modern technology so they can grow with you.",
    icon: Gauge,
  },
  {
    number: "04",
    title: "Reliable Quality",
    description:
      "From the first line of code to the final launch, we care about performance, stability and details.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Real Collaboration",
    description:
      "You are part of the process. We communicate clearly, share progress and make decisions together.",
    icon: Users,
  },
  {
    number: "06",
    title: "Always Improving",
    description:
      "Launching is not the finish line. We keep learning, refining and improving what we build.",
    icon: Sparkles,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-black px-6 py-28 md:py-40"
    >
      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#CFFF92]" />

            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              Why Choose Us
            </span>
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="font-viga text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[0.85] tracking-tighter text-white">
              More Than
              <br />
              <span className="text-[#CFFF92]">Just Developers.</span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-white/40">
              We combine strategy, design and technology to build digital
              products that are made to perform and built to last.
            </p>
          </div>
        </motion.div>

        {/* ================= REASONS GRID ================= */}
        <div className="grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative border-b border-r border-white/10 p-7 transition-colors duration-500 hover:bg-white/2.5 md:p-9 lg:p-10"
              >
                {/* Top Row */}
                <div className="mb-16 flex items-start justify-between">
                  <span className="text-[10px] tracking-[0.2em] text-white/25 transition-colors duration-500 group-hover:text-[#CFFF92]">
                    {reason.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/25 transition-all duration-500 group-hover:border-[#CFFF92] group-hover:bg-[#CFFF92] group-hover:text-black">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                      className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <Icon
                    size={25}
                    strokeWidth={1.5}
                    className="text-white/20 transition-all duration-500 group-hover:rotate-6 group-hover:text-[#CFFF92]"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-5 font-viga text-2xl uppercase leading-[0.95] tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-[#CFFF92] md:text-3xl">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="max-w-sm text-sm leading-7 text-white/35 transition-colors duration-300 group-hover:text-white/55">
                  {reason.description}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#CFFF92] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <p className="max-w-xl font-viga text-2xl uppercase leading-tight text-white md:text-3xl">
            Good ideas deserve
            <br />
            <span className="text-white/30">
              great execution.
            </span>
          </p>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#CFFF92]" />

            <span className="text-xs uppercase tracking-[0.2em] text-white/30">
              Designed to make an impact
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}