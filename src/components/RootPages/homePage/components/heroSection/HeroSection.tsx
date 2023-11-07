const cls = "bg-digital rounded-md shadow-2xl p-1";

const HeroSection = () => {
	return (
		<div className="grid w-full h-full grid-cols-3 rounded p-3 bg-[whitesmoke]">
			<h1 id="hero-section-logo" className="p-7 text-7xl text-gray-950 font-bold">SYNK</h1>
			<div className="grid max-h-full grid-cols-3 grid-rows-6 h-full col-span-2 gap-1 p-1 text-gray-950 font-bold">
				<div className={`${cls} col-start-1 row-start-1 row-span-5`}>
					<h2 className="h-[20%] p-1 text-5xl">Trending</h2>
					<div className="h-[60%] rounded bg-black"></div>
				</div>
				<div className={`${cls} col-start-2 row-start-3 row-span-2`}>
					<h2 className="h-[20%] p-1 text-1xl">Top Post</h2>
					<div className="h-[80%] rounded bg-black"></div>
				</div>
				<div className={`${cls} col-start-3 col-end-3 row-start-4 row-span-3`}>
					<h2 className="h-[20%] p-1 text-3xl">Peaking</h2>
					<div className="h-[80%] rounded bg-black"></div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
