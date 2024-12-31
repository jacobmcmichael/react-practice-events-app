import { toCapitalCase } from "@/lib/utilities";
import { EventifierEventType } from "@/lib/types";
import { EventsPageProps } from "@/lib/props";

import H1 from "@/components/h1";
import EventsList from "@/components/events-list";

export default async function EventsPage({ params }: EventsPageProps) {
	const response = await fetch("https://bytegrad.com/course-assets/projects/evento/api/events?city=austin");
	const events: EventifierEventType[] = await response.json();

	const city = params.city;

	return (
		<main className="flex flex-col items-center py-24 px-[20px]">
			<H1 className="mb-28">{city === "all" ? "All Events" : `Events in ${toCapitalCase(city)}`}</H1>

			<EventsList events={events} />
		</main>
	);
}
