import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";

export default function Logo({ compact = false }) {
  return (
    <Link
      to="/"
      aria-label="Deepak Raikwar Portfolio"
      className="group flex items-center gap-3 select-none"
    >
      <motion.div
        whileHover={{
          rotate: 360,
          scale: 1.08,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="
          relative
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-gradient-to-br
          from-primary/20
          to-primary/5
          text-white
          font-bold
          shadow-lg
          backdrop-blur-xl
          overflow-hidden
        "
      >
        <span className="relative z-10">DR</span>

        <span
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-primary/20
            to-transparent
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />
      </motion.div>

      <motion.div
        animate={{
          opacity: 1,
          x: 0,
        }}
        className={cn(
          "hidden flex-col leading-none sm:flex",
          compact && "sm:hidden"
        )}
      >
        <span className="text-base font-bold tracking-tight text-white">
          Deepak Raikwar
        </span>

        <span className="mt-1 text-[10px] uppercase tracking-[0.28em] text-primary">
          Software Engineer
        </span>
      </motion.div>
    </Link>
  );
}