import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";

export const navbarItems = [
  "home",
  "about",
  "features",
  "story",
  "contact",
] as const;

export const transition = {
  duration: 0.75,
  type: "tween",
  ease: [0.76, 0, 0.24, 1],
} as const;

export const footerLinks = [FaDiscord,FaTwitter , FaGithub , FaTwitch]