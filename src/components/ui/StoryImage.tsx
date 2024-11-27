"use client";

import Image from "next/image";
import story from "@/assets/img/entrance.webp";
import { useRef } from "react";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
export default function StoryImage() {
  const ref = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const element = ref.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = ref.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };
  return (
    <figure className="story-img-container">
      <div className="story-img-mask">
        <div className="story-img-content">
          <Image
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseLeave}
            onMouseEnter={handleMouseLeave}
            src={story}
            alt="entrance.webp"
            className="object-contain"
          />
        </div>
      </div>
      <RoundedCorners />
    </figure>
  );
}
