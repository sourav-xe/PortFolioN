"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link, Events, scrollSpy } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import LiquidEther from "../LiquidEther"; // adjust path

// ✅ Nav Item (with 3D tilt for desktop)
function NavItem({ item, idx, isActive, setActive }) {
  const x = useMotionValue(0);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  return (
    <motion.div
      style={{ perspective: 1000 }}
      initial={{ opacity: 0, y: -18 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.28, delay: idx * 0.04 }}
      className="hidden md:block" // hide on mobile
    >
      <motion.div
        style={{ rotateY }}
        onMouseMove={(e) => {
          const bounds = e.currentTarget.getBoundingClientRect();
          const xPos = e.clientX - bounds.left - bounds.width / 2;
          x.set(xPos);
        }}
        onMouseLeave={() => x.set(0)}
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
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function Navbar() {
  const navItems = [
    { name: "Home", to: "home" },
    { name: "Experience", to: "experience" },
    { name: "Project", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Skill", to: "skill" },
    { name: "Contact", to: "contact" },
  ];

  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); // sidebar toggle

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();

    const handleInitialActive = () => {
      const scrollY = window.scrollY;
      let current = "Home";

      navItems.forEach((item) => {
        const el = document.getElementById(item.to);
        if (el) {
          const rect = el.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY - 100;
          if (scrollY >= offsetTop) {
            current = item.name;
          }
        }
      });

      setActive(current);
    };

    handleInitialActive();
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

      {/* Desktop Navbar */}
      <div className="fixed top-10 inset-x-0 hidden md:flex justify-center space-x-4 z-[5000] pointer-events-auto">
        {navItems.map((item, idx) => (
          <NavItem
            key={idx}
            item={item}
            idx={idx}
            isActive={active === item.name}
            setActive={setActive}
          />
        ))}
      </div>

      {/* Mobile Navbar - Hamburger */}
      <div className="fixed top-5 left-5 z-[6000] md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-3xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-black/95 backdrop-blur-md z-[5500] p-6 flex flex-col space-y-6 md:hidden"
      >
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.to}
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            onClick={() => setIsOpen(false)}
            onSetActive={() => setActive(item.name)}
            className={`block text-lg font-medium cursor-pointer transition-all
              ${
                active === item.name
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
          >
            {item.name}
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
