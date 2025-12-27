import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-cream shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} className="h-8 md:h-10" />
          <span className="font-signature text-2xl md:text-3xl text-gold">
            Sri Varshini
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-medium">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/services", label: "Services" },
            { path: "/gallery", label: "Gallery" },
            { path: "/contact", label: "Contact" },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-gold border-b-2 border-gold pb-1"
                  : "text-gray-700 hover:text-gold"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gold text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-cream border-t px-4 py-4 space-y-4">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/services", label: "Services" },
            { path: "/gallery", label: "Gallery" },
            { path: "/contact", label: "Contact" },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block text-gray-700 text-lg hover:text-gold"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
