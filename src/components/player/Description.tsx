import React, { useState } from "react";
import { formatPublishedDate, formatDescription } from "@/utils/getFormatting";

interface Props {
  title: string;
  description: string;
  publishedAt: string;
  maxLength: number | undefined;
}

const Description: React.FC<Props> = ({ title, description, publishedAt }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  // Format the description
  const formattedDescription = formatDescription(description);

  // Function to toggle between truncated and full text
  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  // Truncate text by lines and append the "More" button directly after the ellipsis
  const truncateTextByLines = (text: string, maxLines: number): string => {
    const lines = text.split("<br>");
    if (lines.length > maxLines) {
      return (
        lines.slice(0, maxLines).join("<br>") +
        ` ... <button type="button" onClick={toggleTruncate}" class="text-default-400 hover:underline text-sm self-start">More</button>`
      );
    }
    return text;
  };

  return (
    <div className="flex flex-col" onClick={toggleTruncate}>
      <h3 className="text-md text-default-900 font-bold">{title}</h3>
      <div
        className="text-default-900 whitespace-pre-wrap text-sm"
        dangerouslySetInnerHTML={{
          __html: isTruncated
            ? truncateTextByLines(formattedDescription, 3)
            : formattedDescription,
        }}
      />
      {!isTruncated && (
        <button
          type="button"
          onClick={toggleTruncate}
          className="text-default-400 self-start text-sm hover:underline"
        >
          Show less
        </button>
      )}
      <p className="text-default-500 mt-1 text-xs">
        {formatPublishedDate(publishedAt)}
      </p>
    </div>
  );
};

export default Description;
