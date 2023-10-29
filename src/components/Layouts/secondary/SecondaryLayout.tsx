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
			className="flex relative h-[calc(100dvh-3rem)] mt-12"
		>
			<SideBar />
			<section
				id="content"
				className="w-full h-full"
			>
				You
				{/* {children} */}
			</section>
		</section>
	);
};

export default SecondaryLayout;
