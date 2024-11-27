"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

type Props = {
  title: string;
  className: string;
};
export default function AnimatedTitle({ title, className }: Props) {
  const ref = useRef(null);
  useEffect(() => {
    const context = gsap.context(() => {
      const title = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "250 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });
      title.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0)",
        ease: "power2.inOut",
        duration: 1,
        stagger: 0.05,
      });
    }, ref);
    return () => context.revert();
  }, []);
  return (
    <div
      ref={ref}
      className={`flex flex-col gap-1 text-7xl uppercase leading-[.8] text-white sm:px-32 md:text-[6rem] ${className}`}
    >
      {title.split("<br/>").map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {item.split(" ").map((word, index) => (
            <span
              key={index}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
