"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Star,
} from "lucide-react";
import Image from "next/image";



export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
    

      {/* Top border */}
      <div className="absolute left-6 right-6 top-5 h-px bg-white/15 md:left-12 md:right-12" />

      {/* Ambient glow - left */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-125 w-125 rounded-full bg-[#d9ff70]/10 blur-[150px]" />

      {/* Ambient glow - center */}
      <div className="pointer-events-none absolute left-1/2 top-[45%] h-112.5 w-112.5 -translate-x-1/2 rounded-full bg-white/2.5 blur-[120px]" />

      {/* Ambient glow - right */}
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-125 w-125 rounded-full bg-[#d9ff70]/5 blur-[150px]" />

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Huge background typography */}
      <div className="pointer-events-none absolute bottom-[8%] left-1/2 hidden -translate-x-1/2 select-none whitespace-nowrap text-[18vw] font-black uppercase leading-none tracking-[-0.08em] text-white/2.5 lg:block">
        DIGITAL
      </div>



      <div className="relative z-10 mx-auto min-h-screen max-w-375 px-5 pb-24 pt-16 sm:px-8 md:px-12 lg:px-16">
 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 mt-7 sm:mt-10 mx-auto max-w-250 text-center"
        >
          <h1 className="text-[clamp(3.3rem,8vw,7.6rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
            <span className="block text-white/90">
              We Help You To Grow
            </span>

            <span className="block text-white">
              Your{" "}
              <span className="relative text-[#d9ff70] inline-block">
                Business
                <span className="absolute -bottom-2 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-[#d9ff70] md:w-28" />
              </span>
            </span>
          </h1>
        </motion.div>

     
        <div className="relative mx-auto mt-8 min-h-147.5 max-w-312.5">
  
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="group absolute left-0 top-8 z-30 hidden items-center gap-0 md:flex"
          >
            {/* icon box */}
            <div className="flex h-11 w-11 items-center justify-center rounded-l-lg bg-white text-black transition-transform duration-300 group-hover:-translate-y-1">
              <ArrowUpRight size={18} />
            </div>

            {/* black box */}
            <div className="flex h-11 items-center gap-3 rounded-r-lg border border-white/20 bg-[#101010] px-4">
              <Sparkles
                size={15}
                className="text-[#d9ff70]"
              />

              <div>
                <p className="text-[12px] font-medium text-white">
                  Appointment
                </p>

                <p className="text-[10px] text-white/40">
                  Book Now
                </p>
              </div>
            </div>
          </motion.a>

      
          <motion.div
            initial={{ opacity: 0, x: -50, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute left-0 top-47.5 z-30 hidden w-61.25 md:block"
          >
            <div className="relative rounded-[18px] bg-[#d9ff70] p-5 text-black shadow-[0_20px_70px_rgba(217,255,112,0.08)]">
              {/* little arrow */}
              <div className="absolute -right-1 -top-1 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#303030] text-white">
                <ArrowRight size={17} />
              </div>

              <div>
                <p className="text-3xl font-bold tracking-tight">
                  10.2k+
                </p>

                <p className="mt-1 text-[10px] font-medium text-black/55">
                  Active users around the world
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between">
                {/* avatars */}
                <div className="flex items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#d9ff70] bg-[#222] text-[10px] font-bold text-white">
                    A
                  </div>

                  <div className="-ml-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#d9ff70] bg-[#555] text-[10px] font-bold text-white">
                    R
                  </div>

                  <div className="-ml-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#d9ff70] bg-[#999] text-[10px] font-bold text-black">
                    M
                  </div>

                  <div className="-ml-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#d9ff70] bg-[#eee] text-[9px] font-bold text-black">
                    +
                  </div>
                </div>

                {/* rating */}
                <div className="flex items-center gap-2">
                  <Star
                    size={23}
                    fill="currentColor"
                    strokeWidth={0}
                  />

                  <div>
                    <p className="text-lg font-bold leading-none">
                      5
                    </p>

                    <p className="text-[9px] font-medium text-black/60">
                      Stars
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute bottom-0 left-1/2 z-20 flex w-82.5 -translate-x-1/2 justify-center sm:w-97.5 md:w-112.5 lg:w-125"
          >
            {/* glow behind person */}
            <div className="absolute bottom-10 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#d9ff70]/10 blur-[100px]" />

            {/* circle decoration */}
            <div className="absolute bottom-10 left-1/2 h-97.5 w-97.5 -translate-x-1/2 rounded-full border border-white/6" />

            <div className="absolute bottom-14 left-1/2 h-77.5 w-77.5 -translate-x-1/2 rounded-full border border-[#d9ff70]/10" />

            {/* Person Image */}

            <Image
              src="/HeroMan.png"
              alt="Digital agency creative professional"
              width={700}
              height={800}
              priority
              className="relative z-10 h-auto w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute right-[25%] top-28.75 z-30 hidden lg:block"
          >
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-15"
            >
              <path
                d="M15 70C22 35 50 17 78 34C84 38 87 44 88 50"
                stroke="#d9ff70"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <path
                d="M79 42L89 51L76 52"
                stroke="#d9ff70"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="absolute right-2 top-28.75 z-30 hidden items-start gap-12 md:flex"
          >
            <div>
              <p className="text-3xl font-semibold tracking-tight text-white">
                97%
              </p>

              <p className="mt-1 text-[11px] text-white/45">
                Revenue growth
              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold tracking-tight text-white">
                16Y
              </p>

              <p className="mt-1 text-[11px] text-white/45">
                Experience
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute right-0 top-58.75 z-30 hidden w-60 md:block"
          >
            <div className="rounded-[20px] border border-white/[0.07] bg-[#151515] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
              <div className="mb-8 flex items-center justify-between">
                <div className="h-8 w-8 rounded-full bg-white/6 p-2">
                  <ArrowUpRight
                    size={15}
                    className="text-[#d9ff70]"
                  />
                </div>

                <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                  Since 2013
                </span>
              </div>

              <h3 className="text-sm font-medium text-white">
                Personal Investment
              </h3>

              <h3 className="text-sm font-medium text-white">
                Trade
              </h3>

              <p className="mt-4 text-[11px] leading-[1.6] text-white/35">
                Since 2013, we&apos;ve guided millions
                of global users on their digital
                assets journey.
              </p>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT TECH STACK
          ====================================================== */}



          {/* =====================================================
              MOBILE SIDE CARDS
          ====================================================== */}

          <div className="mt-10 grid grid-cols-2 gap-3 md:hidden">
            <MobileStat
              value="10.2k+"
              label="Active users"
            />

            <MobileStat
              value="97%"
              label="Revenue growth"
            />

            <MobileStat
              value="16Y"
              label="Experience"
            />

            <MobileStat
              value="5★"
              label="Client rating"
            />
          </div>
        </div>

      </div>
    </section>
  );
}




function MobileStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
      <p className="text-xl font-semibold tracking-tight text-white">
        {value}
      </p>

      <p className="mt-1 text-[9px] uppercase tracking-wider text-white/35">
        {label}
      </p>
    </div>
  );
}