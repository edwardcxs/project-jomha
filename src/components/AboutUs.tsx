import { BookOpen, Target } from "lucide-react";
const AboutUs = () => {
  return <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About JOMHA</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A celebration of tribal heritage through authentic cuisine and cultural experiences
          </p>
        </div>

        {/* History & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Our Story</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The Tribal Cuisine Restaurant, a premium dining destination in Rourkela that celebrates the soulful essence of India's tribal heritage. Derived from the HO tribe's word for "food," JOMHA blends authentic tribal recipes, earthy aesthetics, and a warm village-inspired ambience. Every dish tells a story of tradition, love, and culture—crafted to give you a meaningful, flavorful, and unforgettable dining experience rooted in authenticity.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The aim of JOMHA is to preserve and promote the essence of India's tribal heritage through authentic cuisine, art, and ambience. We strive to create a meaningful bridge between tradition and modern dining, offering guests a soulful experience rooted in culture and community. Every dish, every detail at JOMHA reflects our purpose — to celebrate, empower, and honor the beauty of tribal life.
            </p>
          </div>
        </div>

      </div>
    </section>;
};
export default AboutUs;