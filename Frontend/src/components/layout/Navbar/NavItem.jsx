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
          py-5
          text-left
          transition-all
          duration-300
          hover:translate-x-2
        "
      >
        <span
          className="
            font-mono
            text-xs
            tracking-[0.25em]
            text-primary/60
            transition-colors
            duration-300
            group-hover:text-primary
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

  return (
    <button
      onClick={handleClick}
      className={cn(
        `
        group
        relative
        flex
        cursor-pointer
        items-center
        gap-1.5
        rounded-full
        px-3
        py-1.5
        text-[13px]
        md:gap-2
        md:px-3.5
        md:py-2
        md:text-sm
        lg:px-4
        font-medium
        transition-all
        duration-300
        hover:text-white
      `,
        active ? "text-white" : "text-muted"
      )}
    >
      {active && (
        <motion.span
          layoutId="navbar-pill"
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 30,
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
          `
            relative
            hidden
            font-mono
            text-[10px]
            tracking-[0.22em]
            transition-colors
            duration-300
            lg:inline
          `,
          active
            ? "text-primary"
            : "text-white/30 group-hover:text-primary"
        )}
      >
        {String(index).padStart(2, "0")}
      </span>

      <span className="relative whitespace-nowrap">
        {label}
      </span>

      {!active && (
        <motion.span
          initial={{
            scaleX: 0,
          }}
          whileHover={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            absolute
            bottom-1
            left-4
            right-4
            h-px
            origin-left
            bg-primary
          "
        />
      )}
    </button>
  );
}