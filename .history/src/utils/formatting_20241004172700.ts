// Format the published date from YouTube (ISO string) to a readable format
export const formatPublishedDate = (dateSring: string): string => {
	const date = new Date(dateSring);
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
};

// Detects URLs and replaces them with anchor tags, also preserves line breaks
export const formatDescription = (text: string): string => {
	// Convert the line breaks (\n) to <br> tags
	const formattedText = text.replace(/\n/g, "<br>");

	// Convert URLs to clickable anchor tags
	const urlRegex = /(https?:\/\/[^\s]+)/g;

	return formattedText.replace(urlRegex, (url) => {
		return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">${url}</a>`;
	});
};
