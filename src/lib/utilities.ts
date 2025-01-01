import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

import { notFound } from "next/navigation";
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

export async function getEvent(slug: string): Promise<EventifierEvent> {
	const event = await prisma.eventifierEvent.findUnique({
		where: {
			slug: slug,
		},
	});

	if (!event) {
		return notFound();
	}

	return event;
}

export async function getEvents(city: string): Promise<EventifierEvent[]> {
	const events = await prisma.eventifierEvent.findMany({
		where: {
			city: city === "all" ? undefined : toCapitalCase(city),
		},
		orderBy: {
			date: "asc",
		},
	});

	if (!events) {
		return notFound();
	}

	return events;
}
