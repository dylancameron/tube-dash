export interface YouTubeSnippet {
	title: string;
	description: string;
	thumbnails: {
		default: {
			url: string;
		};
	};
	resourceId: {
		videoId: string;
	};
}

export interface YouTubePlaylistItem {
	id: string;
	snippet: YouTubeSnippet;
}

export interface YouTubeAPIResponse {
	items: YouTubePlaylistItem[];
}

export interface Video {
	id: string;
	title: string;
	thumbnail: string;
	videoId: string;
	description: string;
}

export type VideoSelectionHandler = (
	videoId: string,
	description: string
) => void;
