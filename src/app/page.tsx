import HeroSection from "@/components/HomePage/heroSection/HeroSection";
import { mockHeroSectionProps } from "@/components/HomePage/heroSection/HeroSection.mocks";

const Home = (): JSX.Element => {
	return (
		<main className="content-main">
			<HeroSection exampleProp={mockHeroSectionProps.base.exampleProp} />
		</main>
	);
};

export default Home;
