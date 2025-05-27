import VideoNotAvailable from "./VideoNotAvailable";

interface PropertyVideoProps {
  videoId?: string;
}

const PropertyVideo = ({ videoId }: PropertyVideoProps) => {
    // Check if videoId is missing, empty, or invalid
  if (!videoId || videoId.trim() === '' || videoId.startsWith('tu-id-de-video')) {
    return <VideoNotAvailable />;
  }

  return (
    <div className="relative pb-[56.25%] h-0">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Property Video Tour"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default PropertyVideo;