import { useEffect, useRef } from "react";
import banner1 from "@/assets/banner-wifi-1.jpg";
import banner2 from "@/assets/banner-promo-1.jpg";
import banner3 from "@/assets/banner-smart-home.jpg";

const BannerGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const banners = [banner1, banner2, banner3, banner1, banner2, banner3];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="mb-12 text-center animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Campaigns
          </span>
        </h2>
        <p className="text-xl text-muted-foreground">
          Exclusive offers and WiFi solutions for everyone
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[800px] h-[300px] rounded-2xl overflow-hidden"
          >
            <img
              src={banner}
              alt={`Campaign Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BannerGallery;
