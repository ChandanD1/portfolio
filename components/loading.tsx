"use client";

import { motion } from "framer-motion";

export function Loading() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-2 border-border/30 rounded-full"
        />
        
        {/* Inner ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute top-2 left-2 w-12 h-12 border-2 border-border/50 rounded-full"
        />
        
        {/* Center dot */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-foreground rounded-full"
        />
      </div>

      {/* Loading text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-20 text-sm text-muted-foreground font-light"
      >
        Loading...
      </motion.div>
    </motion.div>
  );
}