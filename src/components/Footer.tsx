import { Link } from "react-router-dom";
import { Instagram, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0F6C78 0%, #083E45 100%)",
        padding: "5rem 0 3rem",
      }}
    >
      <div
        className="absolute top-0 left-1/3 w-[500px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(25,180,198,0.08), transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h3 className="font-display text-3xl mb-3" style={{ color: "#FFFFFF" }}>Dezzove</h3>
          <p style={{ color: "rgba(255,255,255,0.55)" }} className="text-base italic font-light">
            Where sweet dreams come true. Artisan desserts crafted with love.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-14">
          <div className="text-center md:text-left">
            <h4
              style={{ color: "rgba(255,255,255,0.85)" }}
              className="font-semibold mb-5 text-xs uppercase tracking-[0.15em]"
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "Menu & Gallery", to: "/menu-gallery" },
                { label: "Our Specials", to: "/our-specials" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors duration-300"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <h4
              style={{ color: "rgba(255,255,255,0.85)" }}
              className="font-semibold mb-5 text-xs uppercase tracking-[0.15em]"
            >
              Hours
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Mon - Fri: 11 AM - 11 PM
              <br />
              Sat - Sun: 10 AM - 12 AM
              <br />
              <span className="font-handwritten text-base" style={{ color: "rgba(25,180,198,0.6)" }}>
                🎉 Open on all holidays!
              </span>
            </p>
          </div>

          <div className="text-center md:text-right">
            <h4
              style={{ color: "rgba(255,255,255,0.85)" }}
              className="font-semibold mb-5 text-xs uppercase tracking-[0.15em]"
            >
              Follow Us
            </h4>
            <div className="flex gap-3 justify-center md:justify-end">
              <a
                href="https://instagram.com/dezzove"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: "rgba(25,180,198,0.2)" }}
              >
                <Instagram size={18} color="white" />
              </a>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div
          className="text-center mb-8 py-4 px-6 rounded-2xl"
          style={{ background: "rgba(25,180,198,0.12)", border: "1px solid rgba(25,180,198,0.2)" }}
        >
          <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>
            🎉 Join us at only ₹9,999 - ₹16,999 only! 🎉
          </p>
          <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
            Special packages available for parties and celebrations
          </p>
        </div>

        <div
          className="h-px mb-8"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(25,180,198,0.2), transparent)",
          }}
        />

        <p
          className="text-center text-xs flex items-center justify-center gap-1.5"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          Made with{" "}
          <Heart size={11} fill="currentColor" style={{ color: "rgba(25,180,198,0.6)" }} />{" "}
          by Dezzove © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
