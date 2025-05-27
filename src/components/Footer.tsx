import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-estate-800 text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Logo Section */}
        <div className="flex justify-center mb-12 transform hover:scale-105 transition-transform duration-300">
          <div className="w-48 h-26 bg-estate-0 flex items-center justify-center rounded-lg opacity-0 animate-fadeIn">
            {/* Replace with your actual logo */}
            <span className="font-display text-4xl"><img src="/images/hero/logo1.png" alt="" /></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left opacity-0 animate-fadeIn" style={{ animationDelay: '200ms' }}>
          <div className="space-y-4">
            <h3 className="font-display text-xl mb-4 relative group">
              ALLIEV
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <p className="text-estate-300">
            SOLUCIONES INTEGRALES.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold mb-4">Redireciones</h4>
            <ul className="space-y-3 text-estate-300">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors duration-300 relative group">
                  Servicios
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-white transition-colors duration-300 relative group">
                  Proyectos
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#acerca" className="hover:text-white transition-colors duration-300 relative group">
                  Acerca De
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors duration-300 relative group">
                  FAQ
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors duration-300 relative group">
                  Contactanos
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold mb-4">Informacion De Contacto</h4>
            <ul className="space-y-3 text-estate-300">
              <li className="transition-all duration-300 hover:translate-x-2">Argentina Buenos Aires</li>
              <li className="transition-all duration-300 hover:translate-x-2">+54 (011) 23482822</li>
              <li className="transition-all duration-300 hover:translate-x-2">alliev.archviz@gmail.com</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold mb-4">Seguinos</h4>
            <div className="flex space-x-6 justify-center md:justify-start">
              <a href="https://www.instagram.com/alliev.archviz/" className="transform hover:scale-110 transition-transform duration-300 hover:text-estate-300">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-estate-700 text-center text-estate-300 opacity-0 animate-fadeIn" style={{ animationDelay: '400ms' }}>
          <p>&copy; {new Date().getFullYear()} ALLIEV ARCHVIZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;