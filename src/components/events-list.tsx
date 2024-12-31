import EventCard from "@/components/event-card";
import { EventifierEventType } from "@/lib/types";

export default function EventsList({ events }: { events: EventifierEventType[] }) {
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
