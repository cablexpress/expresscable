import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/home/ContactSection";
import { Phone, Clock, MessageSquare, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Button } from "@/components/ui/button";

const Contact = () => {
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
              Contact <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Us</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              We're here to help with all your internet needs
            </motion.p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {[
                { icon: Phone, title: "Call Us", info: "(888) 508-6472", subinfo: "Toll-free support" },
                { icon: Clock, title: "Hours", info: "24/7 Support", subinfo: "Always available" },
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-lg font-medium mb-1">{item.info}</p>
                  <p className="text-sm text-muted-foreground">{item.subinfo}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <ContactSection />

        {/* Contact Methods */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-16"
            >
              More Ways to Reach Us
            </motion.h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {[
                {
                  icon: MessageSquare,
                  title: "Live Chat",
                  description: "Get instant answers from our support team",
                  action: "Start Chat",
                  available: "Available 24/7"
                },
                {
                  icon: Headphones,
                  title: "Technical Support",
                  description: "Expert help for technical issues",
                  action: "Call Support",
                  available: "1-800-TECH-SUP"
                },
              ].map((method, index) => (
                <motion.div 
                  key={index} 
                  variants={staggerItem}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="p-8 rounded-lg bg-card hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex p-4 rounded-full bg-accent/10 text-accent mb-6">
                    <method.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <p className="text-sm text-primary font-medium mb-6">{method.available}</p>
                  <Button className="w-full" asChild>
                    <a href="tel:8885086472">Call Now</a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Quick Answers</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Looking for quick answers? Check out our most common questions
              </p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {[
                "How do I set up my router?",
                "What's my account number?",
                "How to upgrade my plan?",
                "Troubleshoot slow speeds",
                "Schedule an installation",
                "Report an outage",
              ].map((question, index) => (
                <motion.div 
                  key={index} 
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="p-6 rounded-lg bg-card hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <p className="font-medium">{question}</p>
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

export default Contact;
