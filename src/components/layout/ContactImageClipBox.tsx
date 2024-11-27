import Image, { StaticImageData } from "next/image";

export default function ContactImageClipBox({ src , className }: {className:string, src: StaticImageData }) {
  return (
    <figure className={className}>
      <Image src={src} alt="contact-1" />
    </figure>
  );
}
