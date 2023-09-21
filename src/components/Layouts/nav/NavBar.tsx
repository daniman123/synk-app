import "./NavBar.css";
import { NavCenter } from "./components/navCenter";
import { NavLeft } from "./components/navLeft";
import { NavRight } from "./components/navRight";

export interface INavBar {
	isLoggedIn: boolean;
}

const NavBar = ({ isLoggedIn }: INavBar): JSX.Element => {
	return (
		<header className="header-layout">
			<nav className="nav-layout">
				<NavLeft />
				<NavCenter />
				<NavRight isLoggedIn={isLoggedIn} />
			</nav>
		</header>
	);
};

export default NavBar;
