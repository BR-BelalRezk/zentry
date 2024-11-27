"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function VideoFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div
      id="video-frame"
      className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
    >
      {children}
    </div>
  );
}
