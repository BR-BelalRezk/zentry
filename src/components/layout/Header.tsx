"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/img/logo.png";
import Navbar from "./Navbar";
import ProductsButton from "./ProductsButton";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

export default function Header() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderInvisible, setIsHeaderInvisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { y } = useWindowScroll();
  useEffect(() => {
    if (lastScrollY === 0) {
      setIsHeaderInvisible(true);
      ref?.current?.classList.remove("floating-nav");
    } else if (y > lastScrollY) {
      setIsHeaderInvisible(false);
      ref?.current?.classList.add("floating-nav");
    } else if (y < lastScrollY) {
      setIsHeaderInvisible(true);
      ref?.current?.classList.add("floating-nav");
    }
    setLastScrollY(y);
  }, [lastScrollY, y]);
  useEffect(() => {
    gsap.to(ref.current, {
      y: isHeaderInvisible ? 0 : -100,
      opacity: isHeaderInvisible ? 1 : 0,
      duration: 0.3,
    });
  }, [isHeaderInvisible]);
  return (
    <header
      ref={ref}
      className="fixed inset-x-2 top-4 z-50 h-16 border-none transition-all duration-500 sm:inset-x-6"
    >
      <nav className=" absolute top-1/2 w-full -translate-y-1/2">
        <div className="flex size-full items-center justify-between p-4">
          <figure className="flex items-center gap-3 md:gap-7">
            <Image src={logo} alt="logo" className="w-10" />
            <ProductsButton className="hidden md:flex" />
          </figure>
          <Navbar />
        </div>
      </nav>
    </header>
  );
}
