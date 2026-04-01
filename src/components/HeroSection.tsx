import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Phone } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Professional car detailing" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-shine text-shine" />
              ))}
            </div>
            <span className="text-sm font-medium text-primary-foreground/90">5.0 Rated · 10+ Happy Customers</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Professional Car Detailing with a{" "}
            <span className="text-accent">Shine You Can See</span>
          </h1>

          <p className="text-lg text-primary-foreground/70 mb-8 max-w-lg">
            Yorba Linda's trusted car detailing service. We bring your vehicle back to showroom condition with meticulous attention to detail.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Book Now</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="tel:+1234567890">
                <Phone className="w-4 h-4 mr-2" />
                Get a Free Quote
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
