export interface IMediaPreviewItem {}

const MediaPreviewItem = () => (
	<div className="flex items-center justify-center">
		<div className="grid grid-cols-6 grid-rows-6 ">
			<div id="media-container" className="col-span-full row-span-4 rounded bg-black">
				MEDIA
			</div>
			<div
				id="media-meta-data-container"
				className="flex items-center justify-center col-span-full row-span-2 gap-3 px-3"
			>
				<p>Title</p>
				<p>Name</p>
				<p>views</p>
			</div>
		</div>
	</div>
);

export default MediaPreviewItem;
