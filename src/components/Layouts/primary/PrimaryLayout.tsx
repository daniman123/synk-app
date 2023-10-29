import NavBar from "../../../components/Layouts/nav/NavBar";
import SecondaryLayout from "../secondary/SecondaryLayout";

export interface PrimaryLayoutProps {
	children: React.ReactNode;
}

export default function PrimaryLayout({ children }: PrimaryLayoutProps) {
	return (
		<main id="primary" className="w-full max-h-[100dvh] max-w-full">
			<NavBar />
			<SecondaryLayout>{children}</SecondaryLayout>
		</main>
	);
}
