import { Link as ScrollLink } from "react-scroll";

export default function NavItem({
  label,
  to,
}) {
  return (
    <ScrollLink
      to={to}
      smooth
      spy
      duration={500}
      offset={-90}
      activeClass="text-blue-600"
      className="
        relative
        cursor-pointer
        text-sm
        font-medium
        transition-all
        duration-300
        hover:text-blue-600
      "
    >
      {label}
    </ScrollLink>
  );
}