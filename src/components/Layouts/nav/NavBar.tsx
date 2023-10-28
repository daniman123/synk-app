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
			max-sm:h-[10dvh] 
			md:h-[7dvh]
			"
		>
			<nav
				className="bg-red-600 grid h-full w-full 
				max-sm:grid-cols-2 md:grid-cols-3"
			>
				<NavSegment classes="gap-5">
					<NavLeft />
				</NavSegment>
				<NavSegment classes="md:flex md:justify-center">
					<input
						type="text"
						className="rounded-l outline-none text-slate-600
						max-sm:w-28 h-7 text-base indent-1"
					/>
					<button
						className="border rounded-r outline-none
						h-7 w-8"
					>
						X
					</button>
				</NavSegment>
				<NavSegment classes="max-sm:hidden justify-end gap-3 pr-2">
					<button className="text-sm hover:underline hover:underline-offset-4 ">Log In</button>
					<button className="text-sm hover:underline hover:underline-offset-4 ">Sign Up</button>
				</NavSegment>
			</nav>
		</header>
	);
};

export default NavBar;
