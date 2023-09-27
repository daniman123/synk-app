import "./NavBar.css";
import { NavCenter } from "./components/navCenter";
import { NavLeft } from "./components/navLeft";
import { NavRight } from "./components/navRight";

const NavBar = (): JSX.Element => {
	return (
		<header className="header-layout">
			<nav className="nav-layout">
				<NavLeft />
				<NavCenter />
				<NavRight />
			</nav>
		</header>
	);
};

export default NavBar;
