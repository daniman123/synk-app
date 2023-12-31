import "../components/Layouts/primary/PrimaryLayout.css";
import { Inter } from "next/font/google";
import PrimaryLayout from "@/components/Layouts/primary/PrimaryLayout";
 
import "globals.css"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<PrimaryLayout>{children}</PrimaryLayout>
			</body>
		</html>
	);
}
