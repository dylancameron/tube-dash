import React from "react";

interface Props {
	videoId: string;
}

const YouTubePlayer: React.FC<Props> = ({ videoId }) => {
	const videoUrl = `https://www.youtube.com/embed/${videoId}`;
	return (
		<iframe
			className="relative w-full aspect-video rounded-md"
			src={videoUrl}
			title="YouTube video player"
			allowFullScreen
		/>
	);
};

export default YouTubePlayer;
