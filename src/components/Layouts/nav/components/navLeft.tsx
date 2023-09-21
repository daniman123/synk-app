import { useLayoutStore } from "../../../../store/layoutStore";
import React from "react";

export const LeftBodyToggleButton: React.FC<{
	toggleSideBar: () => void;
}> = ({ toggleSideBar }) => {
	return (
		<div className="nav-bar-toggle-leftBody-container">
			<div className="nav-bar-toggle-leftBody" onClick={toggleSideBar}>
				<span className="toggle-leftBody">☰</span>
			</div>
		</div>
	);
};

export const NavBarLogo: React.FC<{
	expandSideBar: () => void;
}> = ({ expandSideBar }) => {
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

export const NavLeft = () => {
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
