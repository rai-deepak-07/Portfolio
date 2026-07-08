import { NAVIGATION } from "../../../config/navigation";
import NavItem from "./NavItem";

export default function DesktopMenu() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {NAVIGATION.map((item) => (
        <NavItem
          key={item.id}
          {...item}
        />
      ))}
    </nav>
  );
}