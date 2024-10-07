import React from "react";
import TubeDashPlayer from "./components/TubeDashPlayer";

interface Props {
	apiKey: string;
	playlistId: string;
}

const App: React.FC<Props> = ({ apiKey, playlistId }) => {
	return <TubeDashPlayer apiKey={apiKey} playlistId={playlistId} />;
};

export default App;
