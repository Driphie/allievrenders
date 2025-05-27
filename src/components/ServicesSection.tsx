
import { useState } from "react";
import { Image, Video, Navigation, PenTool, Globe, FileText, Check, HardHat, Building2, } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Description } from "@radix-ui/react-toast";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const ServicesSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const renderingServices = [
    {
      icon: Image,
      title: "Renderizados De Imágenes Foto Realistas",
      description: "Nuestro enfoque en el fotorealismo va más allá de la calidad visual: buscamos emocionar. Utilizamos software de última generación, iluminación física realista y una atención meticulosa a los detalles para que cada imagen se sienta tan auténtica como una fotografía. Ideal para destacar el diseño arquitectónico y atraer inversores o compradores.",
    },
    {
      icon: Video,
      title: "Video Trailer",
      description: "Creamos recorridos en video con estética cinematográfica que transmiten la esencia del proyecto a través de movimientos de cámara suaves, música, iluminación y narrativa visual. Estos videos están diseñados para generar impacto emocional y comunicar el estilo de vida que ofrece el desarrollo.",
    },
    {
      icon: Navigation,
      title: "Tour Virtual",
      description: "Ofrecemos experiencias visuales que permiten a los usuarios caminar por los espacios como si estuvieran allí. A diferencia de los recorridos 360 tradicionales, nuestros tours virtuales están programados para generar una navegación fluida, inmersiva y guiada, perfecta para mostrar desarrollos inmobiliarios antes de que se construyan",
    },
  ];

  const webServices = [
    {
      icon: HardHat,
      title: "Avance de Obra",
      description: "Incluimos una sección de Avance de Obra, donde se puede mostrar el estado actual del proyecto mediante fotos, renders comparativos, porcentajes de progreso y actualizaciones periódicas. Esta funcionalidad mejora la transparencia y genera confianza en los clientes durante todo el proceso de construcción.",
    },
    {
      icon: Globe,
      title: "Páginas Web",
      description: "",
      tips: [
        "Landing pages para proyectos",
        "Sitios de estudio de arquitectura",
        "Webs para venta de inmuebles",
        "Integración con WhatsApp",
        "Formularios",
        "Google Maps"
      ]
    },
    {
      icon: Building2,
      title: "Desarolladora / Empresa",
      description: "Incluimos una sección dedicada a la desarrolladora o empresa responsable del proyecto, donde se puede contar su historia, experiencia y enfoque profesional. Esta área del sitio está pensada para destacar quiénes están detrás del desarrollo, fortaleciendo la confianza del visitante y brindando contexto sobre la trayectoria de quienes lo llevan adelante. Es una excelente oportunidad para comunicar los valores de la empresa, mostrar proyectos anteriores y posicionar su marca dentro del mercado inmobiliario. ",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="servicios">
      <div className="container mx-auto px-4 max-w-6xl">
               {/* Unified header section */}
        <div className="text-center mb-12 opacity-0 animate-fadeIn">
          <h4 className="text-estate-500 uppercase tracking-wider text-sm font-semibold mb-2">Nuestros Servicios</h4>
          <h2 className="text-4xl font-display text-estate-800 mb-4">Mercado Inmobiliario</h2>
          <p className="text-estate-500 mb-8 mx-auto max-w-2xl">
            En ALLIEV creamos Renders hiperrealistas y soluciones web
para arquitectos, desarrolladores y constructores
Desde Buenos Aires, con presencia real en obra.
          </p>
        </div>

        <Tabs defaultValue="rendering" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
            <TabsTrigger value="rendering" className="text-sm font-medium">
              Renders 3D
            </TabsTrigger>
            <TabsTrigger value="web" className="text-sm font-medium">
              Desarrollo Web
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="rendering" className="opacity-0 animate-fadeIn">
                       <div className="text-center mb-8">
              <h3 className="text-2xl font-display text-estate-800 mb-3">Renders 3D</h3>
              <p className="text-estate-500 max-w-2xl mx-auto">
               Creamos experiencias inmersivas que conectan con tus clientes y comunican el valor real de tus proyectos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {renderingServices.map((service, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center space-y-6 group 
                            hover:transform hover:scale-105 transition-all duration-500 ease-in-out"
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
                    <h4 className="text-xl font-semibold text-estate-800 group-hover:text-estate-600 transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-estate-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="web" className="opacity-0 animate-fadeIn">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-display text-estate-800 mb-3"> Desarollo Web</h3>
              <p className="text-estate-500 max-w-2xl mx-auto">
                Diseñamos sitios web a medida para desarrollos inmobiliarios, enfocados en potenciar la presencia online del proyecto y facilitar la comunicación con potenciales compradores e inversores. Nuestras webs combinan diseño atractivo, navegación intuitiva y herramientas clave para el sector.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {webServices.map((service, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center space-y-6 group 
                            hover:transform hover:scale-105 transition-all duration-500 ease-in-out"
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
                    <h4 className="text-xl font-semibold text-estate-800 group-hover:text-estate-600 transition-colors duration-300">
                      {service.title}
                    </h4>
                                        
                    {service.description && (
                      <p className="text-estate-500 leading-relaxed">
                        {service.description}
                      </p>
                    )}
                    
                    {service.tips && (
                      <ul className="text-left space-y-2 bg-white/80 p-4 rounded-lg shadow-md">
                        {service.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="h-4 w-4 mt-1 text-estate-500" />
                            <span className="text-estate-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
                    <div className="mt-12 text-center">
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

export default ServicesSection;
