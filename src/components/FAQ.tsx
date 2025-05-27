import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [showAllArch, setShowAllArch] = useState(false);
  const [showAllWeb, setShowAllWeb] = useState(false);

  // Existing architecture visualization FAQs
  const initialArchFaqs = [
    {
      question: "¿Qué necesito para que me hagan un render?",
      answer: "Solo necesitás enviarnos la planta, cortes y elevaciones (puede ser en PDF o CAD). Sitenés un modelo 3D, mejor aún. También suman referencias de materiales o estilos que te gustaría lograr."
    },
    {
      question: "¿Cuánto tarda la entrega de un render?",
      answer: "Depende del tipo de proyecto, pero generalmente entre 3 y 7 días hábiles desde la recepción de toda la información. Proyectos complejos o con animación pueden requerir más tiempo, pero siempre coordinamos los tiempos con vos."
    },
    {
      question: "¿Qué tipo de renders ofrecen?",
      answer: "Ofrecemos: ● Renders fotorrealistas (interiores y exteriores) ● Animaciones 3D / video recorrido  ● Videos cinemáticos ● Imágenes 360° interactivas."
    },
    {
      question: "¿Puedo hacer cambios luego de ver el render?",
      answer: "Sí, incluimos una ronda de ajustes sin costo adicional. Si necesitás cambios mayores o nuevas versiones, lo presupuestamos aparte y siempre te avisamos antes."
    }
  ];

  const additionalArchFaqs = [
    {
      question: "¿Trabajan solo en Buenos Aires?",
      answer: "Atendemos proyectos de todo el país, pero tenemos presencia física en Ciudad Autónoma de Buenos Aires, lo que nos permite asistir a obra, reunirnos presencialmente y entender mejor el contexto del proyecto."
    },
    {
      question: "¿Cuánto cuesta un render?",
      answer: "El costo depende del tipo de vista, nivel de detalle y cantidad de imágenes. Para darte un presupuesto exacto, necesitamos ver el proyecto y saber qué necesitás comunicar."
    },
    {
      question: "¿Qué formatos de entrega están disponibles?",
      answer: "Ofrecemos una amplia gama de formatos, incluyendo imágenes en alta resolución, videos 4K, tours virtuales interactivos y contenido optimizado para redes sociales y marketing digital."
    },
    {
      question: "¿Cómo accedo a mi proyecto?",
      answer: "Compartimos una carpeta de Drive con el cliente para visualización y descarga. También podemos subir el proyecto a Youtube para uso exclusivo del cliente."
    },
    {
      question: "¿Cómo protegen la propiedad intelectual de mis proyectos?",
      answer: "Nos comprometemos a mantener la confidencialidad y proteger la propiedad intelectual de nuestros clientes. Firmamos acuerdos de confidencialidad si es necesario."
    },
    {
      question: "Formas de pago",
      answer: "Establecemos un acuerdo por escrito con un pago inicial del 50% del valor total antes de iniciar el proyecto y el restante antes de entregar el proyecto finalizado."
    }
  ];

    // New web development FAQs
  const initialWebFaqs = [
    {
      question: "¿Qué tipo de sitios web desarrollan?",
      answer: "Creamos: ● Landing pages para venta de desarrollos ● Webs para estudios de arquitectura o construcción ● Sitios con portfolio de proyectos ● Integración con formularios, WhatsApp y redes sociales."
    },
    {
      question: "¿Qué necesito para empezar mi web?",
      answer: "Solo necesitamos: ● Logo y nombre del emprendimiento/estudio ● Fotos o renders del proyecto ● Información básica (ubicación, unidades, contacto)● Una idea del estilo visual que buscás. Si no tenés todo, te ayudamos a organizarlo."
    },
    {
      question: "¿Pueden integrar WhatsApp, Google Maps?",
      answer: "Sí, integramos links directos a WhatsApp, WhatsApp Business, Google Maps, catálogos descargables, videos, etc."
    },
    {
      question: "¿Pueden cargar los renders que ustedes mismos hacen?",
      answer: "¡Claro! Si trabajás con nosotros en visualización y web, optimizamos los renders y animaciones para que la web se vea increíble sin afectar su velocidad."
    }
  ];

  const additionalWebFaqs = [
    {
      question: "¿Cuánto tarda y cuánto cuesta un sitio?",
      answer: "Una landing puede estar lista en 7 a 10 días hábiles. Sitios más complejos requieren más tiempo. El precio varía según cantidad de secciones, funcionalidades y si hay diseño visual personalizado."
    }
  ];

  const displayedArchFaqs = showAllArch ? [...initialArchFaqs, ...additionalArchFaqs] : initialArchFaqs;
  const displayedWebFaqs = showAllWeb ? [...initialWebFaqs, ...additionalWebFaqs] : initialWebFaqs;

  return (
    <section className="py-20 bg-gradient-to-br from-white to-zinc-100" id="faq">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16 opacity-0 animate-fadeIn">
          <h4 className="text-estate-500 uppercase tracking-wider text-sm font-semibold">
            Resolvemos tus dudas
          </h4>
          <h2 className="text-5xl font-display text-estate-800 mt-2 mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-estate-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </div>

        <Tabs defaultValue="arch" className="w-full">
          <TabsList className="w-full grid grid-cols-2 mb-10 p-1 bg-zinc-100 rounded-xl">
            <TabsTrigger 
              value="arch" 
              className="text-xl py-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-estate-800 transition-all duration-300"
            >
              Visualización 3D
            </TabsTrigger>
            <TabsTrigger 
              value="web" 
              className="text-lg py-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-estate-800 transition-all duration-300"
            >
              Desarrollo Web
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="arch">
            <Accordion type="single" collapsible className="space-y-6">
              {displayedArchFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`arch-item-${index}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden opacity-0 animate-fadeIn border-none hover:shadow-lg transition-shadow duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="px-8 py-6 text-xl font-medium text-estate-800 hover:text-estate-600 transition-colors hover:no-underline">
                    <div className="flex items-center">
                      <div className="w-2 h-10 bg-estate-500 rounded-full mr-4 hidden md:block"></div>
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 py-6 text-lg text-estate-600 leading-relaxed bg-zinc-50">
                    <div className="ml-0 md:ml-6 border-l-2 border-estate-200 pl-6">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {!showAllArch && (
              <div className="flex justify-center mt-10">
                <Button
                  onClick={() => setShowAllArch(true)}
                  variant="outline"
                  className="group bg-white text-estate-600 border-estate-300 hover:bg-estate-100 hover:text-estate-800 transition-all duration-300 ease-in-out flex items-center gap-2"
                >
                  Ver más
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="web">
            <Accordion type="single" collapsible className="space-y-6">
              {displayedWebFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`web-item-${index}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden opacity-0 animate-fadeIn border-none hover:shadow-lg transition-shadow duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="px-8 py-6 text-xl font-medium text-estate-800 hover:text-estate-600 transition-colors hover:no-underline">
                    <div className="flex items-center">
                      <div className="w-2 h-10 bg-estate-500 rounded-full mr-4 hidden md:block"></div>
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 py-6 text-lg text-estate-600 leading-relaxed bg-zinc-50">
                    <div className="ml-0 md:ml-6 border-l-2 border-estate-200 pl-6">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {!showAllWeb && (
              <div className="flex justify-center mt-10">
                <Button
                  onClick={() => setShowAllWeb(true)}
                  variant="outline"
                  className="group bg-white text-estate-600 border-estate-300 hover:bg-estate-100 hover:text-estate-800 transition-all duration-300 ease-in-out flex items-center gap-2"
                >
                  Ver más
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FAQ;
