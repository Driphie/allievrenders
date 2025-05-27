
import { useState } from "react";
import { Button } from "./ui/button";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

interface PropertyFilterProps {
  onFilterChange: (category: string) => void;
  activeFilter: string;
}

const PropertyFilter = ({ onFilterChange, activeFilter }: PropertyFilterProps) => {
  const categories = [
    { id: "all", label: "Todos" },
    { id: "desarrollos", label: "Desarrollos" },
    { id: "comerciales", label: "Comerciales" },
    { id: "reformas", label: "Reformas" },
    { id: "concurso", label: "Concurso" },
    { id: "autor", label: "De Autor" }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeFilter === category.id ? "default" : "outline"}
          onClick={() => onFilterChange(category.id)}
          className={`
            transition-all duration-300 ease-in-out transform hover:scale-105
            ${activeFilter === category.id 
              ? "bg-estate-800 text-white shadow-lg" 
              : "text-estate-800 border-estate-800 hover:bg-estate-800 hover:text-white"
            }
          `}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
};

export default PropertyFilter;