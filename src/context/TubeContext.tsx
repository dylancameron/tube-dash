import React, { createContext, useState, useRef, useEffect } from "react";
import { YouTubeVideo } from "@/types";

// Define context state interface
interface TubeContextState {
  videos: YouTubeVideo[];
  setVideos: (videos: YouTubeVideo[]) => void;
  selectedVideo: YouTubeVideo | null;
  setSelectedVideo: (video: YouTubeVideo) => void;
  videoHeight: number | null;
  setVideoHeight: (height: number | null) => void;
  videoContainerRef: React.RefObject<HTMLDivElement>;
}

// Create the context with default values
const TubeContext = createContext<TubeContextState>({
  videos: [],
  setVideos: () => {},
  selectedVideo: null,
  setSelectedVideo: () => {},
  videoHeight: null,
  setVideoHeight: () => {},
  videoContainerRef: { current: null }
});

// Create a provider component
export const TubeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  const [videoHeight, setVideoHeight] = useState<number | null>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVideoHeight = () => {
      if (videoContainerRef.current) {
        setVideoHeight(videoContainerRef.current.clientHeight); // Or use offsetHeight
      }
    };

    // Update the video height on load and resize
    updateVideoHeight();
    window.addEventListener("resize", updateVideoHeight);

    return () => {
      window.removeEventListener("resize", updateVideoHeight);
    };
  }, []);

  return (
    <TubeContext.Provider
      value={{
        videos,
        selectedVideo,
        setSelectedVideo,
        videoHeight,
        setVideoHeight,
        videoContainerRef,
        setVideos
      }}
    >
      {children}
    </TubeContext.Provider>
  );
};

export default TubeContext;
