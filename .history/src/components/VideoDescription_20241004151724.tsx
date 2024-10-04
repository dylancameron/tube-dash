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
		<div className="p-4 max-w-md">
			<h3 className="text-xl font-bold mb-2 uppercase border-b pb-2 border-default-500">
				{title}
			</h3>
			<p className="text-sm">{truncateText(description)}</p>
		</div>
	);
};

export default VideoDescription;
