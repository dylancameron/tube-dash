import React, { useEffect, useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import Playlist from "./components/Playlist";
import VideoDescription from "./components/VideoDescription";
import { useYouTubePlaylist } from "./hooks/useYouTubePlaylist";
import { Video } from "./types";

const App: React.FC = () => {
	const { videos, loading, error } = useYouTubePlaylist();
	const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

	useEffect(() => {
		if (videos.length > 0 && !selectedVideo) {
			setSelectedVideo(videos[0]);
		}
	}, [videos, selectedVideo]);

	const handleVideoSelect = (videoId: string) => {
		const video = videos.find((v) => v.videoId === videoId);
		if (video) {
			setSelectedVideo(video);
		}
	};

	if (loading) return <div>Loading videos...</div>;
	if (error) return <div>{error}</div>;

	return (
		<div className="flex gap-4 p-4">
			{/* Video Player */}
			<div className="flex-1">
				{selectedVideo ? (
					<VideoPlayer videoId={selectedVideo.videoId} />
				) : (
					<div>Select a video from the playlist</div>
				)}
			</div>

			{/* Video Description */}
			<div className="flex-1 max-w-md">
				{selectedVideo ? (
					<VideoDescription
						title={selectedVideo.title}
						description={selectedVideo.description}
						publishedAt={selectedVideo.publishedAt}
					/>
				) : (
					<div>Select a video to see the description</div>
				)}
			</div>

			{/* Playlist */}
			<div className="w-64 overflow-y-scroll max-h-96">
				<Playlist videos={videos} onVideoSelect={handleVideoSelect} />
			</div>
		</div>
	);
};

export default App;
