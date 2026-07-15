import { ArrowUpRight } from "lucide-react";
import Button from "../../ui/Button";
import { cn } from "../../../utils/cn";

export default function HireButton({
  onClick,
  className,
}) {
  return (
    <Button
      size="sm"
      rightIcon={<ArrowUpRight size={16} />}
      onClick={onClick}
      className={cn(
        "transition-all duration-300 hover:scale-105 md:h-10 md:px-5 lg:h-11 lg:px-6",
        className
      )}
    >
      Hire Me
    </Button>
  );
}