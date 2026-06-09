"use client";

import { useState } from "react";
import { Copy, Check, Mail, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { SITE_CONFIG } from "@/lib/constants";
import {
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/ui/SocialIcons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      name: "GitHub",
      href: SITE_CONFIG.socials.github,
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      href: SITE_CONFIG.socials.linkedin,
      icon: LinkedInIcon,
    },
    {
      name: "Twitter",
      href: SITE_CONFIG.socials.twitter,
      icon: TwitterIcon,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px]"
        style={{ backgroundColor: "rgb(99 102 241 / 0.05)" }}
      />

      <div className="container-max relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Get in touch
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-6">
              Let&apos;s build something
              <br />
              <span className="text-gradient">extraordinary.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 md:mb-12 px-4">
              Whether it&apos;s a job opportunity, a project collaboration, or
              just a conversation — my inbox is always open.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10 md:mb-12 px-4">
              <MagneticButton
                href={`mailto:${SITE_CONFIG.email}`}
                size="lg"
                className="w-full sm:w-auto"
              >
                <Mail className="w-4 h-4" />
                Send me an email
              </MagneticButton>
              <button
                onClick={copyEmail}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium glass hover:bg-card transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="truncate max-w-[200px] sm:max-w-none">
                      {SITE_CONFIG.email}
                    </span>
                  </>
                )}
              </button>
            </div>
          </Reveal>

          {/* Social Links — Grid on mobile, flex on desktop */}
          <Reveal delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass hover:bg-card transition-all"
                >
                  <social.icon className="w-4 h-4" />
                  <span className="text-xs sm:text-sm font-medium">
                    {social.name}
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}