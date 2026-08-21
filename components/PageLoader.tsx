"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 8) + 3;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          setLoading(false);
        }, 500);
      }

      setProgress(value);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between bg-[#080808] px-6 py-6 text-white md:px-10 md:py-8"
        >
          {/* Top */}
          <div className="flex items-center justify-between">
            <span className="font-viga text-lg tracking-tight">
              YOUR<span className="text-[#CFFF92]">AGENCY</span>
            </span>

            <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              Loading Experience
            </span>
          </div>

          {/* Center */}
          <div className="flex flex-col items-center justify-center">
            <motion.div
              key={progress}
              initial={{ opacity: 0.5, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-viga text-[clamp(80px,15vw,180px)] leading-none tracking-[-0.06em]"
            >
              {String(progress).padStart(2, "0")}
              <span className="text-[#CFFF92]">%</span>
            </motion.div>

            <div className="mt-8 h-[1px] w-[min(500px,80vw)] overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-[#CFFF92]"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Bottom */}
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                Digital Experiences
              </p>
            </div>

            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center gap-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#CFFF92]" />
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                Please wait
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}