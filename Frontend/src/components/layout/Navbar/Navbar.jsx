import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu } from 'lucide-react';

import Logo from './Logo';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

import { NAVIGATION } from '../../../config/navigation';

const NAV_WIDTH = 1220;
const NAV_WIDTH_SCROLLED = 800;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Mobile Drawer State
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
  });

  useEffect(() => {
    let previous = window.scrollY;

    const sections = NAVIGATION.map((item) => document.getElementById(item.to));

    const onScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 20);

      if (current < previous || current < 80) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      previous = current;

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (current >= top && current < bottom) {
          setActiveSection(section.id);
        }
      });
    };

    onScroll();

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent page scrolling while drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[9999] h-[4px] origin-left bg-primary"
      />

      {/* Floating Navbar */}
      <motion.div
        animate={{
          y: visible && !mobileOpen ? 0 : -100,
          opacity: visible && !mobileOpen ? 1 : 0,
        }}
        transition={{ duration: 0.35 }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <motion.header
          animate={{
            maxWidth: scrolled ? NAV_WIDTH_SCROLLED : NAV_WIDTH,
            paddingLeft: scrolled ? 18 : 28,
            paddingRight: scrolled ? 16 : 18,
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
            flex w-full items-center justify-between
            rounded-full
            border
            py-2.5
            transition-all
            duration-500

            border-white/10
            bg-white/[0.05]
            backdrop-blur-3xl
            shadow-[0_10px_50px_rgba(0,0,0,.25)]
          `}
        >
          {/* Logo */}
          <Logo compact={scrolled} />

          {/* Desktop Menu */}
          <DesktopMenu activeSection={activeSection} scrolled = {scrolled} />

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
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
              transition-all
              duration-300
              hover:border-primary/40
              hover:bg-white/[0.05]
              lg:hidden
            "
          >
            <Menu size={20} />
          </button>
        </motion.header>
      </motion.div>

      {/* Mobile Drawer */}
      <MobileMenu open={mobileOpen} setOpen={setMobileOpen} />
    </>
  );
}
