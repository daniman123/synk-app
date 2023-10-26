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
	return (
		<section className="">
			<section> </section>
		</section>
	);
};

export default SecondaryLayout;
