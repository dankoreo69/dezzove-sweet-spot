import { useEffect, useRef } from "react";
import { Heart, Leaf, Award, Users, Clock, Phone, MapPin, MessageCircle } from "lucide-react";
import Navbar from "@/components/DezzoveNavbar";
import Footer from "@/components/Footer";

const values = [
  { icon: Heart, title: "Made With Love", desc: "Every dessert is handcrafted with passion and care in our artisan kitchen." },
  { icon: Leaf, title: "Natural Ingredients", desc: "Zero preservatives, 100% natural — because you deserve the real thing." },
  { icon: Award, title: "Premium Quality", desc: "We source only the finest ingredients for an unmatched taste experience." },
  { icon: Users, title: "Community First", desc: "Built on sweet moments shared — a café where everyone belongs." },
];

export default function ContactUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background" ref={sectionRef}>
      <Navbar />

      {/* About Section */}
      <section className="section-pad bg-cream-gradient pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="section-tag mb-4 inline-flex">✦ Our Story</span>
            <h2 className="font-display font-bold mb-4 text-foreground" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
              Crafted for the <span className="gradient-text italic">sweet souls</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
              Born from a dream to create a space where every bite feels like a warm hug, Dezzove is more than a dessert shop — it's a vibe, a feeling, and a community built on joy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left visual */}
            <div className="relative reveal-left">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 rounded-3xl overflow-hidden h-64 relative" style={{ background: "linear-gradient(135deg, hsl(205,65%,12%) 0%, hsl(195,70%,38%) 100%)" }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <span className="text-6xl mb-3">🍰</span>
                    <h3 className="font-display text-2xl font-bold mb-1" style={{ color: "white" }}>Est. 2023</h3>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>Your sweetest escape in the city</p>
                  </div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20" style={{ background: "rgba(255,255,255,0.3)" }} />
                </div>
                <div className="rounded-2xl p-5 flex flex-col items-center justify-center text-center h-36 bg-secondary" style={{ border: "1px solid hsla(195,70%,38%,0.15)" }}>
                  <span className="text-3xl mb-2">☕</span>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider">Artisan Beverages</p>
                </div>
                <div className="rounded-2xl p-5 flex flex-col items-center justify-center text-center h-36" style={{ background: "linear-gradient(135deg, hsl(195,35%,92%), hsl(195,40%,97%))", border: "1px solid hsla(195,70%,38%,0.2)" }}>
                  <span className="text-3xl mb-2">🍓</span>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">Fresh Specials</p>
                </div>
              </div>
              <div className="absolute -right-4 top-1/3 glass rounded-2xl p-4 shadow-xl hidden lg:block animate-float-slow">
                <div className="text-center">
                  <div className="font-display text-2xl font-bold gradient-text">10K+</div>
                  <div className="text-xs text-muted-foreground font-medium">Happy Foodies</div>
                </div>
              </div>
            </div>

            {/* Right story */}
            <div className="reveal-right">
              <span className="section-tag mb-4 inline-flex">Who We Are</span>
              <h3 className="font-display font-bold mb-4 text-foreground" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)" }}>
                A dessert café that lives<span className="gradient-text"> rent-free in your heart</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dezzove was born from a simple belief — that great desserts should feel like a moment frozen in time. Every waffle stack, every thick shake, every cake slice is a story waiting to be shared.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We blend soft luxury with Gen-Z energy, creating a space that's as Instagram-worthy as it is soul-satisfying. Walk in as a stranger, leave as a regular — that's the Dezzove promise.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { emoji: "🌿", text: "100% Natural" },
                  { emoji: "✨", text: "Preservative Free" },
                  { emoji: "❤️", text: "Handcrafted Daily" },
                  { emoji: "🎨", text: "Insta-Worthy Plating" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2.5 p-3 rounded-xl bg-secondary" style={{ border: "1px solid hsla(195,70%,38%,0.12)" }}>
                    <span className="text-lg">{item.emoji}</span>
                    <span className="text-sm font-semibold text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {values.map((value, idx) => {
              const Icon = value.icon;
              const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
              return (
                <div key={value.title} className={`reveal ${delays[idx]} card-hover text-center p-6 rounded-2xl bg-card`} style={{ border: "1px solid hsla(195,70%,38%,0.1)", boxShadow: "0 4px 20px hsla(195,70%,38%,0.06)" }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-secondary">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h4 className="font-display font-bold text-base mb-2 text-foreground">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-pad bg-dessert-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="section-tag mb-4 inline-flex">📍 Visit Us</span>
            <h2 className="font-display font-bold mb-4 text-foreground" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
              Save Your <span className="gradient-text italic">Sweet Spot</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Opening Hours */}
            <div className="reveal card-hover rounded-2xl p-6 bg-card text-center" style={{ border: "1px solid hsla(195,70%,38%,0.1)", boxShadow: "0 4px 20px hsla(195,70%,38%,0.06)" }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-primary-gradient">
                <Clock size={24} color="white" />
              </div>
              <h3 className="font-display font-bold text-lg mb-3 text-foreground">Opening Hours</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Mon - Fri:</strong> 11 AM - 11 PM</p>
                <p><strong className="text-foreground">Sat - Sun:</strong> 10 AM - 12 AM</p>
                <p className="text-xs mt-2" style={{ color: "#c05a5a" }}>🎉 Open on all holidays!</p>
              </div>
            </div>

            {/* Contact on WhatsApp */}
            <div className="reveal delay-100 card-hover rounded-2xl p-6 bg-card text-center" style={{ border: "1px solid hsla(195,70%,38%,0.1)", boxShadow: "0 4px 20px hsla(195,70%,38%,0.06)" }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "#25D366" }}>
                <MessageCircle size={24} color="white" />
              </div>
              <h3 className="font-display font-bold text-lg mb-3 text-foreground">Contact Us on WhatsApp</h3>
              <p className="text-sm text-muted-foreground mb-4">Quick replies, instant bookings!</p>
              <a
                href="https://wa.me/919999999999?text=Hi%20Dezzove!%20I'd%20like%20to%20know%20more"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2.5 px-5 inline-flex"
              >
                <MessageCircle size={14} />
                <span>Chat Now</span>
              </a>
            </div>

            {/* Book a Table */}
            <div className="reveal delay-200 card-hover rounded-2xl p-6 bg-card text-center" style={{ border: "1px solid hsla(195,70%,38%,0.1)", boxShadow: "0 4px 20px hsla(195,70%,38%,0.06)" }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-primary-gradient">
                <Phone size={24} color="white" />
              </div>
              <h3 className="font-display font-bold text-lg mb-3 text-foreground">Book a Table</h3>
              <p className="text-sm text-muted-foreground mb-4">Reserve your sweet spot today!</p>
              <a
                href="https://wa.me/919999999999?text=Hi!%20I'd%20like%20to%20book%20a%20table%20at%20Dezzove"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-2.5 px-5 inline-flex"
              >
                <span>Reserve Now</span>
              </a>
            </div>

            {/* Location */}
            <div className="reveal delay-300 card-hover rounded-2xl p-6 bg-card text-center" style={{ border: "1px solid hsla(195,70%,38%,0.1)", boxShadow: "0 4px 20px hsla(195,70%,38%,0.06)" }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-primary-gradient">
                <MapPin size={24} color="white" />
              </div>
              <h3 className="font-display font-bold text-lg mb-3 text-foreground">Find Us</h3>
              <p className="text-sm text-muted-foreground">
                123 Sweet Street, Dessert Lane,<br />City Center, India
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="reveal rounded-3xl overflow-hidden shadow-xl mb-12" style={{ border: "1px solid hsla(195,70%,38%,0.1)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.123456789!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dezzove Location"
            />
          </div>

          {/* Contact Form */}
          <div className="reveal max-w-2xl mx-auto">
            <div className="rounded-3xl p-8 bg-card" style={{ border: "1px solid hsla(195,70%,38%,0.1)", boxShadow: "0 4px 30px hsla(195,70%,38%,0.08)" }}>
              <h3 className="font-display font-bold text-xl mb-6 text-center text-foreground">Send us a message</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Message sent! We'll get back to you soon 💕"); }}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="dz-input" required />
                  <input type="email" placeholder="Your Email" className="dz-input" required />
                </div>
                <input type="tel" placeholder="Phone Number" className="dz-input" />
                <textarea placeholder="Your Message..." className="dz-input" rows={4} required />
                <div className="text-center">
                  <button type="submit" className="btn-primary">
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
