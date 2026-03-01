import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import DezzoveNavbar from "@/components/DezzoveNavbar";
import Footer from "@/components/Footer";
import heroWaffle from "@/assets/hero-waffle-drizzle.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";

export default function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <DezzoveNavbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroWaffle} alt="Dezzove signature waffle" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(15,108,120,0.45) 0%, rgba(8,62,69,0.6) 60%, rgba(8,62,69,0.75) 100%)" }}
          />
        </div>

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${3 + Math.random() * 5}px`,
                height: `${3 + Math.random() * 5}px`,
                left: `${Math.random() * 100}%`,
                background: `rgba(25,180,198,${0.15 + Math.random() * 0.25})`,
                animation: `aqua-float ${10 + Math.random() * 15}s linear infinite`,
                animationDelay: `${Math.random() * 12}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-36">
          <h1
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] mb-10 leading-[1.05] animate-text-glow"
            style={{ color: "#FFFFFF", textShadow: "0 4px 40px rgba(0,0,0,0.25)", letterSpacing: "-0.02em" }}
          >
            Where Every Dessert
            <br />
            <span className="gradient-text-aqua inline-block" style={{ fontSize: "1.15em", letterSpacing: "-0.03em" }}>
              Has a Story.
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-14 leading-relaxed font-light reveal delay-200"
            style={{ color: "rgba(255,255,255,0.75)", textShadow: "0 2px 15px rgba(0,0,0,0.15)" }}
          >
            From the first drizzle of Belgian chocolate to the final bite of warmth,
            Dezzove isn't just dessert — it's a feeling you carry home.
          </p>

          <div className="flex flex-wrap gap-5 justify-center reveal delay-400">
            <Link
              to="/menu-gallery"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-semibold text-base tracking-wide transition-all duration-400 shadow-lg hover:shadow-2xl hover:scale-105"
              style={{ background: "#19B4C6", color: "#FFFFFF", boxShadow: "0 12px 35px rgba(25,180,198,0.3)" }}
            >
              <span>Explore Our Menu</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-semibold text-base tracking-wide transition-all duration-400 hover:scale-105"
              style={{ border: "2px solid rgba(255,255,255,0.35)", color: "#FFFFFF", background: "rgba(255,255,255,0.06)" }}
            >
              <span>Visit Us Tonight</span>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>Scroll</span>
          <div className="w-5 h-9 rounded-full flex items-start justify-center p-1.5" style={{ border: "2px solid rgba(255,255,255,0.2)" }}>
            <div className="w-1 h-2.5 rounded-full animate-bounce-gentle" style={{ background: "rgba(255,255,255,0.4)" }} />
          </div>
        </div>
      </section>

      {/* WAVE */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path d="M0,60 C200,0 400,80 600,40 C800,0 1000,70 1200,30 L1200,80 L0,80 Z" className="shape-fill" />
        </svg>
      </div>

      {/* OUR STORY */}
      <section className="relative overflow-hidden" style={{ background: "#F2FBFC", padding: "9rem 0 7rem" }}>
        <div className="absolute inset-0" style={{ background: "rgba(242,251,252,0.93)" }} />
        <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5 reveal">
            <span className="section-tag mb-6 inline-flex">
              <Sparkles size={13} />
              ✦ Our Story
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-[3.8rem] text-center mb-6 leading-tight reveal" style={{ color: "#083E45" }}>
            Crafted for the
            <br />
            <span className="italic gradient-text-aqua">sweet souls</span>
          </h2>

          <div className="max-w-[680px] mx-auto space-y-7 reveal delay-200">
            <p className="text-lg md:text-xl leading-[1.85] text-center italic font-light" style={{ color: "#2E5F66" }}>
              Born from a dream to create a space where every bite feels like a warm hug, Dezzove is more than a dessert shop — it's a vibe, a feeling, and a community built on joy.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-8">
              {[
                { emoji: "🍰", label: "Est. 2023", sub: "Your sweetest escape" },
                { emoji: "☕", label: "Artisan Beverages", sub: "" },
                { emoji: "🍓", label: "Fresh Specials", sub: "" },
                { emoji: "10K+", label: "Happy Foodies", sub: "" },
              ].map((item) => (
                <div key={item.label} className="reveal delay-300">
                  <p className="text-3xl mb-2">{item.emoji}</p>
                  <p className="font-display text-sm" style={{ color: "#083E45" }}>{item.label}</p>
                  {item.sub && <p className="text-xs mt-1" style={{ color: "#5E8C92" }}>{item.sub}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="relative overflow-hidden" style={{ padding: "9rem 0" }}>
        <div className="absolute inset-0">
          <img src={cafeInterior} alt="Dezzove café" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(8,62,69,0.72) 0%, rgba(15,108,120,0.5) 100%)" }} />
        </div>

        <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl reveal">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-7" style={{ color: "rgba(255,255,255,0.35)" }}>Who We Are</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-8 leading-[1.08]" style={{ color: "#FFFFFF" }}>
              A dessert café that lives
              <br />
              <span className="italic gradient-text-aqua">rent-free in your heart</span>
            </h2>

            <div className="space-y-4 mb-8 reveal delay-200">
              <p className="text-lg md:text-xl font-light" style={{ color: "rgba(255,255,255,0.65)" }}>
                Dezzove was born from a simple belief — that great desserts should feel like a moment frozen in time.
              </p>
              <p className="text-base font-light" style={{ color: "rgba(255,255,255,0.5)" }}>
                We blend soft luxury with Gen-Z energy, creating a space that's as Instagram-worthy as it is soul-satisfying. Walk in as a stranger, leave as a regular — that's the Dezzove promise.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 reveal delay-300">
              {["🌿 100% Natural", "✨ Preservative Free", "❤️ Handcrafted Daily", "🎨 Insta-Worthy Plating"].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "rgba(25,180,198,0.15)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(25,180,198,0.2)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative overflow-hidden" style={{ background: "#F2FBFC", padding: "5rem 0 9rem" }}>
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Made With Love", desc: "Every dessert is handcrafted with passion and care in our artisan kitchen.", emoji: "💕" },
              { title: "Natural Ingredients", desc: "Zero preservatives, 100% natural — because you deserve the real thing.", emoji: "🌿" },
              { title: "Premium Quality", desc: "We source only the finest ingredients for an unmatched taste experience.", emoji: "⭐" },
              { title: "Community First", desc: "Built on sweet moments shared — a café where everyone belongs.", emoji: "🤝" },
            ].map((item, i) => (
              <div key={item.title} className={`experience-card reveal delay-${(i + 1) * 100}`}>
                <div className="text-4xl mb-5">{item.emoji}</div>
                <h3 className="font-display text-xl mb-3" style={{ color: "#083E45" }}>{item.title}</h3>
                <p className="leading-[1.8] text-sm" style={{ color: "#3A6E76" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cinematic-break" style={{ minHeight: "60vh" }}>
        <div className="absolute inset-0">
          <img src={heroWaffle} alt="Dezzove" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,108,120,0.8) 0%, rgba(25,180,198,0.65) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl mb-10 leading-[1.08] reveal animate-text-glow"
            style={{ color: "#FFFFFF", textShadow: "0 4px 30px rgba(0,0,0,0.2)" }}
          >
            Come Stay <span className="italic gradient-text-aqua">A While.</span>
          </h2>
          <Link
            to="/contact"
            className="reveal delay-200 inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold text-lg tracking-wide transition-all hover:scale-105 shadow-lg"
            style={{ background: "#FFFFFF", color: "#0F6C78" }}
          >
            <span>Visit Us Tonight</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
