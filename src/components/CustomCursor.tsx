import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });

      // ✅ Detect hover over links, buttons, etc.
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest(".hover-target")
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // 🎯 Smooth outer ring movement
  useEffect(() => {
    let raf: number;

    const smoothMove = () => {
      setRing((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.1, // ✅ Faster & smoother
        y: prev.y + (mouse.y - prev.y) * 0.1,
      }));
      raf = requestAnimationFrame(smoothMove);
    };

    smoothMove();
    return () => cancelAnimationFrame(raf);
  }, [mouse]);

  return (
    <>
      {/* 🔵 Inner dot (snappy) */}
      <div
        style={{
          position: "fixed",
          top: mouse.y,
          left: mouse.x,
          width: "8px",
          height: "8px",
          background: hovering ? "#8b5cf6" : "#06b6d4",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform", // ✅ GPU acceleration
          transition: "background 0.2s ease-out",
        }}
      ></div>

      {/* 🔵 Outer ring (smooth follow) */}
      <div
        style={{
          position: "fixed",
          top: ring.y,
          left: ring.x,
          width: hovering ? "50px" : "35px",
          height: hovering ? "50px" : "35px",
          border: `2px solid ${
            hovering ? "rgba(139,92,246,0.7)" : "rgba(6,182,212,0.6)"
          }`,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9998,
          willChange: "transform", // ✅ GPU acceleration
          boxShadow: hovering
            ? "0 0 25px rgba(139,92,246,0.8)"
            : "0 0 18px rgba(6,182,212,0.6)",
          transition:
            "width 0.2s ease-out, height 0.2s ease-out, border 0.2s ease-out, box-shadow 0.2s ease-out",
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
