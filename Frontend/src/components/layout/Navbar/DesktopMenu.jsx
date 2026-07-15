import { motion } from "framer-motion";

import NavItem from "./NavItem";
import ResumeButton from "./ResumeButton";
import HireButton from "./HireButton";

import { NAVIGATION } from "../../../config/navigation";

export default function DesktopMenu({ activeSection, scrolled }) {

  const handleHireClick = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
      }}
      className="hidden items-center gap-0.5 md:flex lg:gap-1"
      aria-label="Primary Navigation"
    >
      {NAVIGATION.map((item, i) => (
        <NavItem
          key={item.id}
          mobile={false}
          index={i + 1}
          label={item.label}
          section={item.to}
          active={activeSection === item.to}
        />
      ))}

      <motion.div
        animate={{
          width: scrolled ? 0 : "auto",
          opacity: scrolled ? 0 : 1,
          marginLeft: scrolled ? 0 : 12,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-2 overflow-hidden"
      >
        <ResumeButton
          className="hidden lg:inline-flex whitespace-nowrap"
        />

        <HireButton
          className="hidden md:inline-flex whitespace-nowrap"
          onClick={handleHireClick}
        />
      </motion.div>
    </motion.nav>
  );
}