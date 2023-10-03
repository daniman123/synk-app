import { RenderSectionItems } from "../helpers";
import { IHeroSectionContent } from "../types";

export const HeroSectionContent = ({
	heroSectionRef,
	src,
}: IHeroSectionContent) => {
	return (
		<div ref={heroSectionRef} className="hero-section-content">
			<RenderSectionItems src={src} />
		</div>
	);
};
