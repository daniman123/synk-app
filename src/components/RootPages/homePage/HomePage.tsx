import { memo } from "react";

const cls = "bg-digital rounded";
// const txtCol = "text-yellow-400";

const HomePage: React.FC = () => (
	<section className="z-0 grid grid-rows-2 h-[200dvh]">
		<section className="grid row-span-1 min-h-full w-full grid-rows-6">
			<section
				id="hero-section"
				className="flex items-center justify-center row-span-3 px-40 py-16 bg-gradient-to-t from-[#dfe9f3] to-[#eeebec]"
			>
				<div className="grid w-full h-full grid-cols-3 rounded shadow-lg bg-[whitesmoke]">
					<div className="h-full col-span-1 text-9xl text-gray-950 font-bold">
						SYNK
					</div>
					<div className="grid grid-cols-3 grid-rows-3 h-full col-span-2 gap-1 p-1 text-gray-950 font-bold">
						<div className={`${cls} col-start-1 row-span-3`}>
							<p className="text-5xl">Trending</p>
						</div>
						<div className={`${cls} col-start-2 row-start-2`}>
							<p className="text-lg">Top</p>
						</div>
						<div
							className={`${cls} col-start-3 col-end-3 row-start-2 row-span-2`}
						>
							<p className="text-3xl">Peaking</p>

						</div>
					</div>
				</div>
			</section>
			<section className="row-span-2 bg-black"></section>
			<section className="row-span-1 bg-digital"></section>
		</section>
		<section className="grid row-span-1 bg-digital"></section>
	</section>
);

HomePage.displayName = "HomePage";

export default memo(HomePage);
