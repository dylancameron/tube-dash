export const truncateText = (text: string, maxLength: number = 250): string => {
	if (text.length > maxLength) {
		return text.substring(0, maxLength) + "...";
	}
	return text;
};

export const truncateTextByLines = (
	text: string,
	maxLines: number = 3
): string => {
	const lines = text.split("\n"); // Split text by line breaks
	if (lines.length > maxLines) {
		return lines.slice(0, maxLines).join("\n") + "...";
	}
	return text;
};
