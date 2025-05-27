const Hero = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
{/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/images/videos/HERO3.mp4" type="video/mp4" />
        <source src="/videos/hero-video.webm" type="video/webm" />
        Tu navegador no soporta el elemento video.
      </video>
      
      {/* Overlay para mejor legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 backdrop-blur-[1px]" />
      
      <div className="relative z-10 container px-8 text-right md:pr-16 lg:pr-14 -mt-22">
        <h1 className="text-6xl md:text-6xl font-display text-white mb-8 leading-tight max-w-3xl ml-auto 
opacity-0 animate-fadeIn drop-shadow-2xl">
          ALLIEV | RENDER
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-2xl opacity-0 animate-fadeIn drop-shadow-lg ml-auto" style={{ animationDelay: '200ms' }}>
          SOLUCIONES INTEGRALES.
        </p>
      </div>
    </div>
  );
};

export default Hero;