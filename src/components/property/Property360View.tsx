interface Property360ViewProps {
  url?: string;
}

const Property360View = ({ url }: Property360ViewProps) => {
  if (!url) {
    return (
      <div className="flex items-center justify-center h-[400px] bg-estate-100 rounded-lg">
        <p className="text-estate-600">Vista 360° no disponible</p>
      </div>
    );
  }

  return (
    <div className="relative pb-[56.25%] h-0">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
        src={url}
        title="Property 360 View"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Property360View;