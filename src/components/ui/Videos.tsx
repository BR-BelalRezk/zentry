"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import { VideoPreview } from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

export default function Videos() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const totalVideos = 4;
  const upcomingVideo = (currentIndex % totalVideos) + 1;
  const nextVdRef = useRef<HTMLVideoElement>(null);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideo);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdRef?.current?.play() as void,
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  const getVideoSrc = (index: number) => `videos/hero-${index}.mp4`;

  return (
    <>
      <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
        <VideoPreview onClick={handleMiniVdClick}>
          <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="current-video"
            className="size-64 origin-center scale-150 object-cover object-center"
          />
        </VideoPreview>
      </div>

      <video
        ref={nextVdRef}
        src={getVideoSrc(currentIndex)}
        loop
        muted
        id="next-video"
        className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
      />
      <video
        src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
        autoPlay
        loop
        muted
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
    </>
  );
}
