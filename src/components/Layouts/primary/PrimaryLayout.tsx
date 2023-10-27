import NavBar from "../../../components/Layouts/nav/NavBar";
import SecondaryLayout from "../secondary/SecondaryLayout";

export interface PrimaryLayoutProps {
	children: React.ReactNode;
}

export default function PrimaryLayout({ children }: PrimaryLayoutProps) {
	return (
		<main className="w-full min-h-full max-w-full relative">
			<NavBar />
			<SecondaryLayout>{children}</SecondaryLayout>
		</main>
	);
}
