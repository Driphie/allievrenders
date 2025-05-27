import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-32 bg-estate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src="/images/about/about-us.png"
                alt="Modern luxury home"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-estate-800 rounded-lg -z-10"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 id='acerca' className="text-estate-500 uppercase tracking-wider text-sm font-semibold">Acerca De Alliev Archviz</h4>
              <h2 className="text-4xl font-display text-estate-800">Creating Exceptional Living Spaces</h2>
            </div>
            
            <p className="text-estate-600 leading-relaxed">
            En Alliev nos dedicamos a dar vida a tus proyectos a través de impresionantes renderizados 3D. 
            Somos una familia que comenzó en el año 2020 con la visión de crear imágenes realistas y detalladas que transforman 
            ideas en experiencias visuales. Desde nuestros inicios, nos hemos enfocado en brindar un servicio de alta calidad, 
            utilizando tecnología de última generación para garantizar resultados excepcionales. Nuestro equipo está comprometido 
            con la excelencia, trabajando con pasión y dedicación para superar las expectativas de nuestros clientes. En Alliev 
            cada proyecto es una oportunidad para mostrar nuestra creatividad y ofrecer soluciones visuales únicas que capturan la esencia de lo que imaginas.
            </p>

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