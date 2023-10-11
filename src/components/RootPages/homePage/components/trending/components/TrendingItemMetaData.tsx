import React from "react";
import { ITrending } from "../types";

import Live from "../../../../assets/live.svg";
import Image from "next/image";

const TrendingItemMetaData = ({
	category,
	title,
	username,
	viewerCount,
}: Partial<ITrending>) => {
	return (
		<div className="trending-section-item-meta-data">
			<div className="trending-item-title grid-col-span-2">{title}</div>
			<div className="trending-item-viewer-data grid-row-span-2">
				<Image src={Live} alt="" />
				<div className="trending-viewer-count">{viewerCount}</div>
			</div>
			<div className="trending-item-username">{username}</div>
			<div className="trending-item-category">{category}</div>
		</div>
	);
};

export default TrendingItemMetaData;
