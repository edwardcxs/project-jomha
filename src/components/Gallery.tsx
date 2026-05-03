import { Button } from "@/components/ui/button";
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

const rowOne = [
  { src: aadiwasiMithaiImg, alt: "Aadiwasi Mithai - Madua Dry Fruit Laddu" },
  { src: restaurantAmbianceImg, alt: "Restaurant ambiance" },
  { src: honoredGuestsImg, alt: "Honored guests at Jomha" },
  { src: traditionalServingImg, alt: "Traditional serving style" },
  { src: chickenPakodaImg, alt: "Chicken Pakoda" },
];

const rowTwo = [
  { src: tribalSweetsImg, alt: "Tribal Sweets - Ragi Dry Fruit Laddu" },
  { src: groupGatheringImg, alt: "Community gathering at Jomha" },
  { src: groupEventImg, alt: "Special event celebration" },
  { src: musicalPerformanceImg, alt: "Running Notations musical performance" },
  { src: restaurantAmbianceImg, alt: "Restaurant ambiance" },
];

const MarqueeRow = ({
  images,
  reverse = false,
}: {
  images: { src: string; alt: string }[];
  reverse?: boolean;
}) => {
  const items = [...images, ...images];
  return (
    <div className="overflow-hidden group">
      <div
        className={`flex gap-4 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"} group-hover:[animation-play-state:paused]`}
      >
        {items.map((image, idx) => (
          <div
            key={idx}
            className="relative w-72 md:w-80 aspect-video rounded-xl overflow-hidden shadow-md flex-shrink-0"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <section id="gallery" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Photo Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the beauty of our culinary creations, events, and the vibrant atmosphere of our establishment
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <MarqueeRow images={rowOne} />
        <MarqueeRow images={rowTwo} reverse />
      </div>

      <div className="container-custom">
        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => navigate("/gallery")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-semibold shadow-lg"
          >
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
