import AnimatedTitle from "../ui/AnimatedTitle";
import AboutImage from "../ui/AboutImage";
import Section from "../ui/Section";

export default function About() {
  return (
    <Section id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-xs">
          welcome to zentry
        </h2>
        <AnimatedTitle
          title="Disc<b>o</b>ver the world's
          <br/>l<b>a</b>rgest shared adventure"
          className="mt-5 !text-black text-center"
        />
        <div className="absolute bottom-[-90dvh] md:bottom-[-65dvh] lg:bottom-[-100dvh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular-web text-lg md:max-w-[34rem]">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>
      <AboutImage />
    </Section>
  );
}
