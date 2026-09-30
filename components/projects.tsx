"use client";

import { useState } from "react";
import { GithubIcon } from "./icons";

type ProjectCategory = "all" | "security" | "fullstack" | "mobile-design" | "startup";

interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  tags: string[];
  timeframe: string;
  description: string;
  impact?: string; // bold impact sentence like image 4
}

const projects: Project[] = [
  {
    id: "enterprise-security-lab",
    title: "Enterprise Infrastructure Security Lab.",
    category: "security",
    tags: ["Network Security", "Cisco"],
    timeframe: "2026",
    description:
      "Designed and simulated a multi-site enterprise network with segmented VLANs, dynamic OSPF routing, and strict ACL-based access controls.",
    impact:
      "Router-on-a-Stick inter-VLAN with 802.1Q, OSPF Area 0, Extended ACL 101, and 802.1X sticky MAC port security.",
  },
  {
    id: "customer-support-saas",
    title: "Customer Support SaaS Platform.",
    category: "fullstack",
    tags: ["Full-Stack", "B2B", "MERN"],
    timeframe: "Dec 2024",
    description:
      "Production-grade B2B platform with ticket management, real-time WebSocket customer-agent chat, role-based JWT auth, and analytics dashboards.",
    impact:
      "End-to-end SaaS built solo: backend routing, real-time chat, SLA escalation queues, and full analytics.",
  },
  {
    id: "portswigger-labs",
    title: "PortSwigger Web Security Audit Labs.",
    category: "security",
    tags: ["Web Security", "OWASP"],
    timeframe: "2024, 2025",
    description:
      "Hands-on exploitation and remediation of core web application vulnerabilities: broken access controls, authentication bypass, XSS, and SQL injection.",
    impact:
      "Completed labs on IDOR, privilege escalation, multi-factor bypass, and injection techniques.",
  },
  {
    id: "savorly",
    title: "Savorly: Digital Recipe App.",
    category: "mobile-design",
    tags: ["Flutter", "Mobile"],
    timeframe: "Aug 2025",
    description:
      "Cross-platform mobile recipe discovery app with glassmorphism UI, custom Node.js/Express backend, and MongoDB storage with bookmarking.",
    impact:
      "Full-stack mobile product: Flutter frontend, REST API backend, and database, shipped end-to-end.",
  },
  {
    id: "sofi-music",
    title: "Sofi: Music Streaming Platform.",
    category: "fullstack",
    tags: ["React", "Web Audio"],
    timeframe: "Jul 2024",
    description:
      "Web-based audio streaming app serving 1,000+ tracks with a custom HTML5 player engine, Redux state management, and streaming API integration.",
    impact:
      "Custom audio player with shuffle, repeat, scrubber controls, and seamless playlist queue management.",
  },
  {
    id: "hackathon-sih-comicmaker",
    title: "SIH Internal Round & Ace of Hacks.",
    category: "mobile-design",
    tags: ["Flutter", "Firebase", "Hackathon"],
    timeframe: "2023, 2024",
    description:
      "Two hackathon projects: Won 1st Position at SIH Internal Round; built ComicVerse, an interactive AI story and comic generator, at Ace of Hacks 2023.",
    impact:
      "ComicVerse integrated LLM story generation APIs with real-time panel rendering and Firebase cloud storage.",
  },
  {
    id: "alpha-shoes",
    title: "Alpha: Shoes E-Commerce Prototype.",
    category: "mobile-design",
    tags: ["Figma", "UI/UX"],
    timeframe: "Jun 2024",
    description:
      "15+ screen responsive Figma prototype iterated through 20+ user testing sessions. Reduced checkout friction by 30%.",
    impact:
      "Comprehensive design system with typography tokens, component library, and interactive micro-prototypes.",
  },
  {
    id: "astittva-mvp",
    title: "Astittva: iOS Astrological MVP.",
    category: "startup",
    tags: ["Swift", "iOS", "Firebase"],
    timeframe: "2025, Present",
    description:
      "Native iOS mobile app built in Swift with Firebase Firestore backend and a custom Vedic planetary calculation engine.",
    impact:
      "Architected and shipped solo from the first line of code through UI/UX, backend, and release.",
  },
  {
    id: "dailyaura-astittva",
    title: "DailyAura by Astittva.",
    category: "startup",
    tags: ["n8n", "WhatsApp API", "Automation"],
    timeframe: "2026",
    description:
      "Automated WhatsApp dispatch system delivering personalized daily horoscopes in regional Indian languages. 5 n8n workflows, Razorpay-gated delivery tiers.",
    impact:
      "Fully automated 0-touch pipeline delivering to subscribers at 6 AM every morning.",
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: "all", label: "All" },
    { id: "security", label: "Security" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "mobile-design", label: "Mobile & Design" },
    { id: "startup", label: "Startup" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 bg-white border-t border-border/30">
      <div className="max-w-2xl mx-auto space-y-12">

        {/* Section heading — inspired by "Taste.md / Case Studies" */}
        <div className="space-y-2">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Work.md
            </h2>
            <span className="text-2xl md:text-3xl font-light text-muted-foreground/50 italic">
              / Projects
            </span>
          </div>
          <p className="text-sm text-muted-foreground font-light">
            AI Can Code Everything, But Can Never Judge What To Build :)
          </p>
        </div>

        {/* Filter pills — small, minimal */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-foreground text-background font-medium"
                    : "border border-border/70 bg-white text-muted-foreground hover:text-foreground hover:border-foreground/40 font-light"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project list — image 4 style: tags, bold title, impact line */}
        <div className="space-y-0">
          {filteredProjects.map((project, idx) => (
            <div key={project.id}>
              {/* Each project row */}
              <div className="py-7 space-y-3">
                {/* Tags row */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-full border border-border/60 text-muted-foreground font-light"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs text-muted-foreground/50 font-light ml-1 self-center">
                    {project.timeframe}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {project.description}{" "}
                  {project.impact && (
                    <strong className="text-foreground font-medium">
                      {project.impact}
                    </strong>
                  )}
                </p>
              </div>

              {/* Divider between projects */}
              {idx < filteredProjects.length - 1 && (
                <div className="w-full h-px bg-border/30" />
              )}
            </div>
          ))}
        </div>

        {/* GitHub link */}
        <a
          href="https://github.com/ChandanD1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-light border-b border-border/50 pb-0.5 hover:border-foreground/40"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>More on GitHub →</span>
        </a>
      </div>
    </section>
  );
}