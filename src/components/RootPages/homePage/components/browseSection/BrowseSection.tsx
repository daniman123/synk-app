import MediaPreview from "@/components/ui/mediaPreview/MediaPreview";
import React, { useState } from "react";
import { IMediaPreviewItemArray } from "../../../../../../lib/mediaPreviews/types";

const BrowseSection = ({ dataArray }: IMediaPreviewItemArray) => {
	const [activeTab, setActiveTab] = useState("Featured");

	const t = "cursor-pointer text-xl hover:opacity-100";
	const txtcol = "opacity-100 underline underline-offset-8 text-blue-600";

	const handleClick = (tabName: string) => {
		setActiveTab(tabName);
	};

	// const tabContent: any = {
	// 	Featured: <MediaPreview dataArray={dataArray} />,
	// 	Following: <MediaPreview dataArray={dataArray} />,
	// 	Recommended: <MediaPreview dataArray={dataArray} />,
	// };

	return (
		<div className="flex h-full max-h-full justify-center pt-5">
			<div className="w-3/4">
				<ul className="flex justify-center gap-14 mb-5">
					<li
						className={`${t} ${
							activeTab === "Featured" ? txtcol : "opacity-90"
						}`}
						onClick={() => handleClick("Featured")}
					>
						Featured
					</li>
					<li
						className={`${t} ${
							activeTab === "Following" ? txtcol : "opacity-90"
						}`}
						onClick={() => handleClick("Following")}
					>
						Following
					</li>
					<li
						className={`${t} ${
							activeTab === "Recommended" ? txtcol : "opacity-90"
						}`}
						onClick={() => handleClick("Recommended")}
					>
						Recommended
					</li>
				</ul>
				<div className="relative h-2/3 max-h-2/3 rounded-lg py-3 bg-digital overflow-x-hidden">
					<MediaPreview dataArray={dataArray} />
				</div>
			</div>
		</div>
	);
};

export default BrowseSection;
