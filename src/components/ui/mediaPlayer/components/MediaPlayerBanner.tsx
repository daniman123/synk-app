import React from "react";

const MediaPlayerBanner = () => {
	return (
		<div className="flex h-[10%] w-full bg-blue-500 justify-between">
			<div className="flex w-[70%]">
				<div className="w-[20%]">PFP</div>
				<div className="block w-[80%]">
					<p className="text-lg truncate">Username</p>
					<p className="text-base truncate">Title</p>
					<p className="text-sm truncate">Category</p>
				</div>
			</div>
			<p>ViewerCount</p>
		</div>
	);
};

export default MediaPlayerBanner;
