import Image from "next/image";
import { ITrending, ITrendingArray } from "../types";
import TrendingItemMetaData from "./TrendingItemMetaData";

const TrendingItem = (metaData: ITrending) => {
	return (
		<div className="trending-section-content-item">
			<div className="trending-section-item-preview">
				<Image
					src={metaData.imagePreview}
					alt=""
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: "100%", height: "auto" }}
				/>
			</div>
			<TrendingItemMetaData {...metaData} />
		</div>
	);
};

export const PopulateTrending = ({ trendingItems }: ITrendingArray) => {
	return trendingItems.map((image, _) => (
		<TrendingItem key={image.imagePreview} {...image} />
	));
};
