import React from "react";
import LiquidEther from "../LiquidEther";

export default function Background() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        inset: 0,
        zIndex: 0,
        background: "transparent",  // 👈 make sure canvas isn’t filled black
        pointerEvents: "none",      // let mouse pass through
      }}
      className="z-0"
    >
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
    </div>
  );
}
