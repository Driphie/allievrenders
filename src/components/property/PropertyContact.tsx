
import { Button } from "@/components/ui/button";

interface PropertyContactProps {
  whatsappLink?: string;
}

const PropertyContact = ({ whatsappLink = "https://wa.me/1123482822?text=Hola,%20me%20interesa%20solicitar%20un%20presupuesto" }: PropertyContactProps) => {
  const handleContactClick = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
      <div className="bg-estate-800 text-white rounded-xl p-8 md:p-12 text-center">
        <h3 className="text-2xl md:text-3xl font-display mb-4">
          ¿Tenés un proyecto en marcha o por presentar?
        </h3>
        <p className="text-estate-100 mb-8 md:text-lg max-w-2xl mx-auto">
          Coordiná una reunión y mostranos tu idea.
        </p>
        <Button 
          onClick={handleContactClick}
          className="bg-white text-estate-800 hover:bg-green-500 px-8 py-6 h-auto text-lg font-semibold"
        >
          Solicitar presupuesto
        </Button>
      </div>
    </div>
  );
};

export default PropertyContact;
