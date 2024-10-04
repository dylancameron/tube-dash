import React, { useState } from "react";
import { useYouTubePlaylist } from "@/hooks/useYouTubePlaylist";
import VideoPlayer from "./VideoPlayer";
import Playlist from "./Playlist";
import VideoDescription from "./VideoDescription";
import { VideoSelectionHandler, Video } from "@/types";

const VideoList: React.FC = () => {
	const { videos, loading, error } = useYouTubePlaylist();
	const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

	const handleVideoSelect: VideoSelectionHandler = (videoId) => {
		const video = videos.find((v) => v.videoId === videoId);
		if (video) {
			setSelectedVideo(video);
		}
	};

	if (loading) return <div>Loading videos...</div>;
	if (error) return <div>{error}</div>;

	return (
		<div className="flex gap-4 p-4">
			<div className="flex-1">
				{selectedVideo ? (
					<VideoPlayer videoId={selectedVideo.videoId} />
				) : (
					<div>No video selected</div>
				)}
			</div>
			<div className="flex-1 w-full overflow-y-scroll max-h-96">
				<Playlist videos={videos} onVideoSelect={handleVideoSelect} />
			</div>
			<div className="flex-1">
				{selectedVideo && (
					<VideoDescription
						title={selectedVideo.title}
						description={selectedVideo.description}
						publishedAt={selectedVideo.publishedAt}
					/>
				)}
			</div>
		</div>
	);
};

export default VideoList;
