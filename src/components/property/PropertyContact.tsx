
import { Button } from "@/components/ui/button";

interface PropertyContactProps {
  whatsappLink?: string;
}

const PropertyContact = ({ whatsappLink = "https://wa.me/5491123482822?text=Hola,%20quiero%20recibir%20información%20sobre%20sus%20servicios%20" }: PropertyContactProps) => {
  const handleContactClick = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
      <div className="bg-estate-800 text-white rounded-xl p-8 md:p-12 text-center">
        <h3 className="text-2xl md:text-3xl font-display mb-4">
          ¿Listo para transformar planos en experiencias inmersivas?
        </h3>
        <p className="text-estate-100 mb-8 md:text-lg max-w-2xl mx-auto">
        </p>
        <Button 
          onClick={handleContactClick}
          className="bg-white text-estate-800 hover:bg-green-500 px-8 py-6 h-auto text-lg font-semibold"
        >
          CONTACTANOS
        </Button>
      </div>
    </div>
  );
};

export default PropertyContact;
