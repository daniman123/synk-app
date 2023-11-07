import Link from "next/link";
import gsap from "gsap";
import { useEffect } from "react";

const NavLogo = ({ expandSideBar }: { expandSideBar: () => void }) => {
	useEffect(() => {
		var myAnimation = gsap.to("#logo", {
			duration: 1,
			opacity: 1,
			paused: true,
		});

		var myAnimation2 = gsap.to("#discover-section-title", {
			duration: 1,
			opacity: 1,
			paused: true,
		});

		var myAnimation3 = gsap.fromTo(
			"#discover-section-content",
			{
				duration: 1,
				translateY: -100,
				paused: true,
			},
			{ duration: 1, translateY: 0, paused: true }
		);

		var observer = new IntersectionObserver(
			function (entries) {
				entries.forEach((entry) => {
					if (entry.intersectionRatio >= 0.1) {
						// The target element is at least 50% visible
						// You might want to pause or reverse the animation
						myAnimation.reverse();
						myAnimation2.reverse();
						myAnimation3.reverse();
					} else {
						// The target element is less than 50% visible
						// Play the animation
						myAnimation.play();
						myAnimation2.play();
						myAnimation3.play();
					}
				});
			},
			{
				threshold: [0.1], // Trigger when 50% visibility is reached
			}
		);

		let ele = document.querySelector("#hero-section-logo") as Element;

		observer.observe(ele);
	}, []);

	return (
		<Link href="/">
			<button
				id="logo"
				className="opacity-0 hover:opacity-100 cursor-pointer text-center text-2xl"
				onClick={expandSideBar}
			>
				SYNK
			</button>
		</Link>
	);
};

export default NavLogo;
