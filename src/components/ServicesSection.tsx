import { useState, useRef, useEffect } from "react";
import { Image, Video, Navigation, PenTool, Globe, FileText, Check, HardHat, Building2 } from "lucide-react";
import ServicesCarousel from "./ServicesCarousel";
import ServicesVideoCard from "./ServicesVideoCard";
import YouTubeVideo from "./YouTubeVideo";
import CustomIframe from "./CustomIframe";

const ServicesSection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Sample images for the photorealism carousel
  const photorealismImages = [
    "/images/properties/penthouse/5.png",
    "/images/properties/penthouse/7.png",
    "/images/properties/luminis/2.png", 
    "/images/properties/luminis/4.png",
    "/images/properties/penthouse/2.jpg"
  ];

  const servicesData = [
    {
      id: "fotorealismo",
      icon: Image,
      title: "Fotorealismo",
     subtitle: "Visualización arquitectónica de alta calidad",
      description: "",
      content: <ServicesCarousel images={photorealismImages} />,
      color: "bg-gradient-to-br from-slate-50 to-gray-100"
    },
    {
      id: "tour-cinematografico", 
      icon: Video,
      title: "Tour Cinematográfico",
      subtitle: "Experiencia inmersiva en movimiento",
      description: "",
      content: <YouTubeVideo videoUrl="https://www.youtube.com/watch?v=xS0xsjwEkSw" title="Tour Cinematográfico" />,
      color: "bg-gradient-to-br from-stone-50 to-neutral-100"
    },
    {
      id: "tour-virtual",
      icon: Navigation, 
      title: "Tour Virtual",
      subtitle: "Navegación interactiva POV°",
      description: "",
      content: <YouTubeVideo videoUrl="https://www.youtube.com/watch?v=A_0Y2Xt4qLo" title="Tour Virtual 360°" />,
      color: "bg-gradient-to-br from-zinc-50 to-stone-100"
    },
    {
      id: "contenido-visual",
      icon: Image,
      title: "Tour 360°", 
      subtitle: "Navegación interactiva 360°",
      description: "",
      content: <CustomIframe iframeUrl="https://tour.panoee.net/69443add5118c75f39115f7f" title="Contenido Visual" />,
      color: "bg-gradient-to-br from-neutral-50 to-gray-100"
    }
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

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const cardHeight = container.clientHeight;
      const newCurrentCard = Math.min(
        Math.floor(scrollTop / cardHeight),
        servicesData.length - 1
      );
      setCurrentCard(newCurrentCard);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [servicesData.length]);

  return (
    <section className="bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 max-w-6xl py-12" id="servicios">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/5 px-6 py-2 rounded-full border border-primary/10 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nuestros Servicios</span>
            </div>
            <h3 className="text-estate-500 uppercase tracking-wider text-xl font-semibold mb-4">
              Visualizacion de proyectos inmobiliarios
            </h3>
            <p className="text-muted-foreground mb-6 mx-auto max-w-2xl">
             En ALLIEV creamos renders hiperrealistas y soluciones web pensadas para arquitectos, desarrolladores y constructores que necesitan claridad, precisión y respaldo en cada etapa del proyecto. Desde Buenos Aires y con presencia activa en obra, aportamos soluciones visuales y digitales que se ajustan a la realidad del desarrollo y suman valor desde el primer plano.
            </p>
        </div>
      </div>

      {/* Cards Container with Internal Scroll */}
      <div className="w-full h-screen relative overflow-hidden">
        <div 
          ref={scrollContainerRef}
          className="h-full overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ scrollBehavior: 'smooth', scrollSnapType: 'y mandatory' }}
        >
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`w-full h-screen ${service.color} flex items-center justify-center`}
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
                <div className="relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
                  
                  {/* Card Content */}
                  <div className="relative bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl border border-white/20 overflow-hidden mx-2 sm:mx-0">
                    {/* Header Section */}
                     <div className="px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8 border-b border-gray-200/50">
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1 sm:space-y-2 flex-1 min-w-0">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
                            {service.title}
                          </h3>
                          <p className="text-sm sm:text-base lg:text-lg text-primary font-medium">
                            {service.subtitle}
                          </p>
                          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                         <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl sm:rounded-2xl flex items-center justify-center">
                          <service.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                     <div className="p-3 sm:p-6 lg:p-10">
                      <div className="bg-gray-50/50 rounded-lg sm:rounded-xl p-2 sm:p-4 lg:p-6">
                        {service.content}
                      </div>
                    </div>

                    {/* Footer accent */}
                    <div className="h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-2 z-50">
          {servicesData.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentCard ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Marketing Digital Section */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-gray-50 py-12 border-t border-gray-200/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/5 px-6 py-2 rounded-full border border-primary/10 mb-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Desarollo Web</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Construimos plataformas digitales para tu negocio
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Diseñamos sitios web a medida para desarrollos inmobiliarios, enfocados en potenciar la presencia online del proyecto y facilitar la comunicación con potenciales compradores e inversores. Nuestras webs combinan diseño atractivo, navegación intuitiva y herramientas clave para el sector.
            </p>
          </div>
          
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {webServices.map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                          transition-all duration-500 ease-out hover:-translate-y-2 
                          border border-gray-200/50 overflow-hidden"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 
                                flex items-center justify-center mb-6 group-hover:scale-110 
                                transition-transform duration-300">
                    {service.icon && (
                      <service.icon 
                        className="w-8 h-8 text-primary group-hover:text-primary/80 transition-colors duration-300" 
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h4 className="text-2xl font-bold text-gray-900 group-hover:text-primary 
                                  transition-colors duration-300">
                      {service.title}
                    </h4>
                    
                    {service.description && (
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    )}
                    
                    {service.tips && (
                      <div className="mt-6">
                        <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-xl 
                                      border border-gray-200/50">
                          <h5 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
                            Servicios Incluidos
                          </h5>
                          <ul className="space-y-3">
                            {service.tips.map((tip, i) => (
                              <li key={i} className="flex items-start gap-3 group/item">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 
                                              flex items-center justify-center mt-0.5">
                                  <Check className="h-3 w-3 text-primary" />
                                </div>
                                <span className="text-gray-700 text-sm leading-relaxed group-hover/item:text-gray-900 
                                               transition-colors duration-200">
                                  {tip}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom accent */}
                  <div className="mt-6 pt-6 border-t border-gray-200/50">
                    <div className="h-1 w-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 
                                  rounded-full group-hover:from-primary/40 group-hover:via-primary/60 group-hover:to-primary/40 
                                  transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
        </div>
      </div>

    </section>
  );
};

export default ServicesSection;
