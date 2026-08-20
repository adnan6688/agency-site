"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";

const testimonials = [
  {
    number: "01",
    quote:
      "They didn't just build what we asked for. They understood what we were trying to achieve and turned it into something much better.",
    name: "Alex Morgan",
    role: "Founder, Nova Labs",
  },
  {
    number: "02",
    quote:
      "The communication was clear, the execution was fast, and the final product felt incredibly polished. It was a great experience from start to finish.",
    name: "Sarah Mitchell",
    role: "Product Lead, Orbit",
  },
  {
    number: "03",
    quote:
      "We came with an idea and they helped us turn it into a real product. The attention to detail and technical quality really stood out.",
    name: "Daniel Carter",
    role: "Co-Founder, Flux",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-black px-6 py-28 md:py-10"
    >
      <div className="mx-auto max-w-7xl">

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
              Testimonials
            </span>
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="font-viga text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[0.85] tracking-tighter text-white">
              Words From
              <br />
              <span className="text-[#CFFF92]">Our Clients.</span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-white/40">
              We believe the best work comes from strong relationships,
              honest communication and shared ambition.
            </p>
          </div>
        </motion.div>

        {/* ================= TESTIMONIALS ================= */}
        <div className="border-t border-white/10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.number}
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
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="group border-b border-white/10 py-10 md:py-14"
            >
              <div className="grid gap-8 md:grid-cols-[80px_1fr_220px] md:gap-10">

                {/* Number */}
                <div className="flex items-start justify-between md:block">
                  <span className="text-[10px] tracking-[0.2em] text-white/25 transition-colors duration-500 group-hover:text-[#CFFF92]">
                    {testimonial.number}
                  </span>

                  <Quote
                    size={22}
                    strokeWidth={1.5}
                    className="text-white/15 transition-colors duration-500 group-hover:text-[#CFFF92] md:mt-10"
                  />
                </div>

                {/* Quote */}
                <div>
                  <p className="max-w-3xl font-viga text-2xl uppercase leading-[1.15] tracking-[-0.02em] text-white transition-colors duration-500 group-hover:text-white md:text-3xl lg:text-4xl">
                    “{testimonial.quote}”
                  </p>
                </div>

                {/* Client */}
                <div className="flex items-end justify-between gap-6 md:flex-col md:items-start md:justify-end">
                  <div>
                    <p className="text-sm font-medium text-white">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-xs text-white/30">
                      {testimonial.role}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/25 transition-all duration-500 group-hover:border-[#CFFF92] group-hover:bg-[#CFFF92] group-hover:text-black">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                      className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
            Real people.
            <br />
            <span className="text-white/30">
              Real results.
            </span>
          </p>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#CFFF92]" />

            <span className="text-xs uppercase tracking-[0.2em] text-white/30">
              Trusted by ambitious teams
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}