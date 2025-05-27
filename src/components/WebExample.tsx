
import React from 'react';
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

const WebExample = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/banners/B4.png')` }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-estate-800/70 via-estate-800/40 to-transparent"></div>
      
      {/* Content - aligned to the left (opposite to ExteriorProjects) */}
      <div className="relative h-full w-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-xl md:max-w-2xl lg:max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-4">
            Ejemplo De Web
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-md">
            Descubre nuestras soluciones de diseño web para propiedades inmobiliarias
          </p>
          <Button 
            onClick={() => window.open('https://auravista.netlify.app/', '_blank')}
            className="group bg-white text-estate-800 hover:bg-estate-100 transition-all duration-300 ease-in-out flex items-center gap-2"
          >
            <span>Ver Ejemplo</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebExample;