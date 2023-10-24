"use client";

import Link from "next/link";
import { useLayoutStore } from "../../../../store/layoutStore";
import React from "react";

export const NavLeft = (): JSX.Element => {
	const { toggleSideBar, expandSideBar } = useLayoutStore();
	return (
		<>
			<span
				className="opacity-95 hover:opacity-100 cursor-pointer"
				onClick={toggleSideBar}
			>
				☰
			</span>
			<Link href="/">
				<button
					className="opacity-95 hover:opacity-100"
					onClick={expandSideBar}
				>
					SYNK
				</button>
			</Link>
		</>
	);
};
