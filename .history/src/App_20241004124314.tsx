import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoPlayer from "./components/VideoPlayer";
import Playlist from "./components/Playlist";
import VideoDescription from "./components/VideoDescription";
import { YouTubeAPIResponse, YouTubePlaylistItem } from "./types/youtube";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || "";
const PLAYLIST_ID = import.meta.env.VITE_YOUTUBE_PLAYLIST_ID;

interface Video {
	id: string;
	title: string;
	thumbnail: string;
	videoId: string;
}

const App: React.FC = () => {
	const [videos, setVideos] = useState<Video[]>([]);
	const [selectedVideoId, setSelectedVideoId] = useState<Video | null>(null);
	const [title, setTitle] = useState<string>("");
	const [description, setDescription] = useState<string>("");

	useEffect(() => {
		const fetchPlaylist = async () => {
			try {
				// Base URL for fetching playlist items
				let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${PLAYLIST_ID}`;

				if (API_KEY) {
					url += `&key=${API_KEY}`;
				}

				const response = await axios.get<YouTubeAPIResponse>(url);

				const videoItems = response.data.items.map(
					(item: YouTubePlaylistItem) => ({
						id: item.snippet.resourceId.videoId,
						title: item.snippet.title,
						thumbnail: item.snippet.thumbnails.default.url,
						videoId: item.snippet.resourceId.videoId,
					})
				);

				setVideos(videoItems);

				if (videoItems.length > 0) {
					setSelectedVideoId(videoItems[0]);
					setTitle(videoItems[0].title);
					setDescription(videoItems[0].title);
				}
			} catch (error) {
				console.error("Error fetching playlist:", error);
			}
		};

		fetchPlaylist();
	}, []);

	const handleVideoSelect = (videoId: string, description: string) => {
		const selectedVideo = videos.find((video) => video.videoId === videoId);
		setSelectedVideoId(selectedVideo || null);
		setTitle(selectedVideo?.title || "");
		setDescription(description || "");
	};

	return (
		<div className="flex gap-4 p-4">
			<div className="flex-1">
				<VideoPlayer videoId={selectedVideoId?.videoId || ""} />
			</div>
			<div className="w-64 overflow-y-scroll max-h-96">
				<Playlist videos={videos} onVideoSelect={handleVideoSelect} />
			</div>
			<div className="flex-1">
				<VideoDescription title={title} description={description} />
			</div>
		</div>
	);
};

export default App;
