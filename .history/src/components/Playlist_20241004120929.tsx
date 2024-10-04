import React from "react";

interface PlaylistProps {
	videos: Array<{
		id: string;
		title: string;
		thumbnail: string;
	}>;
	onVideoSelect: (videoId: string, description: string) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ videos, onVideoSelect }) => {
	return (
		<div>
			{videos.map((video) => {
				<div
					key={video.id}
					className="flex items-center p-2 cursor-pointer"
					onClick={() => onVideoSelect(video.id, video.title)}
				>
					<img
						className="mb-1"
						src={video.thumbnails.default.url}
						alt={video.title}
					/>
					<p className="ml-2">{video.title}</p>
				</div>;
			})}
		</div>
	);
};
