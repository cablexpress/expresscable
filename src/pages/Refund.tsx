import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Refund = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Refund Policy</h1>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">Last updated: December 2024</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">30-Day Money-Back Guarantee</h2>
              <p className="text-muted-foreground mb-4">
                We stand behind the quality of our service. If you're not completely satisfied with WaveNet 
                within the first 30 days of service, we'll refund your money—no questions asked.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Eligible Refunds</h2>
              <p className="text-muted-foreground mb-4">
                Refunds are available for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Service cancellations within the first 30 days</li>
                <li>Unused portions of prepaid service fees (pro-rated)</li>
                <li>Installation fees if service is not successfully installed</li>
                <li>Equipment deposits upon return of undamaged equipment</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Non-Refundable Items</h2>
              <p className="text-muted-foreground mb-4">
                The following are not eligible for refund:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Service fees after the 30-day guarantee period</li>
                <li>Third-party charges (streaming services, etc.)</li>
                <li>Equipment purchases (non-rental items)</li>
                <li>Promotional discounts or special offers</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Refund Process</h2>
              <p className="text-muted-foreground mb-6">
                To request a refund, contact our customer service team at (888) 508-6472. 
                Refunds are typically processed within 5-7 business days and will be 
                credited back to your original payment method.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Equipment Returns</h2>
              <p className="text-muted-foreground mb-4">
                Rented equipment must be returned within 30 days of service cancellation. Equipment must be 
                in good working condition. A prepaid return label will be provided upon request.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Refund;
