import React from "react";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

const skills = [
  { Icon: FaHtml5, color: "#E34F26" },
  { Icon: FaCss3Alt, color: "#1572B6" },
  { Icon: FaJs, color: "#F7DF1E" },
];

export default function FloatingSkillsIcons() {
  return (
    <div aria-hidden>
      <div className="absolute left-8 top-1/3 hidden lg:block">
        <div className="relative w-48 h-48">
          {skills.map((s, i) => (
            <div key={i} className={`absolute left-0 top-0 w-12 h-12 animate-skill-${i}`}>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <s.Icon size={28} color={s.color} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes skill0 { 0% { transform: rotate(0deg) translateX(60px) rotate(0deg);} 100% {transform: rotate(360deg) translateX(60px) rotate(-360deg);} }
        @keyframes skill1 { 0% { transform: rotate(0deg) translateX(80px) rotate(0deg);} 100% {transform: rotate(360deg) translateX(80px) rotate(-360deg);} }
        @keyframes skill2 { 0% { transform: rotate(0deg) translateX(100px) rotate(0deg);} 100% {transform: rotate(360deg) translateX(100px) rotate(-360deg);} }

        .animate-skill-0 { animation: skill0 12s linear infinite; }
        .animate-skill-1 { animation: skill1 15s linear infinite; }
        .animate-skill-2 { animation: skill2 18s linear infinite; }
      `}</style>
    </div>
  );
}
