import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import birthdayImg from "@/assets/birthday-party.jpg";
import socialImg from "@/assets/social-event.jpg";
import weddingImg from "@/assets/wedding-party.jpg";

const celebrations = [
  {
    title: "Birthday Party",
    image: birthdayImg
  },
  {
    title: "Social Events Party",
    image: socialImg
  },
  {
    title: "Marriage Party",
    image: weddingImg
  }
];

const Celebrations = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Celebrate Your Special Day With Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Create unforgettable memories in an authentic tribal atmosphere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {celebrations.map((celebration, index) => (
            <Card key={index} className="card-hover border-none overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={celebration.image} 
                  alt={celebration.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-center text-foreground text-lg font-medium">{celebration.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-semibold shadow-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Celebrations;
