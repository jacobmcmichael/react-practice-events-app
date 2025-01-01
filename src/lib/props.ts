export type H1Props = {
	children: React.ReactNode;
	className?: string;
};

export type EventsListProps = {
	city: string;
};

export type EventPageProps = {
	params: {
		slug: string;
	};
};

export type EventsPageProps = {
	params: {
		city: string;
	};
};
