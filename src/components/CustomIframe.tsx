interface CustomIframeProps {
  iframeUrl?: string;
  title: string;
}

const CustomIframe = ({ iframeUrl, title }: CustomIframeProps) => {
  if (!iframeUrl || iframeUrl.trim() === '') {
    return (
      <div className="w-full h-[500px] rounded-xl bg-gradient-to-br from-gray-50 to-slate-100 border border-gray-200/50 flex items-center justify-center">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 bg-primary/20 rounded"></div>
          </div>
          <p className="text-muted-foreground font-medium">Contenido no disponible</p>
          <p className="text-sm text-muted-foreground/70">Agrega un enlace de iframe</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        className="w-full h-full border-0"
        src={iframeUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
      />
    </div>
  );
};

export default CustomIframe;