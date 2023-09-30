import "./HeroSection.css";

export interface IHeroSection {
	exampleProp: string;
}

const HeroSection = ({ exampleProp }: IHeroSection) => {
	return (
		<div className="HeroSection-container">
			<div className="hero-section">
				<div className="hero-section-content-container">
					<div className="hero-section-content">
						<div className="hero-section-content-item-container">
							<div className="hero-section-content-item-wrapper">
								<div className="hero-section-content-item">
									<div className="hero-section-content-item-video-container">
										<div className="hero-section-video">hero-section-video</div>
									</div>
									{/* <div className="hero-section-content-item-meta-data">
										meta data 1
									</div> */}
								</div>
							</div>
						</div>
						<div className="hero-section-content-item-container">
							<div className="hero-section-content-item-wrapper">
								<div className="hero-section-content-item">
									<div className="hero-section-content-item-meta-data">
										item 2
									</div>
								</div>
							</div>
						</div>
						<div className="hero-section-content-item-container">
							<div className="hero-section-content-item-wrapper">
								<div className="hero-section-content-item">
									<div className="hero-section-content-item-meta-data">
										item 3
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
