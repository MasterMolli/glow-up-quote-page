import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Luxury Holiday Lighting</h3>
            <p className="text-primary-foreground/80 mb-4">
              Professional holiday lighting installation serving Lebanon PA + !
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(717) 376 4992</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>holidaylightinglux@gmail.com</span>
              </div>
              <div>
                <p className="font-medium">Service Area:</p>
                <p className="text-primary-foreground/80">Lebanon, Annville, Hershey PA</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
<div>
  <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
  <div className="flex gap-4">
    <a
      href="https://www.facebook.com/profile.php?id=61582269458806" // ← replace with your actual Facebook page
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit our Facebook page"
      className="transition-all hover:text-accent hover:drop-shadow-[0_0_6px_hsl(45,85%,55%)]"
    >
      <Facebook className="h-6 w-6" />
    </a>
    <a
      href="https://www.instagram.com/luxuryholidaylighting" // ← replace with your actual Instagram page
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit our Instagram page"
      className="transition-all hover:text-accent hover:drop-shadow-[0_0_6px_hsl(45,85%,55%)]"
    >
      <Instagram className="h-6 w-6" />
    </a>
  </div>
</div>

        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {currentYear} Luxury Holiday Lighting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
