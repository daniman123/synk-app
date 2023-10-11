import HeroSection from "./components/heroSection/HeroSection";
import { mockHeroSectionProps } from "./components/heroSection/HeroSection.mocks";
import Trending from "./components/trending/Trending";
import { mockTrendingProps } from "./components/trending/Trending.mocks";
import "./HomePage.css";
import HomePeeks from "./components/homePeeks/HomePeeks";

export interface IHomePage {}

const HomePage = () => {
	return (
		<main className="content-main">
			<HeroSection exampleProp={mockHeroSectionProps.base.exampleProp} />
			<Trending trendingItems={mockTrendingProps.base.trendingItems} />
			<HomePeeks
				trendingItems={mockTrendingProps.base.trendingItems.slice(4)}
			/>
		</main>
	);
};

export default HomePage;
