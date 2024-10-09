import React from "react";

interface Props {
  videoId: string;
}

const YouTubePlayer: React.FC<Props> = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  return (
    <iframe
      className="relative aspect-video w-full rounded-md"
      src={videoUrl}
      title="YouTube video player"
      allowFullScreen
    />
  );
};

export default YouTubePlayer;
