import React from "react";

const ComponentSkeleton: React.FC = () => {
  return (
    <div className="grid animate-pulse grid-cols-1 gap-4 p-4 lg:grid-cols-2fr-1fr">
      {/* Skeleton for the video player */}
      <div className="bg-default-300 relative aspect-video w-full rounded-md">
        {/* Responsive video player that controls the overall height */}
      </div>

      {/* Description and Playlist Container */}
      <div className="flex h-full flex-col gap-4 lg:h-auto">
        {/* Skeleton for Description */}
        <div className="flex flex-1 flex-col gap-2">
          <div className="bg-default-300 h-6 w-3/4 rounded-md"></div>
          <div className="bg-default-300 h-4 w-full rounded-md"></div>
          <div className="bg-default-300 h-4 w-5/6 rounded-md"></div>
        </div>

        {/* Skeleton for Playlist */}
        <div className="h-full flex-1 space-y-4 overflow-y-auto">
          <div className="flex gap-4 pr-4">
            <div className="bg-default-300 h-24 w-full rounded-md"></div>
            <div className="bg-default-300 h-4 w-full rounded-md"></div>
          </div>
          <div className="flex gap-4 pr-4">
            <div className="bg-default-300 h-24 w-full rounded-md"></div>
            <div className="bg-default-300 h-4 w-full rounded-md"></div>
          </div>
          <div className="flex gap-4 pr-4">
            <div className="bg-default-300 h-24 w-full rounded-md"></div>
            <div className="bg-default-300 h-4 w-full rounded-md"></div>
          </div>
          <div className="flex gap-4 pr-4">
            <div className="bg-default-300 h-24 w-full rounded-md"></div>
            <div className="bg-default-300 h-4 w-full rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoSkeleton: React.FC = () => {
  return <div className="bg-default-300 relative aspect-video w-full rounded-md"></div>;
};

const DescriptionSkeleton: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="bg-default-300 h-6 w-3/4 rounded-md"></div>
      <div className="bg-default-300 h-4 w-full rounded-md"></div>
      <div className="bg-default-300 h-4 w-5/6 rounded-md"></div>
    </div>
  );
};

const PlaylistSkeleton: React.FC = () => {
  return (
    <div className="h-full flex-1 space-y-4 overflow-y-auto">
      <div className="flex gap-4 pr-4">
        <div className="bg-default-300 h-24 w-full rounded-md"></div>
        <div className="bg-default-300 h-4 w-full rounded-md"></div>
      </div>
      <div className="flex gap-4 pr-4">
        <div className="bg-default-300 h-24 w-full rounded-md"></div>
        <div className="bg-default-300 h-4 w-full rounded-md"></div>
      </div>
      <div className="flex gap-4 pr-4">
        <div className="bg-default-300 h-24 w-full rounded-md"></div>
        <div className="bg-default-300 h-4 w-full rounded-md"></div>
      </div>
      <div className="flex gap-4 pr-4">
        <div className="bg-default-300 h-24 w-full rounded-md"></div>
        <div className="bg-default-300 h-4 w-full rounded-md"></div>
      </div>
    </div>
  );
};

export { ComponentSkeleton, DescriptionSkeleton, PlaylistSkeleton, VideoSkeleton };
