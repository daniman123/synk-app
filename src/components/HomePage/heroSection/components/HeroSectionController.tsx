import { scrollByAmount } from "../helpers";
import { IHeroSectionController } from "../types";
import { useCallback } from "react";

export const HeroSectionButton = ({ onClick, direction }: any) => {
	return (
		<button
			className={`hero-section-controller-button ${direction}`}
			onClick={onClick}
		></button>
	);
};

export const HeroSectionController = ({
	scrollAbleElementRef,
	amount,
	scrollDirection,
}: IHeroSectionController) => {
	const scrollByAmountMemoized = useCallback(() => {
		scrollByAmount(scrollAbleElementRef, amount);
	}, [scrollAbleElementRef, amount]);

	return (
		<>
			<div
				className={`hero-section-content-container-controller ${scrollDirection}`}
			></div>
			<HeroSectionButton
				onClick={scrollByAmountMemoized} // Use the memoized function
				direction={scrollDirection}
			/>
		</>
	);
};
