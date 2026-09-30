"use client";

export function Experience() {
  return (
    <section id="startup" className="py-24 px-6 bg-white border-t border-border/30">
      <div className="max-w-2xl mx-auto space-y-16">

        {/* Section heading */}
        <div className="space-y-2">
          <p className="text-xs font-mono text-muted-foreground/60 tracking-widest uppercase">Startup Journey</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
            Astittva.
          </h2>
          <p className="text-base text-muted-foreground font-light leading-relaxed max-w-xl">
            Founded, architected, and shipped solo. From the first line of code to a 3-person team.
          </p>
        </div>

        {/* Product 1 — borderless, clean */}
        <div className="space-y-8">
          <div className="space-y-4">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {["iOS", "Swift", "Firebase"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full border border-border/60 text-muted-foreground font-light">
                  {tag}
                </span>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">
                Astittva: Mobile Application (MVP).
              </h3>
              <p className="text-sm text-muted-foreground font-light mb-4">
                Native iOS Architecture &amp; Core Vedic Engine · 2025, Present
              </p>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                Designed and engineered a native iOS mobile application MVP from the ground up. Built with Swift, backed by Firebase Firestore for real-time state synchronization, and Firebase Authentication for secure credential handling. The core of the app is a custom algorithmic Vedic planetary calculation engine that delivers personalized astrological interpretations.
              </p>
            </div>

            <ul className="space-y-2 text-sm text-muted-foreground font-light leading-relaxed">
              {[
                "Native Swift client with responsive astrological charting interfaces",
                "Firebase Firestore managing user birth chart data and planetary calculation states",
                "Role-based access controls and secure session persistence via Firebase Auth",
                "Algorithmic Vedic engine computing planetary positions for tailored insights",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-foreground/30 mt-1 shrink-0 text-xs">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border/30" />

          {/* Product 2 */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {["n8n", "WhatsApp API", "Razorpay", "Automation"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full border border-border/60 text-muted-foreground font-light">
                  {tag}
                </span>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">
                DailyAura by Astittva.
              </h3>
              <p className="text-sm text-muted-foreground font-light mb-4">
                Automated Multi-Lingual WhatsApp Pipeline · 2026
              </p>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                A direct-to-consumer delivery layer under Astittva. DailyAura sends hyper-personalized daily horoscopes in regional Indian languages to subscribers&apos; WhatsApp every morning at 6 AM — fully automated, with payment-gated delivery tiers.
              </p>
            </div>

            <ul className="space-y-2 text-sm text-muted-foreground font-light leading-relaxed">
              {[
                "5 production n8n automation workflows reading subscriber birth data and triggering AI inference",
                "WhatsApp Business API integration for reliable morning delivery at scale",
                "Razorpay payment webhooks branching free vs premium subscriber flows automatically",
                "AI prompts localized across 15+ Indian regional languages",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-foreground/30 mt-1 shrink-0 text-xs">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border/30" />

          {/* Team evolution — inline text, no box */}
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            <span className="text-foreground font-normal">Built alone, now scaling with a team.</span>{" "}
            Astittva was architected and shipped solo from the first commit through system design, UI/UX, and automation pipelines. It has since grown into a 3-person team where members handle specialized product, content, and growth operations.
          </p>
        </div>
      </div>
    </section>
  );
}
