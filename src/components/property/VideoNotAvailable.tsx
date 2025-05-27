
import { VideoOff } from "lucide-react";

const VideoNotAvailable = () => {
  return (
    <div className="relative pb-[56.25%] h-0">
      <div className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <VideoOff className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p className="text-lg font-medium">Video no disponible</p>
          <p className="text-sm mt-1">Este contenido no está disponible actualmente</p>
        </div>
      </div>
    </div>
  );
};

export default VideoNotAvailable;