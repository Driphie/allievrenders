import { useParams } from "react-router-dom";
import { useEffect } from "react";
import PropertyHeader from "@/components/property/PropertyHeader";
import PropertyMedia from "@/components/property/PropertyMedia";
import PropertyFeatures from "@/components/property/PropertyFeatures";
import PropertyTestimonial from "@/components/property/PropertyTestimonial";
import PropertyContact from "@/components/property/PropertyContact";
import BackButton from "@/components/property/BackButton";
import Navbar from "@/components/Navbar";
import ProjectRedirects from "@/components/ProjectRedirects";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { propertiesData } from "@/components/property/PropertyData";

const PropertyDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    // Force scroll to top immediately and after a brief delay to override GSAP ScrollTrigger
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);
    return () => clearTimeout(timeout);
  }, [id]);

  const propertyData = propertiesData[id as keyof typeof propertiesData];

  if (!propertyData) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-20 text-center">
          <h1 className="text-2xl text-estate-800">Propiedad no encontrada</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <BackButton />
        <PropertyHeader 
          title={propertyData.title}
          location={propertyData.location}
          price={propertyData.price}
          propertyType={propertyData.propertyType}
          year={propertyData.year}
          description={propertyData.description}
        />
        <PropertyMedia 
          images={propertyData.images}
          videoId={propertyData.videoId}
          trailerId={propertyData.trailerId}
          view360Url={propertyData.view360Url}
          statusImages={propertyData.statusImages}
        />
                
        {propertyData.testimonial && (
          <PropertyTestimonial 
            quote={propertyData.testimonial.quote}
            name={propertyData.testimonial.name}
            role={propertyData.testimonial.role}
            image={propertyData.testimonial.image}
          />
        )}
        
        <PropertyContact whatsappLink={propertyData.whatsappLink} />
        
        <ProjectRedirects currentProjectId={id as string} />
      </div>
      <WhatsAppFloat />
    </div>
  );
};

export default PropertyDetails;