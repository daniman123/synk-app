import React from "react";

export const MediaPreviewItem = () => {
	return (
		<div className="h-full col-span-1 rounded">
			<div className="h-[75%] rounded-lg bg-black"></div>
			<div className="flex h-[25%] px-3 gap-4">
				<p>title</p>
				<p>name</p>
				<p>views</p>
			</div>
		</div>
	);
};

const MediaPreview = () => {
	return (
		// <div className="flex items-center justify-center h-[15dvh] w-[95dvw]">
		<div className="flex items-center justify-center h-full w-full">
			<div className="grid h-full w-full grid-cols-6 px-12 gap-5">
				<MediaPreviewItem />
				<MediaPreviewItem />
				<MediaPreviewItem />
				<MediaPreviewItem />
				<MediaPreviewItem />
				<MediaPreviewItem />
			</div>
		</div>
	);
};

export default MediaPreview;
