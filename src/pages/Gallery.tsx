import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import Masonry from "react-masonry-css";
import "./gallery-masonry.css";

import aadiwasiMithaiImg from "@/assets/gallery/aadiwasi-mithai-laddu.webp";
import restaurantAmbianceImg from "@/assets/gallery/restaurant-ambiance.webp";
import honoredGuestsImg from "@/assets/gallery/honored-guests.webp";
import traditionalServingImg from "@/assets/gallery/traditional-serving.webp";
import musicalPerformanceImg from "@/assets/gallery/musical-performance.webp";
import chickenPakodaImg from "@/assets/gallery/chicken-pakoda.webp";
import tribalSweetsImg from "@/assets/gallery/tribal-sweets.webp";
import groupGatheringImg from "@/assets/gallery/group-gathering.webp";
import groupEventImg from "@/assets/gallery/group-event.webp";

const galleryImages = [
  { src: aadiwasiMithaiImg, alt: "Aadiwasi Mithai - Madua Dry Fruit Laddu", height: "tall" },
  { src: restaurantAmbianceImg, alt: "Restaurant ambiance - Every bite tells a story", height: "medium" },
  { src: honoredGuestsImg, alt: "Honored guests at Jomha", height: "medium" },
  { src: traditionalServingImg, alt: "Traditional serving style", height: "tall" },
  
  { src: chickenPakodaImg, alt: "Chicken Pakoda", height: "medium" },
  { src: tribalSweetsImg, alt: "Tribal Sweets - Ragi Dry Fruit Laddu", height: "short" },
  { src: groupGatheringImg, alt: "Community gathering at Jomha", height: "medium" },
  { src: groupEventImg, alt: "Special event celebration", height: "tall" },
  { src: musicalPerformanceImg, alt: "Running Notations musical performance", height: "medium" },
];

const breakpointColumns = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

const Gallery = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Photo Gallery</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore the beauty of our culinary creations, events, and the vibrant atmosphere of Jomha
            </p>
          </div>

          <Masonry
            breakpointCols={breakpointColumns}
            className="masonry-grid"
            columnClassName="masonry-grid-column"
          >
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden card-hover cursor-pointer group mb-4">
                <div className={`relative overflow-hidden ${
                  image.height === 'tall' ? 'h-96' : 
                  image.height === 'medium' ? 'h-72' : 
                  'h-56'
                }`}>
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Card>
            ))}
          </Masonry>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Gallery;
