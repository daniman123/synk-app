import HeroSection from "@/components/HomePage/heroSection/HeroSection";
import { mockHeroSectionProps } from "@/components/HomePage/heroSection/HeroSection.mocks";
import Trending from "@/components/HomePage/trending/Trending";

const Home = (): JSX.Element => {
	return (
		<main className="content-main">
			<HeroSection exampleProp={mockHeroSectionProps.base.exampleProp} />
			<Trending exampleProp="Trending" />
		</main>
	);
};

export default Home;
