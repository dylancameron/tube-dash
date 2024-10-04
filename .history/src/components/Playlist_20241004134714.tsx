import React from "react";
import { Video, VideoSelectionHandler } from "@/types";

interface PlaylistProps {
	videos: Video[];
	onVideoSelect: VideoSelectionHandler;
}

const Playlist: React.FC<PlaylistProps> = ({ videos, onVideoSelect }) => {
	return (
		<>
			{videos.map((video) => {
				return (
					<div
						key={video.id}
						className="flex items-start gap-2 p-2 cursor-pointer"
						onClick={() => onVideoSelect(video.id, video.title)}
					>
						<img
							className="mb-1"
							src={video.thumbnail}
							alt={video.title}
						/>
						<p className="text-sm font-semibold mt-2">
							{video.description}
						</p>
					</div>
				);
			})}
		</>
	);
};

export default Playlist;
