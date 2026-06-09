"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // 5 seconds total: 4.5s loading + 0.5s exit
    const totalDuration = 3500;
    const intervalTime = 50;
    const increments = totalDuration / intervalTime;
    const increment = 100 / increments;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "auto";
          }, 500);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(20px)",
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Animated grid */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px]"
            style={{ backgroundColor: "rgb(99 102 241 / 0.2)" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px]"
            style={{ backgroundColor: "rgb(6 182 212 / 0.2)" }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <div className="relative z-10 flex flex-col items-center gap-12">
            {/* Logo / Name */}
            <div className="text-center">
              {/* Initials with rotation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2,
                }}
                className="relative inline-flex items-center justify-center mb-6"
              >
                <div className="w-24 h-24 rounded-2xl bg-foreground flex items-center justify-center">
                  <span className="text-4xl font-bold text-background">
                    PV
                  </span>
                </div>
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #6366f1, #ec4899, #f97316)",
                    filter: "blur(24px)",
                    opacity: 0.5,
                    zIndex: -1,
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Name with letter animation */}
              <div className="overflow-hidden mb-3">
                <div className="flex items-center justify-center gap-1">
                  {"PIYUSH VERMA".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 30, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + i * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="text-2xl md:text-4xl font-bold tracking-[0.2em] text-foreground inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground"
              >
                Full-Stack Developer
              </motion.p>
            </div>

            {/* Progress section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="flex flex-col items-center gap-3"
            >
              {/* Progress bar */}
              <div className="w-64 h-[3px] bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #6366f1, #ec4899, #f97316, #06b6d4)",
                    backgroundSize: "200% 100%",
                  }}
                  initial={{ width: "0%" }}
                  animate={{
                    width: `${Math.min(progress, 100)}%`,
                    backgroundPosition: ["0% 50%", "100% 50%"],
                  }}
                  transition={{
                    width: { duration: 0.1, ease: "linear" },
                    backgroundPosition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                />
              </div>

              {/* Status text */}
              <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                <span className="tabular-nums">
                  {Math.min(Math.round(progress), 100)
                    .toString()
                    .padStart(3, "0")}
                  %
                </span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <motion.span
                  key={Math.floor(progress / 25)}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {progress < 25
                    ? "Initializing"
                    : progress < 50
                    ? "Loading assets"
                    : progress < 75
                    ? "Preparing experience"
                    : progress < 100
                    ? "Almost there"
                    : "Welcome"}
                </motion.span>
              </div>
            </motion.div>

            {/* Bottom decorative text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground/50"
            >
              v1.0 · Crafted with intention
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}