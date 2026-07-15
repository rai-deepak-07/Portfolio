import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu } from 'lucide-react';

import Logo from './Logo';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

import { NAVIGATION } from '../../../config/navigation';

const NAV_WIDTH = 1220;
const NAV_WIDTH_SCROLLED = 880;

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

  // Show / hide on scroll direction + the "scrolled" pill state
  useEffect(() => {
    let previous = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 20);
      setVisible(current < previous || current < 80);

      previous = current;
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active-section detection via IntersectionObserver — reacts correctly
  // even after async data changes section heights, unlike a one-time
  // offsetTop calculation.
  useEffect(() => {
    const sections = NAVIGATION.map((item) => document.getElementById(item.to)).filter(Boolean);

    if (!sections.length) return;

    const visibleRatios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleRatios.set(entry.target.id, entry.intersectionRatio);
        });

        let topId = null;
        let topRatio = 0;

        visibleRatios.forEach((ratio, id) => {
          if (ratio > topRatio) {
            topRatio = ratio;
            topId = id;
          }
        });

        if (topId) setActiveSection(topId);
      },
      {
        rootMargin: '-110px 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
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
            py-2
            sm:py-2.5
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

          {/* Desktop / Tablet Menu */}
          <DesktopMenu activeSection={activeSection} scrolled={scrolled} />

          {/* Mobile Hamburger — only below the tablet nav breakpoint */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open Menu"
            className="
              flex
              h-9
              w-9
              sm:h-10
              sm:w-10
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
              md:hidden
            "
          >
            <Menu size={19} />
          </button>
        </motion.header>
      </motion.div>

      {/* Mobile Drawer */}
      <MobileMenu open={mobileOpen} setOpen={setMobileOpen} />
    </>
  );
}
