import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQSection from "@/components/home/FAQSection";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { HelpCircle, MessageSquare, Phone, Book } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQ = () => {
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
              Frequently Asked <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Questions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Find answers to common questions about our services
            </motion.p>
          </div>
        </section>
        <FAQSection />

        {/* Help Categories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-16"
            >
              Need More Help?
            </motion.h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            >
              {[
                { icon: HelpCircle, title: "Support Center", description: "Browse our knowledge base" },
                { icon: MessageSquare, title: "Live Chat", description: "Chat with support team" },
                { icon: Phone, title: "Call Us", description: "Speak with an expert" },
                { icon: Book, title: "User Guides", description: "Step-by-step tutorials" },
              ].map((category, index) => (
                <motion.div 
                  key={index} 
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="tel:8885086472">Call Now</a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-16"
            >
              Popular Topics
            </motion.h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {[
                "Getting Started Guide",
                "Account Management",
                "Billing & Payments",
                "Technical Support",
                "Equipment Setup",
                "Speed Optimization",
                "Network Security",
                "Plan Upgrades",
                "Service Areas",
              ].map((topic, index) => (
                <motion.div 
                  key={index} 
                  variants={staggerItem}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="p-4 rounded-lg bg-card hover:shadow-lg transition-shadow cursor-pointer flex items-center justify-between"
                >
                  <span className="font-medium">{topic}</span>
                  <span className="text-primary">→</span>
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

export default FAQ;
