import { memo } from "react";
import HeroSection from "./components/heroSection/HeroSection";



const HomePage: React.FC = () => (
	<section className="z-0 grid grid-rows-2 h-[200dvh]">
		<section className="grid row-span-1 h-full w-full grid-rows-6">
			<HeroSection />
			<section className="row-span-2 bg-black">H</section>
			<section className="row-span-1 bg-digital"></section>
		</section>
		<section className="grid row-span-1 bg-digital"></section>
	</section>
);

HomePage.displayName = "HomePage";

export default memo(HomePage);
