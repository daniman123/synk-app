import { RefObject, useMemo } from "react";
import HeroSectionItem from "./components/HeroSectionItem";

export const scrollByAmount = (
	scrollAbleElementRef: RefObject<HTMLDivElement>,
	amount: number
) => {
	if (scrollAbleElementRef.current) {
		scrollAbleElementRef.current.scrollLeft += amount;
	}
};

export const RenderSectionItems = ({ src }: { src: string }) => {
	const computedValue = useMemo(() => {
		return Array.from({ length: 7 }, (_, index) => (
			<HeroSectionItem key={index} src={src} itemType="" />
		));
	}, [src]);

	return computedValue;
};
