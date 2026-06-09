"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  // Loading screen takes ~5 seconds, so animations start after
  const baseDelay = 4.7;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{ backgroundColor: "rgb(99 102 241 / 0.1)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 -right-20 w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{ backgroundColor: "rgb(6 182 212 / 0.1)" }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.8, 0.5, 0.8],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container-max relative z-10">
        <div className="max-w-5xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: baseDelay }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Main heading - word by word reveal */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
            {["Building", "digital experiences", "that ship."].map(
              (line, lineIdx) => (
                <span key={lineIdx} className="block overflow-hidden">
                  <motion.span
                    className={`inline-block ${
                      lineIdx === 1 ? "text-gradient" : "text-foreground"
                    }`}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: baseDelay + 0.1 + lineIdx * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              )
            )}
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: baseDelay + 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
          >
            I&apos;m{" "}
            <span className="text-foreground font-semibold">
              Piyush Kumar Verma
            </span>{" "}
            — a Full-Stack Developer crafting performant web applications
            with Python, Django, React, and the MERN Stack.
          </motion.p>

          {/* Meta info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: baseDelay + 0.7 }}
            className="flex flex-wrap items-center gap-4 mb-10 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {SITE_CONFIG.location}
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              MCA Student @ AKTU
            </div>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <div>3+ Projects Shipped</div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: baseDelay + 0.8 }}
            className="flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#work" size="lg">
              View My Work
              <ArrowDown className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary" size="lg">
              Get In Touch
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: baseDelay + 1.0 }}
          className="mt-24 pt-12 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "90%", label: "Query Optimization" },
            { value: "3+", label: "Production Projects" },
            { value: "2", label: "Full Tech Stacks" },
            { value: "200+", label: "Leads Generated" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: baseDelay + 1.1 + i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: baseDelay + 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border border-border flex items-start justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1.5 rounded-full bg-foreground"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}