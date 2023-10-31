import { useLayoutStore } from "@/store/layoutStore";
import { NavSegment } from "./components/NavSegment";
import NavLogo from "./components/NavLogo";
import ToggleSideBar from "./components/ToggleSideBar";
import SearchBar from "@/components/features/searchBar/SearchBar";
import Auth from "@/components/features/auth/Auth";

const NavBar = (): JSX.Element => {
  const { toggleSideBar, expandSideBar } = useLayoutStore();

  return (
    <header className="fixed z-10 top-0 left-0 right-0 w-full h-12">
      <nav
        className="bg-red-600 grid h-full w-full 
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
    </header>
  );
};

export default NavBar;
