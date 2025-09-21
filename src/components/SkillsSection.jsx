import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiFramer,
  SiThreedotjs,
  SiAppwrite,
  SiTypescript,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300 text-5xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-5xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-5xl" /> },
  { name: "Docker", icon: <FaDocker className="text-sky-500 text-5xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-white text-5xl" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500 text-5xl" /> },
  { name: "Three.js", icon: <SiThreedotjs className="text-white text-5xl" /> },
  { name: "Appwrite", icon: <SiAppwrite className="text-red-500 text-5xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400 text-5xl" /> },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative w-full py-24 px-6 z-10">
      {/* Background (same style as projects/hero) */}
      <div className="absolute inset-0 -z-10">
        {/* Aurora or Particles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="w-full h-full"
        >
          {/* Re-use Aurora/Particles for continuity */}
        </motion.div>
      </div>

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
          ⚡ My Skills
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Technologies, frameworks & tools I use in projects and work 🚀
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.15, rotateX: 10, rotateY: 10 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="relative flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 
                       rounded-2xl p-6 shadow-lg shadow-purple-500/20 border border-gray-700 
                       hover:shadow-yellow-400/30 cursor-pointer"
          >
            {skill.icon}
            <h3 className="mt-3 text-sm font-semibold text-gray-200">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
