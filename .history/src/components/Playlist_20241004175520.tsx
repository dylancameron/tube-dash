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
	maxLength = 50,
}) => {
	return (
		<>
			{videos.map((video) => {
				return (
					<>
						<div
							key={video.id}
							className="flex items-start gap-2 cursor-pointer
							transition duration-300 ease-in-out hover:bg-gray-200"
							onClick={() => onVideoSelect(video.id, video.title)}
						>
							<img
								className="mb-1"
								src={video.thumbnail}
								alt={video.title}
							/>
							<div className="flex flex-col py-2">
								<h3 className="text-sm font-semibold">
									{video.title}
								</h3>
								<p className="text-xs">
									{truncateText(
										video.description,
										(maxLength = 100)
									)}
								</p>
							</div>
						</div>
					</>
				);
			})}
		</>
	);
};

export default Playlist;
