import MediaPreview from "@/components/ui/mediaPreview/MediaPreview";
import React, { useState } from "react";

const tabContent: any = {
	Featured: <p>This is the Featured content.</p>,
	Following: <p>This is the Following content.</p>,
	Recommended: <p>This is the Recommended content.</p>,
};

const BrowseSection = () => {
	const [activeTab, setActiveTab] = useState("Featured");

	const t = "cursor-pointer text-xl hover:opacity-100";
	const txtcol = "opacity-100 underline underline-offset-8 text-blue-600";

	const handleClick = (tabName: string) => {
		setActiveTab(tabName);
	};

	return (
		<div className="flex h-full max-h-full justify-center pt-5">
			<div className="px-28">
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
				<div className="h-2/3 mx-16 rounded-lg py-3 bg-digital">
					<MediaPreview />
				</div>
			</div>
		</div>
	);
};

export default BrowseSection;
