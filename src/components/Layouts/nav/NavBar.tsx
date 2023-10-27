import { NavLeft } from "./components/navLeft";
// import { NavCenter } from "./components/navCenter";
// import { NavRight } from "./components/navRight";



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
		<header
			className="bg-white fixed top-0 left-0 right-0 w-full 
			max-sm:h-[10dvh]"
		>
			<nav
				className="bg-black grid h-full w-full 
				max-sm:grid-cols-2"
			>
				<NavSegment classes="max-sm:gap-5">
					<NavLeft />
				</NavSegment>
				<NavSegment classes="">
					<input
						type="text"
						className="rounded-l outline-none text-slate-600
						max-sm:w-28 max-sm:h-7 max-sm:text-base max-sm:indent-1"
					/>
					<button
						className="border rounded-r outline-none
						max-sm:h-7 max-sm:w-8"
					>
						X
					</button>
				</NavSegment>
			</nav>
		</header>
	);
};

export default NavBar;
