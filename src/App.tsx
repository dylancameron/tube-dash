import React from "react";
import TubeDashPlayer from "./components/TubeDashPlayer";
import { TubeProvider } from "./context/TubeContext";

const App: React.FC = () => {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY as string;
  const playlistId = import.meta.env.VITE_YOUTUBE_PLAYLIST_ID as string;

  return (
    <TubeProvider>
      <TubeDashPlayer theme="system" apiKey={apiKey} playlistId={playlistId} />
    </TubeProvider>
  );
};

export default App;
