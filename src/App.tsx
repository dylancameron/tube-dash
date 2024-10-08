import React from "react";
import TubeDashPlayer from "./components/TubeDashPlayer";

const App: React.FC = () => {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY as string;
  const playlistId = import.meta.env.VITE_YOUTUBE_PLAYLIST_ID as string;

  return (
    <TubeDashPlayer theme="system" apiKey={apiKey} playlistId={playlistId} />
  );
};

export default App;
