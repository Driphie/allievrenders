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
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/properties/penthouse/3.jpg" // Reemplaza con la ruta de tu imagen
          alt="Background"
          className="w-full h-full object-cover grayscale blur-sm brightness-75"
        />
        {/* Overlay opcional para asegurar legibilidad si la imagen es muy clara */}
        <div className="absolute inset-0 bg-black/10" />
      </div>
      
      {/* Content */}
      <div id="contacto" className="relative container mx-auto px-4 max-w-5xl">
        <div className="">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-6xl font-semibold text-estate-800 mb-4 animate-fadeIn text-white">
              CONTACTANOS
            </h2>
            <h2 className="text-estate-500 uppercase tracking-wider text-sm font-semibold mb-4 text-white">POTENCIA TU PROYECTO </h2>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-6" />
            <p className="text-estate-600 mb-8 text-xl leading-relaxed animate-fadeIn text-white" style={{ animationDelay: '0.2s' }}>
            En Alliev Renders estamos a disposición para dar vida a tus proyectos a través de visualizaciones 3D de alta calidad.
            </p>
            
            <div className="flex flex-col items-center space-y-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <Button 
                onClick={handleWhatsAppClick}
                className="group bg-green-600 hover:bg-green-900 text-white px-10 py-6 rounded-xl text-lg flex items-center gap-3 transform transition-all duration-500 hover:shadow-lg hover:scale-[1.02]"
              >
                <MessageSquare className="w-6 h-6 transition-transform duration-500 group-hover:rotate-12" />
                <span className="font-medium">Iniciar Conversacion</span>
              </Button>
              
              <p className="text-estate-500 text-sm text-white">
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