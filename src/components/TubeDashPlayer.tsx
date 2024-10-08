import React, { useEffect, useRef, useState } from "react";
import YouTubePlayer from "./player/YouTubePlayer";
import YouTubePlaylist from "./player/YouTubePlaylist";
import Description from "./player/Description";
import { useYouTubePlaylist } from "../hooks/useYouTubePlaylist";
import { YouTubeVideo } from "../types";
import Skeleton from "./common/Skeleton";
import { Theme } from "../types";
import { getThemeClass } from "../styles/themeClasses";

interface Props {
  apiKey?: string;
  playlistId?: string;
  theme?: Theme;
}

const TubeDashPlayer: React.FC<Props> = ({
  apiKey,
  playlistId,
  theme = "system",
}) => {
  const config = (window as any).TubeDashPlayerConfig || {};
  const finalApiKey = apiKey || config.apiKey;
  const finalPlaylistId = playlistId || config.playlistId;

  const { videos, loading, error } = useYouTubePlaylist(apiKey, playlistId);
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const [videoHeight, setVideoHeight] = useState<number | null>(null);

  useEffect(() => {
    const applySystemTheme = () => {
      if (theme === "system") {
        if (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    applySystemTheme();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        if (e.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme]);

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
  if (!finalApiKey || !finalPlaylistId) {
    return <Skeleton />;
  }

  if (loading) return <Skeleton />;
  if (error) return <div>{error}</div>;

  const themeClass = getThemeClass(theme);

  const containerClass = theme === "dark" ? `dark ${themeClass}` : themeClass;

  return (
    <div
      className={`grid h-full grid-cols-1 gap-4 p-4 lg:grid-cols-[2fr_1fr] ${containerClass}`}
    >
      {/* Video Player */}
      {selectedVideo ? (
        <div ref={videoContainerRef} className="relative aspect-video w-full">
          <YouTubePlayer videoId={selectedVideo.videoId} />
        </div>
      ) : (
        <div className="bg-default-300 relative aspect-video w-full animate-pulse rounded-md"></div>
      )}

      {/* Description and Playlist */}
      <div className="flex h-full flex-col gap-4">
        {/* Playlist */}
        <div
          className="min-h-0 flex-[2] overflow-y-auto"
          style={{
            maxHeight: videoHeight ? `${(videoHeight * 2) / 3}px` : "auto",
          }}
        >
          <YouTubePlaylist videos={videos} onVideoSelect={handleVideoSelect} />
        </div>
        {/* Video Description */}
        <div
          className="min-h-0 flex-[1] overflow-y-auto"
          style={{
            maxHeight: videoHeight ? `${videoHeight / 3}px` : "auto",
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
            <div className="flex flex-1 flex-col gap-2">
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
