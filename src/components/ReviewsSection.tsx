import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Art McCoy",
    text: "Auto Fresh did an amazing job on my SUV. The interior looks brand new and the exterior is gleaming. Highly recommend their attention to detail!",
    rating: 5,
  },
  {
    name: "Amin Rafiq",
    text: "Best detailing service in Yorba Linda! They were on time, professional, and my car has never looked this good. Will definitely be a returning customer.",
    rating: 5,
  },
  {
    name: "Hadi Ahmadi",
    text: "Incredible work on my engine bay and full exterior detail. The team went above and beyond. Five stars all the way!",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-foreground">What Our Customers Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-lg p-6 border border-border relative"
            >
              <Quote className="w-8 h-8 text-primary/15 absolute top-4 right-4" />
              <div className="flex mb-3">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-shine text-shine" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {r.name.split(" ").map(n => n[0]).join("")}
                </div>
                <span className="font-semibold text-foreground text-sm">{r.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
