export interface IHeroSectionContent {
	heroSectionRef: RefObject<HTMLDivElement>;
	src: string;
}

export interface IHeroSectionController {
	scrollAbleElementRef: RefObject<HTMLDivElement>;
	amount: number;
	scrollDirection: string;
}
