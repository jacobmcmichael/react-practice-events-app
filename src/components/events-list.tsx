import { EventsListProps } from "@/lib/props";
import { getEvents } from "@/lib/utilities";

import EventCard from "@/components/event-card";

export default async function EventsList({ city }: EventsListProps) {
	const events = await getEvents(city);

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
