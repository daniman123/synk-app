import React from "react";

interface IHeroSectionItem {
	src: string;
	itemType: string;
}

const HeroSectionItem = ({ src, itemType }: IHeroSectionItem) => {
	return (
		<div className="hero-section-content-item-container">
			<div className="hero-section-content-item-wrapper">
				<div className="hero-section-content-item">
					<div className="hero-section-content-item-video-container">
						<div className={`hero-section-video${itemType}`}>
							<video src={src} controls muted />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSectionItem;
