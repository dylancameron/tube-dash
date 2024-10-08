import React from "react";
import { YouTubeVideo, VideoSelectionHandler } from "@/types";
import { truncateTextByLines } from "../../hooks/useTruncateText";
import { formatDescription } from "@/utils/getFormatting";

interface Props {
  videos: YouTubeVideo[];
  onVideoSelect: VideoSelectionHandler;
  maxLines?: number;
}

const YouTubePlaylist: React.FC<Props> = ({
  videos,
  onVideoSelect,
  maxLines,
}) => {
  return (
    <>
      {videos.map((video) => {
        return (
          <div
            key={video.id}
            className="hover:bg-default-200 flex cursor-pointer items-start gap-2 transition duration-300 ease-in-out"
            onClick={() => onVideoSelect(video.id, video.title)}
          >
            <img
              className="mb-1 aspect-square h-20 w-20 rounded-md"
              src={video.thumbnail}
              alt={video.title}
            />
            <div className="flex flex-col py-2">
              <h3 className="text-default-900 text-xs font-semibold">
                {video.title}
              </h3>
              <p
                className="text-default-900 max-h-[50px] overflow-hidden text-xs"
                dangerouslySetInnerHTML={{
                  __html: formatDescription(
                    truncateTextByLines(video.description, maxLines),
                  ),
                }}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default YouTubePlaylist;
