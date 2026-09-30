"use client";

import { 
  Network, 
  Cpu, 
  Database, 
  Code2
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Cybersecurity & Networking",
      icon: Network,
      description: "Hardening enterprise topologies, protocol analysis, and offensive/defensive auditing.",
      skills: [
        "TCP/IP & OSI Model",
        "IPv4/IPv6 & Subnetting",
        "VLANs & 802.1Q Trunking",
        "Router-on-a-Stick",
        "OSPF Dynamic Routing",
        "Extended ACLs",
        "NAT / PAT",
        "Switch Port Security",
        "DHCP & DNS Services",
        "Cisco Packet Tracer",
        "Kali Linux",
        "PortSwigger Web Security",
      ],
    },
    {
      title: "AI & Workflow Automation",
      icon: Cpu,
      description: "End-to-end automation pipelines, LLM prompt engineering, and conversational bots.",
      skills: [
        "n8n Workflow Automation",
        "AI Astrological Intelligence",
        "WhatsApp Business API",
        "Webhook Event Orchestration",
        "Payment Gateway Integration",
        "Conditional Logic & Retries",
        "Multi-lingual AI (15+ Indian Languages)",
        "Prompt Guardrails",
      ],
    },
    {
      title: "Backend & Distributed Databases",
      icon: Database,
      description: "Relational and document storage, schema design, and secure authentication.",
      skills: [
        "Supabase (PostgreSQL)",
        "Row Level Security (RLS)",
        "Firebase Firestore",
        "Firebase Auth",
        "MongoDB",
        "MySQL",
        "RESTful API Design",
        "GraphQL",
        "Role-Based Access Control (RBAC)",
      ],
    },
    {
      title: "Languages & Full-Stack Engineering",
      icon: Code2,
      description: "Performant cross-platform software engineering and reactive user interfaces.",
      skills: [
        "Swift (iOS)",
        "C++",
        "Python",
        "Java",
        "JavaScript & TypeScript",
        "Dart",
        "React.js & Next.js",
        "Node.js & Express.js",
        "Flutter Mobile",
        "Redux State Management",
        "Tailwind CSS",
        "Figma UI/UX",
      ],
    },
  ];

  const certifications = [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      detail: "Cyber threats, online security defense mechanisms, confidentiality, integrity & availability.",
      status: "Verified",
    },
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      detail: "IPv4/IPv6 address planning, OSI & TCP/IP stack, transport protocols, and ~13 Cisco Packet Tracer labs.",
      status: "Verified",
    },
    {
      title: "PortSwigger Web Security Labs",
      issuer: "PortSwigger Academy",
      detail: "Hands-on vulnerability labs covering broken access controls, authentication bypass, and IDOR.",
      status: "Completed",
    },
    {
      title: "Smart India Hackathon (SIH) Internal Round",
      issuer: "Ministry of Education / Institutional Round",
      detail: "Won 1st Position as a team developing an innovative technical solution for national problem statements under competition constraints.",
      status: "1st Position Winner",
    },
    {
      title: "Ace of Hacks 2023 Hackathon",
      issuer: "A.C. Patil College of Engineering",
      detail: "Developed ComicVerse, an interactive AI story and comic generator built with Flutter, Firebase, and LLM APIs.",
      status: "Recognized",
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white border-t border-border/40">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
            Skills &amp; Architecture
          </h2>
          <p className="text-base text-muted-foreground font-light max-w-xl">
            A comprehensive matrix of infrastructure security, distributed backends, AI orchestration, and software engineering.
          </p>
        </div>

        {/* 4-Category Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="p-7 rounded-2xl border border-border/80 bg-white space-y-4 hover:border-foreground/30 transition-all shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl border border-border/80 bg-muted/20 flex items-center justify-center text-foreground">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-normal text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-light">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono border border-border/60 bg-muted/20 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications & Industry Recognition */}
        <div className="p-8 rounded-2xl border border-border/80 bg-white space-y-6 shadow-xs">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium text-foreground">
              Certifications &amp; Credentials
            </h3>
            <span className="text-xs font-mono text-muted-foreground">Industry Standards</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-4 rounded-xl border border-border/60 bg-muted/10 space-y-2 hover:border-foreground/30 transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-normal text-foreground">
                    {cert.title}
                  </h4>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-border/80 bg-white text-foreground shrink-0">
                    {cert.status}
                  </span>
                </div>
                <p className="text-xs font-mono text-muted-foreground">
                  {cert.issuer}
                </p>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  {cert.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}