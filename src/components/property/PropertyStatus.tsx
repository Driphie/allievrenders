
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

interface PropertyStatusProps {
  images: string[];
}

const PropertyStatus = ({ images }: PropertyStatusProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Handle empty images array
  if (!images.length) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-estate-50 rounded-lg">
        <p className="text-estate-500">No hay imágenes disponibles para estado de obra</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
        <img 
          src={images[currentIndex]} 
          alt={`Estado de obra - Etapa ${currentIndex + 1}`} 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white px-4 py-2">
          <p>Etapa {currentIndex + 1} de {images.length}</p>
        </div>
      </div>
      
      <div className="px-2">
        <Slider
          value={[currentIndex]}
          min={0}
          max={images.length - 1}
          step={1}
          onValueChange={(value) => setCurrentIndex(value[0])}
          className="mt-6"
        />
      </div>
      
      <div className="flex overflow-x-auto gap-2 pt-2 pb-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`flex-shrink-0 w-16 h-16 cursor-pointer rounded overflow-hidden border-2 ${
              index === currentIndex ? "border-estate-800" : "border-transparent"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img 
              src={image} 
              alt={`Thumbnail ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyStatus;
