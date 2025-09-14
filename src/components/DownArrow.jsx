import React from "react";

export default function DownArrow({ onClick }) {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
      <button
        onClick={onClick}
        className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white/90 bg-transparent"
        aria-label="Scroll down"
      >
        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}
