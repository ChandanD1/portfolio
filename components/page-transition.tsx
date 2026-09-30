"use client";

import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionTransition({ children, className, id }: PageTransitionProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}