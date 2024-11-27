import Section from "../ui/Section";
import contact_1 from "@/assets/img/contact-1.webp";
import contact_2 from "@/assets/img/contact-2.webp";
import ContactImageClipBox from "../layout/ContactImageClipBox";
import swordPartial from "@/assets/img/swordman-partial.webp";
import sword from "@/assets/img/swordman.webp";
import Button from "../ui/Button";
export default function Contact() {
  return (
    <Section id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className=" relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className=" absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ContactImageClipBox src={contact_1} className="contact-cli-path-1" />
          <ContactImageClipBox
            src={contact_2}
            className="contact-cli-path-2 lg:translate-y-40  translate-y-60"
          />
        </div>
        <div className=" absolute -top-40  left-20 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80 w-72 ">
          <ContactImageClipBox
            src={swordPartial}
            className=" absolute scale-125"
          />
          <ContactImageClipBox
            src={sword}
            className=" sword-man-clip-path md:scale-125"
          />
        </div>
        <div className=" flex flex-col items-center text-center">
          <p className="font-general text-xs uppercase">join zentry</p>
          <p className="special-font relative z-50 font-zentry mt-10 w-full text-5xl leading-[0.9] md:text-8xl">
            let&apos;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t
            <b>o</b>gether.
          </p>
          <Button title="contact us" className="mt-10 cursor-pointer" />
        </div>
      </div>
    </Section>
  );
}
