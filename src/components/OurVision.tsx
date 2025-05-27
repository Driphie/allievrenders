import FeaturedProjects from "./FeaturedProjects";
import ExteriorProjects from "./ExteriorProjects";
import WebExample from "./WebExample";
import ServicesSection from "./ServicesSection";

const OurVision = () => {
  return (
<>
      {/* Unified services section with integrated title */}
      <ServicesSection />
      
      {/* Featured Projects section - full width */}
      <FeaturedProjects />
      
      {/* New Exterior Projects section - full width */}
      <ExteriorProjects />
            
      {/* Web Example section - full width */}
      <WebExample />
    </>
  );
};

export default OurVision;