import React from "react";

interface VideoPlayerProps {
	videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
	const videoUrl = `https://www.youtube.com/embed/${videoId}`;
	return (
		<iframe
			className="w-full h-auto"
			src={videoUrl}
			title="YouTube video player"
			allowFullScreen
		/>
	);
};

export default VideoPlayer;
