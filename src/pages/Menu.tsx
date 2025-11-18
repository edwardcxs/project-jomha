import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Wheat, Flame } from "lucide-react";

const menuCategories = [
  {
    category: "Starter Veg",
    items: [
      { name: "Gobi Pakoda", description: "Crispy cauliflower fritters with tribal spices", price: "₹40 / ₹85", dietary: ["vegetarian"], spicy: false },
      { name: "Roasted Manchurian", description: "Indo-Chinese style roasted vegetable balls", price: "₹70 / ₹150", dietary: ["vegetarian"], spicy: true },
      { name: "Mushroom Pakoda", description: "Deep-fried mushroom fritters with herbs", price: "₹110", dietary: ["vegetarian"], spicy: false },
      { name: "Paneer Pakora", description: "Cottage cheese fritters with traditional spices", price: "₹140 / ₹250", dietary: ["vegetarian"], spicy: false },
      { name: "Mixed Veg Pakoda", description: "Assorted vegetable fritters", price: "₹120 / ₹230", dietary: ["vegetarian"], spicy: false },
      { name: "Flower Chilly", description: "Spicy cauliflower with chili sauce", price: "₹140 / ₹250", dietary: ["vegetarian"], spicy: true },
      { name: "Gobi Chatt", description: "Tangy cauliflower chat", price: "₹150", dietary: ["vegetarian"], spicy: false }
    ]
  },
  {
    category: "Starter Non Veg",
    items: [
      { name: "Chicken Pakoda", description: "Crispy chicken fritters", price: "₹120 / ₹240", dietary: [], spicy: false },
      { name: "Chicken Chilly", description: "Spicy chicken with chili sauce", price: "₹250", dietary: [], spicy: true },
      { name: "Chicken 65", description: "South Indian style spicy chicken", price: "₹250", dietary: [], spicy: true },
      { name: "Garlic Chicken", description: "Chicken tossed in garlic sauce", price: "₹250", dietary: [], spicy: false },
      { name: "Chicken Crispy Fry", description: "Crispy fried chicken", price: "₹250", dietary: [], spicy: false }
    ]
  },
  {
    category: "Indian Bread",
    items: [
      { name: "Tawa Roti", description: "Whole wheat flatbread", price: "₹15", dietary: ["vegetarian"], spicy: false },
      { name: "Masala Kulcha", description: "Stuffed flatbread with spices", price: "₹40", dietary: ["vegetarian"], spicy: false },
      { name: "Aloo/Naan Papad", description: "Flatbread with potato", price: "₹40", dietary: ["vegetarian"], spicy: false },
      { name: "Butter Roti", description: "Butter-topped flatbread", price: "₹25", dietary: ["vegetarian"], spicy: false },
      { name: "Butter Naan", description: "Butter-topped leavened bread", price: "₹40", dietary: ["vegetarian"], spicy: false },
      { name: "Desi Ghee ka Paratha", description: "Layered flatbread with clarified butter", price: "₹30", dietary: ["vegetarian"], spicy: false }
    ]
  },
  {
    category: "Greens",
    items: [
      { name: "Hara Bhara Salad", description: "Fresh green salad", price: "₹40", dietary: ["vegan"], spicy: false },
      { name: "Onion Salad", description: "Fresh onion salad", price: "₹30", dietary: ["vegan"], spicy: false }
    ]
  },
  {
    category: "Veg Main Course",
    items: [
      { name: "Mix Veg", description: "Mixed vegetable curry", price: "₹150", dietary: ["vegan"], spicy: false },
      { name: "Mattar Paneer Special", description: "Cottage cheese with peas in rich gravy", price: "₹220", dietary: ["vegetarian"], spicy: false },
      { name: "Paneer Pakoda", description: "Cottage cheese curry", price: "₹250", dietary: ["vegetarian"], spicy: false },
      { name: "Paneer Bhurji", description: "Scrambled cottage cheese with spices", price: "₹230", dietary: ["vegetarian"], spicy: false },
      { name: "Aloo Pyaz Tadka Curry", description: "Potato and onion curry", price: "₹200", dietary: ["vegan"], spicy: false },
      { name: "Aloo Gobi Jeera", description: "Potato and cauliflower with cumin", price: "₹200", dietary: ["vegan"], spicy: false },
      { name: "Palak Paneer", description: "Cottage cheese in spinach gravy", price: "₹230", dietary: ["vegetarian"], spicy: false },
      { name: "Paneer Bharta", description: "Mashed cottage cheese curry", price: "₹230", dietary: ["vegetarian"], spicy: false },
      { name: "Paneer Do Pyaza", description: "Cottage cheese with onions", price: "₹230", dietary: ["vegetarian"], spicy: false },
      { name: "Kaju Curry", description: "Cashew nut curry", price: "₹250", dietary: ["vegan"], spicy: false },
      { name: "Veg Jhall Fry", description: "Spicy stir-fried vegetables", price: "₹180", dietary: ["vegan"], spicy: true },
      { name: "Aloo Patal Forma", description: "Potato curry special", price: "₹180", dietary: ["vegan"], spicy: false }
    ]
  },
  {
    category: "Non-Veg Main Course",
    items: [
      { name: "Chicken Biryani", description: "Aromatic rice with chicken", price: "₹140 / ₹230", dietary: [], spicy: false },
      { name: "Mutton Biryani", description: "Aromatic rice with mutton", price: "₹300 / ₹400", dietary: [], spicy: false }
    ]
  },
  {
    category: "Rice",
    items: [
      { name: "Plain Rice", description: "Steamed white rice", price: "₹70", dietary: ["vegan", "gluten-free"], spicy: false },
      { name: "Jeera Rice", description: "Cumin-flavored rice", price: "₹100", dietary: ["vegan", "gluten-free"], spicy: false },
      { name: "Fried Rice", description: "Stir-fried rice with vegetables", price: "₹120", dietary: ["vegan"], spicy: false },
      { name: "Veg Pulao", description: "Aromatic rice with vegetables", price: "₹140", dietary: ["vegan", "gluten-free"], spicy: false },
      { name: "Red Rice", description: "Nutritious red rice", price: "₹150", dietary: ["vegan", "gluten-free"], spicy: false }
    ]
  },
  {
    category: "Curry",
    items: [
      { name: "Fish Curry", description: "Fresh fish in tribal curry", price: "₹80", dietary: [], spicy: true },
      { name: "Fish Chana", description: "Fish with chickpeas", price: "₹100", dietary: [], spicy: false },
      { name: "Chicken Curry (HFL)/Pyaz", description: "Chicken curry with onions", price: "₹130 / ₹250", dietary: [], spicy: true },
      { name: "Mutton Curry Handi", description: "Mutton curry in handi", price: "₹180 / ₹300", dietary: [], spicy: true },
      { name: "Dal Fry", description: "Tempered lentils", price: "₹70", dietary: ["vegan"], spicy: false },
      { name: "Tadka", description: "Lentils with tempering", price: "₹120 / ₹200", dietary: ["vegan"], spicy: false }
    ]
  },
  {
    category: "Thali",
    items: [
      { name: "Veg Thali", description: "Complete vegetarian meal platter", price: "₹89", dietary: ["vegetarian"], spicy: false },
      { name: "Egg Thali", description: "Complete meal with egg curry", price: "₹110", dietary: ["vegetarian"], spicy: false },
      { name: "Fish Thali", description: "Complete meal with fish curry", price: "₹140", dietary: [], spicy: false },
      { name: "Chicken Thali", description: "Complete meal with chicken curry", price: "₹160", dietary: [], spicy: false },
      { name: "Mutton Thali", description: "Complete meal with mutton curry", price: "₹200", dietary: [], spicy: false }
    ]
  },
  {
    category: "Beverages",
    items: [
      { name: "Rice Tea", description: "Traditional rice tea", price: "₹30", dietary: ["vegan"], spicy: false },
      { name: "Regular Tea", description: "Classic chai", price: "₹30", dietary: ["vegetarian"], spicy: false },
      { name: "Coffee", description: "Fresh brewed coffee", price: "₹30", dietary: ["vegan"], spicy: false },
      { name: "Black Tea Coffee", description: "Strong black tea/coffee", price: "₹40", dietary: ["vegan"], spicy: false },
      { name: "Masala Cold Drink", description: "Spiced cold beverage", price: "₹40", dietary: ["vegan"], spicy: true },
      { name: "Plain Lassi", description: "Yogurt-based drink", price: "₹40", dietary: ["vegetarian"], spicy: false },
      { name: "Ginger Masala Tea", description: "Spiced ginger tea", price: "₹40", dietary: ["vegetarian"], spicy: false },
      { name: "Lichi Lassi", description: "Lychee-flavored lassi", price: "₹40", dietary: ["vegetarian"], spicy: false },
      { name: "Virgin Mojito", description: "Refreshing mint drink", price: "₹80", dietary: ["vegan"], spicy: false },
      { name: "Mineral Water", description: "Bottled water", price: "₹40", dietary: ["vegan"], spicy: false },
      { name: "Chaas", description: "Spiced buttermilk", price: "₹50", dietary: ["vegetarian"], spicy: false },
      { name: "Mineral Shake", description: "Refreshing shake", price: "₹80", dietary: ["vegetarian"], spicy: false }
    ]
  },
  {
    category: "Dessert",
    items: [
      { name: "Red Rice Kheer", description: "Sweet rice pudding made with red rice", price: "₹50", dietary: ["vegetarian"], spicy: false },
      { name: "Gulab Jamoon", description: "Sweet milk dumplings in syrup", price: "₹50", dietary: ["vegetarian"], spicy: false },
      { name: "Manda Lagoo (Malai)", description: "Creamy traditional dessert", price: "₹30", dietary: ["vegetarian"], spicy: false }
    ]
  },
  {
    category: "Jomha Special",
    items: [
      { name: "Bamboo Chicken (BFL)", description: "Chicken cooked in bamboo stalks", price: "₹350", dietary: [], spicy: false },
      { name: "Sukna Bard Gravy", description: "Traditional tribal gravy", price: "₹40", dietary: [], spicy: false },
      { name: "Boot Mung (Veg)", description: "Traditional tribal vegetable dish", price: "₹80", dietary: ["vegan"], spicy: false },
      { name: "Bamboo Biryani", description: "Biryani cooked in bamboo", price: "₹400", dietary: [], spicy: false },
      { name: "Liver Masala", description: "Spicy liver curry", price: "₹150", dietary: [], spicy: true },
      { name: "Ei Tatta (BFL)", description: "Traditional fish preparation", price: "₹150", dietary: [], spicy: false },
      { name: "Patra Poda (BFL)", description: "Fish in banana leaves", price: "₹350", dietary: [], spicy: false },
      { name: "Bamboo Mutton Biryani", description: "Mutton biryani in bamboo", price: "₹400", dietary: [], spicy: false },
      { name: "Bamboo Mutton", description: "Mutton cooked in bamboo", price: "₹650", dietary: [], spicy: false },
      { name: "Ambilli Saka", description: "Traditional tribal vegetable curry", price: "₹400", dietary: ["vegan"], spicy: false },
      { name: "Desi Chicken (BFL)", description: "Country chicken tribal style", price: "₹400", dietary: [], spicy: false },
      { name: "Chicken Curry E/Angc", description: "Special chicken curry", price: "₹130 / ₹300", dietary: [], spicy: true },
      { name: "Mudhi Mansa (BFL)", description: "Mutton with puffed rice", price: "₹300", dietary: [], spicy: false },
      { name: "Veg Biryani", description: "Aromatic vegetable biryani", price: "₹100 / ₹180", dietary: ["vegan"], spicy: false },
      { name: "Prawns (BFL)", description: "Traditional prawn preparation", price: "₹300 / ₹460", dietary: [], spicy: false },
      { name: "Millet Special", description: "Nutritious millet-based dish", price: "₹400", dietary: ["vegan"], spicy: false },
      { name: "Moon Mansa", description: "Special meat preparation", price: "₹150", dietary: [], spicy: false }
    ]
  },
  {
    category: "Jomha Handi Special",
    items: [
      { name: "Handi Fish", description: "Fish cooked in earthen pot", price: "₹400", dietary: [], spicy: false },
      { name: "Handi Chicken", description: "Chicken cooked in earthen pot", price: "₹350", dietary: [], spicy: false },
      { name: "Handi Mutton", description: "Mutton cooked in earthen pot", price: "₹400", dietary: [], spicy: false },
      { name: "Handi Chicken Biryani", description: "Chicken biryani in handi", price: "₹350", dietary: [], spicy: false },
      { name: "Handi Mutton Biryani", description: "Mutton biryani in handi", price: "₹400", dietary: [], spicy: false },
      { name: "Desi Chicken Handi", description: "Country chicken in handi", price: "₹400", dietary: [], spicy: false },
      { name: "Prawns Handi (BFL)", description: "Prawns in earthen pot", price: "₹650", dietary: [], spicy: false }
    ]
  },
  {
    category: "Jomha Patra Poda",
    items: [
      { name: "Chicken Patra Poda", description: "Chicken wrapped in leaves", price: "₹600", dietary: [], spicy: false },
      { name: "Fish Patra Poda", description: "Fish wrapped in leaves", price: "₹600", dietary: [], spicy: false },
      { name: "Mushroom Patra Poda", description: "Mushroom wrapped in leaves", price: "₹600", dietary: ["vegetarian"], spicy: false },
      { name: "Paneer Aloo Patra Poda", description: "Cottage cheese and potato wrapped in leaves", price: "₹600", dietary: ["vegetarian"], spicy: false }
    ]
  }
];

