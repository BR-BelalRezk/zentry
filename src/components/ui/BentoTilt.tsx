"use client";

import { useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className: string;
};
export default function BentoTilt({ className, children }: Props) {
  const [transform, setTransform] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const tilt_x = (y - 0.5) * 5;
    const tilt_y = (x - 0.5) * -5;
    const newTransform = `perspective(700px) rotateX(${tilt_x}deg) rotateY(${tilt_y}deg) scale3d(0.95, 0.95, 0.95)`;
    setTransform(newTransform);
  };
  const handleMouseLeave = () => {
    setTransform("");
  };
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transform }}
    >
      {children}
    </div>
  );
}
