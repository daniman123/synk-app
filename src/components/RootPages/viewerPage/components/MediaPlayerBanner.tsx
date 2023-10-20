import React from "react";

const MediaPlayerBanner = () => {
	return (
		<div className="grid grid-cols-6 shadow-2xl">
			<div className="grid">
				<div className="row-span-full flex justify-center items-center">
					<div className="h-full w-full text-center">PFP</div>
				</div>
			</div>
			<div className="grid grid-rows-5 col-span-4">
				<div className="flex justify-start items-center row-span-2 p-1">
					name
				</div>
				<div className="flex justify-start items-center pl-1 truncate">
					Title
				</div>
				<div className="flex justify-start items-center row-span-1 pl-1 truncate">
					Category
				</div>
			</div>
			<div className="flex justify-center items-start pt-2">
				<div>ViewerCount 12.3k</div>
			</div>
		</div>
	);
};

export default MediaPlayerBanner;
