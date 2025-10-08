import { useState } from "react";
import PropertyCard from "./PropertyCard";
import { Button } from "./ui/button";
import PropertyFilter from "./PropertyFilter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PropertyGrid = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [displayedCount, setDisplayedCount] = useState(4);

  const allProperties = [
    {
      id: "2",
      image: "/images/properties/property9.png",
      title: "| LUMINIS CASA & OFICINA | 2025",
      location: "Argentina, Buenos Aires",
      price: "ALLIEV | DESING",
      category: "autor"
    },    
    {
      id: "3",
      image: "/images/properties/irlanda/8.png",
      title: "| IRLANDA GREEN | 2024",
      location: "Plaza Irlanda, Caballito, Buenos Aires",
      price: "FTF DESARROLLOS",
      category: "desarrollos"
    },
    {
      id: "4",
      image: "/images/properties/property10.png",
      title: "| ALBERDI | 2024",
      location: "Av. Alberdi, barrio de Flores, CABA",
      price: "AGZ URBANA | REMAX FLOW",
      category: "desarrollos"
    },
    {
      id: "9",
      image: "/images/properties/property11.png",
      title: "| PENTHOUSE | 2022",
      location: "Argentina, Buenos Aires",
      price: "ALLIEV | DESING",
      category: "autor"
    },
    {
      id: "10",
      image: "/images/properties/property12.png",
      title: "| HOME DECO | 2025",
      location: "Argentina, Buenos Aires",
      price: "ALLIEV DESING",
      category: "reformas"
    },       
    {
      id: "5",
      image: "/images/properties/property4.jpg",
      title: "| MANTRA CAFE | 2024 ",
      location: "Ciudad Jardín, Buenos Aires",
      price: "CAFETERIA MANTRA",
      category: "comerciales"
    },
    {
      id: "6",
      image: "/images/properties/property8.png",
      title: "NICO REFORMA | 2024",
      location: "Teodelina, Santa Fe",
      price: "REFORMANDO CASAS",
      category: "reformas"
    },
    {
      id: "7",
      image: "/images/properties/property2.jpg",
      title: "| REFORMA OFICINA | 2024",
      location: "Zona Centro, Buenos Aires",
      price: "-",
      category: "reformas"
    },
  ];

    const filteredProperties = activeFilter === "all" 
    ? allProperties 
    : allProperties.filter(property => property.category === activeFilter);

  const displayedProperties = showAll ? filteredProperties : filteredProperties.slice(0, 4);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setShowAll(false);
    setDisplayedCount(4); // Reset displayed count when filter changes
  };

  const handleShowMore = (e: React.MouseEvent) => {
    e.preventDefault();
    setDisplayedCount(filteredProperties.length);
    setShowAll(true);

    // Smooth scroll to the 5th card after a brief delay
    setTimeout(() => {
      const fifthCard = document.querySelector('[data-property-index="4"]');
      if (fifthCard) {
        fifthCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };


  return (
    <div className="space-y-12">
      <PropertyFilter 
        onFilterChange={handleFilterChange}
        activeFilter={activeFilter}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-full mx-auto">
        {displayedProperties.map((property, index) => {
          // Cards already displayed don't need animation
          if (index < displayedCount - (filteredProperties.length - displayedProperties.length)) {
            return (
              <div key={property.id} className="opacity-100 translate-y-0">
                <PropertyCard {...property} />
              </div>
            );
          }
          
          // Only new cards get smooth entry animation
          const PropertyCardWithAnimation = () => {
            const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
            
            return (
              <div 
                ref={ref}
                data-property-index={index}
                className={`transition-all duration-700 ease-out transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-12 scale-95'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${(index - 4) * 150}ms` : '0ms' 
                }}
              >
                <PropertyCard {...property} />
              </div>
            );
          };
          
          return <PropertyCardWithAnimation key={property.id} />;
        })}
      </div>
      
      {!showAll && filteredProperties.length > 4 && (
        <div className="flex justify-center mt-16">
          <Button
            type="button"
            onClick={handleShowMore}
            variant="outline"
            className="text-gray-900 border-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-500 ease-in-out transform hover:scale-105 px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl"
          >
            <span className="mr-2">Ver más proyectos</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
        </div>
      )}
            
      {filteredProperties.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg">No se encontraron proyectos en esta categoría.</p>
        </div>
      )}
    </div>
  );
};

export default PropertyGrid;