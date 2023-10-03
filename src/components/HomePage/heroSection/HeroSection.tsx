"use client";

import { useRef } from "react";
import "./HeroSection.css";
import HeroSectionItem from "./components/HeroSectionItem";

export interface IHeroSection {
	exampleProp: string;
}

const HeroSection = ({ exampleProp }: IHeroSection) => {
	const heroSectionRef = useRef<HTMLDivElement | null>(null);

	const scrollByAmount = (amount: number) => {
		if (heroSectionRef.current) {
			heroSectionRef.current.scrollLeft += amount;
		}
	};

	return (
		<div className="HeroSection-container">
			<div className="hero-section">
				<div className="hero-section-content-container">
					<div className="hero-section-content-container-controller left"></div>
					<button
						className="hero-section-controller-button left"
						onClick={() => scrollByAmount(-394)}
					></button>
					<div ref={heroSectionRef} className="hero-section-content">
						<HeroSectionItem src={exampleProp} itemType="" />
						<HeroSectionItem src={exampleProp} itemType="" />
						<HeroSectionItem src={exampleProp} itemType="" />
						<HeroSectionItem src={exampleProp} itemType="" />
						<HeroSectionItem src={exampleProp} itemType="" />
						<HeroSectionItem src={exampleProp} itemType="" />
						<HeroSectionItem src={exampleProp} itemType="" />
					</div>
					<div className="hero-section-content-container-controller right"></div>
					<button
						className="hero-section-controller-button right"
						onClick={() => scrollByAmount(394)}
					></button>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
