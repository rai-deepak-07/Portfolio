import { motion } from "framer-motion";

import Container from "../../ui/Container";

import DesktopMenu from "./DesktopMenu";
import HireButton from "./HireButton";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import ResumeButton from "./ResumeButton";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        fixed
        top-0
        left-0
        z-50
        w-full
        border-b
        border-slate-200/30
        bg-white/80
        backdrop-blur-xl
        dark:border-slate-800/30
        dark:bg-slate-950/80
      "
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <DesktopMenu />

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <ResumeButton />

          <HireButton />

          <MobileMenu />
        </div>
      </Container>
    </motion.header>
  );
}