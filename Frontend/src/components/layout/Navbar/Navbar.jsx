import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import ResumeButton from "./ResumeButton";
import HireButton from "./HireButton";
import MobileMenu from "./MobileMenu";

import { NAVIGATION } from "../../../config/navigation";

const NAV_WIDTH = 1180;
const NAV_WIDTH_SCROLLED = 760;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const lastScroll = useRef(0);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  // ------------------------------------------
  // Navbar show/hide + active section
  // ------------------------------------------

  useEffect(() => {
    const sections = NAVIGATION.map((item) =>
      document.getElementById(item.to)
    ).filter(Boolean);

    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 25);

      // Always visible near top
      if (current < 80) {
        setVisible(true);
      } else {
        const delta = current - lastScroll.current;

        // Hide only if scrolling down enough
        if (delta > 8) {
          setVisible(false);
        }

        // Show immediately on scroll up
        if (delta < -8) {
          setVisible(true);
        }
      }

      lastScroll.current = current;

      // Active section detection
      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 140 && rect.bottom >= 140) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ------------------------------------------
  // Actions
  // ------------------------------------------

  const handleResumeDownload = () => {
    window.open(
      "/resume.pdf",
      "_blank",
      "noopener,noreferrer"
    );
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
    <>
      {/* Scroll Progress */}

      <motion.div
        style={{ scaleX }}
        className="
          fixed
          left-0
          top-0
          z-[999]
          h-[2px]
          w-full
          origin-left
          bg-primary
        "
      />

      {/* Navbar */}

      <motion.div
        animate={{
          y: visible ? 0 : -120,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          inset-x-0
          top-4
          z-50
          flex
          justify-center
          px-4
        "
      >
        <motion.header
          animate={{
            maxWidth: scrolled
              ? NAV_WIDTH_SCROLLED
              : NAV_WIDTH,

            paddingLeft: scrolled ? 18 : 28,

            paddingRight: scrolled ? 18 : 18,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
            flex
            w-full
            items-center
            justify-between
            rounded-full
            border
            py-2.5

            transition-all
            duration-300

            ${
              scrolled
                ? `
                border-white/10
                bg-background/80
                backdrop-blur-2xl
                shadow-[0_15px_45px_rgba(0,0,0,.35)]
              `
                : `
                border-white/5
                bg-white/[0.03]
                backdrop-blur-md
              `
            }
          `}
        >
          {/* Logo */}

          <Logo compact={scrolled} />

          {/* Desktop Menu */}

          <DesktopMenu activeSection={activeSection} />

          {/* Right Side */}

          <div className="flex items-center gap-2">
            {/* Desktop Only */}

            <ResumeButton
              onClick={handleResumeDownload}
              className="hidden lg:inline-flex"
            />

            <HireButton
              onClick={handleHireClick}
              className="hidden lg:inline-flex"
            />

            {/* Mobile */}

            <MobileMenu />
          </div>
        </motion.header>
      </motion.div>
    </>
  );
}