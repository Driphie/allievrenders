
import { Image, Video, Navigation } from "lucide-react";

const RenderingServices = () => {
  const renderingServices = [
    {
      icon: Image,
      title: "Renderizados De Imágenes Foto Realistas",
      description: "Creamos visualizaciones hiperrealistas que capturan cada detalle de tu propiedad con precisión fotográfica.",
    },
    {
      icon: Video,
      title: "Video Trailer",
      description: "Producimos videos cinematográficos que narran la historia única de cada propiedad de manera cautivadora.",
    },
    {
      icon: Navigation,
      title: "Tour Virtual",
      description: "Ofrecemos experiencias inmersivas 360° que permiten explorar cada espacio de manera interactiva.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <div className="space-y-4 mb-16 opacity-0 animate-fadeIn">
          <h4 className="text-estate-500 uppercase tracking-wider text-sm font-semibold">Servicios de Renderizado</h4>
          <h2 className="text-4xl font-display text-estate-800">Renders 3D</h2>
          <p className="text-estate-500 mb-12 mx-auto max-w-2xl">
            Creamos experiencias inmersivas que conectan con tus clientes y comunican el valor real de tus proyectos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {renderingServices.map((service, index) => (
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
      </div>
    </section>
  );
};

export default RenderingServices;