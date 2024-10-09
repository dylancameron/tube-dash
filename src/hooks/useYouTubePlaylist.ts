import axios from "axios";
import { useEffect, useState } from "react";
import { YouTubeAPIResponse, YouTubeVideo } from "@/types";

export const useYouTubePlaylist = (apiKey?: string, playlistId?: string) => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const API_KEY =
          apiKey || (typeof import.meta !== "undefined" && import.meta.env.VITE_YOUTUBE_API_KEY);
        const PLAYLIST_ID =
          playlistId ||
          (typeof import.meta !== "undefined" && import.meta.env.VITE_YOUTUBE_PLAYLIST_ID);

        if (!API_KEY || !PLAYLIST_ID) {
          throw new Error("Missing YouTube API Key or Playlist ID");
        }

        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${PLAYLIST_ID}&key=${API_KEY}`;
        const response = await axios.get<YouTubeAPIResponse>(url);

        const videoItems = response.data.items.map((item) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.default.url,
          videoId: item.snippet.resourceId.videoId,
          description: item.snippet.description,
          publishedAt: item.snippet.publishedAt
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
  }, [apiKey, playlistId]);

  return { videos, loading, error };
};
