import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import AnimatedButton from "./AnimatedButton"; // ✅ adjust path if needed

export default function TiltCard({ proj, idx }) {
  const ref = useRef(null);

  // Motion values for tilt
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [15, -15]);
  const rotateY = useTransform(x, [0, 1], [-15, 15]);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const posX = (e.clientX - rect.left) / rect.width;
    const posY = (e.clientY - rect.top) / rect.height;
    x.set(posX);
    y.set(posY);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
      viewport={{ once: true }}
      className="relative rounded-2xl shadow-xl overflow-hidden flex flex-col 
        bg-gradient-to-br from-purple-900/40 to-black/70 
        backdrop-blur-md border border-gray-700/40
        transition-all duration-500 group"
    >
      {/* Neon border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-purple-500/50 opacity-0 group-hover:opacity-100 group-hover:blur-md transition-all duration-500 pointer-events-none"></div>

      {/* Image / Placeholder */}
      <div className="w-full h-52 bg-gray-900 relative group overflow-hidden">
        {proj.img ? (
          <motion.img
            src={proj.img}
            alt={proj.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
            <span className="text-gray-500">🚧 Coming Soon 🚧</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 relative z-10">
        <h3 className="text-xl font-bold text-purple-300 tracking-wide">
          {proj.title}
        </h3>
        <p className="text-sm text-gray-400 mt-1">
          {proj.duration} • {proj.location}
        </p>

        <p className="text-sm text-gray-300 mt-3">
          <span className="font-semibold text-purple-400">Tools:</span>{" "}
          {proj.tools.join(", ")}
        </p>

        <ul className="list-disc pl-5 mt-3 text-gray-300 flex-1 space-y-1 text-sm">
          {proj.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>

        <div className="flex gap-3 mt-5">
          <a href={proj.github} target="_blank" rel="noopener noreferrer">
            <AnimatedButton>💻 View Code</AnimatedButton>
          </a>
          <a href={proj.demo} target="_blank" rel="noopener noreferrer">
            <AnimatedButton>🚀 Live Demo</AnimatedButton>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
