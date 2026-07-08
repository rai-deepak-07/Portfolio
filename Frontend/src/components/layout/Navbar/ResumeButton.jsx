import { Download } from "lucide-react";

import Button from "../../ui/Button";

export default function ResumeButton() {
  return (
    <Button
      className="hidden lg:flex items-center gap-2 bg-transparent border border-slate-300 text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
    >
      <Download size={18} />

      Resume
    </Button>
  );
}