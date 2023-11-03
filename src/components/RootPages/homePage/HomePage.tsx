import { memo } from "react";
import HeroSection from "./components/heroSection/HeroSection";
import BrowseSection from "./components/browseSection/BrowseSection";

const HomePage: React.FC = () => (
	<section className="grid grid-rows-2 h-[200dvh]">
		<section className="grid row-span-1 h-full w-full grid-rows-6">
			<section
				id="hero-section"
				className="flex max-h-full items-center justify-center row-span-3 px-40 py-16 bg-gradient-to-t from-[#dfe9f3] to-[#eeebec]"
			>
				<HeroSection />
			</section>
			<section id="browse-section" className="row-span-2 bg-black">
				<BrowseSection />
			</section>
			<section className="row-span-1 bg-digital"></section>
		</section>
		<section className="grid row-span-1 bg-digital"></section>
	</section>
);

HomePage.displayName = "HomePage";

export default memo(HomePage);
