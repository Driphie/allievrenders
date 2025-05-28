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
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"    
    },
    {
      name: "MANTRA CAFÉ.",
      role: "Propietario",
      text: "El equipo de Alliev me brindó distintas alternativas según lo que tenía en mente, lo que me permitió aclarar mis dudas y definir el diseño exterior. El render 3D permitió trabajar sobre ideas concretas.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"    
    },
    {
      name: "IRLANDA GREEN.",
      role: "FTF Desarrollos",
      text: "Gracias al render 3D de Irlanda Green, pudimos visualizar el proyecto en detalle y definir mejor cada aspecto.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"    
    },
  ];

  return (
    <section className="py-20 bg-estate-50">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-4xl font-display text-estate-800 mb-4">Testimonios</h2>
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-6">
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
                      <div className="font-semibold text-estate-800">{testimonial.name}</div>
                      <div className="text-estate-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;