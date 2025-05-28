
import React from 'react';
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const FeaturedProjects = () => {
  const scrollToDiscover = () => {
    const discoverSection = document.getElementById('discover');
    if (discoverSection) {
      discoverSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image - the actual image will be provided by you locally */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/banners/B1.png')` }} // Placeholder image until you provide local image
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-estate-800/70 via-estate-800/40 to-transparent"></div>
      
      {/* Content */}
      <div className="relative h-full w-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-xl md:max-w-2xl lg:max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-4">
            Renderizado Interior
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-md">
            Fotorrealismo y animaciones 3D de alta calidad, con enfoque en materiales, iluminación y diseño espacial. Creamos imágenes que transmiten realismo y estilo, optimizadas para ventas, marketing y toma de decisiones en etapa de proyecto.
          </p>
          <Button 
            onClick={scrollToDiscover}
            className="group bg-white text-estate-800 hover:bg-estate-100 transition-all duration-300 ease-in-out flex items-center gap-2"
          >
            <span>Ver Proyectos</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;