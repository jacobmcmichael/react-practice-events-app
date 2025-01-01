import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

import { EventifierEventType } from "@/lib/types";

export const toCapitalCase = (text: string) => {
	let words: string[] = text.split(" ");
	let capitalizedWords = words.map((word) => word[0].toUpperCase() + word.slice(1));

	return capitalizedWords.join(" ");
};

export const cN = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const sleep = async (ms: number = 1000) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export async function getEvents(city: string): Promise<EventifierEventType[]> {
	const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`);
	const events: EventifierEventType[] = await response.json();

	return events;
}

export async function getEvent(slug: string): Promise<EventifierEventType> {
	const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`);
	const event: EventifierEventType = await response.json();

	return event;
}
