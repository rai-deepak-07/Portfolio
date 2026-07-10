import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const Card = forwardRef(
  (
    {
      children,
      className,
      hover = true,
      glass = true,
      padding = "p-6",
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        whileHover={
          hover
            ? {
                y: -8,
                transition: {
                  duration: 0.25,
                },
              }
            : undefined
        }
        className={cn(
          "relative overflow-hidden rounded-3xl",

          glass
            ? "border border-white/10 bg-white/5 backdrop-blur-xl"
            : "border border-white/10 bg-card",

          "transition-all duration-300",

          hover &&
            "hover:border-primary/40 hover:shadow-[0_20px_60px_rgba(91,140,255,.15)]",

          padding,

          className
        )}
        {...props}
      >
        {/* Gradient Overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
            bg-gradient-to-br
            from-primary/10
            via-transparent
            to-secondary/10
          "
        />

        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export default Card;