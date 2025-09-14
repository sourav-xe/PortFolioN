import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function TypewriterSubtitle({ words = ["FullStack Developer", "Software Developer", "UI/UX Developer"] }) {
  return (
    <div className="text-gray-300 text-lg md:text-xl">
      <span className="mr-2">I am a</span>
      <span className="text-white font-semibold">
        <Typewriter
          words={words}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={40}
          delaySpeed={2000}
        />
      </span>
    </div>
  );
}
