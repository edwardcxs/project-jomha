import { Card, CardContent } from "@/components/ui/card";
import birthdayParty from "@/assets/birthday-party.jpg";
import education from "@/assets/education.jpg";
import socialEvent from "@/assets/social-event.jpg";

const achievements = [
  {
    image: birthdayParty,
    title: "Tribal Food Festival",
    description: "We showcased traditional dishes and received special appreciation from local dignitaries."
  },
  {
    image: education,
    title: "Cultural Heritage Fair",
    description: "Participated in preserving and promoting authentic tribal cooking methods."
  },
  {
    image: socialEvent,
    title: "Best Authentic Cuisine Award",
    description: "Recognized for maintaining traditional recipes and cooking techniques."
  }
];

const Achievements = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Achievements & Participations
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Honored to host distinguished visitors who appreciate authentic tribal cuisine
          </p>
          <h3 className="text-2xl font-semibold text-foreground mb-8">We Participated Social Events at</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-hover border-none text-center overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
