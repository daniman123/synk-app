import React from "react";

export const LeftBodyToggleButton = () => {
	// TODO: add toggle function to leftBody
	return (
		<div className="nav-bar-toggle-leftBody-container">
			<div className="nav-bar-toggle-leftBody">
				<span className="toggle-leftBody">☰</span>
			</div>
		</div>
	);
};

export const NavBarLogo = () => {
	// TODO: add logo
	return (
		<div className="nav-bar-logo-container">
			<a href="/" className="to-home">
				<div className="nav-bar-logo">LOGO</div>
			</a>
		</div>
	);
};

export const NavLeft = () => {
	return (
		<div className="nav-bar-container">
			<div className="nav-bar-left">
				<LeftBodyToggleButton />
				<NavBarLogo />
			</div>
		</div>
	);
};
