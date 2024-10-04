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
							className="flex items-start gap-2 py-4 cursor-pointer
							transition duration-300 ease-in-out hover:bg-gray-200"
							onClick={() => onVideoSelect(video.id, video.title)}
						>
							<img
								// className="mb-1"
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
						<div className="w-full border-b border-default-200 bg-black"></div>
					</>
				);
			})}
		</>
	);
};

export default Playlist;