const Menu = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Our Menu</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover authentic tribal flavors crafted from traditional recipes and locally-sourced ingredients
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue={menuCategories[0].category} className="w-full">
            <TabsList className="w-full flex-wrap h-auto justify-start gap-2 bg-muted p-2 mb-8">
              {menuCategories.map((category, index) => (
                <TabsTrigger 
                  key={index} 
                  value={category.category}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>
            {menuCategories.map((category, categoryIndex) => (
              <TabsContent key={categoryIndex} value={category.category}>
                <div className="mb-8 border-b-2 border-primary pb-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {category.category}
                  </h2>
                </div>
                
                <div className="grid gap-4">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-center gap-2">
                          <div className="flex-1">
                            <CardTitle className="flex items-center gap-2 flex-wrap text-lg mb-2">
                              {item.name}
                              {item.spicy && (
                                <Flame className="w-4 h-4 text-red-600" />
                              )}
                            </CardTitle>
                            <CardDescription className="text-sm">
                              {item.description}
                            </CardDescription>
                          </div>
                          <div className="font-bold text-primary whitespace-nowrap text-xl">
                            {item.price}
                          </div>
                        </div>
                      </CardHeader>
                      {item.dietary.length > 0 && (
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {item.dietary.includes("vegetarian") && (
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Leaf className="w-3 h-3" />
                                Vegetarian
                              </Badge>
                            )}
                            {item.dietary.includes("vegan") && (
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Leaf className="w-3 h-3" />
                                Vegan
                              </Badge>
                            )}
                            {item.dietary.includes("gluten-free") && (
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Wheat className="w-3 h-3" />
                                Gluten-Free
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Menu;