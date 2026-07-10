import { motion } from "framer-motion";
import NavItem from "./NavItem";
import { NAVIGATION } from "../../../config/navigation";

export default function DesktopMenu({ activeSection }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="hidden lg:flex items-center gap-1"
      aria-label="Primary Navigation"
    >
      {NAVIGATION.map((item, index) => (
        <NavItem
          key={item.id}
          index={index + 1}
          label={item.label}
          section={item.to}
          active={activeSection === item.to}
        />
      ))}
    </motion.nav>
  );
}