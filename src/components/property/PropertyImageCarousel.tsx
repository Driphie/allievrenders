import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);


interface PropertyImageCarouselProps {
  images: string[];
}

const PropertyImageCarousel = ({ images }: PropertyImageCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (!containerRef.current || images.length < 2) return;
    const ctx = gsap.context(() => {
      const panels = containerRef.current!.querySelectorAll(".photo-panel");
      // Pin each panel except the last one
      panels.forEach((panel, i) => {
        if (i === panels.length - 1) return;
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: `+=${window.innerHeight}`,
          pin: true,
          pinSpacing: false,
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, [images]);

  const showNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const showPreviousImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

   // Keyboard navigation in fullscreen dialog
  const handleDialogKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") showPreviousImage();
    else if (e.key === "ArrowRight") showNextImage();
  }, [images.length]);
  useEffect(() => {
    if (dialogOpen) {
      window.addEventListener("keydown", handleDialogKeyDown);
      return () => window.removeEventListener("keydown", handleDialogKeyDown);
    }
  }, [dialogOpen, handleDialogKeyDown]);

  return (
    <>
      <div ref={containerRef} className="relative">
        {images.map((image, index) => (
          <div
            key={index}
            className="photo-panel relative w-full h-screen overflow-hidden cursor-pointer group"
            style={{ zIndex: index + 1 }}
            onClick={() => {
              setSelectedImageIndex(index);
              setDialogOpen(true);
            }}
          >
            <img
              src={image}
              alt={`Property view ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            {/* Counter */}
            <div className="absolute bottom-6 right-6 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              {index + 1} / {images.length}
            </div>
            {/* Hover hint */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 bg-black/50 px-6 py-3 rounded-full transition-opacity duration-300 backdrop-blur-sm">
                Ver imagen
              </span>
            </div>
          </div>
        ))}
      </div>
                      {/* Fullscreen dialog */}
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
    </>
  );
};

export default PropertyImageCarousel;