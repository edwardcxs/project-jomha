import { HandHeart, Heart } from "lucide-react";
import vendorsImg from "@/assets/local-vendors.jpg";
import streetAnimalsImg from "@/assets/street-animals.jpg";

const contributions = [
  {
    icon: HandHeart,
    title: "We Empower Local Vendors",
    description: "We prioritize sourcing ingredients from local tribal vendors and farmers, supporting the community's economy. Every dish you enjoy helps sustain local livelihoods and preserves traditional farming practices.",
    image: vendorsImg
  },
  {
    icon: Heart,
    title: "We Feed Street Animals",
    description: "We believe in compassion for all beings. As part of our commitment to the community, we regularly feed street animals in our neighborhood. Every day, we provide nutritious food to stray dogs, cats, and other animals who need care. This initiative reflects our values of kindness and responsibility towards all living creatures who share our environment.",
    image: streetAnimalsImg
  }
];

const Contributions = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Contribution Towards Society
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Building community through authentic cuisine and cultural preservation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {contributions.map((contribution, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl overflow-hidden card-hover border border-border"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={contribution.image} 
                  alt={contribution.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <contribution.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{contribution.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{contribution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contributions;
