import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoPlayer from "./components/VideoPlayer";
import Playlist from "./components/Playlist";
import VideoDescription from "./components/VideoDescription";
import { YouTubePlaylistItem, YouTubeAPIResponse, Video } from "./types";
import { Drawer } from "./components/Drawers";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || "";
const PLAYLIST_ID = import.meta.env.VITE_YOUTUBE_PLAYLIST_ID;

const App: React.FC = () => {
	const [videos, setVideos] = useState<Video[]>([]);
	const [selectedVideoId, setSelectedVideoId] = useState<Video | null>(null);
	const [title, setTitle] = useState<string>("");
	const [description, setDescription] = useState<string>("");

	useEffect(() => {
		const fetchPlaylist = async () => {
			try {
				// Base URL for fetching playlist items
				const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${PLAYLIST_ID}&key=${API_KEY}`;
				const response = await axios.get<YouTubeAPIResponse>(url);

				const videoItems = response.data.items.map(
					(item: YouTubePlaylistItem) => ({
						id: item.snippet.resourceId.videoId,
						title: item.snippet.title,
						thumbnail: item.snippet.thumbnails.default.url,
						videoId: item.snippet.resourceId.videoId,
						description: item.snippet.description,
					})
				);

				setVideos(videoItems);

				if (videoItems.length > 0) {
					setSelectedVideoId(videoItems[0]);
					setTitle(videoItems[0].title);
					setDescription(videoItems[0].description);
				}
			} catch (error) {
				if (!API_KEY) {
					console.error(
						"This playlist is private, and no API key is provided."
					);
				} else {
					console.error("Error fetching playlist:", error);
				}
			}
		};

		fetchPlaylist();
	}, []);

	const handleVideoSelect = (videoId: string) => {
		const selectedVideo = videos.find((video) => video.videoId === videoId);
		setSelectedVideoId(selectedVideo || null);
		setTitle(selectedVideo?.title || "");
		setDescription(selectedVideo?.description || "");
	};

	return (
		<div className="flex gap-4 p-4">
			<div className="flex-1">
				<VideoPlayer videoId={selectedVideoId?.videoId || ""} />
			</div>
			<div className="flex max-w-md">
				<VideoDescription title={title} description={description} />
			</div>
			<div className="flex-1 max-w-md overflow-y-scroll max-h-124">
				<Playlist videos={videos} onVideoSelect={handleVideoSelect} />
			</div>
		</div>
	);
};

export default App;
