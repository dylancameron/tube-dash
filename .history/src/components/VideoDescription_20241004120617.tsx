import React from "react";

interface VideoDescriptionProps {
	title: string;
	description: string;
}

const VideoDescription: React.FC<VideoDescriptionProps> = ({
	title,
	description,
}) => {
	return (
		<div className="p-4 border-t border-white">
			<h3 className="text-xl font-bold mb-2 uppercase">{title}</h3>
			<p>{description}</p>
		</div>
	);
};

export default VideoDescription;
