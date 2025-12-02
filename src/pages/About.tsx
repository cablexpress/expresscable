import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Target, Award, Heart, Zap, Shield, Clock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, slideInLeft, slideInRight } from "@/lib/animations";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">CableXpress</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Leading the way in fiber optic internet technology since 2009
            </motion.p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInLeft}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Target className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground text-lg">
                  To provide every home and business with access to ultra-fast, reliable internet that empowers them to achieve more. We believe high-speed connectivity should be accessible, affordable, and dependable.
                </p>
              </motion.div>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInRight}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                    <Heart className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground text-lg">
                  To be the most trusted internet service provider, known for innovation, customer care, and community impact. We're building the infrastructure for tomorrow, today.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-16"
            >
              Our Core Values
            </motion.h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {[
                { icon: Users, title: "Customer First", description: "Your satisfaction drives everything we do" },
                { icon: Award, title: "Excellence", description: "We never compromise on quality or service" },
                { icon: Heart, title: "Community", description: "Committed to giving back and making a difference" },
              ].map((value, index) => (
                <motion.div 
                  key={index} 
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="text-center p-8 rounded-lg bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-6">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto"
            >
              {[
                { number: "15+", label: "Years Experience" },
                { number: "500K+", label: "Happy Customers" },
                { number: "200+", label: "Cities Covered" },
                { number: "99.9%", label: "Uptime Guarantee" },
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  variants={staggerItem}
                  className="text-center"
                >
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-16"
            >
              Why Choose CableXpress?
            </motion.h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            >
              {[
                { icon: Zap, title: "Lightning Fast", description: "Experience speeds up to 10 Gbps" },
                { icon: Shield, title: "Secure Network", description: "Enterprise-grade security included" },
                { icon: Clock, title: "24/7 Support", description: "Always here when you need us" },
                { icon: TrendingUp, title: "Future-Proof", description: "Infrastructure built for tomorrow" },
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={staggerItem}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="text-center p-6 rounded-lg bg-card"
                >
                  <div className="inline-flex p-4 rounded-full bg-accent/10 text-accent mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Meet the experts driving innovation in fiber optic technology
              </p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {[
                { name: "Sarah Johnson", role: "CEO & Founder", experience: "20+ years in telecommunications" },
                { name: "Michael Chen", role: "CTO", experience: "Expert in fiber optic infrastructure" },
                { name: "Emily Rodriguez", role: "Head of Customer Success", experience: "15+ years in customer service" },
              ].map((member, index) => (
                <motion.div 
                  key={index} 
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="text-center p-8 rounded-lg bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
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

export default About;
