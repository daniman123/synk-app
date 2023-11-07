import React from "react";

export const DiscoverSectionItem = () => {
	return <p className="border rounded-md"></p>;
};

const DiscoverSection = () => {
	return (
		<>
			{/* <h2 className="py-10 px-14 text-4xl">Discover</h2> */}
			<div className="h-2/3 w-full grid grid-cols-5 gap-6 p-10 ">
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
