import { useState } from "react";
import { Image, Video, Navigation, PenTool, Globe, FileText, Check, HardHat, Building2 } from "lucide-react";
import ServicesCarousel from "./ServicesCarousel";
import ServicesVideoCard from "./ServicesVideoCard";
import YouTubeVideo from "./YouTubeVideo";
import CustomIframe from "./CustomIframe";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Sample images for the photorealism carousel
  const photorealismImages = [
    "/images/properties/luminis/2.png", 
    "/images/properties/luminis/4.png",
    "/images/properties/bariloche/3.png",
    "/images/properties/bariloche/4.png",
    "/images/properties/bariloche/2.png",
    "/images/properties/penthouse/5.png",
    "/images/properties/penthouse/7.png",
    "/images/properties/irlanda/8.png",
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
    },
    {
      id: "tour-cinematografico", 
      icon: Video,
      title: "Tour Cinematográfico",
      subtitle: "Experiencia inmersiva en movimiento",
      description: "",
      content: <YouTubeVideo videoUrl="https://www.youtube.com/watch?v=xS0xsjwEkSw" title="Tour Cinematográfico" />,
    },
    {
      id: "tour-virtual",
      icon: Navigation, 
      title: "Tour Virtual",
      subtitle: "Navegación interactiva POV°",
      description: "",
      content: <YouTubeVideo videoUrl="https://www.youtube.com/watch?v=A_0Y2Xt4qLo" title="Tour Virtual 360°" />,
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

  const active = servicesData[activeTab];
  
  return (
    <section className="bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 max-w-6xl py-10">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-primary/5 px-6 py-2 rounded-full border border-primary/10 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-semibold text-xl uppercase tracking-wider">Nuestros Servicios</span>
            </div>
            <h3 className="text-4xl font-bold text-foreground mb-3">
              Visualizacion de proyectos inmobiliarios
            </h3>
            <p className="text-muted-foreground mx-auto max-w-2xl">
             En ALLIEV creamos renders hiperrealistas y soluciones web pensadas para arquitectos, desarrolladores y constructores que necesitan claridad, precisión y respaldo en cada etapa del proyecto. Desde Buenos Aires y con presencia activa en obra, aportamos soluciones visuales y digitales que se ajustan a la realidad del desarrollo y suman valor desde el primer plano.
            </p>
        </div>
      </div>

      {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
          {servicesData.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${
                activeTab === index
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "bg-card text-muted-foreground border-border hover:border-primary/30 hover:text-foreground"
              }`}
            >
              <service.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
          {/* Service Header */}
          <div className="px-5 py-5 sm:px-8 sm:py-6 border-b border-border">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1 flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                  {active.title}
                </h3>
                <p className="text-sm sm:text-base text-primary font-medium">
                  {active.subtitle}
                </p>
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
                  {active.description}
                </p>
              </div>
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <active.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="p-3 sm:p-6">
            <div className="bg-muted/30 rounded-xl p-2 sm:p-4">
              {active.content}
            </div>
          </div>
          {/* Footer accent */}
          <div className="h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60"></div>
        </div>

    </section>
  );
};

export default ServicesSection;
