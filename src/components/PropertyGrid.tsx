import { useState } from "react";
import PropertyCard from "./PropertyCard";
import { Button } from "./ui/button";
import PropertyFilter from "./PropertyFilter";

const PropertyGrid = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const allProperties = [
    {
      id: "1",
      image: "/images/properties/property1.png",
      title: "| LUXURY PENTHOUSE | 2022",
      location: "Argentina, Buenos Aires",
      price: "ALLIEV | DESING",
      category: "autor"
    },
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
      image: "/images/properties/property3.jpg",
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
    {
      id: "8",
      image: "/images/properties/property6.png",
      title: "| CONCURSO DEPARC POLO | 2022",
      location: "Hurlingham, Buenos Aires",
      price: "DEPARC",
      category: "concurso"
    },   
  ];

    const filteredProperties = activeFilter === "all" 
    ? allProperties 
    : allProperties.filter(property => property.category === activeFilter);

  const displayedProperties = showAll ? filteredProperties : filteredProperties.slice(0, 4);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setShowAll(false); // Reset show all when filter changes
  };


  return (
    <div className="space-y-12" data-aos="fade-up" data-aos-duration="1000">
      <PropertyFilter 
        onFilterChange={handleFilterChange}
        activeFilter={activeFilter}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {displayedProperties.map((property, index) => (
          <div 
            key={property.id} 
            className="opacity-0 animate-fadeIn"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
      
      {!showAll && filteredProperties.length > 4 && (
        <div className="flex justify-center mt-12">
          <Button
            onClick={() => setShowAll(true)}
            variant="outline"
            className="text-estate-800 border-estate-800 hover:bg-estate-800 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 px-8 py-3"
          >
            Ver más
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