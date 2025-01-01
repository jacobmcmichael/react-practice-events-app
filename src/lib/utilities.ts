import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

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
