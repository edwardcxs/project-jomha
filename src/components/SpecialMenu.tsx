import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import venisonImg from "@/assets/venison.jpg";
import fishImg from "@/assets/river-fish.jpg";
import mushroomImg from "@/assets/mushroom-stew.jpg";
import boarImg from "@/assets/wild-boar.jpg";
import flatbreadImg from "@/assets/flatbread.jpg";
import vegetablesImg from "@/assets/root-vegetables.jpg";
import poultryImg from "@/assets/honey-poultry.jpg";
import riceImg from "@/assets/herb-rice.jpg";
import dessertImg from "@/assets/tribal-dessert.jpg";

const menuItems = [
  {
    title: "Bamboo Biryani",
    description: "Authentic tribal biryani cooked in bamboo stalks with aromatic rice and traditional spices",
    price: "₹400",
    image: riceImg
  },
  {
    title: "Patra Poda",
    description: "Fish wrapped in banana leaves and slow-cooked with tribal herbs and spices",
    price: "₹350",
    image: fishImg
  },
  {
    title: "Handi Mansa",
    description: "Slow-cooked mutton curry in earthen pot with authentic tribal masala",
    price: "₹400",
    image: boarImg
  },
  {
    title: "Mudhi Mansa",
    description: "Traditional tribal mutton curry served with puffed rice",
    price: "₹300",
    image: venisonImg
  },
  {
    title: "Desi Chicken",
    description: "Free-range country chicken cooked in traditional tribal style with aromatic spices",
    price: "₹400",
    image: poultryImg
  },
  {
    title: "Millet Special",
    description: "Nutritious millet-based traditional dish cooked with seasonal vegetables and tribal herbs",
    price: "₹400",
    image: vegetablesImg
  }
];

const SpecialMenu = () => {
  return (
    <section id="menu" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">JOMHA Special</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the authentic flavors of tribal cuisine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card key={index} className="card-hover border-none overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <p className="text-2xl font-bold text-primary">{item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/menu">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 text-lg font-semibold shadow-lg"
            >
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;
