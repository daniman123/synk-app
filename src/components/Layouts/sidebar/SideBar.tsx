"use client";

import { useLayoutStore } from "../../../store/layoutStore";
import UserCard from "./components/UserCard";
import { setClass } from "./helpers";
import { ChannelsList, IUserCard } from "./types";

export const Button = ({ name }: { name: string }) => {
	return (
		<button className="hover:bg-slate-400 rounded text-center">{name}</button>
	);
};

export const UserCardList = ({
	userCardData,
	defaultDisplayNum,
}: ChannelsList) => {
	return (
		<>
			<ul className="grid max-sm:hidden w-full">
				<h4 className="h-[3dvh]">Titee</h4>
				{userCardData.slice(0, defaultDisplayNum).map((data, ind) => (
					<UserCard key={ind} {...data} />
				))}
				<button className="underline">show more</button>
			</ul>
		</>
	);
};

const SideBar = ({
	following,
	recommended,
}: {
	following: IUserCard[];
	recommended: IUserCard[];
}): JSX.Element => {
	const isSideBarToggled = useLayoutStore((state) => state.sideBarToggled);

	return (
		<section
			id="sidebar"
			className={`fixed z-20 bg-black ${setClass(isSideBarToggled)}`}
		>
			<div
				className="md:h-full 
				max-sm:grid max-sm:mt-[15dvh] max-sm:h-[50dvh] max-sm:grid-cols-2 max-sm:py-5 max-sm:px-2"
			>
				<div
					id="menu"
					className="w-full max-sm:place-content-center px-2 md:grid md:grid-row-3
					max-sm:border-r 
								
					"
				>
					<div id="actionButtons" className="grid w-full max-sm:h-full md:h-[20dvh] lg:h-12">
						<Button name="Home" />
						<Button name="Peeks" />
						<Button name="Pulse" />
					</div>
					<UserCardList
						userCardData={following}
						channelListTitle="Following"
						defaultDisplayNum={7}
					/>
					<UserCardList
						userCardData={recommended}
						channelListTitle="Recommended"
						defaultDisplayNum={3}
					/>
				</div>
				<div
					id="session"
					className="max-sm:grid max-sm:px-2
						md:hidden"
				>
					<Button name="Sign Up" />
					<Button name="Log In" />
				</div>
			</div>
		</section>
	);
};

export default SideBar;
