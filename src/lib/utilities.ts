import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

import { EventifierEvent } from "@prisma/client";
import prisma from "@/lib/db";

export const toCapitalCase = (text: string) => {
	let words: string[] = text.split(" ");
	let capitalizedWords = words.map((word) => word[0].toUpperCase() + word.slice(1));

	return capitalizedWords.join(" ");
};

export const cN = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export async function getEvent(slug: string): Promise<EventifierEvent | null> {
	const event = await prisma.eventifierEvent.findUnique({
		where: {
			slug: slug,
		},
	});
	return event;
}

export async function getEvents(city: string): Promise<EventifierEvent[] | null> {
	const events = await prisma.eventifierEvent.findMany({
		where: {
			city: city === "all" ? undefined : toCapitalCase(city),
		},
		orderBy: {
			date: "asc",
		},
	});
	return events;
}
