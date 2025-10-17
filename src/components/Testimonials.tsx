import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Harrisburg, PA",
      text: "The team transformed our home into a holiday masterpiece! The attention to detail was incredible, and our neighbors can't stop talking about how beautiful it looks. Worth every penny!",
      rating: 5
    },
    {
      name: "David Chen",
      location: "Lancaster, PA",
      text: "As a business owner, I needed something that would draw attention without looking tacky. They delivered a sophisticated display that perfectly matched our brand. Sales increased 30% during the holiday season!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      location: "Lancaster, PA",
      text: "Best decision we made this year! From start to finish, the process was seamless. They handled everything. design, installation, and removal. No ladders, no stress, just pure holiday magic.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Reputation That Shines as Bright as Our Lights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from our delighted clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
