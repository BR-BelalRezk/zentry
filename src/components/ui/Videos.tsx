"use client";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VideoPreview from "./VideoPreview";

export default function Videos() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const nxtVidRef = useRef<HTMLVideoElement>(null);

  const totalVids = 4;
  const upcomingVidIndex = (currentIndex % totalVids) + 1;
  const handleMiniVidClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVidIndex);
  };
  const getVidSrc = (index: number) => `/videos/hero-${index}.mp4`;

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#nxt-vid", { visibility: "visible" });
        gsap.to("#nxt-vid", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nxtVidRef?.current?.play?.() as void,
        });
        gsap.from("#current-vid", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  return (
    <div>
      <div className="mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
        <VideoPreview>
          <div
            onClick={handleMiniVidClick}
            className=" origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
          >
            <video
              className="size-64 origin-center scale-150 object-center object-cover"
              id="current-vid"
              loop
              muted
              src={getVidSrc(upcomingVidIndex)}
              ref={nxtVidRef}
            />
          </div>
        </VideoPreview>
      </div>
      <video
        className=" absolute-center invisible z-20 size-64 object-cover object-center"
        id="nxt-vid"
        ref={nxtVidRef}
        src={getVidSrc(currentIndex)}
        loop
        muted
      />
      <video
        autoPlay
        loop
        muted
        className=" absolute left-0 top-0 size-full object-cover object-center"
        src={getVidSrc(currentIndex === totalVids - 1 ? 1 : currentIndex)}
      />
    </div>
  );
}
