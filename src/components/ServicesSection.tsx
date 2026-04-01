import { motion } from "framer-motion";
import { Droplets, SprayCan, Wind, Sparkles, CarFront, Cog } from "lucide-react";

const services = [
  { icon: Droplets, title: "Full Body Wash", desc: "Complete exterior wash with premium soaps and hand-dry finish.", price: "From $49" },
  { icon: CarFront, title: "Wheel Washing", desc: "Deep clean of wheels, rims, and tire dressing for a like-new look.", price: "From $29" },
  { icon: Wind, title: "Steam Cleaning", desc: "High-pressure steam to sanitize and remove embedded dirt and stains.", price: "From $79" },
  { icon: SprayCan, title: "Car Waxing", desc: "Hand-applied premium wax for lasting protection and mirror-like shine.", price: "From $89" },
  { icon: Sparkles, title: "Interior Vacuuming", desc: "Thorough vacuuming of seats, carpets, trunk, and hard-to-reach areas.", price: "From $39" },
  { icon: Cog, title: "Engine Detailing", desc: "Safe degreasing and detailing to keep your engine bay spotless.", price: "From $69" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-foreground">Everything Your Car Needs</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">From a quick wash to a full detail — we've got every inch covered.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg p-6 border border-border hover:shadow-lg hover:shadow-primary/5 transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
              <span className="text-sm font-semibold text-primary">{s.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
