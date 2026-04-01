import { motion } from "framer-motion";
import { Shield, Clock, ThumbsUp, Award } from "lucide-react";

const stats = [
  { icon: Shield, label: "Insured & Professional" },
  { icon: Clock, label: "On-Time, Every Time" },
  { icon: ThumbsUp, label: "100% Satisfaction" },
  { icon: Award, label: "5-Star Rated" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-foreground mb-6">
              Yorba Linda's Most Trusted Detailing Team
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Auto Fresh, we believe every vehicle deserves the royal treatment. Founded with a passion for automotive care, we provide thorough, reliable, and affordable car detailing services that exceed expectations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our experienced team uses only premium products and proven techniques to deliver a spotless, showroom-quality finish — inside and out. Your satisfaction is our top priority.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3 bg-secondary rounded-lg p-3">
                  <s.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl font-bold font-display text-primary mb-2">5.0</div>
                <div className="text-lg font-semibold text-foreground mb-1">Star Rating</div>
                <p className="text-sm text-muted-foreground">Based on 10+ verified reviews</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
