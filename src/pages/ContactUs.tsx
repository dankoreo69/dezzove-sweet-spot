import { useEffect, useRef, useState, useCallback } from "react";
import DezzoveNavbar from "@/components/DezzoveNavbar";
import Footer from "@/components/Footer";
import cafeInterior from "@/assets/cafe-interior.jpg";
import heroWaffle from "@/assets/hero-waffle-drizzle.jpg";
import chocoShake from "@/assets/choco-shake.jpg";

export default function ContactUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showWhatsAppFloat, setShowWhatsAppFloat] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("in-view"); }),
      { threshold: 0.4 }
    );
    document.querySelectorAll(".cine-section").forEach((s) => observer.observe(s));

    const staggerObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("in-view"); }),
      { threshold: 0.2 }
    );
    document.querySelectorAll(".cine-reveal").forEach((el) => staggerObserver.observe(el));

    setTimeout(() => setShowWhatsAppFloat(true), 3000);

    return () => { observer.disconnect(); staggerObserver.disconnect(); };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message has been sent 💫\nWe'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsAppClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open("https://wa.me/919999999999", "_blank");
  }, []);

  return (
    <div className="cine-contact-page" ref={containerRef}>
      <DezzoveNavbar />

      {/* SCENE 1 — OUR STORY HERO */}
      <section className="cine-section cine-scene-1">
        <div className="cine-bg-layer">
          <img src={heroWaffle} alt="" className="cine-bg-img" />
          <div className="cine-bg-overlay cine-overlay-dark" />
        </div>
        <div className="cine-grain" />
        <div className="cine-center-content">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 cine-reveal" style={{ background: "rgba(25,180,198,0.1)", border: "1px solid rgba(25,180,198,0.2)" }}>
            <span style={{ color: "rgba(25,180,198,0.8)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>✦ Our Story</span>
          </div>
          <h1 className="cine-headline cine-reveal" style={{ fontStyle: "normal" }}>
            Crafted for the <span className="italic" style={{ color: "rgba(25,180,198,0.9)" }}>sweet souls</span>
          </h1>
          <p className="cine-subtext cine-reveal cine-reveal-delay-1" style={{ maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            Born from a dream to create a space where every bite feels like a warm hug, Dezzove is more than a dessert shop — it's a vibe, a feeling, and a community built on joy.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-12 cine-reveal cine-reveal-delay-2">
            {[
              { emoji: "🍰", label: "Est. 2023", sub: "Your sweetest escape in the city" },
              { emoji: "☕", label: "Artisan Beverages", sub: "" },
              { emoji: "🍓", label: "Fresh Specials", sub: "" },
              { label: "10K+", sub: "Happy Foodies", emoji: "" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                {item.emoji && <p className="text-2xl mb-1">{item.emoji}</p>}
                <p className="font-display text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>{item.label}</p>
                {item.sub && <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{item.sub}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCENE 2 — WHO WE ARE */}
      <section className="cine-section cine-scene-2" style={{ height: "auto", minHeight: "100vh", padding: "120px 0 80px" }}>
        <div className="cine-bg-layer">
          <img src={cafeInterior} alt="" className="cine-bg-img" />
          <div className="cine-bg-overlay cine-overlay-warm" />
        </div>
        <div className="cine-grain" />

        <div className="cine-split-content">
          <div className="cine-editorial-left cine-reveal">
            <h2 className="cine-editorial-headline">
              A dessert café that lives <span className="italic" style={{ color: "rgba(25,180,198,0.8)" }}>rent-free in your heart</span>
            </h2>
            <div className="cine-editorial-body">
              <p>Dezzove was born from a simple belief — that great desserts should feel like a moment frozen in time. Every waffle stack, every thick shake, every cake slice is a story waiting to be shared.</p>
              <br />
              <p>We blend soft luxury with Gen-Z energy, creating a space that's as Instagram-worthy as it is soul-satisfying. Walk in as a stranger, leave as a regular — that's the Dezzove promise.</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {["🌿100% Natural", "✨Preservative Free", "❤️Handcrafted Daily", "🎨Insta-Worthy Plating"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: "rgba(25,180,198,0.12)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(25,180,198,0.15)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="cine-reveal cine-reveal-delay-1 grid grid-cols-2 gap-4">
            {[
              { title: "Made With Love", desc: "Every dessert is handcrafted with passion and care in our artisan kitchen.", emoji: "💕" },
              { title: "Natural Ingredients", desc: "Zero preservatives, 100% natural — because you deserve the real thing.", emoji: "🌿" },
              { title: "Premium Quality", desc: "We source only the finest ingredients for an unmatched taste experience.", emoji: "⭐" },
              { title: "Community First", desc: "Built on sweet moments shared — a café where everyone belongs.", emoji: "🤝" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <p className="text-2xl mb-2">{item.emoji}</p>
                <h4 className="font-semibold text-sm mb-1" style={{ color: "rgba(255,255,255,0.85)" }}>{item.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCENE 3 — VISIT & CONTACT */}
      <section className="cine-section cine-scene-3" id="scene-contact">
        <div className="cine-bg-layer">
          <img src={chocoShake} alt="" className="cine-bg-img" style={{ filter: "blur(6px)" }} />
          <div className="cine-bg-overlay cine-overlay-deep" />
        </div>
        <div className="cine-grain" />

        <div className="cine-split-content">
          <div className="cine-editorial-left cine-reveal">
            <h2 className="cine-editorial-headline">
              📍 Save Your <span className="italic" style={{ color: "rgba(25,180,198,0.8)" }}>Sweet Spot</span>
            </h2>

            <div className="space-y-6">
              <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h4 className="font-semibold text-sm mb-3" style={{ color: "rgba(255,255,255,0.85)" }}>Opening Hours</h4>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Mon - Fri: 11 AM - 11 PM</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Sat - Sun: 10 AM - 12 AM</p>
                <p className="text-sm mt-2" style={{ color: "rgba(25,180,198,0.7)" }}>🎉 Open on all holidays!</p>
              </div>

              <a
                href="https://wa.me/919999999999"
                onClick={handleWhatsAppClick}
                className="block rounded-xl p-5 transition-all duration-300 hover:scale-[1.02]"
                style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.2)" }}
              >
                <h4 className="font-semibold text-sm mb-1" style={{ color: "rgba(255,255,255,0.85)" }}>Contact Us on WhatsApp</h4>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Quick replies, instant bookings!</p>
                <span className="inline-block mt-3 text-sm font-semibold" style={{ color: "rgba(37,211,102,0.9)" }}>Chat Now →</span>
              </a>

              <div className="rounded-xl p-5" style={{ background: "rgba(25,180,198,0.08)", border: "1px solid rgba(25,180,198,0.15)" }}>
                <h4 className="font-semibold text-sm mb-1" style={{ color: "rgba(255,255,255,0.85)" }}>Book a Table</h4>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Reserve your sweet spot today!</p>
                <span className="inline-block mt-3 text-sm font-semibold" style={{ color: "rgba(25,180,198,0.9)" }}>Reserve Now →</span>
              </div>

              <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <h4 className="font-semibold text-sm mb-2" style={{ color: "rgba(255,255,255,0.85)" }}>Find Us</h4>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  123 Sweet Street, Dessert Lane,<br />City Center, India
                </p>
              </div>
            </div>
          </div>

          <div className="cine-form-right cine-reveal cine-reveal-delay-1">
            <h3 className="font-display text-2xl mb-8" style={{ color: "rgba(255,255,255,0.85)" }}>Send us a message</h3>
            <form onSubmit={handleSubmit} className="cine-form">
              {[
                { name: "name", label: "Your Name", type: "text" },
                { name: "email", label: "Your Email", type: "email" },
                { name: "phone", label: "Phone Number", type: "tel" },
              ].map((field) => (
                <div key={field.name} className="cine-field">
                  <label className={`cine-label ${focusedField === field.name || (formData as any)[field.name] ? "cine-label-float" : ""}`}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={(formData as any)[field.name]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    required={field.name !== "phone"}
                    className="cine-input"
                  />
                  <div className={`cine-input-line ${focusedField === field.name ? "cine-line-active" : ""}`} />
                </div>
              ))}

              <div className="cine-field">
                <label className={`cine-label cine-label-textarea ${focusedField === "message" || formData.message ? "cine-label-float" : ""}`}>
                  Your Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={4}
                  className="cine-input cine-textarea"
                />
                <div className={`cine-input-line ${focusedField === "message" ? "cine-line-active" : ""}`} />
              </div>

              <button type="submit" className="cine-submit-btn">
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SCENE 4 — AFTERTASTE */}
      <section className="cine-section cine-scene-4">
        <div className="cine-bg-layer cine-gradient-bg" />
        <div className="cine-grain" />
        <div className="cine-center-content cine-aftertaste-content">
          <a href="https://instagram.com/dezzove" className="cine-insta-handle cine-reveal">@dezzove</a>
          <div className="cine-mini-divider cine-reveal cine-reveal-delay-1" />
          <p className="cine-closing-line cine-reveal cine-reveal-delay-2">See you at midnight.</p>
        </div>
      </section>

      <a
        href="https://wa.me/919999999999"
        onClick={handleWhatsAppClick}
        className={`cine-wa-float ${showWhatsAppFloat ? "cine-wa-visible" : ""}`}
      >
        Talk to us
      </a>

      <Footer />
    </div>
  );
}
