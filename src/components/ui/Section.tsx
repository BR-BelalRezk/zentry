"use client";

import { navbarItems } from "@/constants";
import { useActiveSection } from "@/context/ActiveSection";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className: string;
  id: (typeof navbarItems)[number];
};
export default function Section({ className, children, id }: Props) {
  const { setActiveSection } = useActiveSection();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  useEffect(() => {
    if (isInView) {
      setActiveSection(id);
    }
  }, [id, isInView]);
  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
}
