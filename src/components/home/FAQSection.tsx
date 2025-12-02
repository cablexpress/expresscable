import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is fiber optic internet?",
      answer:
        "Fiber optic internet uses thin strands of glass to transmit data as pulses of light, delivering much faster and more reliable speeds than traditional cable or DSL connections. It's the most advanced internet technology available today.",
    },
    {
      question: "How fast is your internet service?",
      answer:
        "We offer speeds ranging from 100 Mbps to 1 Gbps depending on your plan. Our fiber network delivers symmetrical upload and download speeds, meaning you get the same fast speeds in both directions.",
    },
    {
      question: "Is there a data cap?",
      answer:
        "No! All our plans come with unlimited data. You can stream, game, work, and browse as much as you want without worrying about overage charges or throttling.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Professional installation typically takes 2-4 hours. Our technicians will set up your equipment, ensure optimal WiFi coverage, and test your connection. We offer same-day and next-day installation slots.",
    },
    {
      question: "What equipment is included?",
      answer:
        "All plans include a modern WiFi router at no extra cost. Pro and Ultra plans include advanced WiFi 6 or WiFi 6E routers for maximum performance. All equipment is professionally installed and configured.",
    },
    {
      question: "Can I bundle with TV services?",
      answer:
        "Yes! We offer IPTV bundles with 200+ channels, including sports, movies, and premium content. Our streaming service works seamlessly with your fiber internet connection.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not satisfied with our service within the first 30 days, you can cancel and receive a full refund, no questions asked.",
    },
    {
      question: "Do you offer business plans?",
      answer:
        "Absolutely! We have dedicated business internet plans with guaranteed uptime, priority support, static IP addresses, and scalable bandwidth options to meet your business needs.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-4 sm:px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold text-sm sm:text-base pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
