export interface ILiveViewCount {
	viewCount: number;
	height: string;
	width: string;
	fontSize: string;

	onAirSymbolheight: string;
	onAirSymbolwidth: string;
}

export const formatViewCount = (viewers: number = 0): string => {
	const formattedViewCount =
		viewers >= 1000 ? (viewers / 1000).toFixed(1) + "k" : viewers;
	return formattedViewCount.toString();
};

const LiveViewCount = ({
	viewCount,
	height,
	width,
	fontSize,
	onAirSymbolheight,
	onAirSymbolwidth,
}: ILiveViewCount) => {
	return (
		<div
			className={`flex items-center justify-center gap-1 ${height} ${width}`}
		>
			<p className={`${fontSize}`}>{formatViewCount(viewCount)}</p>
			<div
				className={`flex items-center justify-center 
				aspect-square
                rounded-full border
                border-red-600 bg-red-600 
                ${onAirSymbolheight} ${onAirSymbolwidth}`}
			></div>
		</div>
	);
};

export default LiveViewCount;
