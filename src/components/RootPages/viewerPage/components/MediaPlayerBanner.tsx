import React from "react";

const MediaPlayerBanner = () => {
	return (
		<div className="grid grid-cols-6">
			<div className="grid">
				<div className="row-span-full">PFP</div>
			</div>
			<div className="grid grid-rows-5 col-span-4">
				<div className="flex justify-start items-center row-span-2 p-1">name</div>
				<div className="flex justify-start items-center row-span-2 p-1 truncate">Title</div>
				<div className="flex justify-start items-center row-span-1 p-1 truncate">Category</div>
			</div>
			<div className="grid grid-rows-5 p-1">ViewerCount 12.3k</div>
		</div>
	);
};

export default MediaPlayerBanner;
