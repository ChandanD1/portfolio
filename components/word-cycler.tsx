"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface WordSlot {
  target: string;
  candidates: string[];
}

const SENTENCE_DATA: WordSlot[] = [
  {
    target: "Engineering",
    candidates: ["Architecting", "Designing", "Securing", "Deploying", "Engineering"],
  },
  {
    target: "secure,",
    candidates: ["resilient,", "hardened,", "robust,", "adaptive,", "secure,"],
  },
  {
    target: "purposeful",
    candidates: ["thoughtful", "impactful", "considered", "intentional", "purposeful"],
  },
  {
    target: "systems",
    candidates: ["networks", "products", "platforms", "software", "systems"],
  },
  {
    target: "at the",
    candidates: ["across", "bridging", "within", "at the"],
  },
  {
    target: "intersection",
    candidates: ["crossroads", "frontier", "boundary", "intersection"],
  },
  {
    target: "of security &",
    candidates: ["of defense &", "of protection &", "of resilience &", "of security &"],
  },
  {
    target: "product.",
    candidates: ["building.", "craft.", "software.", "product."],
  },
];

const GLYPHS = "!@#$%*_+~01";

export function WordCycler({ className = "" }: { className?: string }) {
  const [visibleWords, setVisibleWords] = useState<string[]>(() =>
    SENTENCE_DATA.map((w) => w.target)
  );
  const [lockedIndices, setLockedIndices] = useState<boolean[]>(() =>
    SENTENCE_DATA.map(() => false)
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const intervalsRef = useRef<ReturnType<typeof setInterval>[]>([]);

  const clearAllTimers = () => {
    timeoutsRef.current.forEach(clearTimeout);
    intervalsRef.current.forEach(clearInterval);
    timeoutsRef.current = [];
    intervalsRef.current = [];
  };

  const startAnimation = useCallback(() => {
    clearAllTimers();
    setIsAnimating(true);
    setLockedIndices(SENTENCE_DATA.map(() => false));
    setVisibleWords(
      SENTENCE_DATA.map((slot) =>
        slot.candidates[Math.floor(Math.random() * slot.candidates.length)]
      )
    );

    SENTENCE_DATA.forEach((slot, index) => {
      let step = 0;
      const spinInterval = setInterval(() => {
        step++;
        setVisibleWords((prev) => {
          const next = [...prev];
          if (step % 4 === 0) {
            next[index] = slot.target
              .split("")
              .map((char) =>
                char === "," || char === "." || char === " " || char === "&"
                  ? char
                  : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
              )
              .join("");
          } else {
            next[index] =
              slot.candidates[Math.floor(Math.random() * slot.candidates.length)];
          }
          return next;
        });
      }, 70);

      intervalsRef.current.push(spinInterval);

      const settleDelay = 300 + index * 150;
      const settleTimeout = setTimeout(() => {
        clearInterval(spinInterval);
        setVisibleWords((prev) => {
          const next = [...prev];
          next[index] = slot.target;
          return next;
        });
        setLockedIndices((prev) => {
          const next = [...prev];
          next[index] = true;
          return next;
        });
        if (index === SENTENCE_DATA.length - 1) {
          setIsAnimating(false);
        }
      }, settleDelay);

      timeoutsRef.current.push(settleTimeout);
    });
  }, []);

  useEffect(() => {
    const initTimer = setTimeout(() => {
      startAnimation();
    }, 600);

    return () => {
      clearTimeout(initTimer);
      clearAllTimers();
    };
  }, [startAnimation]);

  return (
    <span
      onClick={!isAnimating ? startAnimation : undefined}
      title={!isAnimating ? "Click to replay" : ""}
      className={`inline cursor-pointer select-none ${className}`}
    >
      {SENTENCE_DATA.map((slot, index) => {
        const isLocked = lockedIndices[index];
        const wordText = visibleWords[index] || slot.target;
        return (
          <span
            key={index}
            className={`transition-all duration-150 ${
              isLocked
                ? "text-foreground"
                : "text-muted-foreground/50 font-mono text-sm"
            }`}
          >
            {wordText}
            {index < SENTENCE_DATA.length - 1 ? " " : ""}
          </span>
        );
      })}
    </span>
  );
}
