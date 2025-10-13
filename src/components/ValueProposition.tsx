import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const ValueProposition = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 text-base px-6 py-2">
            <Sparkles className="mr-2 h-4 w-4" />
            Limited Time Offer
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Leave a Little Luxury Wherever You Glow This Holiday Season
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            At Luxury Holiday Lighting, we specialize in creating stunning, custom LED light displays that capture the magic of the season. From initial design to professional installation, ongoing maintenance, and post-season removal—we handle every detail so you can enjoy a stress-free, picture-perfect holiday display.
          </p>

          <div className="bg-accent/10 border-2 border-accent rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-accent mb-3">
              🎁 Early Bird Special
            </h3>
            <p className="text-lg text-foreground">
              Book before November 1st and save <span className="font-bold text-accent">10% on all installations</span>
            </p>
          </div>

          <Button variant="premium" size="lg">
            <Sparkles className="mr-2 h-5 w-5" />
            View Offer Details
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
