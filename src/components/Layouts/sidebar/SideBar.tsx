"use client";

import { useLayoutStore } from "../../../store/layoutStore";
// import { ExpandedSideBar } from "./components/expanded/expandedSideBar";
// import { ChannelLists } from "./types";

export const Button = ({ name }: { name: string }) => {
	return (
		<button className="hover:bg-slate-400 rounded text-center">{name}</button>
	);
};

// const mock7 = Array(7).fill(7);
// const mock3 = Array(3).fill(3);

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

const SideBar = (): JSX.Element => {
	const isSideBarToggled = useLayoutStore((state) => state.sideBarToggled);

	const sidebarMobileDimsHidden =
		"max-sm:opacity-0  max-sm:translate-x-[-100%] transition-transform transition-opacity duration-300 transform";
	const sidebarMobileDims =
		"max-sm:h-full max-sm:w-full max-sm:opacity-100  max-sm:translate-x-0 transition-transform transition-opacity duration-300 transform";

	return (
		<section
			id="sidebar"
			className={`fixed z-10 bg-black ${
				isSideBarToggled ? sidebarMobileDimsHidden : sidebarMobileDims
			}`}
		>
			<div
				className="
								max-sm:grid max-sm:mt-[15dvh] max-sm:h-[50dvh] max-sm:grid-cols-2 max-sm:py-5 max-sm:px-2"
			>
				<div
					id="menu"
					className="place-content-center border-r 
									max-sm:px-2
								
					"
				>
					<div id="actionButtons" className="grid max-sm:h-full">
						<Button name="Home" />
						<Button name="Peeks" />
						<Button name="Pulse" />
					</div>
				</div>
				<div
					id="session"
					className="
									max-sm:grid max-sm:px-2"
				>
					<Button name="Sign Up" />
					<Button name="Log In" />
				</div>
			</div>
		</section>
	);
};

export default SideBar;
