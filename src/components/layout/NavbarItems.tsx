import { navbarItems } from "@/constants";
import { MenuListItem } from "./Menu";
import Link from "next/link";
import ProductsButton from "./ProductsButton";
import AudioButton from "./AudioButton";
import { useActiveSection } from "@/context/ActiveSection";
import Active from "./Active";

export default function NavbarItems({ layoutId }: { layoutId: string }) {
  const { activeSection, setActiveSection } = useActiveSection();
  return (
    <>
      {navbarItems.map((item) => (
        <MenuListItem
          onClick={() => setActiveSection(item)}
          key={item}
          variants={{
            open: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 250, damping: 25 },
            },
            close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
          }}
          className={`relative md:ms-10 md:px-3 md:py-1 flex items-center  justify-between w-full md:w-auto font-general text-xs uppercase cursor-pointer ${
            activeSection === item ? "md:text-black" : "md:text-blue-50 "
          }`}
        >
          <Link href={`#${item}`}>{item}</Link>
          {activeSection === item && <Active layoutId={layoutId} />}
        </MenuListItem>
      ))}
      <MenuListItem
        className="self-center flex items-center justify-center"
        variants={{
          open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 250, damping: 25 },
          },
          close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
        }}
      >
        <ProductsButton className="md:hidden flex !bg-black !text-white" />
        <AudioButton />
      </MenuListItem>
    </>
  );
}
