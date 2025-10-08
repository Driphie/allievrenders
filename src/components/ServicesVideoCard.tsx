interface ServicesVideoCardProps {
  videoSrc: string;
  title: string;
}

const ServicesVideoCard = ({ videoSrc, title }: ServicesVideoCardProps) => {
  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      
      {/* Optional overlay with title */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                      flex items-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h4 className="text-white font-semibold">{title}</h4>
      </div>
    </div>
  );
};

export default ServicesVideoCard;