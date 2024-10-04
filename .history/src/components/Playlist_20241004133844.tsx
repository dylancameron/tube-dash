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
		<div className="flex flex-1">
			{videos.map((video) => {
				return (
					<div
						key={video.id}
						className="flex items-center p-2 cursor-pointer"
						onClick={() => onVideoSelect(video.id, video.title)}
					>
						<img
							className="mb-1"
							src={video.thumbnail}
							alt={video.title}
						/>
						<p className="text-sm font-semibold">{video.title}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Playlist;
