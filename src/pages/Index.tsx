import { Apple, Wheat, Milk, Droplet, Cookie, Sparkles, Leaf, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadPeWidget, FloatingWhatsApp } from "@/components/LeadPeWidget";
import heroImg from "@/assets/hero-grocery.jpg";

const WHATSAPP_URL = "https://wa.me/917562043622?text=Hi%20K.k%20store%2C%20I'm%20interested%20in%20your%20services.%20Please%20get%20in%20touch.";

const categories = [
  { icon: Wheat, name: "Rice & Atta", desc: "Basmati, Sona Masoori, Chakki Atta" },
  { icon: Package, name: "Dal & Pulses", desc: "Toor, Moong, Chana, Masoor" },
  { icon: Sparkles, name: "Spices", desc: "Haldi, Mirch, Garam Masala" },
  { icon: Droplet, name: "Cooking Oil", desc: "Sarson, Refined, Ghee" },
  { icon: Apple, name: "Fresh Produce", desc: "Sabzi, Fal, Pyaaz, Aloo" },
  { icon: Milk, name: "Dairy", desc: "Doodh, Dahi, Paneer, Butter" },
  { icon: Cookie, name: "Snacks & Biscuits", desc: "Namkeen, Chips, Biscuits" },
  { icon: Leaf, name: "Daily Essentials", desc: "Chai, Sugar, Salt, Soap" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-hero text-primary-foreground font-extrabold shadow-soft">
              Kk
            </div>
            <div>
              <h1 className="text-base font-extrabold leading-none">K.k Store</h1>
              <p className="text-[10px] text-muted-foreground">Desri • Vaishali • Bihar</p>
            </div>
          </div>
          <Button asChild size="sm" className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Order</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container grid gap-8 py-10 md:grid-cols-2 md:py-20">
          <div className="flex flex-col justify-center">
            <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-secondary/20 px-3 py-1 text-xs font-bold text-foreground">
              <Sparkles className="h-3.5 w-3.5" /> Bihar's trusted local kirana
            </span>
            <h2 className="mb-4 text-4xl font-extrabold leading-tight md:text-6xl">
              Fresh Groceries,<br />
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Delivered with Care
              </span>
            </h2>
            <p className="mb-6 text-base text-muted-foreground md:text-lg">
              K.k Store is your neighborhood kirana in Desri, Vaishali. Daily essentials, fresh sabzi,
              dal-chawal, masale aur bahut kuch — sab kuch ek hi dukaan par.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-whatsapp text-whatsapp-foreground shadow-glow hover:bg-whatsapp/90">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageIcon /> Order on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+917562043622">Call: 7562043622</a>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span>✓ Home Delivery</span>
              <span>✓ Best Prices</span>
              <span>✓ Fresh Daily</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl gradient-hero opacity-20 blur-3xl" />
            <img
              src={heroImg}
              alt="Fresh kirana groceries at K.k Store Desri Vaishali"
              width={1536}
              height={1024}
              className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="gradient-soft py-16">
        <div className="container">
          <div className="mb-10 text-center">
            <h3 className="text-3xl font-extrabold md:text-4xl">What We Stock</h3>
            <p className="mt-2 text-muted-foreground">Everything your kitchen needs, every single day.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {categories.map(({ icon: Icon, name, desc }) => (
              <div
                key={name}
                className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl gradient-hero text-primary-foreground transition-smooth group-hover:shadow-glow">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="font-bold">{name}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + Contact */}
      <section className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="mb-4 text-3xl font-extrabold md:text-4xl">About K.k Store</h3>
            <p className="mb-4 text-muted-foreground">
              Run by <strong className="text-foreground">Arman kr</strong>, K.k Store has been
              proudly serving the families of Desri, Vaishali with quality groceries at honest prices.
              From rozmarra ka saamaan to festive special items, hum har zaroorat poori karte hain.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-primary">●</span> Open 7 days a week</li>
              <li className="flex gap-2"><span className="text-primary">●</span> Free home delivery in Desri</li>
              <li className="flex gap-2"><span className="text-primary">●</span> WhatsApp order & UPI accepted</li>
              <li className="flex gap-2"><span className="text-primary">●</span> Trusted by 1000+ local families</li>
            </ul>
          </div>
          <div>
            <LeadPeWidget />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p className="font-bold text-foreground">K.k Store</p>
          <p>Desri, Vaishali, Bihar • Owner: Arman kr • WhatsApp: 7562043622</p>
          <p className="mt-3 text-xs">© {new Date().getFullYear()} K.k Store. All rights reserved.</p>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};

const MessageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-1 h-5 w-5">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.595 5.39l-.999 3.648 3.893-1.022z"/>
  </svg>
);

export default Index;
