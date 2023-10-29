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
			className="flex relative md:h-[calc(100dvh-3rem)] md:mt-[3rem]"
		>
			<SideBar />
			<section
				id="content"
				className="
				md:ml-[30dvh] md:w-[calc(100dvw-30dvw)]
				sm:h-[90dvh] max-sm:w-full max-sm:p-1"
			>
				You
				{/* {children} */}
			</section>
		</section>
	);
};

export default SecondaryLayout;
