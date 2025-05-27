interface PropertyHeaderProps {
  title: string;
  location: string;
  price: string;
  propertyType?: string;
  year?: string;
  description?: string;
}

const PropertyHeader = ({ title, location, price, propertyType, year, description }: PropertyHeaderProps) => {
  return (
    <div className="text-center mb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
      <h1 className="text-4xl font-display text-estate-800 mb-2 transform hover:scale-[1.01] transition-all duration-300">
        {title}
      </h1>
      <p className="text-xl text-estate-500 mb-2">{location}</p>
      {(propertyType || year) && (
        <div className="flex justify-center gap-2 text-estate-500 mb-4">
          {propertyType && <span>{propertyType}</span>}
          {propertyType && year && <span>•</span>}
          {year && <span>Año {year}</span>}
        </div>
      )}
      <p className="text-2xl font-semibold text-estate-800 mt-2 transform hover:scale-[1.01] transition-all duration-300">
        {price}
      </p>
      {description && (
        <p className="mt-4 text-estate-600 max-w-2xl mx-auto">
        {description}
        </p>
      )}
    </div>
  );
};

export default PropertyHeader;