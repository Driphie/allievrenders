import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface PropertyImageCarouselProps {
  images: string[];
}

const PropertyImageCarousel = ({ images }: PropertyImageCarouselProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const showPreviousImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="mb-8 opacity-0 animate-fadeIn">
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <div 
                    className="aspect-[16/9] relative overflow-hidden rounded-xl cursor-pointer group"
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 z-10 flex items-center justify-center">
                      <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                        Ver imagen
                      </span>
                    </div>
                    <img
                      src={image}
                      alt={`Property view ${index + 1}`}
                      className="object-cover w-full h-full transition duration-300 group-hover:scale-105"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-black/95 border-none">
                  <DialogTitle className="sr-only">Vista de imagen {selectedImageIndex + 1}</DialogTitle>
                  <DialogClose className="absolute right-4 top-4 z-50 bg-black/30 hover:bg-black/60 text-white/90 hover:text-white p-2 rounded-full transition-colors duration-200">
                    <X className="w-5 h-5" />
                  </DialogClose>
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <div className="relative max-w-full max-h-full">
                      <img
                        src={images[selectedImageIndex]}
                        alt={`Property view ${selectedImageIndex + 1}`}
                        className="max-w-full max-h-[85vh] object-contain mx-auto"
                      />
                      
                      <button
                        onClick={showPreviousImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white/90 hover:text-white p-2 rounded-full transition-colors duration-200"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      
                      <button
                        onClick={showNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white/90 hover:text-white p-2 rounded-full transition-colors duration-200"
                        aria-label="Next image"
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-black/30 hover:bg-black/60 text-white/90 hover:text-white transition-colors duration-200" />
        <CarouselNext className="right-4 bg-black/30 hover:bg-black/60 text-white/90 hover:text-white transition-colors duration-200" />
      </Carousel>
    </div>
  );
};

export default PropertyImageCarousel;