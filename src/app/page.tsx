import Link from "next/link";

import H1 from "@/components/H1";
import SearchForm from "@/components/SearchForm";

export default function Home() {
	return (
		<main className="flex flex-col items-center px-3 pt-36">
			<H1>Find events near you</H1>
			<p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
				Browse more than <span className="font-bold text-accent italic underline">10,000</span> events worldwide
			</p>

			<SearchForm />

			<section className="mt-4 flex gap-x-4 text-sm text-white/50">
				<p>Popular:</p>
				<div className="space-x-2 font-semibold">
					<Link href="/events/berlin">Berlin</Link>
					<Link href="/events/amsterdam">Amsterdam</Link>
				</div>
			</section>
		</main>
	);
}
