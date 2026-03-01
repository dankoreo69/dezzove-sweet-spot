import { useEffect, useRef } from "react";
import DezzoveNavbar from "@/components/DezzoveNavbar";
import Footer from "@/components/Footer";
import dezzoveTower from "@/assets/dezzove-tower.jpg";
import unicornShake from "@/assets/unicorn-shake.jpg";
import caramelWaffle from "@/assets/caramel-waffle.jpg";

const specials = [
  {
    tag: "#1 TRENDING",
    emoji: "🏆",
    name: "The Dezzove Tower",
    desc: "A showstopper 5-layer chocolate tower with gold leaf, dark chocolate shards, and a molten core. Our most-photographed creation.",
    orders: "200+/week",
    rating: "5.0",
    saves: "12K+",
    price: "₹549",
    image: dezzoveTower,
    gradient: "linear-gradient(135deg, rgba(15,108,120,0.85) 0%, rgba(25,180,198,0.7) 100%)",
    cardBg: "linear-gradient(160deg, #0c3a40 0%, #0f5c64 50%, #0a2f35 100%)",
  },
  {
    tag: "MOST SHARED",
    emoji: "🦄",
    name: "Unicorn Shake Jar",
    desc: "A pastel rainbow thick shake in a mason jar — layered butterfly pea, mango, and strawberry, topped with cotton candy clouds.",
    orders: "180+/week",
    rating: "4.9",
    saves: "18K+",
    price: "₹299",
    image: unicornShake,
    gradient: "linear-gradient(135deg, rgba(192,90,138,0.7) 0%, rgba(160,100,140,0.6) 100%)",
    cardBg: "linear-gradient(160deg, #8b4a6b 0%, #c27a8e 50%, #8b4a6b 100%)",
  },
  {
    tag: "CHEF'S PICK",
    emoji: "🍦",
    name: "Caramel Cloud Waffle",
    desc: "Japanese-style fluffy soufflé waffle with burnt caramel sauce, praline dust, and a scoop of salted caramel gelato.",
    orders: "150+/week",
    rating: "4.9",
    saves: "9K+",
    price: "₹349",
    image: caramelWaffle,
    gradient: "linear-gradient(135deg, rgba(15,108,120,0.85) 0%, rgba(25,180,198,0.6) 100%)",
    cardBg: "linear-gradient(160deg, #0c3a40 0%, #0f5c64 50%, #0a2f35 100%)",
  },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("scene-visible"); }),
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
    );
    el.querySelectorAll(".scene-reveal").forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function OurSpecials() {
  const heroRef = useScrollReveal();
  const cardsRef = useScrollReveal();

  return (
    <div className="specials-dark" style={{ background: "#060D10" }}>
      <DezzoveNavbar />

      {/* HERO */}
      <section
        ref={heroRef}
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "linear-gradient(180deg, #060D10 0%, #0a2a30 40%, #0f4a52 70%, #0a2a30 100%)",
          overflow: "hidden",
          paddingTop: "6rem",
        }}
      >
        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <div key={i} className="absolute rounded-full" style={{
              width: `${1 + Math.random() * 3}px`, height: `${1 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              background: `rgba(25,180,198,${0.1 + Math.random() * 0.3})`,
              animation: `aqua-float ${8 + Math.random() * 15}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }} />
          ))}
        </div>

        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 2rem" }}>
          {/* Trending badge */}
          <div className="scene-reveal inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8" style={{
            background: "rgba(25,180,198,0.1)",
            border: "1px solid rgba(25,180,198,0.2)",
          }}>
            <span style={{ color: "rgba(25,180,198,0.8)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              🔥 TRENDING NOW
            </span>
          </div>

          <h1
            className="scene-reveal font-display"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", color: "#FFFFFF", lineHeight: 1.15, marginBottom: "1.5rem" }}
          >
            Our <span className="gradient-text-gold italic">Signature</span> Specials
          </h1>

          <p className="scene-reveal" style={{ color: "rgba(242,251,252,0.6)", fontSize: "1.05rem", fontStyle: "italic", maxWidth: "600px", margin: "0 auto" }}>
            These aren't just desserts — they're moments. Our most-loved, most-shared, most-craved creations that keep you coming back.
          </p>
        </div>
      </section>

      {/* CARDS SECTION */}
      <section
        ref={cardsRef}
        style={{
          background: "linear-gradient(180deg, #0a2a30 0%, #0f4a52 30%, #0a2a30 100%)",
          padding: "4rem 0 8rem",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {specials.map((item, i) => (
              <div
                key={item.name}
                className="scene-reveal rounded-3xl overflow-hidden relative group transition-all duration-500 hover:-translate-y-3"
                style={{
                  background: item.cardBg,
                  border: "1px solid rgba(255,255,255,0.08)",
                  transitionDelay: `${i * 0.15}s`,
                }}
              >
                {/* Top section with tag and emoji */}
                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider" style={{
                      background: "rgba(25,180,198,0.15)",
                      color: "rgba(25,180,198,0.9)",
                      border: "1px solid rgba(25,180,198,0.2)",
                    }}>
                      ✧ {item.tag}
                    </span>
                    <span className="text-3xl">{item.emoji}</span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl mb-3" style={{ color: "#FFFFFF" }}>{item.name}</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>{item.desc}</p>
                </div>

                {/* Stats bar */}
                <div className="mx-6 mb-6 flex items-center justify-between rounded-xl px-4 py-3" style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}>
                  <div className="text-center">
                    <p className="text-xs font-bold" style={{ color: "rgba(255,255,255,0.85)" }}>{item.orders}</p>
                    <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>Orders</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold" style={{ color: "rgba(255,255,255,0.85)" }}>★ {item.rating}</p>
                    <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold" style={{ color: "rgba(255,255,255,0.85)" }}>{item.saves}</p>
                    <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>Saves</p>
                  </div>
                </div>

                {/* Price and order */}
                <div className="px-6 pb-6 flex items-center justify-between">
                  <p className="font-display text-2xl" style={{ color: "#FFFFFF" }}>{item.price}</p>
                  <button
                    className="px-6 py-2.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
                    style={{
                      background: "rgba(255,255,255,0.9)",
                      color: "#0F6C78",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                    }}
                  >
                    ORDER NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
