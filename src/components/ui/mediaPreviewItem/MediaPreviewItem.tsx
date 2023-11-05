import Image from "next/image";
import { IMediaPreviewItemData } from "../../../../lib/mediaPreviews/types";

const MediaPreviewItem = ({
	imagePreview,
	title,
	username,
	viewerCount,
	category,
}: IMediaPreviewItemData) => (
	<div className="mt-3 grid h-[87%] snap-center">
		<div className="">
			<div className="relative cursor-pointer aspect-video rounded-lg hover:rounded-none bg-white ">
				<Image src={imagePreview} alt="" layout="fill" style={{ borderRadius: "inherit" }} />
			</div>
		</div>
		<div className="grid grid-cols-12 grid-rows-2">
			<p className="truncate text-xs col-span-2 col-start-2 col-end-10 row-start-1">
				{title}
			</p>
			<p className="truncate text-xs col-span-2 col-start-2 col-end-10 row-start-2">
				{username}
			</p>
			<p className="text-xs col-span-3 row-start-1 col-start-10">
				{viewerCount}
			</p>
		</div>
	</div>
);

export default MediaPreviewItem;
