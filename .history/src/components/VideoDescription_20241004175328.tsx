import React from "react";
import { truncateText } from "../hooks/useTruncateText";
import { formatPublishedDate, formatDescription } from "@/utils/formatting";

interface VideoDescriptionProps {
	title: string;
	description: string;
	publishedAt: string;
	maxLength: number;
}

const VideoDescription: React.FC<VideoDescriptionProps> = ({
	title,
	description,
	publishedAt,
	maxLength,
}) => {
	return (
		<div className="px-4 py-8 border-default-200 rounded-xl border-2">
			<h3 className="text-xl font-bold mb-2">{title}</h3>
			<p
				className="text-sm whitespace-pre-wrap"
				dangerouslySetInnerHTML={{
					__html: formatDescription(
						truncateText(description, maxLength)
					),
				}}
			/>
			<p className="mt-4 text-xs text-gray-500">
				{formatPublishedDate(publishedAt)}
			</p>
		</div>
	);
};

export default VideoDescription;
