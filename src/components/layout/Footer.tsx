import { footerLinks } from "@/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:gap-0 px-4 md:flex-row">
        <pre className="text-center text-sm font-light md:text-left">
          &copy;Nova 2024. All rights reserved
        </pre>
        <ul className="flex justify-center gap-4 items-center  md:justify-start">
          {footerLinks.map((Item, index) => (
            <li
              key={index}
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              <Link href={"#"}>
                <Item />
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="#"
          className="text-center text-sm hover:underline md:text-right duration-500"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
