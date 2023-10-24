// import SideBar from "../../../components/Layouts/sidebar/SideBar";
// import jsonDataFollowing from "../../../../mockDataJson/FOLLOWED_CHANNELS_LIST_MOCK_DATA.json";
// import jsonDataRecommended from "../../../../mockDataJson/RECOMMENDED_CHANNELS_LIST_MOCK_DATA.json";
// import "./SecondaryLayout.css";

export interface ISecondaryLayout {
	children: React.ReactNode;
}
const SecondaryLayout = ({ children }: ISecondaryLayout) => {
	return (
		<section className="flex w-[100dvw]">
			<section className="fixed top-[5.5dvh] h-full w-[12dvw] min-w-[2rem] pl-[1vw] pr-1 overflow-x-hidden bg-black">
				<div className="h-full w-full overflow-x-hidden"></div>
			</section>
			<section className="h-[200vh] mt-[5.5dvh] ml-[12dvw]"></section>
		</section>
	);
};

export default SecondaryLayout;
