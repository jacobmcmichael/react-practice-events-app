import { EventsListProps } from "@/lib/props";
import { getEvents } from "@/lib/utilities";

import EventCard from "@/components/event-card";
import PaginationControls from "@/components/pagination-controls";

export default async function EventsList({ city, page }: EventsListProps) {
	const { events, totalCount } = await getEvents(city, page);
	const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
	const nextPath = totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";

	const paginationControls = { previousPath, nextPath };

	return (
		<section className="flex flex-wrap gap-10 justify-center max-w-[1100px] mx-auto">
			{events &&
				events.map((event) => (
					<EventCard
						key={event.id}
						event={event}
					/>
				))}

			<PaginationControls {...paginationControls} />
		</section>
	);
}
