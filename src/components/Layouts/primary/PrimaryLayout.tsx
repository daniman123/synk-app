// import NavBar from "../../../components/Layouts/nav/NavBar";
import Link from "next/link";
import SecondaryLayout from "../secondary/SecondaryLayout";

export interface PrimaryLayoutProps {
	children: React.ReactNode;
}

export default function PrimaryLayout({ children }: PrimaryLayoutProps) {
	return (
		<main className="w-full min-h-full max-w-full relative">
			<header
				className="bg-white fixed top-0 left-0 right-0 w-full 
			max-sm:h-[10dvh]"
			>
				<nav
					className="bg-black grid h-full w-full 
				max-sm:grid-cols-2"
				>
					<div
						className={`flex items-center 
					max-sm:gap-5`}
					>
						<p
							id="burger"
							className="opacity-95 hover:opacity-100 cursor-pointer text-center 
							max-sm:text-2xl max-sm:px-2"
						>
							☰
						</p>

						<Link href="/">
							<button
								id="logo"
								className="opacity-95 hover:opacity-100 cursor-pointer text-center 
												max-sm:text-2xl"
								// onClick={expandSideBar}
							>
								SYNK
							</button>
						</Link>
					</div>
					<div className={`flex items-center`}>
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
					</div>
				</nav>
			</header>
			{/* <SecondaryLayout>{children}</SecondaryLayout> */}
		</main>
	);
}
