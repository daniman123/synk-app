const cls = "bg-digital rounded-3xl";

const HeroSection = () => {
	return (
		<section
			id="hero-section"
			className="flex max-h-full items-center justify-center row-span-3 px-40 py-16 bg-gradient-to-t from-[#dfe9f3] to-[#eeebec]"
		>
			<div className="grid w-full h-full grid-cols-3 rounded p-3 bg-[whitesmoke]">
				{/* <div className="flex justify-center max-h-full h-full p-20 col-span-1 ">
					</div> */}
				<h1 className="p-7 text-7xl text-gray-950 font-bold">SYNK</h1>



				<div className="grid max-h-full grid-cols-3 grid-rows-6 h-full col-span-2 gap-1 p-1 text-gray-950 font-bold">
					<div className={`${cls} col-start-1 row-start-1 row-span-5`}>
						{/* <h2 className="p-1 text-5xl">Trending</h2> */}
						{/* <p className="w-full px-3 text-sm font-thin">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Molestias repellat adipisci inventore itaque quia nulla
								molestiae aliquam nemo facere deserunt, fuga quaerat, libero
								placeat, eveniet aperiam qui porro recusandae dolore.
							</p> */}
					</div>
					<div className={`${cls} col-start-2 row-start-3 row-span-2`}>
						{/* <h2 className="p-1 text-2xl">Top Post</h2> */}
						{/* <p className="w-full px-3 text-sm font-thin">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
								harum consectetur! Iure ullam veritatis quibusdam?
							</p> */}
					</div>
					<div
						className={`${cls} col-start-3 col-end-3 row-start-4 row-span-3`}
					>
						{/* <h2 className="p-1 text-3xl">Peaking</h2> */}
						{/* <p className="w-full px-3 text-sm font-thin">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Voluptatem laboriosam rerum impedit optio harum, sunt cum quo
								sequi praesentium illum.
							</p> */}
					</div>
				</div>



			</div>
		</section>
	);
};

export default HeroSection;
