import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-12 bg-estate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src="/images/about/about-us2.png"
                alt="Modern luxury home"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 id='acerca' className="text-estate-500 uppercase tracking-wider text-sm font-semibold">Acerca De Alliev Renders</h4>
              <h2 className="text-4xl font-display text-estate-800">"Cuando el mundo se detuvo, nosotros comenzamos"</h2>
            </div>
            
            <p className="text-estate-600 leading-relaxed">
            En 2020, mientras todo parecía estar en pausa, decidimos dar el primer paso: convertir nuestra pasión por el diseño y la visualización en una forma de contar historias a través de imágenes. Así nació Alliev, un estudio familiar con una misión clara: transformar ideas en experiencias inmersivas, detalladas y memorables. Desde entonces, trabajamos con tecnología de vanguardia y una atención obsesiva por el detalle, pero lo que realmente nos define es la creatividad y el compromiso con cada cliente. 
            </p>
            <h2 className="text-estate-500 uppercase tracking-wider text-sm font-semibold">Somos Alliev. Damos forma a lo que imaginás.</h2>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <h3 className="text-3xl font-display text-estate-800">5+</h3>
                <p className="text-estate-500">Años de servicio</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-display text-estate-800">20+</h3>
                <p className="text-estate-500">Proyectos Terminados</p>
              </div>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;