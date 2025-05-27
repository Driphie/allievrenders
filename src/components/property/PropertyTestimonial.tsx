
interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image?: string;
}

const PropertyTestimonial = ({ quote, name, role, image }: TestimonialProps) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
      <div className="bg-estate-50 rounded-xl p-6 md:p-10 relative">
        <svg
          className="absolute top-6 left-6 w-12 h-12 text-estate-200"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M10 8c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S15.5 8 10 8zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zM28 8c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S33.5 8 28 8zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
        </svg>
        
        <blockquote className="text-estate-700 text-lg md:text-xl leading-relaxed mt-6 mb-8">
          "{quote}"
        </blockquote>
        
        <div className="flex items-center">
          {image && (
            <div className="mr-4 h-12 w-12 rounded-full overflow-hidden">
              <img src={image} alt={name} className="h-full w-full object-cover" />
            </div>
          )}
          <div>
            <p className="font-semibold text-estate-800">{name}</p>
            <p className="text-estate-500 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyTestimonial;