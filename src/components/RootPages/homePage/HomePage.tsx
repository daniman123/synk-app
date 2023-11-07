import data from "../../../../lib/mediaPreviews/MEDIA_PREVIEWS_MOCK_DATA.json";
import HeroSection from "./components/heroSection/HeroSection";
import BrowseSection from "./components/browseSection/BrowseSection";
import { IMediaPreviewItemArray } from "../../../../lib/mediaPreviews/types";
import DiscoverSection from "./components/discoverSection/DiscoverSection";

const HomePage = ({ dataArray }: IMediaPreviewItemArray) => {
	console.log("🚀 ~ file: HomePage.tsx:8 ~ HomePage ~ dataArray:", dataArray);

	return (
		<section className="grid grid-rows-2 h-[200dvh]">
			<section className="grid row-span-1 h-full w-full grid-rows-6">
				<section
					id="hero-section"
					className="flex h-full items-center justify-center row-span-3 px-7 py-7 bg-gradient-to-t from-[#dfe9f3] to-[#eeebec]"
				>
					<HeroSection />
				</section>
				<section id="browse-section" className="row-span-2 bg-black">
					<BrowseSection dataArray={data} />
				</section>
				<section
					id="discover-section"
					className="h-[117dvh] row-span-1  bg-digital"
				>
					<DiscoverSection />
				</section>
			</section>
		</section>
	);
};

export default HomePage;
