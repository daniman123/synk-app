import { IVideoPreviewsArray } from "@/components/ui/videoPreview/types";

let imageUrls = [
	{
		imagePreview:
			"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",

		username: "username",
		title: "title",
		category: "category",
		viewerCount: "173k",
	},
	{
		imagePreview:
			"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",

		username: "username",
		title: "title",
		category: "category",
		viewerCount: "173k",
	},
	{
		imagePreview:
			"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",

		username: "username",
		title: "title",
		category: "category",
		viewerCount: "173k",
	},
	{
		imagePreview:
			"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",

		username: "username",
		title: "title",
		category: "category",
		viewerCount: "173k",
	},
	{
		imagePreview:
			"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",

		username: "username",
		title: "title",
		category: "category",
		viewerCount: "173k",
	},
	{
		imagePreview:
			"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",

		username: "username",
		title: "title",
		category: "category",
		viewerCount: "173k",
	},
	{
		imagePreview:
			"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",

		username: "username",
		title: "title",
		category: "category",
		viewerCount: "173k",
	},
	{
		imagePreview:
			"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",

		username: "username",
		title: "title",
		category: "category",
		viewerCount: "173k",
	},
	{
		imagePreview:
			"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",

		username: "username",
		title: "title",
		category: "category",
		viewerCount: "173k",
	},
	{
		imagePreview:
			"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",

		username: "username",
		title: "title",
		category: "category",
		viewerCount: "173k",
	},
	{
		imagePreview:
			"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",

		username: "username",
		title: "title",
		category: "category",
		viewerCount: "173k",
	},
	{
		imagePreview:
			"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",

		username: "username",
		title: "title",
		category: "category",
		viewerCount: "173k",
	},
];

const base: IVideoPreviewsArray = {
	previewItems: imageUrls,
	gridName: "Top",
};

export const mockDiscoverPageProps = {
	base,
};
