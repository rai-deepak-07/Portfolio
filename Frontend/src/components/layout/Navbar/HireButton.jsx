import { ArrowUpRight } from "lucide-react";
import Button from "../../ui/Button";
import { cn } from "../../../utils/cn";

export default function HireButton({
  onClick,
  className,
}) {
  return (
    <Button
      size="md"
      rightIcon={<ArrowUpRight size={18} />}
      onClick={onClick}
      className={cn(
        "transition-all duration-300 hover:scale-105",
        className
      )}
    >
      Hire Me
    </Button>
  );
}