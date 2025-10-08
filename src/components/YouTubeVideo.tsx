interface YouTubeVideoProps {
  videoUrl?: string;
  title: string;
}

const YouTubeVideo = ({ videoUrl, title }: YouTubeVideoProps) => {
  // Extract video ID from different YouTube URL formats
  const getVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  if (!videoUrl || videoUrl.trim() === '') {
    return (
      <div className="w-full h-[500px] rounded-xl bg-gradient-to-br from-gray-50 to-slate-100 border border-gray-200/50 flex items-center justify-center">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 bg-primary/20 rounded"></div>
          </div>
          <p className="text-muted-foreground font-medium">Video no disponible</p>
          <p className="text-sm text-muted-foreground/70">Agrega un enlace de YouTube</p>
        </div>
      </div>
    );
  }

  const videoId = getVideoId(videoUrl);
  
  if (!videoId) {
    return (
      <div className="w-full h-[500px] rounded-xl bg-red-50 border border-red-200/50 flex items-center justify-center">
        <div className="text-center space-y-2">
          <p className="text-red-600 font-medium">URL de YouTube inválida</p>
          <p className="text-sm text-red-500/70">Verifica el enlace del video</p>
        </div>
      </div>
    );
  }

  return (
   <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=0&vq=hd2160&quality=hd2160`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeVideo;