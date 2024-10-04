import React from "react";
import { Video, VideoSelectionHandler } from "@/types";
import { truncateText } from "../hooks/useTruncateText";

interface PlaylistProps {
	videos: Video[];
	onVideoSelect: VideoSelectionHandler;
	maxLength?: number;
}

const Playlist: React.FC<PlaylistProps> = ({
	videos,
	onVideoSelect,
	maxLength = 100,
}) => {
	return (
		<>
			{videos.map((video) => {
				return (
					<>
						<div
							key={video.id}
							className="flex items-start gap-2 p-2 cursor-pointer"
							onClick={() => onVideoSelect(video.id, video.title)}
						>
							<img
								className="mb-2"
								src={video.thumbnail}
								alt={video.title}
							/>
							<div className="flex flex-col">
								<h3 className="text-sm font-semibold">
									{video.title}
								</h3>
								<p className="text-xs mt-2">
									{truncateText(video.description, maxLength)}
								</p>
							</div>
						</div>
						<div className="w-full h-0.5 bg-black"></div>
					</>
				);
			})}
		</>
	);
};

export default Playlist;
