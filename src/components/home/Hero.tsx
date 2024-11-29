import Section from "../ui/Section";
import Button from "../ui/Button";
import { TiLocationArrow } from "react-icons/ti";
import VideoFrame from "../ui/VideoFrame";
import Videos from "../ui/Videos";

export default function Hero() {
  return (
    <Section id="home" className="relative h-dvh w-screen overflow-x-hidden">
      <VideoFrame>
        <Videos />
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>a</b>ming
        </h1>
        <div className=" absolute left-0 top-0 z-40 size-full">
          <div className=" mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer
              <br />
              Unleash the Play Economy
            </p>
            <Button
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              className="!bg-yellow-300 flex items-center justify-center gap-1"
            />
          </div>
        </div>
      </VideoFrame>
      <h1 className="special-font hero-heading absolute bottom-5 right-5  text-black">
        G<b>a</b>ming
      </h1>
    </Section>
  );
}
