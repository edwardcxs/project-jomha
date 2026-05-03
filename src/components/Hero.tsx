import { Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroBanner from "@/assets/hero-banner.jpg";
import riceImg from "@/assets/herb-rice.jpg";
import fishImg from "@/assets/river-fish.jpg";
import boarImg from "@/assets/wild-boar.jpg";

const specialDishes = [
  { title: "Bamboo Biryani", image: riceImg },
  { title: "Patra Poda", image: fishImg },
  { title: "Handi Mansa", image: boarImg },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="relative z-10 container-custom px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Right: Carousel */}
          <div className="order-2 lg:order-2 animate-in fade-in slide-in-from-right-4 duration-1000">
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 3000 })]}
              className="w-full max-w-md mx-auto"
            >
              <CarouselContent>
                {specialDishes.map((dish, i) => (
                  <CarouselItem key={i}>
                    <div className="overflow-hidden rounded-2xl shadow-2xl">
                      <div className="relative aspect-square">
                        <img
                          src={dish.image}
                          alt={dish.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                          <h3 className="text-2xl font-bold text-primary-foreground">
                            {dish.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Left: Text */}
          <div className="order-1 lg:order-1 text-primary-foreground text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000 font-sans">
              JOMHA
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl mr-auto opacity-90 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              Authentic Cuisine Restaurant | Experience the rich heritage and authentic flavors of traditional tribal cooking.
            </p>
            <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <Link to="/menu">
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-10 py-6 text-lg font-semibold shadow-lg"
                >
                  View Menu
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
              <a
                href="https://www.zomato.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#E23744] hover:bg-[#c82d3a] text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                aria-label="Order on Zomato"
              >
                <Utensils className="w-5 h-5" />
                <span>Order on Zomato</span>
              </a>
              <a
                href="https://www.swiggy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#FC8019] hover:bg-[#e0700f] text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                aria-label="Order on Swiggy"
              >
                <Bike className="w-5 h-5" />
                <span>Order on Swiggy</span>
              </a>
            </div>
            <div className="flex gap-6 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
              <a
                href="https://www.instagram.com/jomha.restro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-primary-foreground" />
              </a>
              <a
                href="https://www.facebook.com/share/1A3APocFBk/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
