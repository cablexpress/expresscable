import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/hero-isp.jpg";
import promoImage from "@/assets/promo-banner.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage,
      badge: "Limited Time Offer",
      title: "Ultra-Fast Fiber Internet",
      subtitle: "Experience speeds up to 1 Gbps with unlimited data",
      cta1: "View Plans",
      cta2: "Check Availability",
    },
    {
      image: promoImage,
      badge: "50% OFF First 6 Months",
      title: "Connect Your Home to the Future",
      subtitle: "Premium WiFi 6 router included with all plans",
      cta1: "Get Started",
      cta2: "Learn More",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-[600px] h-[calc(100vh-5rem)] md:h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => {
        // Unique layout per slide
        let contentLayout = null;
        if (index === 0) {
          // Left-aligned, vertical stack
          contentLayout = (
            <div className="relative container mx-auto px-4 sm:px-6 h-full flex items-center justify-start z-10">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-2xl text-left relative z-10 py-8"
              >
                {/* Badge */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/50 mb-4 sm:mb-6"
                >
                  <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                  <span className="text-xs sm:text-sm font-semibold text-accent">{slide.badge}</span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
                >
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                    {slide.title}
                  </span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
                >
                  <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto" asChild>
                    <a href="tel:8885086472">{slide.cta1}</a>
                  </Button>
                  <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto" asChild>
                    <a href="tel:8885086472">{slide.cta2}</a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          );
        } else if (index === 1) {
          // Centered, horizontal stack, badge on top, CTAs below
          contentLayout = (
            <div className="relative container mx-auto px-4 sm:px-6 h-full flex flex-col items-center justify-center text-center z-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full max-w-3xl flex flex-col items-center relative z-10 py-8"
              >
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/50 mb-4 sm:mb-6"
                >
                  <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                  <span className="text-xs sm:text-sm font-semibold text-accent">{slide.badge}</span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
                >
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                    {slide.title}
                  </span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full"
                >
                  <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto" asChild>
                    <a href="tel:8885086472">{slide.cta1}</a>
                  </Button>
                  <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto" asChild>
                    <a href="tel:8885086472">{slide.cta2}</a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          );
        } else {
          // Default fallback (future slides)
          contentLayout = (
            <div className="relative container mx-auto px-4 h-full flex items-center justify-end z-10">
              <div className="max-w-2xl animate-fade-in-up text-right ml-auto relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/50 mb-6 animate-glow-pulse ml-auto">
                  <Zap className="h-4 w-4 text-accent" />
                  <span className="text-sm font-semibold text-accent">{slide.badge}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                    {slide.title}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4 justify-end">
                  <Button size="lg" className="text-lg px-8" asChild>
                    <a href="tel:8885086472">{slide.cta1}</a>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                    <a href="tel:8885086472">{slide.cta2}</a>
                  </Button>
                </div>
              </div>
            </div>
          );
        }
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Reduced overlay opacity */}
              <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/60 to-background/20" />
            </div>
            {/* Content */}
            {contentLayout}
          </div>
        );
      })}

      // ...arrows removed...

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-background/50 hover:bg-background/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
