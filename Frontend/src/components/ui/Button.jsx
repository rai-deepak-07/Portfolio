import { forwardRef } from "react";
import { motion } from "framer-motion";

const variants = {
  primary: `
    bg-gradient-to-b
    from-primary
    to-[#3B6DF6]
    text-white
    border border-primary/30
    shadow-[0_10px_35px_rgba(79,124,255,0.30)]
    hover:shadow-[0_14px_45px_rgba(79,124,255,0.45)]
    hover:brightness-105
  `,

  secondary: `
    bg-[#171A24]
    text-white
    border border-white/10
    hover:bg-[#1E2230]
    hover:border-primary/30
    shadow-[0_8px_25px_rgba(0,0,0,0.25)]
  `,

  outline: `
    bg-transparent
    text-white
    border border-white/12
    hover:bg-white/[0.04]
    hover:border-primary/40
    hover:text-white
  `,

  ghost: `
    bg-transparent
    text-slate-300
    border border-transparent
    hover:bg-white/[0.04]
    hover:text-white
  `,

  success: `
    bg-[#0F2E24]
    text-[#7EE7B7]
    border border-[#1B5B45]
    hover:bg-[#164434]
    hover:border-[#2E8B6A]
  `,

  warning: `
    bg-[#33240D]
    text-[#F6C768]
    border border-[#6B4A16]
    hover:bg-[#453014]
    hover:border-[#A66A1F]
  `,

  danger: `
    bg-[#3A151A]
    text-[#FF9AA6]
    border border-[#6A2430]
    hover:bg-[#4B1C22]
    hover:border-[#A43A4A]
  `,

  link: `
    bg-transparent
    border-0
    p-0
    h-auto
    text-primary
    hover:text-primary/80
    hover:underline
    shadow-none
  `,
};

const sizes = {
  xs: `h-8 px-3 text-xs`,
  sm: `h-9 px-4 text-sm`,
  md: `h-11 px-6 text-sm`,
  lg: `h-12 px-8 text-base`,
  xl: `h-14 px-10 text-lg`,
};

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      loading = false,
      disabled = false,
      fullWidth = false,
      className = "",
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        type={type}
        whileHover={{
          scale: disabled ? 1 : 1.02,
          y: disabled ? 0 : -2,
        }}
        whileTap={{
          scale: disabled ? 1 : 0.97,
        }}
        transition={{
          type: "spring",
          siffness: 350,
          duration: 0.18,
        }}
        disabled={disabled || loading}
        className={`
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-2xl
          font-medium
          transition-all
          duration-300
          outline-none
          cursor-pointer

          focus-visible:ring-2
          focus-visible:ring-primary/50

          disabled:pointer-events-none
          disabled:opacity-60

          ${variants[variant]}

          ${sizes[size]}

          ${fullWidth ? "w-full" : ""}

          ${className}
        `}
        {...props}
      >
        {loading && (
          <motion.span
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 0.8,
            }}
            className="
              h-4
              w-4
              rounded-full
              border-2
              border-current
              border-t-transparent
            "
          />
        )}

        {!loading && leftIcon}

        <span>{children}</span>

        {!loading && rightIcon}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;