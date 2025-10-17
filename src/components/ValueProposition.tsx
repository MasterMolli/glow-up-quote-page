import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ValueProposition = () => {
  const [open, setOpen] = useState(false);

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
            At Luxury Holiday Lighting, we specialize in creating stunning, custom LED light displays that capture the magic of the season. 
            From initial design to professional installation, ongoing maintenance, and post-season removal — we handle every detail so you can enjoy a 
            stress-free, picture-perfect holiday display.
          </p>

          <div className="bg-accent/10 border-2 border-accent rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-accent mb-3">
              🎁 Early Bird Special
            </h3>
            <p className="text-lg text-foreground">
              Book before November 1st and save <span className="font-bold text-accent">10% on all installations</span>
            </p>
          </div>

          {/* 🔘 The Button */}
          <Button variant="premium" size="lg" onClick={() => setOpen(true)}>
            <Sparkles className="mr-2 h-5 w-5" />
            View Offer Details
          </Button>

          {/* 💬 The Popup Modal */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-lg bg-background border-accent/50 border shadow-lg">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-accent">
                  🎄 Luxury Holiday Lighting Offer
                </DialogTitle>
              </DialogHeader>
              <div className="text-left space-y-4 text-muted-foreground mt-4">
                <p>✨ **Full-Service Installation** — We handle design, setup, and takedown.</p>
                <p>💡 **Premium LED Lights** — Energy-efficient, custom-fit for your home.</p>
                <p>🧰 **Free Maintenance** — Any bulb replacements or fixes are covered.</p>
                <p>🎁 **Book by November 1st** and get <b>10% off</b> your installation.</p>
              </div>
              <div className="flex justify-end pt-6">
                <Button variant="secondary" onClick={() => setOpen(false)}>
                  Close
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;