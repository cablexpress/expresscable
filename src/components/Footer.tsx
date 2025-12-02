import { Link } from "react-router-dom";
import { Wifi, Facebook, Twitter, Instagram, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg 
                className="h-8 w-8" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z" 
                  fill="url(#footerLogoGradient)" 
                  stroke="url(#footerStrokeGradient)" 
                  strokeWidth="2"
                />
                <path 
                  d="M35 35 L50 50 L65 35" 
                  stroke="white" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  opacity="0.9"
                />
                <path 
                  d="M35 50 L50 50 L65 50" 
                  stroke="white" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <path 
                  d="M35 65 L50 50 L65 65" 
                  stroke="white" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  opacity="0.9"
                />
                <circle cx="50" cy="50" r="6" fill="white" />
                <circle cx="35" cy="35" r="3" fill="white" opacity="0.8" />
                <circle cx="65" cy="35" r="3" fill="white" opacity="0.8" />
                <circle cx="35" cy="65" r="3" fill="white" opacity="0.8" />
                <circle cx="65" cy="65" r="3" fill="white" opacity="0.8" />
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="50%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" />
                  </linearGradient>
                  <linearGradient id="footerStrokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CableXpress
              </span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              Connecting homes and businesses with ultra-fast fiber internet. Experience the future of connectivity.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-muted-foreground hover:text-primary transition-colors">
                  Plans & Pricing
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-muted-foreground hover:text-primary transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Call Us</p>
                  <p>(888) 508-6472</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-border">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Stay Connected</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
              Subscribe to our newsletter for the latest offers and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto px-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 sm:py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
              />
              <Button className="px-6 sm:px-8 w-full sm:w-auto" asChild>
                <a href="tel:8885086472">Call Now</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-border text-center text-muted-foreground">
          <p className="text-xs sm:text-sm">&copy; 2024 CableXpress. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
