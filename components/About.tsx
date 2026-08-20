"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-6 py-28 md:py-10"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-[#CFFF92]" />

          <span className="text-xs uppercase tracking-[0.3em] text-white/40">
            About Us
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl font-viga text-[clamp(2.8rem,6vw,6rem)] uppercase leading-[0.95] tracking-[-0.04em] text-white"
        >
          We build digital
          <br />
          experiences that
          <br />
          <span className="text-[#CFFF92]">actually matter.</span>
        </motion.h2>

        {/* Bottom Content */}
        <div className="mt-20 grid gap-12 border-t border-white/10 pt-10 md:grid-cols-2">

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="max-w-lg text-base leading-8 text-white/50 md:text-lg">
              We are a creative digital agency helping ambitious brands turn
              ideas into powerful digital products, identities, and experiences.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-[#CFFF92]"
            >
              Let&apos;s work together

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-8"
          >
            <div>
              <p className="font-viga text-4xl text-white md:text-5xl">
                20<span className="text-[#CFFF92]">+</span>
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/30">
                Projects
              </p>
            </div>

            <div>
              <p className="font-viga text-4xl text-white md:text-5xl">
                10<span className="text-[#CFFF92]">+</span>
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/30">
                Clients
              </p>
            </div>

            <div>
              <p className="font-viga text-4xl text-white md:text-5xl">
                3<span className="text-[#CFFF92]">+</span>
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/30">
                Years
              </p>
            </div>

            <div>
              <p className="font-viga text-4xl text-white md:text-5xl">
                100<span className="text-[#CFFF92]">%</span>
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/30">
                Commitment
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}