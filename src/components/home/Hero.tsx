import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useState } from "react";

import Button from "../ui/Button";
import Section from "../ui/Section";
import VideoFrame from "../ui/VideoFrame";
import Videos from "../ui/Videos";

export default function Hero() {
  return (
    <Section id="home" className="relative h-dvh w-screen overflow-x-hidden">
      <VideoFrame>
        <Videos />

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>A</b>MING
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>

            <Button
              id="watch-trailer"
              title="Watch trailer"
              leftIcon={<TiLocationArrow />}
              className="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </VideoFrame>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        G<b>A</b>MING
      </h1>
    </Section>
  );
}
