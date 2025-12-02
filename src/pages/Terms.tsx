import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms & Conditions</h1>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">Last updated: December 2024</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using WaveNet services, you accept and agree to be bound by the terms and 
                provisions of this agreement. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Service Description</h2>
              <p className="text-muted-foreground mb-4">
                WaveNet provides high-speed internet connectivity services. We reserve the right to modify, 
                suspend, or discontinue any aspect of the service at any time with reasonable notice.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. User Obligations</h2>
              <p className="text-muted-foreground mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the service in compliance with all applicable laws</li>
                <li>Not engage in activities that could harm the network or other users</li>
                <li>Pay all fees in a timely manner</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Services are billed monthly in advance. Late payments may result in service suspension. 
                We accept major credit cards and automated bank transfers for payment.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Service Level Agreement</h2>
              <p className="text-muted-foreground mb-4">
                We strive to maintain 99.9% uptime. Scheduled maintenance will be announced in advance. 
                We are not liable for service interruptions due to circumstances beyond our control.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Termination</h2>
              <p className="text-muted-foreground mb-4">
                Either party may terminate service with 30 days written notice. We reserve the right to 
                immediately terminate service for violations of these terms or illegal activities.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                WaveNet shall not be liable for any indirect, incidental, or consequential damages arising 
                from the use or inability to use our services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground mb-6">
                For questions about these Terms & Conditions, please call 
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

export default Terms;
