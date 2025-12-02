import { Users, Award, Headphones, Shield } from "lucide-react";
import wifiImage from "@/assets/service-wifi.jpg";

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "500K+", label: "Happy Customers" },
    { icon: Award, value: "99.9%", label: "Uptime Guarantee" },
    { icon: Headphones, value: "24/7", label: "Customer Support" },
    { icon: Shield, value: "15+", label: "Years Experience" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={wifiImage}
                alt="WaveNet Service"
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-4 sm:-right-6 md:-right-8 bg-card p-4 sm:p-5 md:p-6 rounded-xl shadow-xl border border-border animate-float">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">1 Gbps</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Lightning Fast Speed</p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-right">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                WaveNet?
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              We're revolutionizing internet connectivity with cutting-edge fiber optic technology. 
              Our mission is to provide ultra-fast, reliable internet that empowers you to work, 
              play, and connect without limits.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <div>
                  <p className="font-semibold">Lightning-Fast Speeds</p>
                  <p className="text-muted-foreground">Experience internet speeds up to 1 Gbps with zero lag</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <div>
                  <p className="font-semibold">Reliable Connection</p>
                  <p className="text-muted-foreground">99.9% uptime guarantee with fiber optic technology</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <div>
                  <p className="font-semibold">Expert Support</p>
                  <p className="text-muted-foreground">24/7 customer service from our dedicated team</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
