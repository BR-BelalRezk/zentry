import { useEffect, useRef, useState } from "react";
export default function AudioButton() {
  const [play, setPLay] = useState(false);
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLAudioElement>(null);
  const toggleAudio = () => {
    setPLay((prevState) => !prevState);
    setActive((prevState) => !prevState);
  };
  useEffect(() => {
    if (play) {
      ref?.current?.play();
    } else {
      ref?.current?.pause();
    }
  }, [play]);
  return (
    <button
      onClick={toggleAudio}
      className="ml-10 flex items-center space-x-0.5"
    >
      <audio loop src="/audio/loop.mp3" ref={ref} className="hidden" />
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className={`indicator-line ${active ? "active" : ""}`}
          style={{ animationDelay: `${(index + 1) * 0.1}s` }}
        />
      ))}
    </button>
  );
}
