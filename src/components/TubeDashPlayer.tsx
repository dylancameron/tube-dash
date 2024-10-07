import React, { useEffect, useRef, useState } from "react";
import YouTubePlayer from "./player/YouTubePlayer";
import YouTubePlaylist from "./player/YouTubePlaylist";
import Description from "./player/Description";
import { useYouTubePlaylist } from "../hooks/useYouTubePlaylist";
import { YouTubeVideo } from "../types/types";
import Skeleton from "./common/Skeleton";

interface Props {
	apiKey?: string;
	playlistId?: string;
}

const TubeDashPlayer: React.FC<Props> = ({ apiKey, playlistId }) => {
	const { videos, loading, error } = useYouTubePlaylist(apiKey, playlistId);
	const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(
		null
	);
	const videoContainerRef = useRef<HTMLDivElement | null>(null);
	const [videoHeight, setVideoHeight] = useState<number | null>(null);

	useEffect(() => {
		if (videos.length > 0 && !selectedVideo) {
			setSelectedVideo(videos[0]);
		}
	}, [videos, selectedVideo]);

	useEffect(() => {
		const updateVideoHeight = () => {
			if (videoContainerRef.current) {
				const videoHeight = videoContainerRef.current.offsetHeight;
				setVideoHeight(videoHeight);
			}
		};

		updateVideoHeight();
		window.addEventListener("resize", updateVideoHeight);

		return () => {
			window.removeEventListener("resize", updateVideoHeight);
		};
	});

	const handleVideoSelect = (videoId: string) => {
		const video = videos.find((v) => v.videoId === videoId);
		if (video) {
			setSelectedVideo(video);
		}
	};

	// Render skeleton if no API key or playlist ID is provided
	if (!apiKey || !playlistId) {
		return <Skeleton />;
	}

	if (loading) return <Skeleton />;
	if (error) return <div>{error}</div>;

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2fr-1fr gap-4 p-4 h-full">
			{/* Video Player */}
			{selectedVideo ? (
				<div
					ref={videoContainerRef}
					className="relative w-full aspect-video"
				>
					<YouTubePlayer videoId={selectedVideo.videoId} />
				</div>
			) : (
				<div className="animate-pulse relative w-full aspect-video bg-default-300 rounded-md"></div>
			)}

			{/* Description and Playlist */}
			<div className="flex flex-col gap-4 h-full">
				{/* Playlist */}
				<div
					className="flex-1 overflow-y-auto"
					style={{
						maxHeight: videoHeight
							? `${(videoHeight * 2) / 3}px`
							: "auto",
					}}
				>
					<YouTubePlaylist
						videos={videos}
						onVideoSelect={handleVideoSelect}
					/>
				</div>
				{/* Video Description */}
				<div
					className="flex-1 overflow-y-auto"
					style={{
						maxHeight: videoHeight
							? `${videoHeight / 3}px`
							: "auto",
					}}
				>
					{selectedVideo ? (
						<Description
							title={selectedVideo.title}
							description={selectedVideo.description}
							publishedAt={selectedVideo.publishedAt}
							maxLength={undefined}
						/>
					) : (
						<div className="flex-1 flex flex-col gap-2">
							<div className="bg-default-300 h-6 w-3/4 rounded-md"></div>
							<div className="bg-default-300 h-4 w-full rounded-md"></div>
							<div className="bg-default-300 h-4 w-5/6 rounded-md"></div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default TubeDashPlayer;
