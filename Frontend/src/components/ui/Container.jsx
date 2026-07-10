import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const widthVariants = {
  sm: "max-w-5xl",
  md: "max-w-6xl",
  lg: "max-w-7xl",
  xl: "max-w-[1440px]",
  full: "max-w-full",
};

const Container = forwardRef(
  (
    {
      children,
      className = "",
      size = "lg",
      as: Component = "div",
      fluid = false,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "w-full mx-auto",

          fluid
            ? "px-4 sm:px-6 lg:px-8"
            : [
                widthVariants[size],
                "px-4 sm:px-6 lg:px-8",
              ],

          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";

export default Container;