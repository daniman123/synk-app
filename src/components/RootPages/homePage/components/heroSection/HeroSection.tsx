"use client";

import React, { useRef } from "react";
import "./HeroSection.css";
import { HeroSectionContent } from "./components/HeroSectionContent";
import { HeroSectionController } from "./components/HeroSectionController";

export interface IHeroSection {
	src: string;
}

const MemoizedHeroSectionContent = React.memo(HeroSectionContent);

const HeroSection = ({ src }: IHeroSection) => {
	const heroSectionRef = useRef<HTMLDivElement>(null);

	return (
		<div className="HeroSection-container">
			<div className="hero-section">
				<div className="hero-section-content-container">
					<HeroSectionController
						amount={-394}
						scrollAbleElementRef={heroSectionRef}
						scrollDirection="left"
					/>
					<MemoizedHeroSectionContent
						heroSectionRef={heroSectionRef}
						src={src}
					/>
					<HeroSectionController
						amount={394}
						scrollAbleElementRef={heroSectionRef}
						scrollDirection="right"
					/>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
