import React from "react";
import { truncateText } from "../hooks/useTruncateText";

interface VideoDescriptionProps {
	title: string;
	description: string;
}

const VideoDescription: React.FC<VideoDescriptionProps> = ({
	title,
	description,
}) => {
	return (
		<div className="px-4 py-8 border-default-200 rounded-xl border-2">
			<h3 className="text-xl font-bold mb-2">{title}</h3>
			<p className="text-sm leading-6">{truncateText(description)}</p>
		</div>
	);
};

export default VideoDescription;
