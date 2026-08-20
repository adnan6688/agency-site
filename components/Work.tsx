"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Smartphone,
  Globe,
} from "lucide-react";

const projects = [
  {
    title: "Turf Play",
    category: "Sports & Booking",
    description:
      "A modern sports turf booking platform built to make discovering, booking and managing sports venues effortless.",
    image: "/projects/app/turfplay-bannar.png",
    year: "2026",
    featured: true,
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    links: {
      live: "#",
      playStore:
        "https://play.google.com/store/apps/details?id=com.turfplay.app&hl=en",
      appStore: "#",
    },
  },
  {
    title: "FlowDesk",
    category: "SaaS Platform",
    description:
      "A clean business management platform for teams to manage operations, customers and daily workflows.",
    image: "/projects/web/yep2.png",
    year: "2026",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    links: {
      live: "https://yeppads.com/",
      playStore: "https://play.google.com/store/apps/details?id=agency.beuptech.yepp",
      appStore: "https://apps.apple.com/us/app/yepp-ads/id6760607013"
    },
  },
  {
    title: "Nexa AI",
    category: "AI Platform",
    description:
      "An AI-powered workspace designed to automate repetitive tasks and help teams work smarter.",
    image: "/projects/app/postwagens.png",
    year: "2026",
    tags: ["AI", "Node.js", "OpenAI"],
    links: {
      live: "http://postwagens.com/",
      playStore : "https://play.google.com/store/apps/details?id=com.postwagens.app"
    },
  },
  {
    title: "MoveGo",
    category: "Mobile App",
    description:
      "A modern ride and location-based mobile experience focused on simple booking and real-time tracking.",
    image: "/projects/movego.png",
    year: "2025",
    tags: ["React Native", "Node.js", "MongoDB"],
    links: {
      live: "#",
      playStore: "#",
      appStore: "#",
    },
  },
  {
    title: "Marketly",
    category: "E-Commerce",
    description:
      "A scalable marketplace experience connecting customers with products through a fast and intuitive interface.",
    image: "/projects/marketly.png",
    year: "2025",
    tags: ["Next.js", "Express", "MongoDB"],
    links: {
      live: "#",
    },
  }
];

function ProjectLinks({
  links,
}: {
  links: {
    live?: string;
    playStore?: string;
    appStore?: string;
  };
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Live Website */}
      {links.live && (
        <a
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="group/live inline-flex items-center gap-2 rounded-full border border-[#CFFF92]/40 bg-[#CFFF92]/5 px-4 py-2.5 text-[10px] font-semibold text-[#CFFF92] transition-all duration-300 hover:border-[#CFFF92] hover:bg-[#CFFF92] hover:text-black"
        >
          <Globe
            size={13}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover/live:rotate-12"
          />

          <span>Visit Live</span>

          <ExternalLink
            size={11}
            className="transition-transform duration-300 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5"
          />
        </a>
      )}

      {/* Play Store */}
      {links.playStore && (
        <a
          href={links.playStore}
          target="_blank"
          rel="noopener noreferrer"
          className="group/play inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/3 px-4 py-2.5 text-[10px] font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
        >
          <Smartphone
            size={13}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover/play:-translate-y-0.5"
          />

          <span>Google Play</span>

          <ExternalLink
            size={10}
            className="opacity-50 transition-all duration-300 group-hover/play:translate-x-0.5 group-hover/play:opacity-100"
          />
        </a>
      )}

      {/* App Store */}
      {links.appStore && (
        <a
          href={links.appStore}
          target="_blank"
          rel="noopener noreferrer"
          className="group/apple inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/3 px-4 py-2.5 text-[10px] font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
        >
          <span className="text-[13px] leading-none"></span>

          <span>App Store</span>

          <ExternalLink
            size={10}
            className="opacity-50 transition-all duration-300 group-hover/apple:translate-x-0.5 group-hover/apple:opacity-100"
          />
        </a>
      )}
    </div>
  );
}

export default function Work() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="work"
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
              Selected Work
            </span>
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="font-viga text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[0.85] tracking-tighter text-white">
              Things
              <br />
              <span className="text-[#CFFF92]">We Built.</span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-white/40">
              A selection of digital products, platforms and experiences
              we&apos;ve designed and built for real-world use.
            </p>
          </div>
        </motion.div>

        {/* ================= FEATURED PROJECT ================= */}
        {featuredProject && (
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-4xl bg-[#111]">
              <div className="relative aspect-video overflow-hidden md:aspect-2/1">

                <motion.img
                  src={featuredProject.image}
                  alt={`${featuredProject.title} — ${featuredProject.category}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-black/10" />

                {/* Top */}
                <div className="absolute left-6 right-6 top-6 flex items-start justify-between md:left-8 md:right-8 md:top-8">
                  <span className="font-viga text-sm text-white/60">
                    01
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    {featuredProject.year}
                  </span>
                </div>

                {/* Featured Badge */}
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <span className="rounded-full bg-[#CFFF92] px-4 py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-black">
                    Featured Project
                  </span>
                </div>

                {/* Open */}
                <a
                  href={featuredProject.links.live || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 right-6 flex h-14 w-14 translate-y-3 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#CFFF92] md:bottom-8 md:right-8"
                >
                  <ArrowUpRight size={22} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#CFFF92]" />

                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                    {featuredProject.category}
                  </span>
                </div>

                <h3 className="font-viga text-4xl uppercase tracking-[-0.03em] text-white md:text-5xl">
                  {featuredProject.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/40">
                  {featuredProject.description}
                </p>
              </div>

              <div className="flex flex-col items-start gap-5 md:items-end">
               

                <ProjectLinks links={featuredProject.links} />
              </div>
            </div>
          </motion.article>
        )}

        {/* ================= OTHER PROJECTS ================= */}
        <div className="mt-28 grid gap-x-8 gap-y-20 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: (index % 2) * 0.08,
              }}
              className="group w-full"
            >
              {/* Image Container - Full Cover Width */}
              <div className="relative w-full overflow-hidden rounded-3xl bg-[#111]">
                <div className="relative aspect-video w-full overflow-hidden">

                  <motion.img
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
                  />

                  <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/25" />

                  {/* Number */}
                  <div className="absolute left-5 top-5 z-10">
                    <span className="font-viga text-sm text-white/70">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Year */}
                  <div className="absolute right-5 top-5 z-10">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                      {project.year}
                    </span>
                  </div>

                  {/* Open */}
                  <a
                    href={project.links.live || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-5 right-5 z-10 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#CFFF92]"
                  >
                    <ArrowUpRight size={19} strokeWidth={1.5} />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="mt-6 w-full">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#CFFF92]" />

                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="font-viga text-3xl uppercase tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-[#CFFF92]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/35">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-col gap-4">
                

                  <ProjectLinks links={project.links} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}