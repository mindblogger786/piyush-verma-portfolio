"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";
import ThemeToggle from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    document
      .querySelectorAll("section[id]")
      .forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* DESKTOP NAVBAR (lg and up) */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 4.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden lg:block"
      >
        <nav
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-500",
            scrolled
              ? "glass-strong shadow-2xl shadow-black/10"
              : "glass"
          )}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 pl-2 pr-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center"
            >
              <span className="text-[10px] font-bold text-background">
                {SITE_CONFIG.initials}
              </span>
            </motion.div>
            <span className="text-sm font-semibold">Piyush</span>
          </a>

          {/* Divider */}
          <div className="w-px h-5 bg-border" />

          {/* Links */}
          <div className="flex items-center gap-0.5 px-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors whitespace-nowrap",
                  active === link.href.replace("#", "")
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {active === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="navActive"
                    className="absolute inset-0 bg-muted rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-px h-5 bg-border" />

          {/* Theme + CTA */}
          <div className="flex items-center gap-1.5 pr-1">
            <ThemeToggle />
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Hire me
            </a>
          </div>
        </nav>
      </motion.header>

      {/* MOBILE NAVBAR (below lg) */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 4.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-4 right-4 z-50 lg:hidden"
      >
        <nav
          className={cn(
            "flex items-center justify-between px-3 py-2 rounded-full transition-all duration-500",
            scrolled || mobileOpen
              ? "glass-strong shadow-2xl shadow-black/10"
              : "glass"
          )}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 pl-2">
            <div className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center">
              <span className="text-[10px] font-bold text-background">
                {SITE_CONFIG.initials}
              </span>
            </div>
            <span className="text-sm font-semibold">Piyush</span>
          </a>

          {/* Right side */}
          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle menu"
              type="button"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mt-2 p-2 rounded-3xl glass-strong shadow-2xl"
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "px-4 py-3 text-sm font-medium rounded-2xl transition-colors",
                      active === link.href.replace("#", "")
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="mt-2 pt-2 border-t border-border">
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-center rounded-2xl bg-foreground text-background"
                  >
                    Hire me →
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}