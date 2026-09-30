"use client";

import { useState } from "react";
import { Terminal, Shield, Network, Cpu, Copy, Check, Play } from "lucide-react";

type LabTab = "cisco-infra" | "security-posture" | "astittva-telemetry" | "interactive";

export function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState<LabTab>("cisco-infra");
  const [copied, setCopied] = useState(false);
  const [commandInput, setCommandInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: "whoami",
      output: "Chandan Dhumale | Founder & CEO @ Astittva | Cybersecurity Engineer (B.Tech CSE, CGPA 8.76)",
    },
    {
      command: "cat security-philosophy.txt",
      output: "Great security begins with understanding how technology is built. I approach systems from both the attacker's and defender's perspective.",
    },
  ]);

  const executeCommand = (cmdToRun: string) => {
    const cmd = cmdToRun.trim().toLowerCase();
    if (!cmd) return;

    let response = "";
    if (cmd === "help") {
      response = "Available commands: whoami, infra, astittva, skills, certs, clear, contact";
    } else if (cmd === "whoami") {
      response = "Chandan Dhumale | Founder & CEO @ Astittva · B.Tech Cybersecurity (CGPA 8.76)";
    } else if (cmd === "infra") {
      response = "Enterprise Infrastructure Lab: Multi-site VLAN segmentation, Router-on-a-Stick, OSPF Area 0, Extended ACLs, Switch Port Security.";
    } else if (cmd === "astittva") {
      response = "Astittva: AI-powered Vedic astrology platform with 5 production n8n workflows, WhatsApp API, Supabase, 15+ Indian languages.";
    } else if (cmd === "skills") {
      response = "Core Skills: Network Security, OSPF, VLANs, ACLs, NAT/PAT, Kali Linux, Supabase, n8n, React, Next.js, Node.js, Flutter, C++, Python.";
    } else if (cmd === "certs") {
      response = "Certifications: Cisco Networking Academy (Intro to Cybersecurity, Networking Basics), PortSwigger Web Security Academy.";
    } else if (cmd === "contact") {
      response = "Email: dhumalechandan10@gmail.com | Phone: +91-9321923425 | LinkedIn: in/chandandhumale | GitHub: ChandanD1";
    } else if (cmd === "clear") {
      setTerminalHistory([]);
      setCommandInput("");
      return;
    } else {
      response = `Command not recognized: '${cmd}'. Type 'help' for available commands.`;
    }

    setTerminalHistory((prev) => [...prev, { command: cmdToRun, output: response }]);
    setCommandInput("");
  };

  const handleCommandSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    executeCommand(commandInput);
  };

  const handleCopyConfig = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const ciscoSnippet = `! Enterprise Infrastructure Security Lab
! Multi-Site VLAN Segmentation & Router-on-a-Stick Configuration
Router(config)# interface GigabitEthernet0/0/0.10
Router(config-subif)# description Corporate_VLAN_10 [Finance & Management]
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# ip address 10.10.10.1 255.255.255.0
!
Router(config)# interface GigabitEthernet0/0/0.20
Router(config-subif)# description Engineering_VLAN_20 [Isolated Dev & DMZ]
Router(config-subif)# encapsulation dot1Q 20
Router(config-subif)# ip address 10.10.20.1 255.255.255.0
!
! Dynamic Routing & Extended Access Control List
Router(config)# router ospf 1
Router(config-router)# router-id 1.1.1.1
Router(config-router)# network 10.10.0.0 0.0.255.255 area 0
!
! Enforce Extended ACL 101: Block unauthorized inter-VLAN reconnaissance
Router(config)# ip access-list extended 101_SEC_FILTER
Router(config-ext-nacl)# permit tcp 10.10.10.0 0.0.0.255 host 10.10.20.50 eq 443
Router(config-ext-nacl)# deny ip 10.10.10.0 0.0.0.255 10.10.20.0 0.0.0.255
Router(config-ext-nacl)# permit ip any any
!
! Port Security on Access Switches
Switch(config-if)# switchport mode access
Switch(config-if)# switchport port-security
Switch(config-if)# switchport port-security maximum 2
Switch(config-if)# switchport port-security violation restrict
Switch(config-if)# switchport port-security mac-address sticky
[STATUS: 100% Reachability Verified | OSPF Neighbors: FULL/BDR]`;

  const securitySnippet = `[*] Threat Model & Defensive Hardening Matrix
----------------------------------------------------------------------
[DEFENDER] Network Layer:
  - Inter-VLAN isolation with Extended ACLs prevents lateral movement.
  - Switchport 802.1X sticky MAC binding blocks rogue device spoofing.
  - NAT/PAT overload obscures internal IP addressing scheme.
  - DHCP snooping & DAI (Dynamic ARP Inspection) to mitigate MITM attacks.

[ATTACKER PERSPECTIVE] Hands-on Lab Hardening:
  - PortSwigger Web Security: Access control bypass tests, authentication flaws.
  - Kali Linux Environment: Traffic dissection with Wireshark & nmap scan auditing.
  - Threat Simulation: Verifying firewall drops on stealth SYN scans.

[PHILOSOPHY]
  "To build resilient defenses, one must deeply grasp how applications and
   networks operate at the protocol, socket, and database boundary."`;

  const astittvaSnippet = `// n8n Pipeline & Supabase Telemetry Payload
{
  "timestamp": "${new Date().toISOString()}",
  "service": "Astittva Orchestration Daemon",
  "pipeline": "Daily-Vedic-Insights-6AM-Dispatcher",
  "status": "HEALTHY",
  "telemetry": {
    "activeUsersTarget": "360,000,000+",
    "languagesSupported": 15,
    "supabaseDB": {
      "poolStatus": "CONNECTED",
      "rlsPolicy": "ENFORCED",
      "avgQueryLatencyMs": 14.2
    },
    "n8nFlowEngine": {
      "activeWorkflows": 5,
      "retryPolicy": "exponential_backoff_3x",
      "webhookBranching": "FREE_TIER_VS_PRO_DELIVERY"
    },
    "whatsappBusinessAPI": {
      "channelStatus": "READY",
      "dispatchBatchSize": 250,
      "deliveryRate": "99.8%"
    }
  }
}`;

  return (
    <section id="lab" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5 text-blue-500" />
            <span>Interactive Security & Systems Lab</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-foreground">
            Systems & Infrastructure
          </h2>
          <p className="text-base text-muted-foreground font-light max-w-2xl leading-relaxed">
            Hands-on network security configurations, enterprise lab topologies, and live system architectures built and tested across Cisco Packet Tracer, Kali Linux, and cloud backends.
          </p>
        </div>

        {/* Terminal Chrome Box */}
        <div className="rounded-2xl border border-border/80 bg-zinc-950 text-zinc-100 shadow-2xl overflow-hidden font-mono text-xs">
          {/* Top Title Bar */}
          <div className="px-4 py-3 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-zinc-400 text-xs tracking-wide">
                chandan@security-lab: ~
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] text-zinc-500 hidden sm:inline">
                Cisco / Kali / Supabase / n8n
              </span>
              <button
                onClick={() => {
                  const textToCopy =
                    activeTab === "cisco-infra"
                      ? ciscoSnippet
                      : activeTab === "security-posture"
                      ? securitySnippet
                      : astittvaSnippet;
                  handleCopyConfig(textToCopy);
                }}
                className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors flex items-center gap-1.5 cursor-pointer text-[11px]"
                title="Copy configuration snippet"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy Config</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Tab Selector Bar */}
          <div className="flex items-center gap-1 px-3 py-2 bg-zinc-900/40 border-b border-zinc-800/80 overflow-x-auto text-[11px]">
            <button
              onClick={() => setActiveTab("cisco-infra")}
              className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === "cisco-infra"
                  ? "bg-zinc-800 text-zinc-100 font-medium"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
              }`}
            >
              <Network className="w-3.5 h-3.5 text-blue-400" />
              <span>Cisco Enterprise Lab (2026)</span>
            </button>

            <button
              onClick={() => setActiveTab("security-posture")}
              className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === "security-posture"
                  ? "bg-zinc-800 text-zinc-100 font-medium"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
              }`}
            >
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Attacker vs Defender Matrix</span>
            </button>

            <button
              onClick={() => setActiveTab("astittva-telemetry")}
              className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === "astittva-telemetry"
                  ? "bg-zinc-800 text-zinc-100 font-medium"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span>Astittva Pipeline Telemetry</span>
            </button>

            <button
              onClick={() => setActiveTab("interactive")}
              className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === "interactive"
                  ? "bg-zinc-800 text-zinc-100 font-medium"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
              }`}
            >
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              <span>Interactive CLI</span>
            </button>
          </div>

          {/* Terminal Code Body */}
          <div className="p-5 overflow-x-auto min-h-[320px] max-h-[460px] text-xs leading-relaxed selection:bg-zinc-700 selection:text-zinc-100">
            {activeTab === "cisco-infra" && (
              <pre className="text-zinc-300 font-mono">
                <code>{ciscoSnippet}</code>
              </pre>
            )}

            {activeTab === "security-posture" && (
              <pre className="text-emerald-400/90 font-mono">
                <code>{securitySnippet}</code>
              </pre>
            )}

            {activeTab === "astittva-telemetry" && (
              <pre className="text-purple-300 font-mono">
                <code>{astittvaSnippet}</code>
              </pre>
            )}

            {activeTab === "interactive" && (
              <div className="space-y-4">
                <div className="text-zinc-400 text-xs">
                  Antigravity Shell v2.1. Type <span className="text-amber-400 font-bold">help</span> or click quick actions below:
                </div>

                {/* Quick command buttons */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {["whoami", "infra", "astittva", "skills", "certs", "contact", "clear"].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => executeCommand(cmd)}
                      className="px-2.5 py-1 rounded bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 text-[11px] font-mono cursor-pointer border border-zinc-700/60"
                    >
                      ${cmd}
                    </button>
                  ))}
                </div>

                {/* Terminal History */}
                <div className="space-y-3 pt-2">
                  {terminalHistory.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <span className="text-emerald-400 font-bold">chandan@lab:~$</span>
                        <span className="text-zinc-100">{item.command}</span>
                      </div>
                      <div className="text-zinc-300 pl-4 whitespace-pre-wrap font-mono">
                        {item.output}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Terminal Input Form */}
                <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2">
                  <span className="text-emerald-400 font-bold">chandan@lab:~$</span>
                  <input
                    type="text"
                    value={commandInput}
                    onChange={(e) => setCommandInput(e.target.value)}
                    placeholder="Type command (e.g. 'help', 'infra', 'skills')..."
                    className="flex-1 bg-transparent text-zinc-100 focus:outline-none font-mono text-xs"
                    autoFocus={activeTab === "interactive"}
                  />
                  <button
                    type="submit"
                    className="p-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 cursor-pointer"
                  >
                    <Play className="w-3 h-3" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
