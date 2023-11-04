import MediaPreviewItem from "../mediaPreviewItem/MediaPreviewItem";

const MediaPreview = () => {
	return (
		<div className="flex items-center justify-center h-full w-full">
			<div className="grid h-full w-full grid-cols-7 px-7 gap-5">
				<MediaPreviewItem />
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
