"use client";

// import jsonDataFollowing from "../../../../mockDataJson/FOLLOWED_CHANNELS_LIST_MOCK_DATA.json";
// import jsonDataRecommended from "../../../../mockDataJson/RECOMMENDED_CHANNELS_LIST_MOCK_DATA.json";
import SideBar from "../sidebar/SideBar";

export interface ISecondaryLayout {
	children: React.ReactNode;
}

const SecondaryLayout = ({ children }: ISecondaryLayout) => {
	return (
		<section
			className="flex
						max-sm:mt-[10dvh]
						md:mt-[7dvh]"
		>
			<SideBar />
			<section
				id="content"
				className="
				max-sm:h-[90dvh] max-sm:w-full max-sm:p-1"
			>
				{/* {children} */}
			</section>
		</section>
	);
};

export default SecondaryLayout;
