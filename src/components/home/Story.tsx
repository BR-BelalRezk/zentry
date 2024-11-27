import AnimatedTitle from "../ui/AnimatedTitle";
import Button from "../ui/Button";
import Section from "../ui/Section";
import StoryImage from "../ui/StoryImage";

export default function Story() {
  return (
    <Section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <h2 className="font-general text-sm uppercase md:text-xs">
          the multiversal ip world
        </h2>
        <div className=" relative size-full">
          <AnimatedTitle
            className="mt-5 pointer-events-none mix-blend-difference relative z-10"
            title="the st<b>0</b>ry of
            <br/>a hidden real<b>m</b>"
          />
          <StoryImage />
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>
            <Button
              id="realm-button"
              title="discover prologue"
              className="mt-5"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
