import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Film, Video, Rotate3d, Building } from "lucide-react";
import PropertyImageCarousel from "./PropertyImageCarousel";
import PropertyVideo from "./PropertyVideo";
import PropertyTrailer from "./PropertyTrailer";
import Property360View from "./Property360View";
import PropertyStatus from "./PropertyStatus";
import { useState, useEffect } from "react";

interface PropertyMediaProps {
  images: string[];
  videoId?: string;
  trailerId?: string;
  view360Url?: string;
  statusImages?: string[];
}

const PropertyMedia = ({ images, videoId, trailerId, view360Url, statusImages = [] }: PropertyMediaProps) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Tabs defaultValue="photos" className="w-full">
        {isMobile ? (
          // Mobile view with scrollable tabs
          <TabsList className="overflow-x-auto flex w-full mb-8 pb-1 justify-start gap-1 md:justify-center">
            <TabsTrigger value="photos" className="flex-shrink-0 flex items-center gap-1 whitespace-nowrap">
              <Camera className="w-4 h-4" />
              <span>Fotos</span>
            </TabsTrigger>
            <TabsTrigger value="video" className="flex-shrink-0 flex items-center gap-1 whitespace-nowrap">
              <Video className="w-4 h-4" />
              <span>Video Tour</span>
            </TabsTrigger>
            <TabsTrigger value="trailer" className="flex-shrink-0 flex items-center gap-1 whitespace-nowrap">
              <Film className="w-4 h-4" />
              <span>Trailer</span>
            </TabsTrigger>
            <TabsTrigger value="360" className="flex-shrink-0 flex items-center gap-1 whitespace-nowrap">
              <Rotate3d className="w-4 h-4" />
              <span>360°</span>
            </TabsTrigger>
            <TabsTrigger value="status" className="flex-shrink-0 flex items-center gap-1 whitespace-nowrap">
              <Building className="w-4 h-4" />
              <span>Estado de obra</span>
            </TabsTrigger>
          </TabsList>
        ) : (
          // Desktop view with fixed tabs
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="photos" className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              <span>Fotos</span>
            </TabsTrigger>
            <TabsTrigger value="video" className="flex items-center gap-2">
              <Video className="w-4 h-4" />
              <span>Video Tour</span>
            </TabsTrigger>
            <TabsTrigger value="trailer" className="flex items-center gap-2">
              <Film className="w-4 h-4" />
              <span>Trailer</span>
            </TabsTrigger>
            <TabsTrigger value="360" className="flex items-center gap-2">
              <Rotate3d className="w-4 h-4" />
              <span>360°</span>
            </TabsTrigger>
            <TabsTrigger value="status" className="flex items-center gap-2">
              <Building className="w-4 h-4" />
              <span>Estado de obra</span>
            </TabsTrigger>
          </TabsList>
        )}
        
        <TabsContent value="photos" className="mt-0">
          <PropertyImageCarousel images={images} />
        </TabsContent>
        
        <TabsContent value="video" className="mt-0">
          <PropertyVideo videoId={videoId} />
        </TabsContent>
        
        <TabsContent value="trailer" className="mt-0">
          <PropertyTrailer trailerId={trailerId} />
        </TabsContent>

        <TabsContent value="360" className="mt-0">
          <Property360View url={view360Url} />
        </TabsContent>

        <TabsContent value="status" className="mt-0">
          <PropertyStatus images={statusImages} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PropertyMedia;