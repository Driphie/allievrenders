
import React from 'react';
import { Users, HardHat, Zap, MessageCircle } from 'lucide-react';

const OurDifferential = () => {
  const differentialPoints = [
    {
      icon: Users,
      title: "Asistencia a obra y reuniones presenciales"
    },
    {
      icon: MessageCircle,
      title: "Comunicación clara y continua"
    },
    {
      icon: Zap,
      title: "Experiencias inmersivas : renders que conectan"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
            <div className="aspect-[9/16] bg-estate-100 rounded-lg overflow-hidden">
              {/* Placeholder for video - 9:16 aspect ratio */}
              <div className="w-full h-full flex items-center justify-center text-estate-500">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-estate-200 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-sm">
                    <video 
                      className="w-full h-full object-cover" 
                      autoPlay 
                      muted 
                      loop
                    >
                      <source src="/images/videos/Video2.mp4" type="video/mp4" />
                    </video>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center">
          <p className="text-xl text-estate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            No solo hacemos renders. Nos reunimos con vos, vamos a la obra y entendemos el proyecto desde adentro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurDifferential;
