import React from "react";
import CountUp from "react-countup";

export default function IntroCard() {
  return (
    <div className="absolute right-8 top-1/3 max-w-xs bg-white/5 backdrop-blur-md border border-white/6 rounded-xl p-4 text-left z-20">
      <div className="flex items-center gap-3">
        <img src="/logo.jpg" alt="avatar" className="w-14 h-14 rounded-full object-cover border border-white/10" />
        <div>
          <div className="text-white font-semibold">Sourav Kumar</div>
          <div className="text-gray-300 text-sm">Turning ideas into digital experiences</div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="text-center">
          <div className="counter"><CountUp end={4} duration={2} />+</div>
          <div className="text-xs text-gray-300">Years</div>
        </div>
        <div className="text-center">
          <div className="counter"><CountUp end={18} duration={2} /></div>
          <div className="text-xs text-gray-300">Projects</div>
        </div>
        <div className="text-center">
          <div className="counter"><CountUp end={500} duration={2} /></div>
          <div className="text-xs text-gray-300">Cups</div>
        </div>
      </div>
    </div>
  );
}
