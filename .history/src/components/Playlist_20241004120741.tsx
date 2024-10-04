import React from "react";

interface PlaylistProps {
	videos: Array<{
		id: string;
		title: string;
		thumbnails: {
			default: {
				url: string;
			};
		};
	}>;
	onVideoSelect: (videoId: string, description: string) => void;
}
