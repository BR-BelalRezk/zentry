import Hamburger from "./Hamburger";
import { Menu, MenuList, MenuToggleButton } from "./Menu";
import { transition } from "@/constants";
import NavbarItems from "./NavbarItems";

export default function Navbar() {
  return (
    <Menu className=" relative">
      <MenuToggleButton
        variants={{
          open: { translateX: -15, translateY: 10, transition: transition },
          close: { translateX: 0, translateY: 0, transition: transition },
        }}
        className="flex flex-col size-9 md:hidden items-center justify-center gap-1 bg-white relative z-50 rounded-full"
      >
        <Hamburger />
      </MenuToggleButton>
      <MenuList
        variants={{
          open: {
            width: 225,
            height: 275,
            transition: {
              ...transition,
              delayChildren: 0.75,
              staggerChildren: 0.05,
            },
          },
          close: { width: 36, height: 36, transition: transition },
        }}
        className=" absolute top-0 right-0 md:hidden bg-white rounded-3xl flex items-start justify-center flex-col gap-2.5 px-3"
      >
        <NavbarItems layoutId="mobile" />
      </MenuList>
      <MenuList
        variants={{
          open: {
            transition: {
              ...transition,
              delayChildren: 0.75,
              staggerChildren: 0.05,
            },
          },
          close: { transition: transition },
        }}
        className=" hidden  md:flex items-start justify-center"
      >
        <NavbarItems layoutId="desktop" />
      </MenuList>
    </Menu>
  );
}
