import React, { useContext, useEffect } from "react";
import YouTubePlayer from "./player/YouTubePlayer";
import YouTubePlaylist from "./player/YouTubePlaylist";
import Description from "./player/Description";
import { useYouTubePlaylist } from "../hooks/useYouTubePlaylist";
import { VideoSkeleton, DescriptionSkeleton, ComponentSkeleton } from "./common/Skeleton";
import TubeContext from "@/context/TubeContext";
import { Theme } from "@/types";
import { getThemeClass, applySystemTheme } from "@/utils/theme";

interface Props {
  apiKey?: string;
  playlistId?: string;
  theme?: Theme;
}

const TubeDashPlayer: React.FC<Props> = ({ apiKey, playlistId, theme = "system" }) => {
  const config = (window as any).TubeDashPlayerConfig || {};
  const finalApiKey = apiKey || config.apiKey;
  const finalPlaylistId = playlistId || config.playlistId;

  const { videos, setVideos, selectedVideo, setSelectedVideo, videoHeight, videoContainerRef } =
    useContext(TubeContext);

  const { videos: fetchedVideos, loading, error } = useYouTubePlaylist(apiKey, playlistId);

  useEffect(() => {
    if (fetchedVideos.length > 0) {
      setVideos(fetchedVideos);
      if (!selectedVideo) {
        setSelectedVideo(fetchedVideos[0]);
      }
    }
  }, [fetchedVideos, selectedVideo, setSelectedVideo, setVideos]);

  const handleVideoSelect = (videoId: string) => {
    const video = videos.find((v) => v.videoId === videoId);
    if (video) {
      setSelectedVideo(video);
    }
  };

  // Apply system theme
  useEffect(() => {
    applySystemTheme(theme);
  }, [theme]);

  // Render skeleton if no API key or playlist ID is provided
  if (!finalApiKey || !finalPlaylistId) {
    return <ComponentSkeleton />;
  }

  if (loading) return <ComponentSkeleton />;
  if (error) return <div>{error}</div>;

  const themeClass = getThemeClass(theme);
  const containerClass = theme === "dark" ? `dark ${themeClass}` : themeClass;

  return (
    <div className={`grid h-auto grid-cols-1 gap-4 p-4 lg:grid-cols-[2fr_1fr] ${containerClass}`}>
      {/* Video Player */}
      {selectedVideo ? (
        <div ref={videoContainerRef} className="relative w-full">
          <YouTubePlayer videoId={selectedVideo.videoId} />
        </div>
      ) : (
        <VideoSkeleton />
      )}

      {/* Description and Playlist */}
      <div className="flex h-full flex-col gap-4">
        {/* Playlist */}
        <div
          className="min-h-0 flex-[2] overflow-y-auto"
          style={{
            maxHeight: videoHeight ? `${(videoHeight * 2) / 3}px` : "auto"
          }}
        >
          <YouTubePlaylist videos={videos} onVideoSelect={handleVideoSelect} />
        </div>
        {/* Video Description */}
        <div
          className="min-h-0 flex-[1] overflow-y-auto"
          style={{
            maxHeight: videoHeight ? `${videoHeight / 3}px` : "auto"
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
            <DescriptionSkeleton />
          )}
        </div>
      </div>
    </div>
  );
};

export default TubeDashPlayer;
