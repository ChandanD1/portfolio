"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useSyncExternalStore } from "react";

function subscribePointer(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia("(pointer: fine)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getPointerSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: fine)").matches;
}

function getServerPointerSnapshot() {
  return false;
}

export function CustomCursor() {
  const isFinePointer = useSyncExternalStore(
    subscribePointer,
    getPointerSnapshot,
    getServerPointerSnapshot
  );

  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 600 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (!isFinePointer) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isFinePointer]);

  if (!isFinePointer) return null;

  return (
    <>
      {/* Outer follower ring */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-foreground/30 pointer-events-none z-50 transition-colors"
        animate={{
          scale: isHovering ? 1.6 : 1,
          borderColor: isHovering ? "var(--color-foreground)" : "color-mix(in oklch, var(--color-foreground) 30%, transparent)",
        }}
        transition={{ duration: 0.15 }}
      />
      {/* Center dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-foreground pointer-events-none z-50"
        animate={{
          scale: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}