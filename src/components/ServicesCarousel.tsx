import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface ServicesCarouselProps {
  images: string[];
}

const ServicesCarousel = ({ images }: ServicesCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Auto-advance every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const showPreviousImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setDialogOpen(true);
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg sm:rounded-xl overflow-hidden group shadow-lg bg-gray-50">
      <div 
        className="flex transition-transform duration-10 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="w-full h-full flex-shrink-0 flex items-center justify-center p-4 cursor-pointer group/image"
            onClick={() => handleImageClick(index)}
          >
            <div className="relative">
              <img
                src={image}
                alt={`Fotorealismo ${index + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-md transition-transform duration-300 group-hover/image:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-medium opacity-0 group-hover/image:opacity-100 bg-black/50 px-4 py-2 rounded-full transition-opacity duration-300">
                  Click para ampliar
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 
                   bg-black/50 hover:bg-black/70 text-white p-2 rounded-full
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 
                   bg-black/50 hover:bg-black/70 text-white p-2 rounded-full
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Dialog for fullscreen view */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-black/95 border-none">
          <DialogTitle className="sr-only">Vista de imagen {selectedImageIndex + 1}</DialogTitle>
          <DialogClose className="absolute right-4 top-4 z-50 bg-black/30 hover:bg-black/60 text-white/90 hover:text-white p-2 rounded-full transition-colors duration-200">
            <X className="w-5 h-5" />
          </DialogClose>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="relative max-w-full max-h-full">
              <img
                src={images[selectedImageIndex]}
                alt={`Fotorealismo ${selectedImageIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain mx-auto"
              />
              
              <button
                onClick={showPreviousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white/90 hover:text-white p-2 rounded-full transition-colors duration-200"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={showNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white/90 hover:text-white p-2 rounded-full transition-colors duration-200"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/30 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                {selectedImageIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServicesCarousel;