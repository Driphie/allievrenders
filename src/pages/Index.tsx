import Hero from "@/components/Hero";
import PropertyGrid from "@/components/PropertyGrid";
import AboutUs from "@/components/AboutUs";
import OurDifferential from "@/components/OurDifferential";
import OurVision from "@/components/OurVision";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import LogoCarousel from "@/components/LogoCarousel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
// Check if we need to scroll to the discover section
    if (location.state && location.state.scrollToDiscover) {
      setTimeout(() => {
        const discoverSection = document.getElementById('discover');
        if (discoverSection) {
          discoverSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <div className="opacity-0 animate-fadeIn" style={{ animationDelay: '200ms' }}>
        <OurVision />
      </div>

      <section className="py-32 opacity-0 animate-fadeIn" id="discover">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h4 id="proyectos" className="text-estate-500 uppercase tracking-wider text-sm font-semibold">Transformando ideas en realidad</h4>
          <h2 className="text-5xl font-display text-estate-800 mb-3">Nuestros Proyectos</h2 >
          <div className="w-24 h-1 bg-estate-500 mx-auto my-8 rounded-full"></div>
          <PropertyGrid />
        </div>
      </section>

      <div className="opacity-0 animate-fadeIn" style={{ animationDelay: '400ms' }}>
        <AboutUs />
      </div>

      <div className="opacity-0 animate-fadeIn" style={{ animationDelay: '500ms' }}>
        <OurDifferential />
      </div>

      <div className="opacity-0 animate-fadeIn" style={{ animationDelay: '600ms' }}>
        <FAQ />
      </div>

      <div className="opacity-0 animate-fadeIn" style={{ animationDelay: '800ms' }}>
        <LogoCarousel />
      </div>
      
      <div className="opacity-0 animate-fadeIn" style={{ animationDelay: '900ms' }}>
        <Testimonials />
      </div>

      <div className="opacity-0 animate-fadeIn" style={{ animationDelay: '1000ms' }}>
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;