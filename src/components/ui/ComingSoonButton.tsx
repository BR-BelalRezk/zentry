"use client";

import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

export default function ComingSoonButton() {
      const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
      const [hoverOpacity, setHoverOpacity] = useState(0);
      const ref = useRef<HTMLDivElement>(null);

      const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        setCursorPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      };

      const handleMouseEnter = () => setHoverOpacity(1);
      const handleMouseLeave = () => setHoverOpacity(0);
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="border border-white/20 relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
    >
      {/* Radial gradient hover effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity: hoverOpacity,
          background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
        }}
      />
      <TiLocationArrow className="relative z-20" />
      <p className="relative z-20">coming soon</p>
    </div>
  );
}
