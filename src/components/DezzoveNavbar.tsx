import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import dezzoveLogo from "@/assets/dezzove-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu & Gallery", href: "/menu-gallery" },
  { label: "Our Specials", href: "/our-specials" },
  { label: "Contact Us", href: "/contact" },
];

export default function DezzoveNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass navbar-scrolled py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div
              className="relative w-10 h-10 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow"
              style={{ border: "2px solid rgba(28,167,184,0.15)" }}
            >
              <img
                src={dezzoveLogo}
                alt="Dezzove Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="font-display text-xl text-foreground">Dezzove</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-dz-chocolate"
                    }`}
                  >
                    {isActive && <span className="absolute inset-0 rounded-full bg-dz-chocolate" />}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden md:flex btn-primary text-xs py-2.5 px-5">
              <span>Order Now</span>
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-secondary"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} className="text-dz-chocolate" /> : <Menu size={20} className="text-dz-chocolate" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="glass mx-4 mt-3 mb-2 rounded-2xl p-5 shadow-xl">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive ? "text-primary-foreground bg-dz-chocolate" : "text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 pt-4 border-t border-border">
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="btn-primary w-full justify-center">
              <span>Order Now</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
