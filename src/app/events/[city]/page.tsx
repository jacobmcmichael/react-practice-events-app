import { Suspense } from "react";
import { Metadata } from "next";

import { toCapitalCase } from "@/lib/utilities";
import { EventsPageProps } from "@/lib/props";

import H1 from "@/components/h1";
import EventsList from "@/components/events-list";
import Loading from "@/app/events/[city]/loading";

export function generateMetadata({ params }: EventsPageProps): Metadata {
	const city = params.city;

	return {
		title: city === "all" ? "All Events" : `Events in ${toCapitalCase(city)}`,
		description: `Find events in ${toCapitalCase(city)} and enjoy your time with your friends and family.`,
	};
}

export default async function EventsPage({ params }: EventsPageProps) {
	const city = params.city;

	return (
		<main className="flex flex-col items-center py-24 px-[20px]">
			<H1 className="mb-28">{city === "all" ? "All Events" : `Events in ${toCapitalCase(city)}`}</H1>

			<Suspense fallback={<Loading />}>
				<EventsList city={city} />
			</Suspense>
		</main>
	);
}
