import { toCapitalCase } from "@/utilities/utilities";

import H1 from "@/components/H1";

type EventsPageProps = {
	params: {
		city: string;
	};
};

export default function EventsPage({ params }: EventsPageProps) {
	const city = params.city;

	return (
		<main className="flex flex-col items-center py-24 px-[20px]">
			<H1>{city === "all" ? "All Events" : `Events in ${toCapitalCase(city)}`}</H1>
		</main>
	);
}
