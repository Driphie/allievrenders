interface PropertyFeaturesProps {
  features: string[];
}

const PropertyFeatures = ({ features }: PropertyFeaturesProps) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
      <div className="bg-white rounded-xl shadow-lg p-8 border border-estate-200">
        <h2 className="text-3xl font-display text-estate-800 mb-8 text-center">
          OBJETIVOS Y RESULTADOS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-estate-50 rounded-lg p-6 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg border border-estate-100 hover:border-estate-300"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-estate-400 group-hover:bg-estate-600 transition-colors" />
                <p className="text-lg text-estate-700 group-hover:text-estate-800 transition-colors">
                  {feature}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyFeatures;