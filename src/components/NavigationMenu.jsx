import { Link } from "react-router-dom";

export default function NavigationMenu() {
  return (
    <nav className="flex justify-center gap-6 text-sm font-semibold tracking-wide py-4 bg-white shadow">
      <Link to="/shop" className="hover:underline">SHOP</Link>
      <Link to="/skills" className="hover:underline">SKILLS</Link>
      <Link to="/stories" className="hover:underline">STORIES</Link>
      <Link to="/about" className="hover:underline">ABOUT</Link>
      <Link to="/contact" className="hover:underline">CONTACT US</Link>
    </nav>
  );
}
