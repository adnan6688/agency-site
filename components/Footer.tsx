"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
//   Instagram,
//   Linkedin,
//   Facebook,
} from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: ArrowUpRight,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: ArrowUpRight,
  },
  {
    label: "Facebook",
    href: "#",
    icon: ArrowUpRight,
  },
];

export default function Footer() {
  return (
    <footer className="bg-black px-6 pb-8">
      <div className="mx-auto max-w-6xl">

        {/* ================= MAIN FOOTER ================= */}
        <div className="border-t border-white/10 py-12 md:py-16">

          <div className="grid gap-14 md:grid-cols-[1.4fr_0.6fr_0.6fr] md:gap-10">

            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <a
                href="#"
                className="group inline-flex items-center gap-3"
              >
                <span className="h-3 w-3 rounded-full bg-[#CFFF92] transition-transform duration-300 group-hover:scale-125" />

                <span className="font-viga text-3xl uppercase tracking-[-0.04em] text-white">
                  Your<span className="text-[#CFFF92]">Agency</span>
                </span>
              </a>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/35">
                We design and build digital products that help ambitious
                businesses move forward.
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-white/25">
                Explore
              </p>

              <nav className="flex flex-col items-start gap-3">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-white/50 transition-colors duration-300 hover:text-white"
                  >
                    <span>{item.label}</span>

                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.5}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-[#CFFF92]"
                    />
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-white/25">
                Follow Us
              </p>

              <div className="flex flex-wrap gap-3">
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
        </div>

        {/* ================= BIG WORDMARK ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden border-t border-white/10 pt-8"
        >
          <p className="select-none whitespace-nowrap font-viga text-[clamp(4rem,13vw,12rem)] uppercase leading-[0.75] tracking-[-0.07em] text-white/4.5">
            YourAgency
          </p>
        </motion.div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.15em] text-white/25 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} YourAgency. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms
            </a>

            <a
              href="#"
              className="flex items-center gap-2 transition-colors duration-300 hover:text-[#CFFF92]"
            >
              Back to top
              <ArrowUpRight
                size={12}
                strokeWidth={1.5}
                className="-rotate-45"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}