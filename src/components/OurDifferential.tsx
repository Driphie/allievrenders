
import React from 'react';
import { Users, HardHat, Zap, MessageCircle } from 'lucide-react';

const OurDifferential = () => {
  const differentialPoints = [
    {
      icon: Users,
      title: "Lectura técnica y comercial de cada desarrollo"
    },
    {
      icon: MessageCircle,
      title: "Comunicación clara y seguimiento continuo"
    },
    {
      icon: Zap,
      title: "Experiencias inmersivas que permiten entender el proyecto antes de construirlo"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Section - Left Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-display text-estate-800">Nuestro Diferencial</h2>
            </div>
            
            <div className="space-y-6">
              {differentialPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-estate-800 rounded-lg flex items-center justify-center group-hover:bg-estate-600 transition-colors duration-300">
                    <point.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg text-estate-700 font-medium">
                    {point.title}
                  </p>
                </div>
              ))}
              </div>
          </div>

          {/* Video Container - Right Side */}
          <div className="relative">
            <div className="bg-estate-100 rounded-lg overflow-hidden">
              {/* Placeholder for video - 9:16 aspect ratio */}
              <div className="w-full h-full flex items-center justify-center text-estate-500">
                <div className="text-center">
                  <p className="text-sm">
                    <img src="/images/about/about-us5.png" alt="" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
         <div className="mt-8 text-center">
          <p className="text-estate-500 uppercase tracking-wider text-sm font-semibold">
            No solo hacemos renders. Nos reunimos con vos, vamos a la obra y entendemos el proyecto desde adentro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurDifferential;
