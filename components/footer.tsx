"use client";

import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-14 px-6 border-t border-border/40 bg-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-base font-normal text-foreground">
              Chandan Dhumale
            </span>
            <p className="text-xs text-muted-foreground font-light">
              Founder &amp; CEO at Astittva · Cybersecurity &amp; Systems Builder
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-muted-foreground font-light">
            <a
              href="https://github.com/ChandanD1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/chandandhumale/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:dhumalechandan10@gmail.com"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground/80">
          <span>© {currentYear} Chandan Dhumale. All rights reserved.</span>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg border border-border/40 hover:bg-muted text-foreground transition-colors flex items-center gap-1 cursor-pointer"
              title="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}