"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const teamMembers = [
     {
        name: "Ahnaf Shakil",
        role: "Android App Developer",
        image: "/ahnaf.png",
    },
      {
        name: "Rafiul Islam",
        role: "UI/UX Designer",
        image: "/rafiul.png",
    },
    {
        name: "Golam Faruk Adnan",
        role: "Full Stack Developer",
        image: "/adnan.png",
    },
    {
        name: "Rimon Islam",
        role: "Android App Developer",
        image: "/rimon.png",
    },
    {
        name: "Nayem Ahmed",
        role: "Backend Developer",
        image: "/nayem.png",
    },
   
    {
        name: "Canedey Udoy",
        role: "AI Developer",
        image: "/udoy.png",
    },
  
];

export default function Team() {
    return (
        <section id="team" className="bg-black px-6 py-28 md:py-10">
            <div className="mx-auto max-w-7xl">

                {/* ================= HEADER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-[#CFFF92]" />

                        <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                            The People
                        </span>
                    </div>

                    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                        <h2 className="font-viga text-[clamp(3rem,6vw,6rem)] uppercase leading-[0.9] tracking-[-0.04em] text-white">
                            Meet the
                            <br />
                            <span className="text-[#CFFF92]">Team.</span>
                        </h2>

                        <p className="max-w-sm text-sm leading-7 text-white/40">
                            A small team of curious minds, builders and creators turning
                            ambitious ideas into digital products.
                        </p>
                    </div>
                </motion.div>

                {/* ================= TEAM GRID ================= */}
                <div className="grid grid-cols-1 gap-x-14 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                    {teamMembers.map((member, index) => (
                        <motion.article
                            key={member.name}
                            initial={{
                                opacity: 0,
                                y: 100,
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
                                delay: index * 0.08,
                            }}
                            className="group relative"
                        >
                            {/* ================= CARD ================= */}
                            <div className="relative pr-12">
                                {/* Main Shape */}
                                <div className="relative aspect-[4/5] overflow-hidden rounded-4xl bg-[#111]">

                                    {/* Image */}
                                    <motion.img
                                        src={member.image}
                                        alt={`${member.name} - ${member.role}`}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />

                                    {/* Dark Hover */}
                                    <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />

                                    {/* Bottom Right Cut */}
                                    <div className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-[3rem] bg-black" />

                                    {/* Arrow Button */}
                                  <div
  className="absolute bottom-0 right-0 flex h-20 w-20 scale-95 items-center justify-center rounded-tl-[2.5rem] 
  bg-linear-to-br from-[#E5FFB8] via-[#CFFF92] to-[#B8F86B]
  text-black
  shadow-[0_0_25px_rgba(207,255,146,0.35)]
  transition-all duration-500
  opacity-0 
  group-hover:opacity-100
  group-hover:scale-100
  group-hover:shadow-[0_0_40px_rgba(207,255,146,0.55)]"
>
  <ArrowUpRight
    size={28}
    strokeWidth={2}
    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</div>
                                </div>

                                {/* Name */}
                                <div className="absolute right-0 top-[30%] flex  w-10 items-center justify-center">
                                    <span
                                        className="font-viga text-lg uppercase tracking-[0.08em] text-white transition-colors duration-300 group-hover:text-[#CFFF92]"
                                        style={{
                                            writingMode: "vertical-rl",
                                            transform: "rotate(180deg)",
                                        }}
                                    >
                                        {member.name}
                                    </span>
                                </div>
                            </div>

                            {/* ================= ROLE ================= */}
                         <div className="mt-5 flex items-center justify-between pr-12">
  <div className="group/role flex items-center gap-3">
    <span className="relative h-1.5 w-1.5 rounded-full bg-[#CFFF92] shadow-[0_0_8px_rgba(207,255,146,0.6)]" />

    <p className="text-sm font-semibold text-white/85 transition-colors duration-300 group-hover/role:text-[#CFFF92]">
      {member.role}
    </p>
  </div>

  <span className="text-xs font-medium tabular-nums text-white/25">
    {String(index + 1).padStart(2, "0")}
  </span>
</div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}