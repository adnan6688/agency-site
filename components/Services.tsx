"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Fast, scalable and modern websites built around your business goals.",
  },
  {
    number: "02",
    title: "App Development",
    description:
      "Beautiful and reliable digital applications designed for real users.",
  },
  {
    number: "03",
    title: "AI Solutions",
    description:
      "Practical AI solutions that automate work and create smarter experiences.",
  },
  {
    number: "04",
    title: "n8n Automation",
    description:
      "Connect your tools, automate repetitive tasks and build intelligent workflows.",
  },
  {
    number: "05",
    title: "SaaS Platforms",
    description:
      "Scalable SaaS products built from idea to production.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black px-6 py-28 md:py-40"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex items-end justify-between"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#CFFF92]" />

              <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                What We Do
              </span>
            </div>

            <h2 className="font-viga text-[clamp(3rem,6vw,6rem)] uppercase leading-[0.9] tracking-[-0.04em] text-white">
              Our
              <br />
              <span className="text-[#CFFF92]">Services.</span>
            </h2>
          </div>

          <p className="hidden max-w-xs text-sm leading-7 text-white/40 md:block">
            From digital products to intelligent automation, we build
            technology that moves businesses forward.
          </p>
        </motion.div>

        {/* Services */}
        <div className="border-t border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group border-b border-white/10"
            >
              <div className="flex items-center gap-5 py-8 md:py-10">

                {/* Number */}
                <span className="w-8 shrink-0 text-xs text-white/25">
                  {service.number}
                </span>

                {/* Title */}
                <h3 className="flex-1 font-viga text-2xl uppercase tracking-tight text-white transition-colors duration-300 group-hover:text-[#CFFF92] md:text-4xl lg:text-5xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="hidden max-w-xs text-sm leading-6 text-white/35 lg:block">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#CFFF92] group-hover:bg-[#CFFF92] group-hover:text-black">
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}