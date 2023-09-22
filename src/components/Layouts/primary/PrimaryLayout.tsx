import NavBar from "../../../components/Layouts/nav/NavBar";
import SecondaryLayout from "../secondary/SecondaryLayout";
import "./PrimaryLayout.css";

export interface PrimaryLayoutProps {
	children: React.ReactNode;
}

export default function PrimaryLayout({
	children,
}: PrimaryLayoutProps): JSX.Element {
	return (
		<section>
			<NavBar isLoggedIn={false} />
			<SecondaryLayout>{children}</SecondaryLayout>
		</section>
	);
}
