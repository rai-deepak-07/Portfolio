import { Download } from "lucide-react";
import Button from "../../ui/Button";
import { cn } from "../../../utils/cn";

export default function ResumeButton({ onClick, loading = false, className }) {
  return (
    <Button
      variant="secondary"
      size="md"
      loading={loading}
      onClick={onClick}
      leftIcon={<Download size={18} />}
      className={cn(className)}
    >
      Resume
    </Button>
  );
}