import { motion } from "framer-motion";

export default function Active({ layoutId }: { layoutId: string }) {
  return (
    <motion.span
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      layoutId={layoutId}
      className="size-3 rounded-full bg-black md:size-auto md:absolute md:inset-0 md:bg-white -z-10"
    />
  );
}
