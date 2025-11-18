import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
const testimonials = [{
  name: "Sarah Chen",
  image: "https://randomuser.me/api/portraits/women/65.jpg",
  text: "An absolutely incredible dining experience! The authentic tribal flavors and traditional cooking methods transported me to another world. Every dish was a masterpiece."
}, {
  name: "Marcus Johnson",
  image: "https://randomuser.me/api/portraits/men/51.jpg",
  text: "Jomha offers something truly unique. The atmosphere is magical, and the food is unlike anything I've ever tasted. The staff's knowledge of tribal traditions is impressive."
}, {
  name: "Priya Sharma",
  image: "https://randomuser.me/api/portraits/women/32.jpg",
  text: "As a food critic, I rarely give five stars, but Jomha deserves it. The commitment to authenticity and quality is evident in every bite. A must-visit for any food lover."
}, {
  name: "James Wilson",
  image: "https://randomuser.me/api/portraits/men/22.jpg",
  text: "The perfect blend of tradition and hospitality. I've hosted several events here, and each time the team exceeded expectations. The tribal cuisine is exceptional."
}, {
  name: "Elena Rodriguez",
  image: "https://randomuser.me/api/portraits/women/44.jpg",
  text: "What sets Jomha apart is their dedication to preserving tribal culinary heritage. The dishes tell a story, and the flavors are unforgettable. Highly recommended!"
}, {
  name: "David Park",
  image: "https://randomuser.me/api/portraits/men/33.jpg",
  text: "I've traveled the world for authentic cuisine, and Jomha stands out. The wild mushroom stew and grilled venison are extraordinary. An authentic cultural experience."
}];
const Testimonials = () => {
  return <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">What Our Customer Say</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from our valued customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => <Card key={index} className="card-hover border-none">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-muted" />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;