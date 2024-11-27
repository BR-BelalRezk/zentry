"use client";
import Image from "next/image";
import aboutImage from "@/assets/img/about.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function AboutImage() {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=1000 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to("#clip-image", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <div id="clip" className="h-dvh w-screen">
      <figure
        id="clip-image"
        className="[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] absolute left-1/2 top-0 z-20 h-[50vh] w-[50vw] origin-center -translate-x-1/2 overflow-hidden rounded-3xl"
      >
        <Image
          src={aboutImage}
          alt="about-image"
          className=" absolute top-0 left-0 size-full object-cover"
        />
      </figure>
    </div>
  );
}
