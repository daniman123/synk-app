"use client";

import Link from "next/link";
import { useLayoutStore } from "../../../../store/layoutStore";
import React from "react";

export const NavLeft = (): JSX.Element => {
	const { toggleSideBar, expandSideBar } = useLayoutStore();
	return (
		<>
			<p
				id="burger"
				className="opacity-95 hover:opacity-100 cursor-pointer text-center 
							max-sm:text-2xl max-sm:px-2"
				onClick={toggleSideBar}
			>
				☰
			</p>
			<Link href="/">
				<button
					id="logo"
					className="opacity-95 hover:opacity-100 cursor-pointer text-center 
												max-sm:text-2xl"
					onClick={expandSideBar}
				>
					SYNK
				</button>
			</Link>
		</>
	);
};
