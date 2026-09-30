"use client";

import { useState } from "react";
import { 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Mail,
  ArrowUpRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("dhumalechandan10@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleSendViaEmailClient = () => {
    const mailto = `mailto:dhumalechandan10@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Collaboration Inquiry"
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white border-t border-border/40">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
            Contact
          </h2>
          <p className="text-base text-muted-foreground font-light max-w-xl">
            Let&apos;s work together on something secure, innovative, and impactful. Open to startup discussions, technical roles, and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Left Column: Direct Coordinates (2 cols) */}
          <div className="md:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl border border-border/80 bg-white space-y-5 shadow-xs">
              <div className="space-y-1">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Direct Contact
                </span>
                <h3 className="text-lg font-normal text-foreground">
                  Chandan Dhumale
                </h3>
              </div>

              <div className="space-y-4 text-sm">
                {/* Email Item */}
                <div className="space-y-1">
                  <span className="text-xs text-muted-foreground font-mono">Email</span>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href="mailto:dhumalechandan10@gmail.com"
                      className="text-foreground hover:underline font-light text-sm"
                    >
                      dhumalechandan10@gmail.com
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                      title="Copy email"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-foreground" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="space-y-1 pt-2 border-t border-border/40">
                  <span className="text-xs text-muted-foreground font-mono">Phone / WhatsApp</span>
                  <div>
                    <a
                      href="tel:+919321923425"
                      className="text-foreground hover:underline font-light flex items-center gap-2 text-sm"
                    >
                      <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                      <span>+91-9321923425</span>
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="space-y-1 pt-2 border-t border-border/40">
                  <span className="text-xs text-muted-foreground font-mono">Location</span>
                  <div className="text-foreground font-light flex items-center gap-2 text-sm">
                    <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                    <span>Mumbai, Maharashtra, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Outlinks Box */}
            <div className="p-6 rounded-2xl border border-border/80 bg-white space-y-3 shadow-xs">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Profiles
              </span>
              <div className="space-y-2 text-sm">
                <a
                  href="https://www.linkedin.com/in/chandandhumale/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl border border-border/60 hover:border-foreground/40 hover:bg-muted/30 transition-all text-foreground"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-foreground" />
                    <span className="font-light">LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                </a>

                <a
                  href="https://github.com/ChandanD1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl border border-border/60 hover:border-foreground/40 hover:bg-muted/30 transition-all text-foreground"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-foreground" />
                    <span className="font-light">GitHub</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form (3 cols) */}
          <div className="md:col-span-3">
            <div className="p-7 sm:p-8 rounded-2xl border border-border/80 bg-white shadow-xs">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mx-auto text-foreground">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-normal text-foreground">
                    Message Sent
                  </h3>
                  <p className="text-sm text-muted-foreground font-light max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. I review and respond to inquiries promptly.
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={handleSendViaEmailClient}
                      className="px-4 py-2 rounded-full border border-border/80 text-xs text-foreground hover:bg-muted font-mono cursor-pointer flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send directly via Email Client</span>
                    </button>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="px-4 py-2 rounded-full bg-foreground text-background text-xs font-mono cursor-pointer"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ram"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border/80 bg-white text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors font-light"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ram@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border/80 bg-white text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors font-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity, Collaboration, or Question"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border/80 bg-white text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors font-light"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border/80 bg-white text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors resize-none font-light leading-relaxed"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-light hidden sm:inline">
                      Direct response guaranteed within 24 hours.
                    </span>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-foreground text-background text-xs font-medium hover:bg-foreground/85 transition-all flex items-center gap-2 cursor-pointer ml-auto"
                    >
                      <span>Send</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}