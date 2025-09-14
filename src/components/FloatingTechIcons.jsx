import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const tech = [
  { Icon: FaReact, color: "#61dafb" },
  { Icon: SiTailwindcss, color: "#38bdf8" },
  { Icon: FaNodeJs, color: "#8cc84b" },
  { Icon: SiMongodb, color: "#4DB33D" },
];

export default function FloatingTechIcons() {
  return (
    <div aria-hidden className="pointer-events-none">
      <div className="absolute -right-16 top-1/3 hidden lg:block">
        <div className="relative w-48 h-48">
          {tech.map((t, i) => {
            const rotate = i * (360 / tech.length);
            return (
              <div
                key={i}
                style={{
                  transformOrigin: "24px 24px",
                }}
                className={`absolute left-0 top-0 w-12 h-12 animate-orbit-${i}`}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <t.Icon size={26} color={t.color} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add CSS animations in index.css */}
      <style>{`
        @keyframes orbit0 { 0% { transform: rotate(0deg) translateX(68px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(68px) rotate(-360deg);} }
        @keyframes orbit1 { 0% { transform: rotate(0deg) translateX(32px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(32px) rotate(-360deg);} }
        @keyframes orbit2 { 0% { transform: rotate(0deg) translateX(56px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(56px) rotate(-360deg);} }
        @keyframes orbit3 { 0% { transform: rotate(0deg) translateX(42px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(42px) rotate(-360deg);} }

        .animate-orbit-0 { animation: orbit0 14s linear infinite; }
        .animate-orbit-1 { animation: orbit1 10s linear infinite; }
        .animate-orbit-2 { animation: orbit2 12s linear infinite; }
        .animate-orbit-3 { animation: orbit3 16s linear infinite; }
      `}</style>
    </div>
  );
}
