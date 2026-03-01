import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("dz-dark-mode") === "true";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("dz-dark-mode", String(dark));
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary border border-border transition-all duration-300 hover:scale-110"
      aria-label="Toggle dark mode"
    >
      {dark ? (
        <Sun size={18} className="text-dz-gold" />
      ) : (
        <Moon size={18} className="text-dz-chocolate" />
      )}
    </button>
  );
}
