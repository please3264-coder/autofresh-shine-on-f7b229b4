import { Droplets } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70 py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#home" className="flex items-center gap-2 text-primary-foreground font-bold text-xl mb-3">
              <Droplets className="w-5 h-5" />
              <span className="font-display">Auto Fresh</span>
            </a>
            <p className="text-sm leading-relaxed">Professional car detailing in Yorba Linda, CA. Your vehicle deserves the best.</p>
          </div>
          <div>
            <h4 className="font-semibold text-primary-foreground mb-3 text-sm">Quick Links</h4>
            <div className="space-y-2 text-sm">
              {["Services", "About", "Reviews", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="block hover:text-primary-foreground transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-primary-foreground mb-3 text-sm">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>4795 Carmonita Ln, Yorba Linda, CA 92886</p>
              <p>(714) 555-0123</p>
              <p>info@autofreshcalifornia.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Auto Fresh California. All rights reserved.</p>
          <a href="https://autofreshcalifornia.com" className="hover:text-primary-foreground transition-colors">autofreshcalifornia.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
