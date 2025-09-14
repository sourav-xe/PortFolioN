import React, { useEffect, useRef } from "react";

export default function StarfieldWithLines({ starCount = 120 }) {
  const ref = useRef(null);
  const pointer = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    let raf;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.2,
        alpha: Math.random() * 0.9 + 0.1,
        driftX: (Math.random() - 0.5) * 0.2,
        driftY: (Math.random() - 0.5) * 0.2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // draw stars
      for (const s of stars) {
        s.x += s.driftX;
        s.y += s.driftY;
        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;
        if (s.y < 0) s.y = canvas.height;
        if (s.y > canvas.height) s.y = 0;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.fill();
      }

      // draw lines to nearby stars when pointer active
      if (pointer.current.active) {
        const px = pointer.current.x;
        const py = pointer.current.y;
        ctx.strokeStyle = "rgba(160,160,255,0.18)";
        ctx.lineWidth = 0.7;
        for (const s of stars) {
          const dx = s.x - px;
          const dy = s.y - py;
          const dist = Math.hypot(dx, dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(s.x, s.y);
            ctx.stroke();
          }
        }
      } else {
        // optional: small lines between close stars to feel constellations
        ctx.strokeStyle = "rgba(120,120,160,0.03)";
        ctx.lineWidth = 0.4;
        for (let i = 0; i < stars.length; i++) {
          for (let j = i + 1; j < stars.length; j++) {
            const a = stars[i];
            const b = stars[j];
            const d = Math.hypot(a.x - b.x, a.y - b.y);
            if (d < 80) {
              ctx.globalAlpha = 0.02;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
        ctx.globalAlpha = 1;
      }

      raf = requestAnimationFrame(draw);
    };

    const handlePointer = (e) => {
      pointer.current.active = true;
      pointer.current.x = e.clientX;
      pointer.current.y = e.clientY;
    };
    const handleLeave = () => {
      pointer.current.active = false;
      pointer.current.x = -9999;
      pointer.current.y = -9999;
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointer);
    window.addEventListener("pointerleave", handleLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, [starCount]);

  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        background: "transparent",
      }}
    />
  );
}
