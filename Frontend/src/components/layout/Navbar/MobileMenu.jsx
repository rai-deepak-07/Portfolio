import { Menu } from "lucide-react";

export default function MobileMenu() {
  return (
    <button className="lg:hidden">
      <Menu size={26} />
    </button>
  );
}