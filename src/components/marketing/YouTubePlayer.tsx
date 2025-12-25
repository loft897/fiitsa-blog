import React from "react";

export default function YouTubePlayer({
  videoId,
  autoplay = false,
}: {
  videoId: string;
  autoplay?: boolean;
}) {
  const src = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=${autoplay ? 1 : 0}`;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/20 bg-black/90 shadow-lg">
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
