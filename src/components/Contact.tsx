import { MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/1123482822?text=Hola,%20queria%20informacion%20mi nombre es %20",
      "_blank"
    );
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-estate-100 via-white to-estate-200 opacity-50" />
      <div className="absolute inset-0 bg-[linear-gradient(109.6deg,rgba(223,234,247,1)_11.2%,rgba(244,248,252,1)_91.1%)] opacity-60" />
      <div className="absolute inset-0 bg-grid-estate-800/[0.02]" />
      
      {/* Content */}
      <div id="contacto" className="relative container mx-auto px-4 max-w-5xl">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-12 border border-estate-200/50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-display text-estate-800 mb-6 animate-fadeIn">
              Contactanos
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-estate-400 to-transparent mx-auto mb-8" />
            <p className="text-estate-600 mb-12 text-lg leading-relaxed animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Contáctanos. En Alliev Archviz, estamos a tu disposición para dar vida a tus ideas a través de visualizaciones 3D de alta calidad. Será un placer colaborar contigo.
            </p>
            
            <div className="flex flex-col items-center space-y-6 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <Button 
                onClick={handleWhatsAppClick}
                className="group bg-green-600 hover:bg-green-900 text-white px-10 py-6 rounded-xl text-lg flex items-center gap-3 transform transition-all duration-500 hover:shadow-lg hover:scale-[1.02]"
              >
                <MessageSquare className="w-6 h-6 transition-transform duration-500 group-hover:rotate-12" />
                <span className="font-medium">Inciar Conversacion</span>
              </Button>
              
              <p className="text-estate-500 text-sm">
                Disponibles de Lunes a Sabados, 10:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;