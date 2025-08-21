import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { propertiesData } from "./property/PropertyData";

interface ProjectRedirectsProps {
  currentProjectId: string;
}

const ProjectRedirects = ({ currentProjectId }: ProjectRedirectsProps) => {
  const navigate = useNavigate();
  
// Get all real projects from PropertyData, excluding current project
  const otherProjects = Object.entries(propertiesData)
    .filter(([id]) => id !== currentProjectId)
    .map(([id, property]) => ({
      id,
      title: property.title,
      location: property.location,
      price: property.price,
      image: property.images[0]
    }));

  const handleProjectClick = (projectId: string) => {
    navigate(`/property/${projectId}`);
  };

  return (
    <section className="py-16 bg-estate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-display text-estate-800 mb-4">
            Descubrí más proyectos
          </h3>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-estate-400 to-transparent mx-auto" />
        </div>
        
       <div className="relative px-8">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {otherProjects.map((project, index) => (
                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 opacity-0 animate-fadeIn h-full"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-48 relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-estate-800/20 group-hover:bg-estate-800/30 transition-colors duration-300" />
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-estate-800 mb-2 group-hover:text-estate-600 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-estate-600 mb-2">{project.location}</p>
                      <p className="text-estate-800 font-semibold text-lg mb-4">{project.price}</p>
                      
                      <Button
                        onClick={() => handleProjectClick(project.id)}
                        className="w-full bg-estate-800 hover:bg-estate-700 text-white flex items-center justify-center gap-2 group/btn"
                      >
                        <span>Ver proyecto</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-8" />
            <CarouselNext className="right-0 md:-right-8" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectRedirects;