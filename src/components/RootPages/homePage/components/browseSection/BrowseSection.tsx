import React from "react";

const BrowseSection = () => {
	return (
		<div className="flex h-full max-h-full justify-center pt-5">
			<ul className="flex gap-14">
				<li className="cursor-pointer text-2xl underline underline-offset-8">Featured</li>
				<li className="cursor-pointer text-2xl underline underline-offset-8">Following</li>
				<li className="cursor-pointer text-2xl underline underline-offset-8">Recommended</li>
			</ul>
		</div>
	);
};

export default BrowseSection;
