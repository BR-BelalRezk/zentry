"use client";

import { navbarItems } from "@/constants";
import { createContext, useContext, useState } from "react";

type ActiveSections = (typeof navbarItems)[number];
type ActiveSectionContextType = {
  activeSection: ActiveSections;
  setActiveSection: React.Dispatch<React.SetStateAction<ActiveSections>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<ActiveSections>("home");
  const value = { activeSection, setActiveSection };
  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "use the useActiveSection inside the ActiveSection context component"
    );
  }
  return context;
};
