import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Remote Worker",
      rating: 5,
      text: "Switching to FiberNet was the best decision! The speeds are incredible, and I've had zero downtime in 6 months. Perfect for video calls and large file transfers.",
    },
    {
      name: "Michael Chen",
      role: "Gaming Enthusiast",
      rating: 5,
      text: "As a competitive gamer, low latency is crucial. FiberNet delivers consistent speeds with zero lag. I've noticed a huge improvement in my gaming performance!",
    },
    {
      name: "Emily Rodriguez",
      role: "Family of 5",
      rating: 5,
      text: "With everyone streaming, gaming, and working from home, we needed reliable internet. FiberNet handles it all without buffering. The customer service is exceptional too!",
    },
    {
      name: "David Thompson",
      role: "Small Business Owner",
      rating: 5,
      text: "Our business depends on fast, reliable internet. FiberNet's business plan has been flawless. The dedicated support team is always there when we need them.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Join thousands of satisfied customers enjoying ultra-fast internet
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="overflow-hidden px-2 sm:px-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <Card className="bg-card/50 backdrop-blur-sm border-2">
                    <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 sm:px-6 text-center">
                      {/* Stars */}
                      <div className="flex justify-center gap-1 mb-4 sm:mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 italic max-w-2xl mx-auto">
                        "{testimonial.text}"
                      </p>

                      {/* Author */}
                      <div>
                        <p className="font-semibold text-base sm:text-lg">{testimonial.name}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-background shadow-lg hover:bg-muted transition-all z-10"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-background shadow-lg hover:bg-muted transition-all z-10"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
