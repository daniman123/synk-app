"use client";

import { useEffect } from "react";
import "./HeroSection.css";
import HeroSectionItem from "./components/HeroSectionItem";

export interface IHeroSection {
	exampleProp: string;
}

const HeroSection = ({ exampleProp }: IHeroSection) => {
	return (
		<div className="HeroSection-container">
			<div className="hero-section">
				<div className="hero-section-content-container">
					<div className="hero-section-content-container-controller left"></div>
					<button className="hero-section-controller-button left"></button>
					<div className="hero-section-content">
						<HeroSectionItem src={exampleProp} itemType="" />
						<HeroSectionItem src={exampleProp} itemType="" />
						<HeroSectionItem src={exampleProp} itemType="" />
						<HeroSectionItem src={exampleProp} itemType="" />
						<HeroSectionItem src={exampleProp} itemType="" />
						<HeroSectionItem src={exampleProp} itemType="" />
					</div>
					<div className="hero-section-content-container-controller right"></div>
					<button className="hero-section-controller-button right"></button>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
