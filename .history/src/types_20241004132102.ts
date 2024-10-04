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
	i;
}
