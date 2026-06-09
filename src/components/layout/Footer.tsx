"use client";

import { Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import {
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="container-max">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center">
              <span className="text-[10px] font-bold text-background">
                {SITE_CONFIG.initials}
              </span>
            </div>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. Crafted with intention.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={SITE_CONFIG.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="p-2.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}