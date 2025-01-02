import "server-only";
import prisma from "@/lib/db";
import { toCapitalCase } from "@/lib/utilities";
import { EventifierEvent } from "@prisma/client";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";

export const getEvent = unstable_cache(async (slug: string): Promise<EventifierEvent> => {
	const event = await prisma.eventifierEvent.findUnique({
		where: {
			slug: slug,
		},
	});

	if (!event) {
		return notFound();
	}

	return event;
});

export const getEvents = unstable_cache(async (city: string, page: number = 1) => {
	const events = await prisma.eventifierEvent.findMany({
		where: {
			city: city === "all" ? undefined : toCapitalCase(city),
		},
		orderBy: {
			date: "asc",
		},
		take: 6,
		skip: (page - 1) * 6,
	});

	if (!events) {
		return notFound();
	}

	let totalCount;
	if (city === "all") {
		totalCount = await prisma.eventifierEvent.count();
	} else {
		totalCount = await prisma.eventifierEvent.count({
			where: {
				city: toCapitalCase(city),
			},
		});
	}

	return { events, totalCount };
});
