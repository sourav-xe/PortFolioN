import React from "react";

export default function AnimatedButton({ children, className = "", ...props }) {
  return (
    <button
      className={`
        relative px-8 py-3 
        rounded-full 
        text-white font-medium tracking-wide
        border border-white/40
        overflow-hidden
        group
        ${className}
      `}
      {...props}
    >
      {/* Background hover glow */}
      <span
        className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Shine effect */}
      <span
        className="absolute -inset-1 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent
                   translate-x-[-200%] group-hover:translate-x-[200%]
                   transition-transform duration-1000 ease-in-out"
      />

      {/* Button text */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
