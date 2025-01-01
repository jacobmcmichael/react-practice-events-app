import { EventifierEventType } from "@/lib/types";
import { EventsListProps } from "@/lib/props";

import EventCard from "@/components/event-card";

export default async function EventsList({ city }: EventsListProps) {
	const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`);
	const events: EventifierEventType[] = await response.json();

	return (
		<section className="flex flex-wrap gap-10 justify-center max-w-[1100px] mx-auto">
			{events &&
				events.map((event) => (
					<EventCard
						key={event.id}
						event={event}
					/>
				))}
		</section>
	);
}
