import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Booking request sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", date: "", message: "" });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-foreground">Book Your Detail Today</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              <Input placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Phone Number" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <Input placeholder="Preferred Date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            </div>
            <Textarea placeholder="Tell us about your vehicle and what services you need..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} />
            <Button type="submit" size="lg" className="w-full">Send Booking Request</Button>
          </motion.form>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {[
                { icon: MapPin, text: "4795 Carmonita Ln, Yorba Linda, CA 92886" },
                { icon: Phone, text: "(714) 555-0123" },
                { icon: Mail, text: "info@autofreshcalifornia.com" },
                { icon: Clock, text: "Open Wednesday–Sunday, 8 AM – 6 PM" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="rounded-lg overflow-hidden border border-border h-64">
              <iframe
                title="Auto Fresh Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.0!2d-117.8!3d33.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUyJzQ4LjAiTiAxMTfCsDQ4JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
