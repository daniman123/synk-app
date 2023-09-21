import React from "react";

export const SearchBar = (): JSX.Element => {
	// TODO: add fns
	return (
		<div className="nav-bar-search-container">
			<div className="nav-bar-search-bar">
				<input
					className="search-bar"
					type="search"
					placeholder="search"
				></input>
			</div>
			<div className="nav-bar-search-button">
				<button className="primary search-button">search</button>
			</div>
		</div>
	);
};

export const NavCenter = (): JSX.Element => {
	return (
		<div className="nav-bar-container">
			<div className="nav-bar-center">
				<SearchBar />
			</div>
		</div>
	);
};
