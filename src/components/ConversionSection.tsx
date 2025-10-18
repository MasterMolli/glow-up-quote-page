import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ConversionSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    const form = e.currentTarget;
    const submitBtn = form.querySelector("button[type='submit']") as HTMLButtonElement;
    submitBtn.disabled = true;

    try {
      const res = await fetch("/api/submit-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Quote request received! We'll contact you within 24 hours.");

        // ✅ Clear input values (fix for mobile browsers)
        form.reset();
        setFormData({ name: "", email: "", phone: "", message: "" });

        // ✅ Small delay before re-enabling button
        setTimeout(() => (submitBtn.disabled = false), 2000);
      } else {
        toast.error("Something went wrong. Please try again later.");
        submitBtn.disabled = false;
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Server error. Please try again later.");
      submitBtn.disabled = false;
    }
  };

  return (
    <section id="quote-section" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ready to Light Up Your Holidays in Style?
            </h2>
            <p className="text-lg text-muted-foreground">
              Book early to secure your preferred installation date. Limited spots available for the 2025-2026 season!
            </p>
          </div>

          <Card className="shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your project (Optional)
                  </label>
                  <Textarea
                    id="message"
                    placeholder="I'm interested in residential lighting for a 2-story home..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>

                <Button type="submit" variant="premium" size="lg" className="w-full">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Get Your Free Quote
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Or reach out directly:
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4 text-sm">
                  
                  {/* ✅ Click-to-call */}
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a
                      href="tel:+17173764992"
                      className="text-foreground hover:text-secondary underline-offset-2 hover:underline active:opacity-80 transition"
                    >
                      (717) 376 4992
                    </a>
                  </div>

                  {/* ✅ Click-to-email */}
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <a
                      href="mailto:holidaylightinglux@gmail.com"
                      className="text-foreground hover:text-secondary underline-offset-2 hover:underline active:opacity-80 transition"
                    >
                      holidaylightinglux@gmail.com
                    </a>
                  </div>

                  {/* ✅ Location (static text) */}
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Lebanon PA & Surrounding areas!</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ConversionSection;
