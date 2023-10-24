import { NavLeft } from "./components/navLeft";
import { NavCenter } from "./components/navCenter";
import { NavRight } from "./components/navRight";
import React from "react";

export const NavSegment = ({
	children,
	classes,
}: {
	children: React.ReactNode;
	classes: string;
}) => {
	return <div className={`flex items-center ${classes}`}>{children}</div>;
};

const NavBar = (): JSX.Element => {
	return (
		<header className="fixed top-0 left-0 right-0 w-full h-[5.5dvh] min-h-[2rem] px-[1vw] bg-black">
			<nav className="h-full w-full grid grid-cols-3">
				<NavSegment classes="gap-4">
					<NavLeft />
				</NavSegment>
				<NavSegment classes="justify-center">
					<NavCenter />
				</NavSegment>
				<NavSegment classes="gap-3 justify-end">
					<NavRight />
				</NavSegment>
			</nav>
		</header>
	);
};

export default NavBar;
