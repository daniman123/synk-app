import { useLayoutStore } from "../../../../store/layoutStore";
import React from "react";

export const LeftBodyToggleButton = ({
	toggleSideBar,
}: {
	toggleSideBar: () => void;
}): JSX.Element => {
	return (
		<div className="nav-bar-toggle-leftBody-container">
			<div className="nav-bar-toggle-leftBody" onClick={toggleSideBar}>
				<span className="toggle-leftBody">☰</span>
			</div>
		</div>
	);
};

export const NavBarLogo = ({
	expandSideBar,
}: {
	expandSideBar: () => void;
}): JSX.Element => {
	// TODO: add logo
	return (
		<div className="nav-bar-logo-container">
			<a href="/" className="to-home">
				<div className="nav-bar-logo" onClick={expandSideBar}>
					LOGO
				</div>
			</a>
		</div>
	);
};

export const NavLeft = (): JSX.Element => {
	const { toggleSideBar, expandSideBar } = useLayoutStore();
	return (
		<div className="nav-bar-container">
			<div className="nav-bar-left">
				<LeftBodyToggleButton toggleSideBar={toggleSideBar} />
				<NavBarLogo expandSideBar={expandSideBar} />
			</div>
		</div>
	);
};
