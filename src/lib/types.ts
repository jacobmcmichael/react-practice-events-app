export type EventifierEvent = {
	id: number;
	name: string;
	slug: string;
	city: string;
	location: string;
	date: Date;
	organizerName: string;
	imageUrl: string;
	description: string;
};

export type EventsPageProps = {
	params: {
		city: string;
	};
};
