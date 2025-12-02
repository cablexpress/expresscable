import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Check, Globe, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Coverage = () => {
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
              Coverage <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Area</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Check if CableXpress is available in your area
            </motion.p>
          </div>
        </section>

        {/* ZIP Checker */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-6">
                <MapPin className="h-12 w-12" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Check Service Availability</h2>
              <p className="text-muted-foreground mb-8">
                Enter your ZIP code to see if our fiber network is available in your area
              </p>
              <div className="flex gap-2 max-w-md mx-auto mb-12">
                <Input
                  type="text"
                  placeholder="Enter ZIP Code"
                  className="text-lg"
                />
                <Button size="lg" className="px-8" asChild>
                  <a href="tel:8885086472">Call Us</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Coverage Stats */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-16"
            >
              Our Expanding Network
            </motion.h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
            >
              {[
                { icon: Globe, number: "200+", label: "Cities Covered" },
                { icon: Users, number: "500K+", label: "Happy Customers" },
                { icon: TrendingUp, number: "50+", label: "New Cities/Year" },
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="text-center p-8 rounded-lg bg-card"
                >
                  <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
                    <stat.icon className="h-10 w-10" />
                  </div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Coverage Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-16"
            >
              Coverage Highlights
            </motion.h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {[
                "200+ Cities Covered",
                "500,000+ Connected Homes",
                "Growing Every Month",
                "Urban & Suburban Areas",
                "Business Districts",
                "New Developments",
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={staggerItem}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 p-6 rounded-lg bg-card hover:shadow-lg transition-shadow"
                >
                  <Check className="h-6 w-6 text-accent shrink-0" />
                  <span className="text-lg font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Regional Coverage */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-16"
            >
              Regional Coverage
            </motion.h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            >
              {[
                { region: "Northeast", cities: 65, status: "Fully Covered" },
                { region: "Southeast", cities: 52, status: "Expanding" },
                { region: "Midwest", cities: 48, status: "Growing" },
                { region: "West Coast", cities: 35, status: "Coming Soon" },
              ].map((area, index) => (
                <motion.div 
                  key={index} 
                  variants={staggerItem}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="p-6 rounded-lg bg-card hover:shadow-lg transition-shadow text-center"
                >
                  <h3 className="text-xl font-bold mb-2">{area.region}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{area.cities}</div>
                  <p className="text-sm text-muted-foreground mb-3">Cities</p>
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                    {area.status}
                  </div>
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

export default Coverage;
