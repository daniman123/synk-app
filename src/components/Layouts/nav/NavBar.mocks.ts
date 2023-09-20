import { INavBar } from "./NavBar";

const loggedIn: INavBar = {
	isLoggedIn: true,
};
const loggedOut: INavBar = {
	isLoggedIn: false,
};

export const mockNavBarProps = {
	loggedIn,
	loggedOut,
};
