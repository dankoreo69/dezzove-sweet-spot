import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import DezzoveNavbar from "@/components/DezzoveNavbar";
import Footer from "@/components/Footer";
import heroWaffle from "@/assets/hero-waffle-drizzle.jpg";
import chocoShake from "@/assets/choco-shake.jpg";
import caramelWaffle from "@/assets/caramel-waffle.jpg";

export default function MenuGallery() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.06 }
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
          <img src={heroWaffle} alt="Menu hero" className="w-full h-full object-cover" style={{ filter: "brightness(1.05)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,108,120,0.4) 0%, rgba(8,62,69,0.55) 50%, rgba(8,62,69,0.75) 100%)" }} />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="absolute rounded-full" style={{
              width: `${3 + Math.random() * 4}px`, height: `${3 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              background: `rgba(25,180,198,${0.15 + Math.random() * 0.2})`,
              animation: `aqua-float ${10 + Math.random() * 14}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }} />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-24 pb-32">
          <p className="font-handwritten text-xl md:text-2xl mb-6 reveal" style={{ color: "rgba(25,180,198,0.7)" }}>
            — enter the experience —
          </p>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] mb-10 leading-[1.05] animate-text-glow" style={{ color: "#FFFFFF", textShadow: "0 4px 40px rgba(0,0,0,0.2)" }}>
            This Isn't a Menu.
            <br />
            <span className="gradient-text-aqua inline-block" style={{ fontSize: "1.1em" }}>It's a Mood.</span>
          </h1>
        </div>
      </section>

      <div className="wave-divider">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path d="M0,60 C200,0 400,80 600,40 C800,0 1000,70 1200,30 L1200,80 L0,80 Z" className="shape-fill" />
        </svg>
      </div>

      {/* WAFFLES */}
      <section className="relative overflow-hidden" style={{ background: "#F2FBFC", padding: "8rem 0 5rem" }}>
        <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="story-block" style={{ direction: "ltr" }}>
            <div className="story-block-image reveal-left" style={{ direction: "ltr" }}>
              <img src={heroWaffle} alt="Golden waffle" />
            </div>
            <div className="story-block-content reveal-right delay-200" style={{ direction: "ltr" }}>
              <span className="section-tag mb-6 inline-flex"><Sparkles size={12} /> Waffles</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.8rem] mb-3 leading-[1.15]" style={{ color: "#083E45" }}>Dreamy Waffles</h2>
              <p className="font-handwritten text-xl mb-8" style={{ color: "#19B4C6" }}>Golden. Loud. Soft Inside.</p>
              <div className="space-y-4" style={{ color: "#3A6E76" }}>
                <p className="text-base md:text-lg leading-[1.9] font-light">Pressed until the edges caramelize. Lifted at just the right second. Finished with warm Belgian chocolate that melts before you do.</p>
                <p className="font-display text-xl mt-6" style={{ color: "#083E45" }}>Not just made. <span className="italic gradient-text-aqua">Crafted.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="poetic-divider reveal" style={{ background: "#F2FBFC" }}><p>"Sweetness takes time."</p></div>

      {/* SHAKES */}
      <section className="relative overflow-hidden" style={{ background: "#F2FBFC", padding: "5rem 0" }}>
        <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="story-block" style={{ direction: "rtl" }}>
            <div className="story-block-image reveal-right" style={{ direction: "ltr" }}>
              <img src={chocoShake} alt="Thick chocolate milkshake" />
            </div>
            <div className="story-block-content reveal-left delay-200" style={{ direction: "ltr" }}>
              <span className="section-tag mb-6 inline-flex"><Sparkles size={12} /> Shakes</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.8rem] mb-3 leading-[1.15]" style={{ color: "#083E45" }}>Thick Shakes</h2>
              <p className="font-handwritten text-xl mb-8" style={{ color: "#19B4C6" }}>Slow Down. Sip Deep.</p>
              <div className="space-y-4" style={{ color: "#3A6E76" }}>
                <p className="text-base md:text-lg leading-[1.9] font-light">Heavy glass. Cold condensation. A spoon standing tall in velvet thickness. Each layer folds into the next — cream, cocoa, fruit, crunch.</p>
                <p className="font-display text-xl mt-6" style={{ color: "#083E45" }}>One sip. Pause. <span className="italic gradient-text-aqua">Repeat.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAKES CTA */}
      <section className="cinematic-break" style={{ minHeight: "80vh" }}>
        <div className="absolute inset-0">
          <img src={caramelWaffle} alt="Celebration" className="w-full h-full object-cover" style={{ filter: "brightness(1.1)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(8,62,69,0.5) 0%, rgba(15,108,120,0.55) 40%, rgba(8,62,69,0.7) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center py-24">
          <span className="section-tag mb-8 inline-flex reveal" style={{ background: "rgba(25,180,198,0.12)", borderColor: "rgba(25,180,198,0.2)", color: "#FFFFFF" }}>
            <Sparkles size={12} /> Cakes
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4 leading-[1.08] reveal delay-100 animate-text-glow" style={{ color: "#FFFFFF" }}>Celebration Cakes</h2>
          <p className="font-handwritten text-2xl mb-12 reveal delay-200" style={{ color: "#19B4C6" }}>Layered Like Memories.</p>
          <Link
            to="/contact"
            className="reveal delay-500 inline-flex items-center gap-3 px-9 py-4 rounded-full font-semibold text-base tracking-wide transition-all hover:scale-105 shadow-lg"
            style={{ background: "#19B4C6", color: "#FFFFFF", boxShadow: "0 12px 40px rgba(25,180,198,0.3)" }}
          >
            <span>Create Your Celebration</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
