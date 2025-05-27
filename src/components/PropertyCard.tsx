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
     className="overflow-hidden group cursor-pointer border-none transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 bg-transparent" 
      onClick={handleClick}
    >
      <CardContent className="p-0">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
          {/* Image */}
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
          />
                  
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">
              {title}
            </h3>
            
            <div className="flex items-center mb-3 text-white/90">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm group-hover:text-white transition-colors duration-300">
                {location}
              </span>
            </div>
            
            <div className="text-lg font-bold text-white">
              {price}
            </div>
          </div>
          
          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;