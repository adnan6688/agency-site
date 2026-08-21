"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [welcome, setWelcome] = useState(false);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 8) + 3;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setProgress(100);

        // Show welcome after reaching 100%
        setTimeout(() => {
          setWelcome(true);

          // Then close loader
          setTimeout(() => {
            setLoading(false);
          }, 1200);
        }, 300);
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
          className="fixed inset-0 z-99999 flex flex-col justify-between bg-[#080808] px-6 py-6 text-white md:px-10 md:py-8"
        >
          {/* Top */}
          <div className="flex items-center justify-between">
          
          </div>

          {/* Center */}
          <div className="flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {!welcome ? (
                <motion.div
                  key="counter"
                  initial={{ opacity: 0.5, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="font-viga text-[clamp(80px,15vw,180px)] leading-none tracking-[-0.06em]"
                >
                  {String(progress).padStart(2, "0")}
                  <span className="text-[#CFFF92]">%</span>
                </motion.div>
              ) : (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-center"
                >
                  <p className="mb-3 text-sm uppercase tracking-[0.4em] text-white/40">
                    Welcome to
                  </p>

                  <h1 className="font-viga text-[clamp(55px,10vw,130px)] uppercase leading-none ">
                    YOUR
                    <span className="text-[#CFFF92]">AGENCY</span>
                  </h1>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      delay: 0.3,
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="mx-auto mt-6 h-px max-w-100 bg-[#CFFF92]"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress Bar */}
            {!welcome && (
              <div className="mt-8 h-px w-[min(500px,80vw)] overflow-hidden bg-white/10">
                <motion.div
                  className="h-full bg-[#CFFF92]"
                  animate={{ width: `${progress}%` }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                />
              </div>
            )}
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

              <span className="text-xl   text-white/40">
                {welcome ? "Let's begin" : "Please wait"}
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}