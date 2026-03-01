import { useState, useEffect, useRef } from "react";
import { ShoppingCart, Star, Instagram, Heart, MessageCircle, Bookmark, Sparkles } from "lucide-react";
import DezzoveNavbar from "@/components/DezzoveNavbar";
import Footer from "@/components/Footer";
import heroWaffle from "@/assets/hero-waffle-drizzle.jpg";

import imgLotusCake from "@/assets/menu-lotus-cake.jpeg";
import imgChocoPancake from "@/assets/menu-choco-pancake.jpeg";
import imgMoonCake from "@/assets/menu-moon-cake.jpeg";
import imgDryFruitBowl from "@/assets/menu-dry-fruit-bowl.jpeg";
import imgChocoShake from "@/assets/menu-choco-shake.jpeg";
import imgChocoChipsBowl from "@/assets/menu-choco-chips-bowl.jpeg";
import imgMangoBowl from "@/assets/menu-mango-bowl.jpeg";
import imgBlueLemonade from "@/assets/menu-blue-lemonade.jpeg";
import imgChocoStrawberry from "@/assets/menu-choco-strawberry.jpeg";
import imgBrownie from "@/assets/menu-brownie.jpeg";

type MenuItem = {
  id: number;
  name: string;
  desc: string;
  price: string;
  category: string;
  image: string;
  badge?: string;
  rating: number;
};

const categories = [
  { id: "all", label: "All Items", emoji: "✨" },
  { id: "cakes", label: "Cakes & Tins", emoji: "🍰" },
  { id: "bowls", label: "Dessert Bowls", emoji: "🍨" },
  { id: "drinks", label: "Drinks", emoji: "🥤" },
  { id: "specials", label: "Specials", emoji: "⭐" },
];

const menuItems: MenuItem[] = [
  { id: 1, name: "Lotus Biscoff Cake Tin", desc: "Creamy Lotus Biscoff mousse in a signature golden tin with cookie crumble topping", price: "₹349", category: "cakes", image: imgLotusCake, badge: "bestseller", rating: 4.9 },
  { id: 2, name: "Chocolate Doracake", desc: "Thick dorayaki-style pancake drenched in dark chocolate ganache with choco chips", price: "₹199", category: "cakes", image: imgChocoPancake, badge: "hot", rating: 4.8 },
  { id: 3, name: "Moonlight Truffle Tin", desc: "Rich dark chocolate truffle cake with elegant golden moon topper in a premium tin", price: "₹399", category: "cakes", image: imgMoonCake, rating: 5.0 },
  { id: 4, name: "Dry Fruit Overload Bowl", desc: "Creamy dessert bowl loaded with pistachios, almonds, cashews, and dried fruits", price: "₹249", category: "bowls", image: imgDryFruitBowl, badge: "new", rating: 4.7 },
  { id: 5, name: "Chocolate Mud Shake", desc: "Thick chocolate shake with layers of chocolate ganache dripping down the glass", price: "₹179", category: "drinks", image: imgChocoShake, rating: 4.8 },
  { id: 6, name: "Choco Chips Lava Bowl", desc: "Overflowing chocolate dessert bowl topped with a mountain of dark chocolate chips", price: "₹229", category: "bowls", image: imgChocoChipsBowl, badge: "bestseller", rating: 4.9 },
  { id: 7, name: "Fresh Mango Bowl", desc: "Seasonal Alphonso mango chunks on a creamy mango base — summer's favorite", price: "₹199", category: "bowls", image: imgMangoBowl, badge: "new", rating: 4.8 },
  { id: 8, name: "Blue Ocean Lemonade", desc: "Refreshing blue curaçao lemonade with fresh mint and lemon slice", price: "₹149", category: "drinks", image: imgBlueLemonade, rating: 4.6 },
  { id: 9, name: "Chocolate Strawberry Cup", desc: "Fresh strawberries drizzled with rich dark chocolate — a classic indulgence", price: "₹219", category: "specials", image: imgChocoStrawberry, badge: "hot", rating: 4.9 },
  { id: 10, name: "Loaded Brownie Slab", desc: "Dense fudgy brownie drenched in chocolate sauce and topped with white & dark choco chips", price: "₹189", category: "specials", image: imgBrownie, badge: "bestseller", rating: 5.0 },
];

