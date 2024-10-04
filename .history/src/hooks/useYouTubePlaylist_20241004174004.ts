import axios from "axios";
import { useEffect, useState } from "react";
import { YouTubeAPIResponse, Video } from "@/types";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const PLAYLIST_ID = import.meta.env.VITE_YOUTUBE_PLAYLIST_ID;

export const useYouTubePlaylist = () => {
	const [videos, setVideos] = useState<Video[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPlaylist = async () => {
			try {
				const response = await axios.get<YouTubeAPIResponse>(
					`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
				);

				const videoItems = response.data.items.map((item) => ({
					id: item.snippet.resourceId.videoId,
					title: item.snippet.title,
					thumbnail: item.snippet.thumbnails.default.url,
					videoId: item.snippet.resourceId.videoId,
					description: item.snippet.description,
					publishedAt: item.snippet.publishedAt,
				}));

				setVideos(videoItems);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching playlist:", error);
				setError("Error fetching playlist");
				setLoading(false);
			}
		};

		fetchPlaylist();
	}, []);

	return { videos, loading, error };
};
