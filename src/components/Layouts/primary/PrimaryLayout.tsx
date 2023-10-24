import NavBar from "../../../components/Layouts/nav/NavBar";
import SecondaryLayout from "../secondary/SecondaryLayout";

export interface PrimaryLayoutProps {
	children: React.ReactNode;
}

export default function PrimaryLayout({ children }: PrimaryLayoutProps) {
	return (
		<main className="min-h-full max-w-full relative">
			<NavBar />
			{/* <section className="h-[200vh]"></section> */}
			<SecondaryLayout>{children}</SecondaryLayout>
		</main>
	);
}
