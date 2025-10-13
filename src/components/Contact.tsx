import { MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/+5491123482822?text=Hola,%20queria%20informacion%20mi nombre es %20",
      "_blank"
    );
  };

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-estate-100 via-white to-estate-200 opacity-50" />
      <div className="absolute inset-0 bg-[linear-gradient(109.6deg,rgba(223,234,247,1)_11.2%,rgba(244,248,252,1)_91.1%)] opacity-60" />
      <div className="absolute inset-0 bg-grid-estate-800/[0.02]" />
      
      {/* Content */}
      <div id="contacto" className="relative container mx-auto px-4 max-w-5xl">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-green-200/30 relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-5xl font-display text-estate-800 mb-4 animate-fadeIn">
              CONTACTANOS
            </h2>
            <h2 className="text-estate-500 uppercase tracking-wider text-sm font-semibold mb-4">POTENCIA TU PROYECTO </h2>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-6" />
            <p className="text-estate-600 mb-8 text-xl leading-relaxed animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Contáctanos. En Alliev Renders estamos a disposición para dar vida a tus proyectos a través de visualizaciones 3D de alta calidad. Será un placer colaborar contigo.
            </p>
            
            <div className="flex flex-col items-center space-y-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <Button 
                onClick={handleWhatsAppClick}
                className="group bg-green-600 hover:bg-green-900 text-white px-10 py-6 rounded-xl text-lg flex items-center gap-3 transform transition-all duration-500 hover:shadow-lg hover:scale-[1.02]"
              >
                <MessageSquare className="w-6 h-6 transition-transform duration-500 group-hover:rotate-12" />
                <span className="font-medium">Iniciar Conversacion</span>
              </Button>
              
              <p className="text-estate-500 text-sm">
                Disponibilidad: FULL TIME.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;