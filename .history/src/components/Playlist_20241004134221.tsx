import React from "react";

interface PlaylistProps {
	videos: Array<{
		id: string;
		title: string;
		thumbnail: string;
		videoId: string;
	}>;
	onVideoSelect: (videoId: string, description: string) => void;
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
						<p className="text-sm font-600 mt-2">{video.title}</p>
					</div>
				);
			})}
		</>
	);
};

export default Playlist;
