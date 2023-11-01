import { memo } from "react";

const HomePage: React.FC = () => (
	<section className="z-0 grid grid-rows-2 h-[200dvh]">
		<section className="grid row-span-1 min-h-full w-full grid-rows-6">
			<section
				id="hero-section"
				className="flex items-center justify-center row-span-3 px-40 py-20 bg-gradient-to-t from-[#dfe9f3] to-[#eeebec]"
			>
				<div className="flex w-full h-full items-center justify-center rounded shadow-lg text-9xl text-gray-950 font-bold bg-[whitesmoke]">SYNK</div>
			</section>
			<section className="row-span-2 bg-black"></section>
			<section className="row-span-1 bg-digital"></section>
		</section>
		<section className="grid row-span-1 bg-digital"></section>
	</section>
);

HomePage.displayName = "HomePage";

export default memo(HomePage);
