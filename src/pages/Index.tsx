import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ConversionSection from "@/components/ConversionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ValueProposition />
      <Services />
      <Testimonials />
      <ConversionSection />
      <Footer />
    </div>
  );
};

export default Index;
