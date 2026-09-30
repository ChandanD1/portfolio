"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { InteractiveTerminal } from "@/components/interactive-terminal";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Loading } from "@/components/loading";
import { CustomCursor } from "@/components/custom-cursor";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-foreground">
      <CustomCursor />
      {isLoading && <Loading />}

      {!isLoading && (
        <>
          <Navigation />
          <main className="flex-1">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <InteractiveTerminal />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
