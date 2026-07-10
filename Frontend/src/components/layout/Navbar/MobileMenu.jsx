import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

import Logo from "./Logo";
import NavItem from "./NavItem";
import ResumeButton from "./ResumeButton";
import HireButton from "./HireButton";

import { NAVIGATION } from "../../../config/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  // -----------------------------
  // Lock body scroll
  // -----------------------------
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (open) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.touchAction = "none";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.touchAction = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.touchAction = "";
    };
  }, [open]);

  // -----------------------------
  // Close on ESC
  // -----------------------------
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [closeMenu]);

  // -----------------------------
  // Close when screen becomes desktop
  // -----------------------------
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, [closeMenu]);

  // -----------------------------
  // Close on route change
  // -----------------------------
  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  return (
    <>
      {/* Mobile Toggle */}

      <motion.button
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setOpen(true)}
        aria-label="Open Menu"
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-primary/40
          lg:hidden
        "
      >
        <Menu size={20} />
      </motion.button>

      <AnimatePresence mode="wait">
        {open && (
          <>
            {/* Backdrop */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              className="
                fixed
                inset-0
                z-[100]
                bg-black/70
                backdrop-blur-md
              "
            />

            {/* Drawer */}

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed
                top-0
                right-0
                z-[101]
                flex
                h-screen
                w-full
                max-w-sm
                flex-col
                border-l
                border-white/10
                bg-background
                shadow-2xl
              "
            >
              {/* Header */}

              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

                <Logo />

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ rotate: 90 }}
                  onClick={closeMenu}
                  aria-label="Close Menu"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    transition-colors
                    duration-300
                    hover:border-primary/40
                  "
                >
                  <X size={20} />
                </motion.button>

              </div>


                        {/* Navigation */}

              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.06,
                      delayChildren: 0.1,
                    },
                  },
                }}
                className="
                  flex-1
                  overflow-y-auto
                  px-6
                  py-4
                "
              >
                {NAVIGATION.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: 30,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.35,
                        },
                      },
                    }}
                  >
                    <NavItem
                      mobile
                      index={index + 1}
                      label={item.label}
                      section={item.to}
                      onClick={closeMenu}
                    />
                  </motion.div>
                ))}
              </motion.nav>

              {/* Footer */}

              <div
                className="
                  border-t
                  border-white/10
                  p-6
                  space-y-3
                  bg-background/80
                  backdrop-blur-xl
                "
              >
                <ResumeButton
                  className="w-full justify-center"
                  onClick={() => {
                    window.open(
                      "/resume.pdf",
                      "_blank",
                      "noopener,noreferrer"
                    );

                    closeMenu();
                  }}
                />

                <HireButton
                  className="w-full justify-center"
                  onClick={() => {
                    closeMenu();

                    const section =
                      document.getElementById("contact");

                    if (section) {
                      section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}