import PrimaryLayout from "../components/Layouts/primary/PrimaryLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Synk",
	description: "Live Streaming website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <PrimaryLayout>{children}</PrimaryLayout>;
}
