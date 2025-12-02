import { Wifi, Tv, Building2, Wrench, Router, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import fiberImage from "@/assets/service-fiber.jpg";
import wifiImage from "@/assets/service-wifi.jpg";
import iptvImage from "@/assets/service-iptv.jpg";
import businessImage from "@/assets/service-business.jpg";
import installImage from "@/assets/service-installation.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Wifi,
      title: "Fiber Internet",
      description: "Lightning-fast fiber optic internet with speeds up to 1 Gbps for seamless streaming, gaming, and browsing. Experience the future of connectivity with our cutting-edge infrastructure.",
      image: fiberImage,
    },
    {
      icon: Router,
      title: "Home WiFi",
      description: "Complete home WiFi coverage with advanced WiFi 6 routers and mesh network support for every corner. Eliminate dead zones and enjoy consistent speeds throughout your home.",
      image: wifiImage,
    },
    {
      icon: Tv,
      title: "OTT / IPTV Bundle",
      description: "Stream your favorite shows with our IPTV packages including 200+ channels and premium content. Access unlimited entertainment with 4K streaming quality.",
      image: iptvImage,
    },
    {
      icon: Building2,
      title: "Business Broadband",
      description: "Reliable high-speed internet solutions for businesses with dedicated support and guaranteed uptime. Scalable bandwidth to grow with your business needs.",
      image: businessImage,
    },
    {
      icon: Wrench,
      title: "Network Installation",
      description: "Professional installation and setup services with same-day availability and expert technicians. Complete network configuration and optimization included.",
      image: installImage,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Comprehensive internet solutions tailored to your needs
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative animate-fade-in-${
                  index % 2 === 0 ? "left" : "right"
                } ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`animate-fade-in-${
                  index % 2 === 0 ? "right" : "left"
                } ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">
                    {service.title}
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Button size="lg" className="group" asChild>
                  <a href="tel:8885086472">
                    Call (888) 508-6472
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
