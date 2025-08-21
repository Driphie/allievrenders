import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5491123482822?text=Hola,%20quería%20información%20mi%20nombre%20es%20",
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fadeIn">
      <div className="group relative">
        {/* Text bubble */}
        <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
          <div className="bg-estate-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
            Potencia tu proyecto
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-estate-800"></div>
          </div>
        </div>
        
        {/* WhatsApp button */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:animate-none"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppFloat;