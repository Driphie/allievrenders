import FeaturedProjects from "./FeaturedProjects";
import ExteriorProjects from "./ExteriorProjects";
import WebExample from "./WebExample";
import ServicesSection from "./ServicesSection";

const OurVision = () => {
  return (
<>
      {/* Unified services section with integrated title */}
      <ServicesSection />
      
{/* Elegant divider */}
      
      {/* Featured Projects section - full width */}
      <FeaturedProjects />
      
      {/* Elegant divider */}
      <div className="py-2 bg-gradient-to-br from-white to-zinc-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-estate-400 to-transparent w-full max-w-md"></div>
            <div className="mx-6 w-2 h-2 bg-estate-400 rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-estate-400 to-transparent w-full max-w-md"></div>
          </div>
        </div>
      </div>
      
      {/* New Exterior Projects section - full width */}
      <ExteriorProjects />
      
      {/* Elegant divider */}
      <div className="py-2 bg-gradient-to-br from-white to-zinc-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-estate-400 to-transparent w-full max-w-md"></div>
            <div className="mx-6 w-2 h-2 bg-estate-400 rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-estate-400 to-transparent w-full max-w-md"></div>
          </div>
        </div>
      </div>
            
      {/* Web Example section - full width */}
      <WebExample />
    </>
  );
};

export default OurVision;