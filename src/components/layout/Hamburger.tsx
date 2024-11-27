"use client";
import { transition } from "@/constants";
import { motion } from "framer-motion";
export default function Hamburger({ toggle }: { toggle?: boolean }) {
  const span_1 = toggle ? { translateY: 3, rotate: 45 } : {};
  const span_2 = toggle ? { translateY: -3, rotate: -45 } : {};
  return (
    <>
      {Array.from({ length: 2 }).map((_, index) => (
        <motion.span
          animate={index === 0 ? span_1 : span_2}
          key={index}
          transition={transition}
          className="h-0.5 w-5 rounded-full bg-black"
        />
      ))}
    </>
  );
}
