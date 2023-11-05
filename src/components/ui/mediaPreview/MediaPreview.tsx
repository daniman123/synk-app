import { IMediaPreviewItemArray } from "../../../../lib/mediaPreviews/types";
import MediaPreviewItem from "../mediaPreviewItem/MediaPreviewItem";

const MediaPreview = ({ dataArray }: IMediaPreviewItemArray) => {
	return (
		<div className="relative flex h-full items-center justify-center max-h-full min-w-full ">
			<div className="grid relative h-full max-h-full grid-flow-col auto-cols-[12%] px-7 gap-5 overflow-x-auto overflow-y-hidden overscroll-contain snap-x">
				{dataArray.slice(0, 7).map((value, index) => (
					<MediaPreviewItem key={index} {...value} />
				))}
				{dataArray.slice(8, 15).map((value, index) => (
					<MediaPreviewItem key={index} {...value} />
				))}
				{dataArray.slice(16, 23).map((value, index) => (
					<MediaPreviewItem key={index} {...value} />
				))}
			</div>
		</div>
	);
};

export default MediaPreview;
