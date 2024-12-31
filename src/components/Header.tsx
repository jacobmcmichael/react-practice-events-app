"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";

import Logo from "@/components/logo";
import { cN } from "@/lib/utilities";

const routes = [
	{ name: "Home", path: "/" },
	{ name: "All Events", path: "/events/all" },
];

export default function Header() {
	const activePathname = usePathname();

	return (
		<header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
			<Logo />

			<nav className="h-full">
				<ul className="flex gap-6 text-sm h-full">
					{routes.map((route) => (
						<li
							key={route.path}
							className={cN("hover:text-white flex items-center relative transition", {
								"text-white": activePathname === route.path,
								"text-white/50": activePathname !== route.path,
							})}
						>
							<Link href={route.path}>{route.name}</Link>
							{activePathname === route.path && (
								<motion.div
									className="bg-accent h-1 w-full absolute bottom-0"
									layoutId="header-active-link"
								></motion.div>
							)}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
