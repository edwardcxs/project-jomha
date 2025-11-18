import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router-dom";

import aadiwasiMithaiImg from "@/assets/gallery/aadiwasi-mithai-laddu.webp";
import restaurantAmbianceImg from "@/assets/gallery/restaurant-ambiance.webp";
import honoredGuestsImg from "@/assets/gallery/honored-guests.webp";
import traditionalServingImg from "@/assets/gallery/traditional-serving.webp";
import musicalPerformanceImg from "@/assets/gallery/musical-performance.webp";
import chickenPakodaImg from "@/assets/gallery/chicken-pakoda.webp";
import tribalSweetsImg from "@/assets/gallery/tribal-sweets.webp";
import groupGatheringImg from "@/assets/gallery/group-gathering.webp";
import groupEventImg from "@/assets/gallery/group-event.webp";

const galleryImages = [{
  src: aadiwasiMithaiImg,
  alt: "Aadiwasi Mithai - Madua Dry Fruit Laddu"
}, {
  src: restaurantAmbianceImg,
  alt: "Restaurant ambiance - Every bite tells a story"
}, {
  src: honoredGuestsImg,
  alt: "Honored guests at Jomha"
}, {
  src: traditionalServingImg,
  alt: "Traditional serving style"
}, {
  src: chickenPakodaImg,
  alt: "Chicken Pakoda"
}, {
  src: tribalSweetsImg,
  alt: "Tribal Sweets - Ragi Dry Fruit Laddu"
}, {
  src: groupGatheringImg,
  alt: "Community gathering at Jomha"
}, {
  src: groupEventImg,
  alt: "Special event celebration"
}, {
  src: musicalPerformanceImg,
  alt: "Running Notations musical performance"
}];
const Gallery = () => {
  const navigate = useNavigate();

  return <section id="gallery" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Photo Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the beauty of our culinary creations, events, and the vibrant atmosphere of our establishment
          </p>
        </div>

        <Carousel opts={{
        align: "center",
        loop: true
      }} plugins={[Autoplay({
        delay: 3000
      })]} className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {galleryImages.map((image, index) => <CarouselItem key={index}>
                <Card className="overflow-hidden card-hover cursor-pointer group">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Card>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            onClick={() => navigate('/gallery')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-semibold shadow-lg"
          >
            View More
          </Button>
        </div>
      </div>
    </section>;
};
export default Gallery;