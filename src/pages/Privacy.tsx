import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">Last updated: December 2024</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly to us, including name, email address, phone number, 
                billing address, and payment information when you sign up for our services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to provide, maintain, and improve our services, process your 
                transactions, send you technical notices and support messages, and respond to your comments and questions.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not share your personal information with third parties except as described in this policy. 
                We may share information with vendors, service providers, and other partners who support our business.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We take reasonable measures to help protect your personal information from loss, theft, misuse, 
                unauthorized access, disclosure, alteration, and destruction.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to access, update, or delete your personal information. You may also opt out 
                of receiving promotional communications from us at any time.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this Privacy Policy, please contact us at 
                (888) 508-6472.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
