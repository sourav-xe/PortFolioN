"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GalaxyButton({ children, onClick, className = "" }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative px-6 py-3 rounded-full font-medium text-white
        bg-transparent border border-white/20
        backdrop-blur-sm
        overflow-hidden transition-all duration-300
        hover:border-purple-400 hover:shadow-[0_0_10px_rgba(168,85,247,0.5)]
        ${className}
      `}
    >
      {/* Stars layer */}
      <span className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:20px_20px] opacity-40 animate-[spin_30s_linear_infinite]" />

      {/* Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
