import BentoTilt from "./BentoTilt";
import ComingSoonButton from "./ComingSoonButton";

type Props = {
  src: string;
  title: React.ReactNode;
  description?: string;
  className: string;
};
export default function BentoCard({
  src,
  title,
  description,
  className,
}: Props) {
  return (
    <BentoTilt className={className}>
      <div className=" relative size-full">
        <video
          src={src}
          loop
          muted
          autoPlay
          className=" absolute left-0 top-0 size-full object-cover object-center"
        />
        <div className=" relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
          <div>
            <h2 className="uppercase md:text-6xl text-4xl font-black font-zentry">
              {title}
            </h2>
            {description && (
              <p className="mt-3 max-w-64 text-xs md:text-base">
                {description}
              </p>
            )}
          </div>

          <ComingSoonButton />
        </div>
      </div>
    </BentoTilt>
  );
}
