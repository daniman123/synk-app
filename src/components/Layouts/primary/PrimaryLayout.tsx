import NavBar from "../../../components/Layouts/nav/NavBar";
import SecondaryLayout from "../secondary/SecondaryLayout";

export interface PrimaryLayoutProps {
	children: React.ReactNode;
}

export default function PrimaryLayout({ children }: PrimaryLayoutProps) {
	return (
		<main className="w-full h-[100dvh] max-w-full">
			<header className="fixed z-10 top-0 left-0 right-0 w-full h-12">
				<NavBar />
			</header>
			<section
				id="primary"
				className="flex absolute z-10 top-[3rem] left-0 h-[calc(100dvh-3rem)]
			w-full max-w-full"
			>
				<SecondaryLayout>{children}</SecondaryLayout>
			</section>
		</main>
	);
}
