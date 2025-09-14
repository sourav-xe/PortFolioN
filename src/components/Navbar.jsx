"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, Events, scrollSpy } from "react-scroll";
import LiquidEther from "../LiquidEther"; // adjust path

export default function Navbar() {
  const navItems = [
    { name: "Home", to: "home" },
    { name: "Experience", to: "experience" },
    { name: "Project", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Certificates", to: "certificates" },
    { name: "Contact", to: "contact" },
  ];

  const [active, setActive] = useState("Home");

  useEffect(() => {
    // Register react-scroll events
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    // Initialize scrollSpy so active section is detected
    scrollSpy.update();

    // On page load, check scroll position to set correct active section
    const handleInitialActive = () => {
      const scrollY = window.scrollY;
      let current = "Home";

      navItems.forEach((item) => {
        const el = document.getElementById(item.to);
        if (el) {
          const rect = el.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY - 100; // adjust offset
          if (scrollY >= offsetTop) {
            current = item.name;
          }
        }
      });

      setActive(current);
    };

    handleInitialActive(); // run once on load
    window.addEventListener("scroll", handleInitialActive);

    return () => {
      window.removeEventListener("scroll", handleInitialActive);
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <div className="relative bg-black overflow-hidden">
      {/* Background */}
      <LiquidEther
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />

      {/* Navbar */}
      <div className="fixed top-10 inset-x-0 flex justify-center space-x-4 z-[5000] pointer-events-auto">
        {navItems.map((item, idx) => {
          const isActive = active === item.name;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: -18 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.28, delay: idx * 0.04 }}
            >
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                onSetActive={() => setActive(item.name)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium cursor-pointer select-none transition-all duration-300
                  ${
                    isActive
                      ? "text-white font-semibold bg-white/10 border border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                      : "text-gray-300 hover:text-white"
                  }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
                )}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
