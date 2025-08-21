import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "NICOLAS GAITÁN",
      role: "Propietario",
      text: "Yo queria empezar pero no sabia por donde, el equipo me dio una mano increíble, me fueron orientando, me tiraron ideas y me hicieron sentir súper acompañado. Gracias a ellos, pude aclarar lo que buscaba y el resultado final quedó genial.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      instagramUrl: "https://instagram.com/nicoreforma" // Will be set by you later    
    },
    {
      name: "MANTRA CAFÉ.",
      role: "Propietario",
      text: "El equipo de Alliev me brindó distintas alternativas según lo que tenía en mente, lo que me permitió aclarar mis dudas y definir el diseño exterior. El render 3D permitió trabajar sobre ideas concretas.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      instagramUrl: null // Will be set by you later    
    },
    {
      name: "IRLANDA GREEN.",
      role: "FTF Desarrollos",
      text: "Gracias al render 3D de Irlanda Green, pudimos visualizar el proyecto en detalle y definir mejor cada aspecto.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      instagramUrl: null // Will be set by you later    
    },
  ];

  const handleNameClick = (instagramUrl: string | null) => {
    if (instagramUrl) {
      window.open(instagramUrl, "_blank");
    }
  };

  return (
    <section className="py-20 bg-estate-50">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-4xl font-display text-estate-800 mb-4">Testimonios</h2>
        <div className="relative px-22 md:px-16">
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-9">
                    <blockquote className="text-xl text-estate-600 mb-6">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="flex items-center justify-center space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback className="bg-estate-200 text-estate-800">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div 
                          className={`font-semibold text-estate-800 ${
                            testimonial.instagramUrl 
                              ? 'cursor-pointer hover:text-estate-600 transition-colors duration-300 hover:underline' 
                              : ''
                          }`}
                          onClick={() => handleNameClick(testimonial.instagramUrl)}
                        >
                          {testimonial.name}
                        </div>
                        <div className="text-estate-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12" />
            <CarouselNext className="right-0 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;