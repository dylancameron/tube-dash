import React, { useState } from "react";

interface Props {
	text: string;
	maxLines: number;
}

const TruncateTextByLines: React.FC<Props> = ({ text, maxLines }) => {
	const [isTruncated, setIsTruncated] = useState(true);

	const handleToggle = () => {
		setIsTruncated(!isTruncated);
	};

	const truncatedText = (text: string, maxLines: number): string => {
		const lines = text.split("\n");
		if (lines.length > maxLines) {
			return lines.slice(0, maxLines).join("\n");
		}
		return text;
	};

	return (
		<div>
			<p>{isTruncated ? truncatedText(text, maxLines) + "..." : text}</p>
			{text.split("\n").length > maxLines && (
				<button type="button" onClick={handleToggle}>
					{isTruncated ? "More" : "Show less"}
				</button>
			)}
		</div>
	);
};

export default TruncateTextByLines;
