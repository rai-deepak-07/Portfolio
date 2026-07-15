import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import Badge from "./Badge";

const alignments = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end",
};

export default function SectionTitle({
  title,
  highlight,
  description,
  
  align = "center",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  
  badge,
  badgeVariant,
  badgeSize,
  badgeLeftIcon,
  badgeRightIcon,
  badgeAnimate,
  badgeRounded,
  badgePulse,

  children,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.6,
      }}
      className={cn(
        "flex flex-col gap-3 mb-10 sm:gap-4 sm:mb-12 lg:mb-16",

        alignments[align],

        className
      )}
    >
      {badge && (
        <Badge variant={badgeVariant} size={badgeSize} leftIcon={badgeLeftIcon} rightIcon={badgeRightIcon} animate={badgeAnimate} rounded={badgeRounded} pulse={badgePulse} >
          {badge}
        </Badge>
      )}

      <h2
        className={cn(
          `
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl

          font-bold

          tracking-tight

          leading-tight

          text-white
          `,
          titleClassName
        )}
      >
        {title}

        {highlight && (
          <>
            {" "}
            <span
              className="
                bg-gradient-to-r
                from-primary
                via-blue-400
                to-secondary
                bg-clip-text
                text-transparent
              "
            >
              {highlight}
            </span>
          </>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            `
            max-w-3xl

            text-sm
            sm:text-base
            md:text-lg

            leading-6
            sm:leading-7
            md:leading-8

            text-muted
            `,
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}

      {children}
    </motion.div>
  );
}