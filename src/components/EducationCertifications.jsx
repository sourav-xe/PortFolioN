"use client";

import React from "react";
import { motion } from "framer-motion";
import Particles from "./ParticlesBg";
import Background from "./Background";

// ======================= Education Data =======================
const education = [
  {
    school: "Delhi University",
    degree: "Bachelor of Science",
    duration: "June 2022 – July 2025",
    location: "Delhi, India",
    grade: "CGPA: 7.5/9.5",
    logo: null,
  },
  {
    school: "IGNOU",
    degree: "Bachelor’s Degree of Computer Application",
    duration: "Jan 2023 – Jan 2026",
    location: "Delhi, India",
    grade: "Percentage: 72%",
    logo: null,
  },
];

// ======================= Certifications Data =======================
const certifications = [
  {
    title: "JavaScript Proficiency",
    issuer: "Google Drive",
    year: "2024",
    description:
      "Certified JavaScript Proficiency showcasing strong knowledge of core JS concepts and coding practices.",
    embed: "https://drive.google.com/file/d/1OKMDL0E2nrpjF-WHfOYM8w0KhWyTKGab/preview",
    type: "embed",
  },
  {
    title: "Software Engineering",
    issuer: "Google Drive",
    year: "2024",
    description:
      "Certification in Software Engineering demonstrating skills in designing, developing, and testing scalable applications.",
    embed: "https://drive.google.com/file/d/1nJ8HdjdTTKJZG2UhlzeO3tAqmh6N7h7b/preview",
    type: "embed",
  },
  {
    title: "Letter of Recommendation (LOR)",
    issuer: "AapOrigo",
    year: "2024",
    description:
      "Received LOR for AppOrigo intership .",
    badge: true,
    type: "badge",
  },
];

export default function EducationCertifications() {
  return (
    <section className="relative w-full py-24 px-6 z-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <Background />
      </div>
      <div className="absolute inset-0 -z-0">
        <Particles />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ================= Education ================= */}
        <div className="mb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="text-purple-400">Education</span>
          </h1>

          <div className="relative border-l border-gray-700 ml-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-12 ml-12"
              >
                {/* Timeline Icon */}
                <span className="absolute -left-6 flex items-center justify-center w-12 h-12 bg-black border border-purple-500 rounded-full shadow-lg overflow-hidden">
                  <span className="text-purple-400 font-bold">🎓</span>
                </span>

                {/* Card */}
                <div className="bg-gradient-to-r from-purple-900/40 to-black p-6 rounded-xl shadow-lg hover:shadow-purple-600/30 transition">
                  <h2 className="text-2xl font-bold text-purple-300">
                    {edu.school}
                  </h2>
                  <p className="text-lg font-semibold">{edu.degree}</p>
                  <p className="text-sm text-gray-400">
                    {edu.duration} • {edu.location}
                  </p>
                  <p className="text-sm text-gray-300 mt-2">{edu.grade}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= Certifications ================= */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="text-purple-400">Certifications</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                className="group relative bg-gradient-to-br from-purple-900/30 to-black/40
                          backdrop-blur-xl border border-purple-500/30
                          rounded-2xl p-6 shadow-lg
                          hover:shadow-purple-500/40 hover:border-purple-400
                          transition"
              >
                {/* If it's an embedded certificate */}
                {cert.type === "embed" && (
                  <div className="w-full h-56 bg-black/40 rounded-lg overflow-hidden mb-6 border border-purple-400/20">
                    <iframe
                      src={cert.embed}
                      className="w-full h-full rounded-lg"
                      title={cert.title}
                      allow="autoplay"
                    ></iframe>
                  </div>
                )}

                {/* If it's a badge certificate */}
                {cert.type === "badge" && (
                  <div className="w-full h-40 flex items-center justify-center mb-6">
                    <span className="px-6 py-3 text-lg font-semibold text-white bg-purple-600 rounded-full shadow-lg">
                      {cert.title}
                    </span>
                  </div>
                )}

                {/* Details */}
                <h2 className="text-xl font-bold text-purple-300 group-hover:text-white transition mb-2">
                  {cert.title}
                </h2>
                <p className="text-gray-300 font-medium">{cert.issuer}</p>
                <p className="text-sm text-gray-400">{cert.year}</p>

                {/* Description */}
                <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
