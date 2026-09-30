"use client";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white border-t border-border/30">
      <div className="max-w-2xl mx-auto space-y-16">

        {/* Intro paragraph — large, personal, no heading needed
        <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed">
          I&apos;m a computer science student, startup founder, and systems builder. I&apos;ve spent the last few years building Astittva from scratch while simultaneously studying how systems can be broken and defended. Some of it worked beautifully. Some of it humbled me. All of it made me sharper.
        </p> */}

        {/* Curly brace sections — inspired by the reference */}
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              &#123;From idea to shipped product&#125;
            </h3>
            <p className="text-base text-muted-foreground font-light leading-relaxed">
              I don&apos;t just write code. I own the full arc: architecture, database design, UI/UX, automation pipelines, and go-to-market execution. I built Astittva&apos;s iOS app, WhatsApp delivery system, and payment flows solo. Not because I had to, but because I believe understanding the full stack makes you a sharper decision-maker at every layer.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              &#123;Security as a way of thinking&#125;
            </h3>
            <p className="text-base text-muted-foreground font-light leading-relaxed">
              I approach systems from both the builder&apos;s and the attacker&apos;s perspective. That dual lens changes how you design: you think about edge cases, trust boundaries, and failure modes before they become incidents. I study network segmentation, web application vulnerabilities, and access controls, not just as a specialty, but as a way of building better software.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              &#123;AI era, human judgment&#125;
            </h3>
            <p className="text-base text-muted-foreground font-light leading-relaxed">
              I use AI to move faster. But the calls that matter: what to build, what to cut, where security matters most those stay with me. AI Can Do Everything, But Can Never Have Taste :)
            </p>
          </div>
        </div>

        {/* Education block — clean, minimal */}
        <div className="border-t border-border/30 pt-10 space-y-3">
          <h4 className="text-sm font-medium text-foreground tracking-wide uppercase">
            Education &amp; Credentials
          </h4>
          <div className="space-y-1.5 text-sm text-muted-foreground font-light">
            <p className="text-foreground font-normal">B.Tech, Computer Science (Cybersecurity Specialization) · CGPA 8.76</p>
            <p>ITM Skills University, Kharghar · 2023 – 2027</p>
            <p>🏆 Smart India Hackathon (SIH) Internal Round: 1st Position Winner</p>
            <p>🎯 Ace of Hacks 2023: Built ComicVerse AI Platform (A.C. Patil College of Engineering)</p>
            <p>Cisco Networking Academy · Introduction to Cybersecurity, Networking Basics</p>
            <p>PortSwigger Web Security Academy Labs</p>
          </div>
        </div>
      </div>
    </section>
  );
}