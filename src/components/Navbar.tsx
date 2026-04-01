import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Droplets } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" className="flex items-center gap-2 text-primary font-bold text-xl">
          <Droplets className="w-6 h-6" />
          <span className="font-display">Auto Fresh</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <Button size="sm" asChild>
            <a href="#contact">Book Now</a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-foreground/70 hover:text-primary py-1">
              {l.label}
            </a>
          ))}
          <Button size="sm" className="w-full" asChild>
            <a href="#contact">Book Now</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
