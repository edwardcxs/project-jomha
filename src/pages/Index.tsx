import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpecialMenu from "@/components/SpecialMenu";
import Gallery from "@/components/Gallery";
import AboutUs from "@/components/AboutUs";
import HonoredGuests from "@/components/HonoredGuests";
import Celebrations from "@/components/Celebrations";
import Contributions from "@/components/Contributions";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SpecialMenu />
      <Gallery />
      <AboutUs />
      <HonoredGuests />
      <Celebrations />
      <Contributions />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
