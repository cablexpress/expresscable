import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingSection from "@/components/home/PricingSection";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Check, X } from "lucide-react";

const Plans = () => {
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
              Plans & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Pricing</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Choose the perfect plan for your internet needs
            </motion.p>
          </div>
        </section>
        <PricingSection />

        {/* Plan Comparison */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-16"
            >
              Detailed Plan Comparison
            </motion.h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-6xl mx-auto overflow-x-auto"
            >
              <table className="w-full bg-card rounded-lg overflow-hidden">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="p-4 text-left font-bold">Features</th>
                    <th className="p-4 text-center font-bold">Basic</th>
                    <th className="p-4 text-center font-bold">Pro</th>
                    <th className="p-4 text-center font-bold">Ultra</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Download Speed", basic: "500 Mbps", pro: "1 Gbps", ultra: "10 Gbps" },
                    { feature: "Upload Speed", basic: "500 Mbps", pro: "1 Gbps", ultra: "10 Gbps" },
                    { feature: "Data Cap", basic: "Unlimited", pro: "Unlimited", ultra: "Unlimited" },
                    { feature: "Free Router", basic: true, pro: true, ultra: true },
                    { feature: "WiFi 6 Router", basic: false, pro: true, ultra: true },
                    { feature: "Priority Support", basic: false, pro: false, ultra: true },
                    { feature: "Static IP", basic: false, pro: "Add-on", ultra: "Included" },
                    { feature: "Professional Installation", basic: "$99", pro: "Free", ultra: "Free" },
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center">
                        {typeof row.basic === 'boolean' ? (
                          row.basic ? <Check className="h-5 w-5 text-accent mx-auto" /> : <X className="h-5 w-5 text-muted-foreground mx-auto" />
                        ) : (
                          row.basic
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? <Check className="h-5 w-5 text-accent mx-auto" /> : <X className="h-5 w-5 text-muted-foreground mx-auto" />
                        ) : (
                          row.pro
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.ultra === 'boolean' ? (
                          row.ultra ? <Check className="h-5 w-5 text-accent mx-auto" /> : <X className="h-5 w-5 text-muted-foreground mx-auto" />
                        ) : (
                          row.ultra
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* Add-Ons */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-4"
            >
              Optional Add-Ons
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
            >
              Enhance your plan with these additional features
            </motion.p>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {[
                { title: "Advanced Security", price: "$9.99/mo", description: "Premium firewall and threat protection" },
                { title: "Static IP Address", price: "$14.99/mo", description: "Dedicated IP for remote access" },
                { title: "WiFi 6E Router Upgrade", price: "$19.99/mo", description: "Latest WiFi technology" },
                { title: "Mesh WiFi System", price: "$24.99/mo", description: "Whole-home coverage" },
                { title: "Priority Support", price: "$4.99/mo", description: "24/7 dedicated support line" },
                { title: "Cloud Storage", price: "$9.99/mo", description: "1TB secure cloud backup" },
              ].map((addon, index) => (
                <motion.div 
                  key={index} 
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="p-6 rounded-lg bg-card hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-2">{addon.title}</h3>
                  <div className="text-3xl font-bold text-primary mb-3">{addon.price}</div>
                  <p className="text-muted-foreground">{addon.description}</p>
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

export default Plans;
