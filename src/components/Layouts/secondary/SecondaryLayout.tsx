import { useLayoutStore } from "@/store/layoutStore";
import jsonDataFollowing from "../../../../mockDataJson/FOLLOWED_CHANNELS_LIST_MOCK_DATA.json";
import jsonDataRecommended from "../../../../mockDataJson/RECOMMENDED_CHANNELS_LIST_MOCK_DATA.json";
import SideBar from "../sidebar/SideBar";
import { setClass } from "../sidebar/helpers";

export interface ISecondaryLayout {
	children: React.ReactNode;
}

const SecondaryLayout = ({ children }: ISecondaryLayout) => {
	const isSideBarToggled = useLayoutStore((state) => state.sideBarToggled);
	return (
		<>
			<section
				className={`fixed z-20 h-[calc(100dvh-3rem)] md:w-[13%] overflow-y-auto overflow-x-hidden ${setClass(
					isSideBarToggled
				)} bg-[#284184b7]`}
			>
				<SideBar
					following={jsonDataFollowing}
					recommended={jsonDataRecommended}
				/>
			</section>
			<section className="h-full w-full ">{children}</section>
		</>
	);
};

export default SecondaryLayout;
