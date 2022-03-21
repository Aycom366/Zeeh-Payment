import { Variants } from "framer-motion";
export const navVariants = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", delay: 0.2 },
  },
  exit: { opacity: 0, y: -20, transition: { ease: "easeInOut" } },
};

export const BannerVariantsText: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
