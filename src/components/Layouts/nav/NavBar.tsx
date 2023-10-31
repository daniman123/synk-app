import { useLayoutStore } from "@/store/layoutStore";
import { NavSegment } from "./components/NavSegment";
import NavLogo from "./components/NavLogo";
import ToggleSideBar from "./components/ToggleSideBar";
import SearchBar from "@/components/features/searchBar/SearchBar";
import Auth from "@/components/features/auth/Auth";

const NavBar = (): JSX.Element => {
	const { toggleSideBar, expandSideBar } = useLayoutStore();

	return (
		<nav
			className="z-20 bg-[#284184] grid h-full w-full 
				max-sm:grid-cols-2 md:grid-cols-3"
		>
			<NavSegment classes="gap-5">
				<ToggleSideBar toggleSideBar={toggleSideBar} />
				<NavLogo expandSideBar={expandSideBar} />
			</NavSegment>
			<NavSegment classes="md:justify-center">
				<SearchBar />
			</NavSegment>
			<NavSegment classes="max-sm:hidden justify-end gap-3 pr-2">
				<Auth />
			</NavSegment>
		</nav>
	);
};

export default NavBar;
