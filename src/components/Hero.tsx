import { Instagram, Facebook } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBanner})`
    }}>
        <div className="absolute inset-0 bg-primary/90" />
      </div>
      
      <div className="relative z-10 container-custom text-center text-primary-foreground px-4">
        <h1 className="font-brillant text-5xl md:text-7xl font-bold mb-6 tracking-tight uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000 lg:text-8xl">
          JOMHA
        </h1>
        
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 font-medium">
          Authentic Tribal Cuisine Restaurant | Experience the rich heritage and authentic flavors of traditional tribal cooking
        </p>
        <div className="flex gap-6 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <a href="https://www.instagram.com/jomha.restro" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1" aria-label="Instagram">
            <Instagram className="w-6 h-6 text-primary-foreground" />
          </a>
          <a href="https://www.facebook.com/share/1A3APocFBk/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1" aria-label="Facebook">
            <Facebook className="w-6 h-6 text-primary-foreground" />
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;