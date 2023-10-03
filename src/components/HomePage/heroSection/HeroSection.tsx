"use client";

import { useRef } from "react";
import "./HeroSection.css";
import { HeroSectionContent } from "./components/HeroSectionContent";
import { HeroSectionController } from "./components/HeroSectionController";
import React from "react";

export interface IHeroSection {
	exampleProp: string;
}

const HeroSection = ({ exampleProp }: IHeroSection) => {
	const heroSectionRef = useRef<HTMLDivElement>(null);
	const MemoizedHeroSectionContent = React.memo(HeroSectionContent);

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
						src={exampleProp}
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
