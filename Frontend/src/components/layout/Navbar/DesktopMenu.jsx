import { motion } from "framer-motion";

import NavItem from "./NavItem";
import ResumeButton from "./ResumeButton";
import HireButton from "./HireButton";

import { NAVIGATION } from "../../../config/navigation";

export default function DesktopMenu({ activeSection }) {
  const handleResumeDownload = () => {
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
  };

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
      className="hidden items-center gap-1 lg:flex"
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

      <div className="ml-3 flex items-center gap-2">
        <ResumeButton
          className="hidden lg:inline-flex"
          onClick={handleResumeDownload}
        />

        <HireButton
          className="hidden lg:inline-flex"
          onClick={handleHireClick}
        />
      </div>
    </motion.nav>
  );
}