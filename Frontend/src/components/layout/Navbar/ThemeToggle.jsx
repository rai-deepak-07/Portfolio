import { Moon, Sun } from "lucide-react";

import useTheme from "../../../hooks/useTheme";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() =>
        setTheme(isDark ? "light" : "dark")
      }
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-slate-300
        transition-all
        hover:bg-slate-100
        dark:border-slate-700
        dark:hover:bg-slate-800
      "
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}