import React from "react";

const Skeleton: React.FC = () => {
	return (
		<div className="animate-pulse grid grid-cols-1 lg:grid-cols-2fr-1fr gap-4 p-4">
			{/* Skeleton for the video player */}
			<div className="relative w-full aspect-video bg-default-300 rounded-md">
				{/* Responsive video player that controls the overall height */}
			</div>

			{/* Description and Playlist Container */}
			<div className="flex flex-col gap-4 h-full lg:h-auto">
				{/* Skeleton for Description */}
				<div className="flex-1 flex flex-col gap-2">
					<div className="bg-default-300 h-6 w-3/4 rounded-md"></div>
					<div className="bg-default-300 h-4 w-full rounded-md"></div>
					<div className="bg-default-300 h-4 w-5/6 rounded-md"></div>
				</div>

				{/* Skeleton for Playlist */}
				<div className="flex-1 overflow-y-auto space-y-4 h-full">
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

export default Skeleton;
