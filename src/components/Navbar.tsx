import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const isPropertyDetails = location.pathname.includes('/property/');

  const scrollToFAQ = () => {
    const faqSection = document.querySelector('#faq');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isPropertyDetails) {
    return (
      <nav className="absolute w-full z-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-center h-20">
            <a 
              href="/" 
              className="flex items-center hover:opacity-80 transition-opacity"
              aria-label="Ir al inicio"
            >
              <img 
              src="/images/hero/placeholder2.png" 
              alt="Alliev Archviz logo" 
              className="h-20 w-auto"
              />
            </a>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="absolute w-full z-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <img 
              src="/images/hero/logo2.png" 
              alt="Alliev Archviz Logo" 
              className="h-20 w-auto"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-white hover:text-white/80 transition-colors font-medium drop-shadow-lg">Servicios</a>
            <a href="#proyectos" className="text-white hover:text-white/80 transition-colors font-medium drop-shadow-lg">Proyectos</a>
            <a href="#acerca" className="text-white hover:text-white/80 transition-colors font-medium drop-shadow-lg">Acerca De</a>
            <button 
              onClick={scrollToFAQ}
              className="text-white hover:text-white/80 transition-colors font-medium drop-shadow-lg"
            >
              Preguntas
            </button>
            <a href="#contacto" className="text-white hover:text-white/80 transition-colors font-medium drop-shadow-lg">Contacto</a>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-estate-800">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <a href="#servicios" className="text-lg">Servicios</a>
                  <a href="#proyectos" className="text-lg">Proyectos</a>
                  <a href="#acerca" className="text-lg">Acerca De</a>
                  <button 
                    onClick={scrollToFAQ}
                    className="text-lg text-left"
                  >
                    Preguntas
                  </button>
                  <a href="#contacto" className="text-lg">Contacto</a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;