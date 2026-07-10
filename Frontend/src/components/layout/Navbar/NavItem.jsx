import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";

export default function NavItem({
  label,
  section,
  index,
  active = false,
  mobile = false,
  onClick,
}) {

  const handleClick = () => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    onClick?.();
  };

  // ----------------------------
  // Mobile Version
  // ----------------------------

  if (mobile) {
    return (
      <button
        onClick={handleClick}
        className="
          group
          flex
          w-full
          items-center
          gap-4
          rounded-xl
          px-4
          py-4
          text-left
          transition-all
          duration-300
          hover:bg-white/5
        "
      >
        <span
          className="
            font-mono
            text-xs
            tracking-[0.25em]
            text-primary
          "
        >
          {String(index).padStart(2, "0")}
        </span>

        <span
          className="
            text-lg
            font-semibold
            text-white
            transition-colors
            duration-300
            group-hover:text-primary
          "
        >
          {label}
        </span>
      </button>
    );
  }

  // ----------------------------
  // Desktop Version
  // ----------------------------

  return (
    <button
      onClick={handleClick}
      className={cn(
        "relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
        active
          ? "text-white"
          : "text-muted hover:text-white"
      )}
    >
      {active && (
        <motion.span
          layoutId="active-navbar-pill"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 35,
          }}
          className="
            absolute
            inset-0
            rounded-full
            border
            border-white/10
            bg-white/[0.06]
          "
        />
      )}

      <span
        className={cn(
          "relative font-mono text-[10px] tracking-[0.2em]",
          active
            ? "text-primary"
            : "text-white/30"
        )}
      >
        {String(index).padStart(2, "0")}
      </span>

      <span className="relative">
        {label}
      </span>
    </button>
  );
}