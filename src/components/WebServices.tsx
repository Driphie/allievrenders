
import { PenTool, Globe, FileText } from "lucide-react";

const WebServices = () => {
  const webServices = [
    {
      icon: PenTool,
      title: "Cartelería",
      description: "Diseñamos carteles y señalética profesional para maximizar la visibilidad y el impacto de tu propiedad.",
    },
    {
      icon: Globe,
      title: "Páginas Web",
      description: "Desarrollamos sitios web modernos y responsivos para mostrar tus propiedades de manera profesional.",
    },
    {
      icon: FileText,
      title: "Brochure",
      description: "Creamos materiales impresos de alta calidad que destacan las características únicas de tu propiedad.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <div className="space-y-4 mb-16 opacity-0 animate-fadeIn">
          <h4 className="text-estate-500 uppercase tracking-wider text-sm font-semibold">Servicios Web</h4>
          <h2 className="text-4xl font-display text-estate-800">Desarrollo Web</h2>
          <p className="text-estate-500 mb-12 mx-auto max-w-2xl">
            Creamos materiales de marketing digital y físico para potenciar la presencia de tu propiedad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {webServices.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center space-y-6 group 
                        hover:transform hover:scale-105 transition-all duration-500 ease-in-out
                        opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-20 h-20 rounded-full bg-estate-100 flex items-center justify-center 
                            group-hover:bg-estate-200 transition-colors duration-300
                            shadow-lg group-hover:shadow-xl transform group-hover:-translate-y-1">
                {service.icon && (
                  <service.icon 
                    className="w-10 h-10 text-estate-800 group-hover:scale-110 transition-transform duration-300" 
                  />
                )}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-estate-800 group-hover:text-estate-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-estate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 opacity-0 animate-fadeIn" style={{ animationDelay: '1.2s' }}>
          <p className="text-estate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Cada uno de nuestros servicios puede ser seleccionado de manera individual o en conjunto. 
            Nos adaptamos a tus necesidades específicas y te proporcionamos un presupuesto personalizado 
            basado en los servicios que elijas para tu proyecto inmobiliario.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebServices;