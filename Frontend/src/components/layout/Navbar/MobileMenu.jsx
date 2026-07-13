import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, X } from 'lucide-react';
import { createPortal } from 'react-dom';

import { NAVIGATION } from '../../../config/navigation';

import Logo from './Logo';
import NavItem from './NavItem';
import ResumeButton from './ResumeButton';
import HireButton from './HireButton';

export default function MobileMenu({ open, setOpen }) {
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeMenu}
            className="fixed inset-0 z-[9998] bg-black/75 backdrop-blur-md"
          />

          {/* Floating Panel */}
          <motion.aside
            initial={{
              opacity: 0,
              x: 120,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: 120,
              scale: 0.98,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              right-4
              top-4
              bottom-4
              z-[9999]
              flex
              w-[calc(100%-2rem)]
              max-w-[340px] sm:max-w-[360px]
              flex-col
              overflow-hidden
              rounded-[24px]
              border
              border-white/10
              bg-[#0B1018]/95
              backdrop-blur-3xl
              shadow-[0_30px_100px_rgba(0,0,0,.55)]
            "
          >
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-primary/15 blur-[90px]" />
              <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-violet-500/15 blur-[90px]" />
            </div>

            {/* Header */}
            <div className="relative border-b border-white/10 px-5 py-4">
              <div className="mb-4 flex items-center justify-between">
                <Logo />

                <button
                  onClick={closeMenu}
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
                    hover:rotate-90
                  "
                >
                  <X size={19} />
                </button>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-primary">
                    <Sparkles size={14} />

                    <span className="text-xs font-semibold uppercase tracking-[0.28em]">
                      Navigation
                    </span>
                  </div>

                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
                    Explore
                  </h2>

                  <p className="mt-2 max-w-xs text-xs leading-5 text-slate-400">
                    Browse my projects, services, resume and get in touch.
                  </p>
                </div>

                <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] tracking-widest text-slate-400">
                  ESC
                </div>
              </div>
            </div>

            {/* Navigation */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.15,
                  },
                },
              }}
              className="
                relative
                flex-1
                overflow-y-auto
                px-5
                py-5
              "
            >
              {NAVIGATION.map((item, index) => (
                <motion.button
                  key={item.id}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },
                    show: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  whileHover={{
                    x: 8,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  onClick={() => {
                    closeMenu();

                    setTimeout(() => {
                      document.getElementById(item.to)?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }, 250);
                  }}
                  className="
                    group
                    mb-2
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-white/8
                    bg-white/[0.02]
                    px-4 py-3
                    text-left
                    transition-all
                    duration-300
                    hover:border-primary/25
                    hover:bg-white/[0.05]
                  "
                >
                  <div className="flex items-center gap-5">
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        font-mono
                        text-xs
                        tracking-widest
                        text-primary
                      "
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {item.label}
                      </h3>

                      <p className="mt-0.5 text-xs text-slate-400">
                        Navigate to {item.label.toLowerCase()} section
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="
                      text-slate-500
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      group-hover:text-primary
                    "
                  />
                </motion.button>
              ))}
            </motion.div>

            {/* ---------- PART 2 CONTINUES FROM HERE ---------- */}

            {/* Footer */}
            <div className="relative border-t border-white/10 p-4">
              {/* Status Card */}
              <div
                className="
                  mb-5
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-3
                "
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="h-3 w-3 rounded-full bg-emerald-400" />

                    <div className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-emerald-400 opacity-70" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Available for freelance
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Open to full-time roles & exciting projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <ResumeButton
                  className="justify-center"
                  onClick={() => {
                    window.open('/resume.pdf', '_blank', 'noopener,noreferrer');

                    closeMenu();
                  }}
                />

                <HireButton
                  className="justify-center"
                  onClick={() => {
                    closeMenu();

                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }, 250);
                  }}
                />
              </div>

              {/* Bottom Text */}
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Deepak Raikwar
                  </p>

                  <p className="mt-1 text-sm text-slate-400 ">
                    Software Engineer
                  </p>
                </div>

                <div
                  className="
                    rounded-full
                    border
                    border-primary/20
                    bg-primary/10
                    px-3
                    py-1
                    text-xs
                    font-medium
                    text-primary
                  "
                >
                  v1.0
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
