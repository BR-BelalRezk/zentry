"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function VideoFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  useGSAP(() => {
    gsap.set("#vid-frame", {
      clipPath: "polygon(14% 0px, 72% 0px, 88% 90%, 0px 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#vid-frame", {
      clipPath: "polygon(0% 0px, 100% 0px, 100% 100%, 0px 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#vid-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });
  return (
    <div
      id="vid-frame"
      className=" relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
    >
      {children}
    </div>
  );
}
