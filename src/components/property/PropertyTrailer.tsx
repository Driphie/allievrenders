import VideoNotAvailable from "./VideoNotAvailable";

interface PropertyTrailerProps {
  trailerId?: string;
}

const PropertyTrailer = ({ trailerId }: PropertyTrailerProps) => {
    // Check if trailerId is missing, empty, or invalid
  if (!trailerId || trailerId.trim() === '' || trailerId.startsWith('tu-id-de-trailer')) {
    return <VideoNotAvailable />;
  }

  return (
    <div className="relative pb-[56.25%] h-0">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
        src={`https://www.youtube.com/embed/${trailerId}`}
        title="Property Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default PropertyTrailer;