"use client";
import { navbarItems } from "@/constants";
// compound components

import { AnimatePresence, motion, Variants } from "framer-motion";
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type MenuContextType = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};
type ChildrenAndClassName = {
  children: React.ReactNode;
  className: string;
};
interface AnimatedElements extends ChildrenAndClassName {
  variants: Variants;
}
interface listItem extends AnimatedElements {
  onClick?: () => void;
}

const MenuContext = createContext<MenuContextType | null>(null);

const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("use the useMenu hook inside the Menu context component");
  }
  return context;
};

const Menu = ({ children, className }: ChildrenAndClassName) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (window.screen.width >= 768) {
      setToggle(true);
    }
  }, []);
  const value = { toggle, setToggle };
  return (
    <MenuContext.Provider value={value}>
      <div className={className}>{children}</div>
    </MenuContext.Provider>
  );
};

const MenuToggleButton = ({
  children,
  className,
  variants,
}: {
  children: React.ReactElement;
  className: string;
  variants: Variants;
}) => {
  const { toggle, setToggle } = useMenu();
  const handleToggle = () => setToggle((prevState) => !prevState);
  return (
    <motion.button
      variants={variants}
      initial={"close"}
      animate={toggle ? "open" : "close"}
      className={className}
      onClick={handleToggle}
    >
      {cloneElement(children, { toggle })}
    </motion.button>
  );
};

const MenuList = ({ children, className, variants }: AnimatedElements) => {
  const { toggle } = useMenu();
  return (
    <AnimatePresence mode="wait">
      {toggle && (
        <motion.ul
          initial={"close"}
          animate={"open"}
          exit={"close"}
          variants={variants}
          className={className}
        >
          {children}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

const MenuListItem = ({ children, className, variants, onClick }: listItem) => {
  return (
    <motion.li onClick={onClick} className={className} variants={variants}>
      {children}
    </motion.li>
  );
};

export { Menu, MenuToggleButton, MenuList, MenuListItem };
