import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Container from "@/components/container";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Eventifier - Find events around you",
	description: "Browse more than 10,000 events worldwide",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-gray-950 text-white overflow-y-scroll`}>
				<Container>
					<Header />
					{children}
					<Footer />
				</Container>
			</body>
		</html>
	);
}
