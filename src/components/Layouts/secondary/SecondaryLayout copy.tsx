"use client";

// import jsonDataFollowing from "../../../../mockDataJson/FOLLOWED_CHANNELS_LIST_MOCK_DATA.json";
// import jsonDataRecommended from "../../../../mockDataJson/RECOMMENDED_CHANNELS_LIST_MOCK_DATA.json";

import { useLayoutStore } from "@/store/layoutStore";

export interface ISecondaryLayout {
	children: React.ReactNode;
}

const mock7 = Array(7).fill(7);
const mock3 = Array(3).fill(3);

export const Button = ({ name }: { name: string }) => {
	return (
		<button className="hover:bg-slate-400 rounded text-center">{name}</button>
	);
};

export const ListUserCard = () => {
	return (
		<li className="flex justify-evenly h-full w-full py-1 hover:bg-slate-400 cursor-pointer rounded">
			<div className="sm:visible">PFP</div>
			<div className="max-lg:hidden lg:block">
				<p className="text-md">username</p>
				<p className="text-sm">category</p>
			</div>
			<div className="max-lg:hidden text-sm ">12.7k+</div>
		</li>
	);
};

export const UserCardList = ({ mock }: { mock: any[] }) => {
	return (
		<>
			<h4 className="pt-1">Titee</h4>
			<ul className="grid w-full py-2 border-b">
				{mock.map((_, ind) => (
					<ListUserCard key={ind} />
				))}
				<button className="text-xs pt-1">show more</button>
			</ul>
		</>
	);
};

const SecondaryLayout = ({ children }: ISecondaryLayout) => {
	const { sideBarToggled, isToggled } = useLayoutStore();
	const size = sideBarToggled ? "expanded" : "collapsed";
	const adjustedLen = sideBarToggled
		? "lg:w-[calc(100dvw-12dvw)]"
		: "sm:w-[calc(100dvw-5dvw)]";

	return (
		<section className="flex w-[100dvw]">
			<section
				className={`fixed top-[5.5dvh] h-[calc(100dvh-5.5dvh)] ${isToggled[size]?.sideBar} min-w-[2rem] pl-[1vw] pr-1 overflow-x-hidden bg-black`}
			>
				{sideBarToggled && (
					<div className="grid w-full overflow-x-hidden">
						<div
							id="action-buttons"
							className="grid h-[12dvh] grid-rows-3 border-b pb-1 "
						>
							<Button name="Home" />
							<Button name="Peeks" />
							<Button name="Pulse" />
						</div>

						<UserCardList mock={mock7} />
						<UserCardList mock={mock3} />
					</div>
				)}
			</section>

			<section
				className={`h-[calc(100dvh-5.5dvh)] ${adjustedLen} mt-[5.5dvh] ${isToggled[size]?.content} w-[calc(100dvw-5dvw)]`}
			>
				{/* {children} */}
			</section>
		</section>
	);
};

export default SecondaryLayout;
