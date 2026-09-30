"use client";

import { useEffect, useState, useRef } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*+~";

export function TextScramble({
  text,
  className = "",
  delay = 200,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState("");
  const isRunningRef = useRef(false);

  useEffect(() => {
    let frameId: number;

    const startAnimation = () => {
      isRunningRef.current = true;
      const length = text.length;
      let frame = 0;
      const totalFrames = length * 3 + 15;

      const update = () => {
        let result = "";
        const progress = Math.floor((frame / totalFrames) * length);

        for (let i = 0; i < length; i++) {
          if (text[i] === " ") {
            result += " ";
            continue;
          }

          if (i < progress) {
            // Already settled correctly
            result += text[i];
          } else if (i < progress + 4) {
            // Spinning / scrambling right now
            const randomIndex = Math.floor(Math.random() * GLYPHS.length);
            result += GLYPHS[randomIndex];
          } else {
            // Upcoming characters still scrambling
            const randomIndex = Math.floor(Math.random() * GLYPHS.length);
            result += GLYPHS[randomIndex];
          }
        }

        setDisplayText(result);

        if (frame < totalFrames) {
          frame++;
          frameId = requestAnimationFrame(update);
        } else {
          setDisplayText(text);
          isRunningRef.current = false;
        }
      };

      frameId = requestAnimationFrame(update);
    };

    const timeoutId = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(frameId);
    };
  }, [text, delay]);

  return (
    <span className={`inline-block font-mono tracking-tight ${className}`}>
      {displayText || text}
    </span>
  );
}
