import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      speed: "100 Mbps",
      price: "29.99",
      features: [
        "Up to 100 Mbps download speed",
        "Unlimited data",
        "Basic WiFi router included",
        "24/7 customer support",
        "1 device installation",
      ],
      popular: false,
    },
    {
      name: "Pro",
      speed: "500 Mbps",
      price: "49.99",
      features: [
        "Up to 500 Mbps download speed",
        "Unlimited data",
        "WiFi 6 router included",
        "Priority customer support",
        "3 device installation",
        "Free streaming service (3 months)",
      ],
      popular: true,
    },
    {
      name: "Ultra",
      speed: "1 Gbps",
      price: "79.99",
      features: [
        "Up to 1 Gbps download speed",
        "Unlimited data",
        "Premium WiFi 6E mesh system",
        "VIP customer support",
        "Unlimited device installation",
        "Free streaming service (6 months)",
        "Smart home integration",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Choose Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Flexible plans designed for every need and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative group hover:shadow-2xl transition-all duration-300 ${
                plan.popular
                  ? "border-primary shadow-lg scale-105 hover:scale-110"
                  : "hover:scale-105"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="text-5xl font-bold mb-2">
                  <span className="text-primary">${plan.price}</span>
                  <span className="text-lg text-muted-foreground">/mo</span>
                </div>
                <p className="text-muted-foreground">{plan.speed}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  asChild
                >
                  <a href="tel:8885086472">Call Now</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12">
          All plans include free installation and a 30-day money-back guarantee
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
