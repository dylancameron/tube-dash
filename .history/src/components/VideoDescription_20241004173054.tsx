import React from "react";
import { truncateText } from "../hooks/useTruncateText";
import { formatPublishedDate } from "@/utils/formatting";

interface VideoDescriptionProps {
	title: string;
	description: string;
	publishedAt: string;
}

const VideoDescription: React.FC<VideoDescriptionProps> = ({
	title,
	description,
	publishedAt,
}) => {
	return (
		<div className="px-4 py-8 border-default-200 rounded-xl border-2">
			<h3 className="text-xl font-bold mb-2">{title}</h3>
			<p className="text-sm leading-6 text-justify">
				{truncateText(description)}
			</p>
			<p className="text-xs text-gray-500 mt-2">
				{formatPublishedDate(publishedAt)}
			</p>
		</div>
	);
};

export default VideoDescription;
