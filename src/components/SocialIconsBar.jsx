import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SocialIconsBar() {
  const items = [
    { Icon: FaGithub, href: "https://github.com/your" },
    { Icon: FaLinkedin, href: "https://linkedin.com/in/your" },
    { Icon: FaTwitter, href: "https://twitter.com/your" },
  ];

  return (
    <div className="flex items-center justify-center gap-6 mt-6 z-30">
      {items.map((it, idx) => (
        <a
          key={idx}
          href={it.href}
          target="_blank"
          rel="noreferrer"
          className="relative group w-10 h-10 flex items-center justify-center rounded-full border border-white/10"
        >
          <it.Icon className="text-white/90" />
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ boxShadow: "0 0 24px rgba(120,90,255,0.28)" }} />
        </a>
      ))}
    </div>
  );
}
