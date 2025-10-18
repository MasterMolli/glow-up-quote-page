import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import heroImage from "@/assets/hero-luxury-home.jpg";

const Hero = () => {
  const scrollToQuote = () => {
    document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#150000]/85 via-[#0A0A0A]/90 to-[#B89146]/35" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground text-glow-gold mb-6 animate-fade-in">
          Luxury Holiday Lighting
        </h1>
        <p
          className="text-2xl md:text-3xl text-foreground/90 mb-4 font-light animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Bring Luxury to Your Holidays with Professional Lighting Installation
        </p>
        <p
          className="text-lg md:text-xl text-foreground/80 mb-10 max-w-3xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Transform your home or business into a breathtaking holiday masterpiece — without the hassle.
        </p>
        <Button
          variant="premium"
          size="xl"
          onClick={scrollToQuote}
          className="animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Gift className="mr-2 h-5 w-5" />
          Get a Free Quote
        </Button>
      </div>

      {/* Decorative glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
