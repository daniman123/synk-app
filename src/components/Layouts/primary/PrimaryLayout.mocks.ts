import React from "react";

import { PrimaryLayoutProps } from "./PrimaryLayout";
// import Viewer from "@/app/[...id]/page";
import HomePage from "@/components/RootPages/homePage/HomePage";

const base: PrimaryLayoutProps = {
	children: React.createElement(HomePage),
};

export const mockPrimaryLayoutProps = {
	base,
};
