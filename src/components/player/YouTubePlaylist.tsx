import React from "react";
import { YouTubeVideo, VideoSelectionHandler } from "@/types/types";
import { truncateTextByLines } from "../../hooks/useTruncateText";
import { formatDescription } from "@/utils/formatting";

interface Props {
	videos: YouTubeVideo[];
	onVideoSelect: VideoSelectionHandler;
	maxLines?: number;
}

const YouTubePlaylist: React.FC<Props> = ({
	videos,
	onVideoSelect,
	maxLines,
}) => {
	return (
		<>
			{videos.map((video) => {
				return (
					<div
						key={video.id}
						className="flex items-start gap-2 cursor-pointer
							transition duration-300 ease-in-out hover:bg-default-200"
						onClick={() => onVideoSelect(video.id, video.title)}
					>
						<img
							className="mb-1 aspect-square w-20 h-20 rounded-md"
							src={video.thumbnail}
							alt={video.title}
						/>
						<div className="flex flex-col py-2">
							<h3 className="text-xs font-semibold text-default-900">
								{video.title}
							</h3>
							<p
								className="text-xs text-default-900 max-h-[50px] overflow-hidden"
								dangerouslySetInnerHTML={{
									__html: formatDescription(
										truncateTextByLines(
											video.description,
											maxLines
										)
									),
								}}
							/>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default YouTubePlaylist;
