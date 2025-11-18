import { Facebook, Instagram, Twitter, Youtube, Globe } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">JOMHA</h3>
            <p className="text-primary-foreground/80 text-sm">
              Experience authentic tribal cuisine and cultural heritage in every dish we serve.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#menu" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Udit Nagar, Rourkela</li>
              <li>Odisha 769012</li>
              <li>Phone: +91 82603 72068</li>
              <li>Email: jomhatribalcuisine@gmail.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors" aria-label="Youtube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-primary-foreground/80 mt-6">All Day 11AM - 10PM</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p className="flex items-center justify-center gap-2 flex-wrap">&copy; {new Date().getFullYear()} JOMHA Restaurant. All rights reserved. | Developed With ❤️ By <a href="https://kindo-brutal-flow.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-colors underline inline-flex items-center gap-1">Edward Kindo <Globe size={14} /></a> & <a href="https://www.instagram.com/atty_a30/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-colors underline inline-flex items-center gap-1">Atish Niketan <Instagram size={14} /></a></p>
        </div>
      </div>
    </footer>;
};
export default Footer;