const galleryItems = [
  { id: 1, image: imgBrownie, label: "Loaded Brownie", likes: "2.4K", comments: "143", span: "col-span-2 row-span-2" },
  { id: 2, image: imgMangoBowl, label: "Mango Bowl", likes: "1.8K", comments: "89", span: "col-span-1 row-span-1" },
  { id: 3, image: imgChocoStrawberry, label: "Choco Strawberry", likes: "3.1K", comments: "201", span: "col-span-1 row-span-1" },
  { id: 4, image: imgChocoPancake, label: "Doracake", likes: "2.9K", comments: "178", span: "col-span-1 row-span-1" },
  { id: 5, image: imgLotusCake, label: "Lotus Cake", likes: "5.2K", comments: "312", span: "col-span-1 row-span-1" },
  { id: 6, image: imgBlueLemonade, label: "Blue Lemonade", likes: "1.6K", comments: "97", span: "col-span-1 row-span-1" },
  { id: 7, image: imgMoonCake, label: "Moonlight Truffle", likes: "2.2K", comments: "134", span: "col-span-1 row-span-1" },
  { id: 8, image: imgChocoChipsBowl, label: "Choco Chips Bowl", likes: "4.1K", comments: "256", span: "col-span-1 row-span-1" },
  { id: 9, image: imgDryFruitBowl, label: "Dry Fruit Bowl", likes: "1.9K", comments: "112", span: "col-span-1 row-span-1" },
  { id: 10, image: imgChocoShake, label: "Chocolate Shake", likes: "2.7K", comments: "165", span: "col-span-1 row-span-1" },
];

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div
      className="card-hover rounded-2xl overflow-hidden bg-card"
      style={{ border: "1px solid hsl(var(--border))", boxShadow: "0 4px 20px hsla(195,70%,38%,0.06)" }}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        {item.badge && (
          <div className={`badge-${item.badge} absolute top-3 right-3`}>
            {item.badge === "new" ? "New" : item.badge === "hot" ? "🔥 Hot" : "⭐ Bestseller"}
          </div>
        )}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 glass px-2.5 py-1 rounded-full">
          <Star size={10} fill="#d4956a" stroke="none" />
          <span className="text-xs font-bold text-primary-foreground">{item.rating}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display font-bold text-base mb-1 text-foreground">{item.name}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg gradient-text">{item.price}</span>
          <button className="btn-primary py-2 px-4 text-xs" onClick={() => alert(`${item.name} added to your order!`)}>
            <ShoppingCart size={12} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function GalleryItem({ item }: { item: typeof galleryItems[0] }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className={`insta-item ${item.span}`} style={{ minHeight: "180px" }}>
      <img src={item.image} alt={item.label} className="w-full h-full object-cover rounded-2xl" style={{ minHeight: "inherit" }} />
      <div className="insta-overlay">
        <div className="flex flex-col items-center gap-3 p-4 w-full">
          <p className="font-display font-bold text-sm text-center text-primary-foreground">{item.label}</p>
          <div className="flex items-center gap-4 text-xs text-primary-foreground">
            <span className="flex items-center gap-1.5">
              <Heart size={14} fill="white" />
              {item.likes}
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle size={14} fill="white" stroke="none" />
              {item.comments}
            </span>
          </div>
          <div className="flex gap-3 mt-1">
            <button
              onClick={() => setLiked(!liked)}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
              style={{ background: liked ? "hsl(var(--destructive))" : "rgba(255,255,255,0.25)" }}
            >
              <Heart size={14} fill={liked ? "white" : "none"} stroke="white" />
            </button>
            <button
              onClick={() => setSaved(!saved)}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
              style={{ background: saved ? "hsl(var(--primary))" : "rgba(255,255,255,0.25)" }}
            >
              <Bookmark size={14} fill={saved ? "white" : "none"} stroke="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MenuGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === "all" ? menuItems : menuItems.filter((m) => m.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        sectionRef.current?.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
      }, 50);
    }
  }, [activeCategory, visible]);

  return (
    <div className="min-h-screen bg-background">
      <DezzoveNavbar />

      {/* HERO - kept as original */}
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

      {/* Menu Section */}
      <section className="section-pad bg-dessert-gradient pt-28" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="section-tag mb-4 inline-flex">🍽️ Our Menu</span>
            <h2 className="font-display font-bold mb-4 text-foreground" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
              Taste the <span className="gradient-text italic">Magic</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
              From thick shakes that hit different to cakes that break the internet — explore our full menu of handcrafted delights.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 justify-center mb-10 reveal">
            {categories.map((cat) => (
              <button key={cat.id} className={`menu-filter-btn ${activeCategory === cat.id ? "active" : ""}`} onClick={() => setActiveCategory(cat.id)}>
                <span className="mr-1">{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>

          <div key={activeCategory} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-pad bg-cream-gradient" ref={galleryRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div className="reveal">
              <span className="section-tag mb-4 inline-flex">
                <Instagram size={12} />
                Gallery
              </span>
              <h2 className="font-display font-bold text-foreground" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
                Sweet <span className="gradient-text italic">Moments</span> Worth Sharing
              </h2>
            </div>
            <div className="reveal-right">
              <a href="https://instagram.com/dezzove" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex text-xs">
                <Instagram size={14} />
                <span>Follow @dezzove</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 reveal" style={{ gridAutoRows: "180px" }}>
            {galleryItems.map((item) => (
              <GalleryItem key={item.id} item={item} />
            ))}
          </div>

          {/* Social proof strip */}
          <div className="mt-10 reveal">
            <div className="social-card flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-primary-gradient">
                  <Instagram size={22} color="white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Share your Dezzove moment</h4>
                  <p className="text-sm text-muted-foreground">
                    Tag <strong className="text-primary">@dezzove</strong> or use <strong className="text-primary">#DezzoveMoments</strong>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="text-center">
                  <div className="font-display font-bold text-xl gradient-text">24K+</div>
                  <div className="text-xs text-muted-foreground">Followers</div>
                </div>
                <div className="text-center">
                  <div className="font-display font-bold text-xl gradient-text">5K+</div>
                  <div className="text-xs text-muted-foreground">Posts</div>
                </div>
                <a href="https://instagram.com/dezzove" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2.5 px-5">
                  <span>Follow Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
