import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, CheckCircle2 } from "lucide-react";
import residentialImage from "@/assets/residential-lighting.jpg";
import commercialImage from "@/assets/commercial-lighting.jpg";

const Services = () => {
  const scrollToQuote = () => {
    document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Lighting for Every Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a homeowner looking to add festive charm or a business seeking to attract customers, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Residential Card */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={residentialImage} 
                alt="Elegant residential holiday lighting installation" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Home className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Residential Lighting</CardTitle>
              </div>
              <CardDescription className="text-base">
                Transform your home into a holiday wonderland
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Custom LED design tailored to your home's architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Professional installation by insured technicians</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Full-season maintenance and post-holiday removal</span>
                </li>
              </ul>
              <Button variant="hero" className="w-full" onClick={scrollToQuote}>
                Get a Quote
              </Button>
            </CardContent>
          </Card>

          {/* Commercial Card */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={commercialImage} 
                alt="Professional commercial holiday lighting display" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Commercial Lighting</CardTitle>
              </div>
              <CardDescription className="text-base">
                Attract customers with eye-catching displays
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Branded, custom displays that match your business identity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>High-impact LED installations for maximum visibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Flexible scheduling to minimize business disruption</span>
                </li>
              </ul>
              <Button variant="hero" className="w-full" onClick={scrollToQuote}>
                Get a Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
