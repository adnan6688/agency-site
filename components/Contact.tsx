"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "hello@youragency.com",
    href: "mailto:hello@youragency.com",
    icon: Mail,
  },
  {
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "#",
    icon: MapPin,
  },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: MapPin,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: MapPin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black px-6 py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#CFFF92]" />

            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              Get In Touch
            </span>
          </div>

          <h2 className="font-viga text-[clamp(4rem,10vw,9rem)] uppercase leading-[0.82] tracking-[-0.06em] text-white">
            Let&apos;s Build
            <br />
            <span className="text-[#CFFF92]">Something.</span>
          </h2>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <div className="mt-20 grid gap-16 border-t border-white/10 pt-10 md:grid-cols-[1fr_0.8fr] md:gap-20 md:pt-14">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="max-w-xl text-lg leading-8 text-white/45 md:text-xl">
              Have an idea, a project or just want to talk? Tell us what
              you&apos;re working on. We&apos;d love to hear about it.
            </p>

            {/* CTA */}
            <motion.a
              href="mailto:hello@youragency.com"
              whileHover="hover"
              className="group mt-10 inline-flex items-center gap-4"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#CFFF92] text-black transition-transform duration-500 group-hover:scale-110">
                <ArrowUpRight
                  size={24}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>

              <span className="font-viga text-2xl uppercase tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-[#CFFF92]">
                Start a Project
              </span>
            </motion.a>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-0"
          >
            {/* Contact Links */}
            {contactLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between border-b border-white/10 py-6"
                >
                  <div className="flex items-center gap-4">
                    <Icon
                      size={19}
                      strokeWidth={1.5}
                      className="text-white/20 transition-colors duration-300 group-hover:text-[#CFFF92]"
                    />

                    <div>
                      <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-white/25">
                        {item.label}
                      </p>

                      <p className="text-sm text-white/60 transition-colors duration-300 group-hover:text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#CFFF92]"
                  />
                </a>
              );
            })}

            {/* Socials */}
            <div className="flex items-center gap-3 pt-8">
              <span className="mr-3 text-[10px] uppercase tracking-[0.2em] text-white/25">
                Follow
              </span>

              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 hover:border-[#CFFF92] hover:bg-[#CFFF92] hover:text-black"
                  >
                    <Icon size={17} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 flex flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between"
        >
          <p className="font-viga text-2xl uppercase leading-none text-white md:text-3xl">
            Have an idea?
            <span className="ml-2 text-white/25">
              Let&apos;s make it real.
            </span>
          </p>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#CFFF92]" />

            <span className="text-xs uppercase tracking-[0.2em] text-white/30">
              Available for new projects
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}