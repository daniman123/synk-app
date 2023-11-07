import React from "react";

export const DiscoverSectionItem = () => {
	return <div className="border rounded-md"></div>;
};

const DiscoverSection = () => {
	return (
		<>
			<h2 id="discover-section-title" className="opacity-0 py-7 px-14 text-4xl">
				Discover
			</h2>
			<div
				id="discover-section-content"
				className="h-2/3 w-full grid grid-cols-5 gap-6 p-7 border-b"
			>
				<DiscoverSectionItem />
				<DiscoverSectionItem />
				<DiscoverSectionItem />
				<DiscoverSectionItem />
				<DiscoverSectionItem />
				<DiscoverSectionItem />
				<DiscoverSectionItem />
				<DiscoverSectionItem />
				<DiscoverSectionItem />
				<DiscoverSectionItem />
				<DiscoverSectionItem />
				<DiscoverSectionItem />
				<DiscoverSectionItem />
				<DiscoverSectionItem />
				<DiscoverSectionItem />
			</div>
		</>
	);
};

export default DiscoverSection;
