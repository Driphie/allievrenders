
import React from 'react';
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const ExteriorProjects = () => {
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
        style={{ backgroundImage: `url('/images/banners/B3.png')` }} // Placeholder image until you provide local image
      />
      
      {/* Overlay for better text readability - reversed direction */}
      <div className="absolute inset-0 bg-gradient-to-l from-estate-800/70 via-estate-800/40 to-transparent"></div>
      
      {/* Content - aligned to the right */}
      <div className="relative h-full w-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="ml-auto max-w-xl md:max-w-2xl lg:max-w-3xl text-right">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-4">
            Renderizado Exterior
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 ml-auto max-w-md">
            Experimente nuestra selección de diseños arquitectónicos y propiedades exclusivas
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

export default ExteriorProjects;