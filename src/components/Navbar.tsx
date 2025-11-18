import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: "Home",
    id: "home",
    isRoute: true,
    path: "/"
  }, {
    name: "Menu",
    id: "menu",
    isRoute: true,
    path: "/menu"
  }, {
    name: "Gallery",
    id: "gallery",
    isRoute: true,
    path: "/gallery"
  }, {
    name: "About us",
    id: "about",
    isRoute: false
  }, {
    name: "Contact",
    id: "contact",
    isRoute: false
  }];
  const handleNavigation = (item: typeof navItems[0]) => {
    setIsOpen(false);
    if (item.isRoute && item.path) {
      // For route-based navigation, navigate to the path
      if (location.pathname !== item.path) {
        window.location.href = item.path;
      } else if (item.id === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    } else {
      // For section scrolling on the same page
      if (location.pathname !== "/") {
        window.location.href = "/#" + item.id;
      } else {
        document.getElementById(item.id)?.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="text-xl font-bold text-primary cursor-pointer" onClick={() => window.scrollTo({
          top: 0,
          behavior: "smooth"
        })}>
            JOMHA
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => <Button key={item.id} variant="ghost" onClick={() => handleNavigation(item)} className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">
                {item.name}
              </Button>)}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-accent rounded-md transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 animate-in slide-in-from-top duration-200">
            {navItems.map(item => <Button key={item.id} variant="ghost" onClick={() => handleNavigation(item)} className="w-full justify-start text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                {item.name}
              </Button>)}
          </div>}
      </div>
    </nav>;
};
export default Navbar;