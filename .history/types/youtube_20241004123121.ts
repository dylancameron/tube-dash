export interface YouTubeSnippet {
	title: string;
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
