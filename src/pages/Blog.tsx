import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Internet: Why Fiber Optics Matter",
      excerpt: "Discover how fiber optic technology is revolutionizing internet connectivity and why it's the future of digital communication.",
      date: "Dec 15, 2024",
      category: "Technology",
    },
    {
      title: "Home Network Optimization: 10 Pro Tips",
      excerpt: "Learn how to maximize your internet speed and WiFi coverage with these expert tips from our network engineers.",
      date: "Dec 10, 2024",
      category: "Tips & Tricks",
    },
    {
      title: "Business Internet: What You Need to Know",
      excerpt: "Essential guide for choosing the right internet plan for your business, including bandwidth requirements and security considerations.",
      date: "Dec 5, 2024",
      category: "Business",
    },
    {
      title: "Understanding Internet Speeds: Mbps vs Gbps",
      excerpt: "A comprehensive guide to understanding internet speeds and what different speed tiers mean for your daily usage.",
      date: "Nov 28, 2024",
      category: "Education",
    },
    {
      title: "Smart Home Setup: Getting Started",
      excerpt: "Everything you need to know about setting up a smart home with your fiber internet connection.",
      date: "Nov 20, 2024",
      category: "Smart Home",
    },
    {
      title: "WiFi 6 vs WiFi 6E: Which Router Should You Choose?",
      excerpt: "Compare the latest WiFi technologies and find out which router is best for your home or business.",
      date: "Nov 15, 2024",
      category: "Technology",
    },
  ];

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
              CableXpress <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Blog</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Tips, news, and insights about internet technology
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {posts.map((post, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span className="text-primary">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button variant="ghost" className="group/btn p-0" asChild>
                      <a href="tel:8885086472">
                        Call Us
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    </CardContent>
                  </Card>
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

export default Blog;
