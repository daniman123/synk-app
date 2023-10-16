import React from "react";

import { PrimaryLayoutProps } from "./PrimaryLayout";
import Viewer from "@/app/[...id]/page";

const base: PrimaryLayoutProps = {
	children: React.createElement(Viewer),
};

export const mockPrimaryLayoutProps = {
	base,
};
