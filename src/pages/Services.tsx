import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/home/ServicesSection";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Home, Building2, Wifi, Headset, Shield, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Comprehensive internet solutions for every need
            </motion.p>
          </div>
        </section>
        <ServicesSection />

        {/* Service Categories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-16"
            >
              Service Categories
            </motion.h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
              {[
                {
                  icon: Home,
                  title: "Residential Internet",
                  description: "Perfect for households of all sizes. Stream, game, and work from home with unlimited data.",
                  features: ["Up to 10 Gbps speeds", "No data caps", "Free router included", "24/7 support"]
                },
                {
                  icon: Building2,
                  title: "Business Solutions",
                  description: "Enterprise-grade connectivity with dedicated support for your business needs.",
                  features: ["Dedicated bandwidth", "Static IP addresses", "99.9% SLA guarantee", "Priority support"]
                },
              ].map((category, index) => (
                <motion.div 
                  key={index} 
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="p-8 rounded-lg bg-card hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-6">
                    <category.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                  <p className="text-muted-foreground mb-6">{category.description}</p>
                  <ul className="space-y-3 mb-6">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <a href="tel:8885086472">Call Now</a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-16"
            >
              Additional Services
            </motion.h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {[
                { icon: Wifi, title: "WiFi 6 Equipment", description: "Latest router technology for optimal coverage" },
                { icon: Headset, title: "Expert Installation", description: "Professional setup and configuration" },
                { icon: Shield, title: "Network Security", description: "Advanced protection against cyber threats" },
                { icon: Gauge, title: "Speed Testing", description: "Regular performance monitoring" },
              ].map((service, index) => (
                <motion.div 
                  key={index} 
                  variants={staggerItem}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="text-center p-8 rounded-lg bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex p-4 rounded-full bg-accent/10 text-accent mb-4">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
