import { IMediaPreviewItemArray } from "../../../../lib/mediaPreviews/types";
import MediaPreviewItem from "../mediaPreviewItem/MediaPreviewItem";

const MediaPreview = ({ dataArray }: IMediaPreviewItemArray) => {
	return (
		<div className="flex items-center justify-center h-full w-full">
			<div className="grid h-full w-full grid-cols-7 px-7 gap-5">
				{dataArray.slice(0,7).map((value, index) => (
					<MediaPreviewItem key={index} {...value} />
				))}
			</div>
		</div>
	);
};

export default MediaPreview;
