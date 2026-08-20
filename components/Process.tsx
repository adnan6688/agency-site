"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Lightbulb,
  Layers3,
  Palette,
  Code2,
  Rocket,
  Headphones,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your idea, goals, audience and the problem we need to solve.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We turn the idea into a clear roadmap with the right technology, features and priorities.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create a simple, intentional interface that looks great and feels natural to use.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Build",
    description:
      "Our developers turn the design into a fast, scalable and reliable digital product.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We test everything, fix the final details and get your product ready for the real world.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Support",
    description:
      "After launch, we keep improving, maintaining and scaling your product as it grows.",
    icon: Headphones,
  },
];

export default function Process() {
  return (
    <section
      id="process"
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
              How We Work
            </span>
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="font-viga text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[0.85] tracking-[-0.05em] text-white">
              From Idea
              <br />
              <span className="text-[#CFFF92]">To Reality.</span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-white/40">
              A simple process designed to keep things clear, collaborative
              and moving forward.
            </p>
          </div>
        </motion.div>

        {/* ================= PROCESS ================= */}
        <div className="relative">

          {/* Desktop Line */}
          <div className="absolute left-[23px] top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-0">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  className="group relative"
                >
                  <div className="flex gap-6 border-b border-white/10 py-10 md:gap-10 md:py-14">

                    {/* Number */}
                    <div className="relative z-10 flex shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black transition-all duration-500 group-hover:border-[#CFFF92] group-hover:bg-[#CFFF92]">
                        <span className="text-[10px] font-medium text-white/50 transition-colors duration-500 group-hover:text-black">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col gap-7 md:flex-row md:items-start md:justify-between">

                      {/* Title */}
                      <div className="flex items-start gap-5 md:w-[38%]">
                        <Icon
                          size={22}
                          strokeWidth={1.5}
                          className="mt-1 shrink-0 text-white/20 transition-all duration-500 group-hover:text-[#CFFF92] group-hover:rotate-6"
                        />

                        <h3 className="font-viga text-3xl uppercase leading-none tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-[#CFFF92] md:text-4xl lg:text-5xl">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="max-w-md text-sm leading-7 text-white/35 transition-colors duration-300 group-hover:text-white/55 md:pt-1">
                        {step.description}
                      </p>

                      {/* Arrow */}
                      <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-500 group-hover:border-[#CFFF92] group-hover:bg-[#CFFF92] group-hover:text-black md:flex">
                        <ArrowDownRight
                          size={18}
                          className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}