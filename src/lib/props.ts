export type H1Props = {
	children: React.ReactNode;
	className?: string;
};

export type EventsListProps = {
	city: string;
	page?: number;
};

export type EventPageProps = {
	params: {
		slug: string;
	};
};

export type EventsPageParams = {
	searchParams: { [key: string]: string | string[] | undefined };
};

export type EventsPageProps = EventsPageParams & {
	params: {
		city: string;
	};
};

export type PaginationControlsProps = {
	previousPath: string | null;
	nextPath: string | null;
};
