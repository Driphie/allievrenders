import { MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useNavigate } from "react-router-dom";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  id?: string;
}

const PropertyCard = ({ image, title, location, price, id = "1" }: PropertyCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/property/${id}`);
  };

  return (
    <Card 
     className="overflow-hidden group cursor-pointer border-none transition-all duration-700 hover:shadow-2xl transform hover:-translate-y-3 bg-white"
      onClick={handleClick}
    >
      <CardContent className="p-0">
        <div className="relative aspect-[10/7] overflow-hidden">
          {/* Image */}
          <img
            src={image}
            alt={title}
             className="object-cover w-full h-full transform transition-transform duration-1000 group-hover:scale-110"
          />
          
          {/* Sophisticated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-700" />
          
          {/* Price badge - top right */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 shadow-lg">
            <span className="text-gray-900 font-bold text-sm">{price}</span>
          </div>
          
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-700 group-hover:translate-y-0">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors duration-300 leading-tight">
                {title}
              </h3>
              
              <div className="flex items-center text-white/90 group-hover:text-white transition-colors duration-300">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-base font-medium">
                  {location}
                </span>
              </div>
            </div>
            
            {/* Hover indicator */}
            <div className="mt-4 pt-4 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/80">Ver detalles</span>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;